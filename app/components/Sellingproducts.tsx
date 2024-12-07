




"use client"


import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


interface items4{
  image : string;
}



export default function SellingProd(){


 const [ cart ] = useState<items4[]>([
    {
        image : "/images/65fe639fccc1fe4168fca740ef1f85e7.png"
    },
    {
        image : "/images/2722dbdf98f25179d3c0b785988c513d.png"
    },
    {
        image : "/images/2757d20a14861e2e0ebd4e9889693f59.png"
    },
    {
        image : "/images/b7b02d10672f6f6147762cf52bfcfc54.png"
    },
 ])





    return(
        <div className="flex justify-center w-screen mt-10">
            <div className="w-[82%]  h-auto mt-5 ">

{/* uppersection */}

<div className="">
<h1 className=" text-red-500 text-sm pl-4 ">Today&apos;s</h1>
<ul className="flex ">
<h1 className=" text-2xl pl-3 font-bold mt-6">Best Selling Product</h1>
    
    <li className="ml-[670px] pt-2 pb-1  px-4  mt-7 text-sm text-white w-25 h-8 bg-red-500" >View All</li>

</ul>

</div>

{/* lower section */}

<div className="mt-10 flex  justify-between">

   {cart.map((val : items4 , id : number) => 
  <div className=" ml-3 w-60 bg-white rounded-lg shadow-lg overflow-hidden" key={id}>
  {/* Image Section */}
  <div className="relative bg-gray-200 p-6">
    <img
      src={val.image}
      alt="Product"
      className="w-30 h-40 ml-3"
    />
    {/* Discount Badge */}
    <span className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 text-sm font-semibold rounded-lg">
      - 20% 
    </span>
    {/* Eye Logo on Right */}
    <FaEye className="absolute top-9 right-2 text-black text-2xl bg-white p-1 rounded-full" />
    {/* Heart Logo on Bottom Left */}
    <FaHeart className="absolute top-2 right-2 text-black text-2xl bg-white p-1 rounded-full" />
  </div>

  {/* Product Details Section */}
  <div className="pt-3">
    {/* Product Name */}
    <h3 className="text-sm font-semibold text-gray-800">
      Awesome Product Name
    </h3>
    
    {/* Price Section */}
    <div className="flex  mt-2">
      <span className=" text-red-500 text-sm">$39.99</span>  
      <span className="text-gray-600 line-through ml-2 text-sm">$49.99</span>
      
    </div>

    {/* Rating Section */}
    <div className="flex items-center mt-2">
      <span className=" text-sm"><span className="pr-2">⭐⭐⭐⭐</span>{"(30)"}</span>
    </div>
  </div>
</div>
)}



</div>




<div className="w-full bg-black h-auto mt-[90px]  flex  justify-between  ">
  <div className="w-[40%] pl-10  transform translate-x-5 pt-10 ">
    <h1 className="text-green-300 text-sm mt-6">Categories</h1>
    <h1 className="text-4xl text-white font-extrabold mt-6  ">Enhance Your <br /> Music Experience</h1>
    <ul className="flex flex-row gap-4 mt-6">
      <li className="w-10 h-10 rounded-full bg-white text-sm text-center  flex flex-col font-thin  gap-[3px] ">
        <span className="h-2 mt-1 text-[13px] font-extrabold">05</span>
        <span className="text-[7px]">Days</span>
      </li> 
      <li className="w-10 h-10 rounded-full bg-white text-sm text-center  flex flex-col font-thin  gap-[3px] ">
        <span className="h-2 mt-1 text-[13px] font-extrabold">05</span>
        <span className="text-[7px]">Hourse</span>
      </li> 
      <li className="w-10 h-10 rounded-full bg-white text-sm text-center  flex flex-col font-thin  gap-[3px] ">
        <span className="h-2 mt-1 text-[13px] font-extrabold">05</span>
        <span className="text-[7px]">Minutes</span>
      </li> 
      <li className="w-10 h-10 rounded-full bg-white text-sm text-center  flex flex-col font-thin  gap-[3px] ">
        <span className="h-2 mt-1 text-[13px] font-extrabold">05</span>
        <span className="text-[7px]">seconds</span>
      </li> 
    </ul>


    <div>
    <div className=" w-25 mt-10 h-7 py-1 pl-3 pr-3 text-white text-sm bg-green-400 absolute ">Buy Now</div>
    </div>
  </div>
  
  <div className="w-[60%] h-96 flex justify-center  items-center   ">
    <div className=" ">
    <img 
      src="images/7e210f637fc0504b7d93cd207df744c2.png" 
      alt="image" 
      className="transform scale-x-[-1] z-[1] relative   " 
    />
    </div>
    <div className="h-80 w-80 rounded-full bg-white opacity-25 blur-2xl  absolute "></div>
    
  </div>
</div>


</div>


        </div>
    )
}


