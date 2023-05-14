import React,{useEffect, useState} from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Card from '../components/card/Card'

export default function Home() {
    const[search,setSearch]=useState("")
   const[foodCat,setFoodCat]=useState([]);
   const[foodItem,setFoodItem]=useState([]);
  console.log(foodCat,"lll")
    const loadData= async ()=>{
        let response = await fetch("http://localhost:5000/api/foodData",{
            method:"POST",
            headers:{
                'content-Type':'application/json'
            }
        })
        
        response= await response.json();
        setFoodItem(response[0]);
        setFoodCat(response[1]);
        console.log(response)
    }

    useEffect(()=>{
     loadData();
    },[])
    function searched(e){
        setSearch(e.target.value)
       
    }

    return (
        <>
            <div> <Navbar /></div>
           <div>
           <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner" id="carousel">
    <div className="carousel-caption" style={{zIndex:"10"}}>
    <div class="d-flex justify-content-center">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={searched}/>
      {/* <button className="btn btn-outline-success" type="submit" onChange={searched}>Search</button> */}
    </div>
    </div>
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/900×700/?burger

" className="d-block w-100" style={{filter:"brightnes(30%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900×700/?chicken

" className="d-block w-100" style={{filter:"brightnes(30%)"}}  alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900×700/?pasta

" className="d-block w-100" style={{filter:"brightnes(30%)"}}  alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
           </div>
           <div className='m-3'>
            {
                foodCat !==[]
                ? foodCat.map((data)=>{
                  return(
                    <div  key={data._id} className='row mb-3'>
                    <div  key={data._id} className='fs-3 m-3'>
                        {data.CategoryName}
                        </div>
                        <hr/>
                        {foodItem !== []? 
                        foodItem.filter((item)=>(item.CategoryName===data.CategoryName)&& (item.name.toLowerCase().includes(search.toLocaleLowerCase()))) 
                        .map(filterItems=>{
                            return(
                                <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                                 <Card foodItem={filterItems}
                                 //foodName={filterItems.name}
                                  options={filterItems.options[0]}
                                //   imgSrc={filterItems.img}
                                 ></Card>
                                </div>
                            )
                        })
                        
                        :<div>No data found</div>}
                        </div>
                  )
                 
                }):""
            }
            
           </div>
            <div><Footer /></div>
        </>
    )
}