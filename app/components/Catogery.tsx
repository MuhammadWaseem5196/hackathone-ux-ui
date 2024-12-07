"use client"


import { ReactNode, useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { IoPhonePortraitSharp } from "react-icons/io5";
import { FaComputer } from "react-icons/fa6";
import { BsSmartwatch } from "react-icons/bs";
import { FaCamera } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { IoGameControllerSharp } from "react-icons/io5";



interface items1{
    name : string;
    image : ReactNode ;
}


export default function Catogery(){


 const [ cart ] = useState<items1[]>([
    {
        name : "Phone",
        image : <IoPhonePortraitSharp />
    },
    {
        name : "Computer",
        image : <FaComputer />
    },
    {
        name : "Smart Watch",
        image : <BsSmartwatch />
    },
    {
        name : "Camera",
        image : <FaCamera/>
    },
    {
        name : "HeadPhone",
        image : <FaHeadphones />
    },
    {
        name : "Gaming",
        image : <IoGameControllerSharp />
    },
 ])





    return(
        <div className="flex justify-center w-screen mt-10">
            <div className="w-[82%]  h-auto mt-5 ">

{/* uppersection */}

<div className="">
<h1 className=" text-red-500 text-sm pl-4 ">Today&apos;s</h1>
<ul className="flex ">
<h1 className=" text-2xl pl-3 font-bold mt-6">Browse By Catagorey</h1>
    
    <li className="ml-[600px] pl-20 mt-7 text-2xl text-gray-300"><FaArrowCircleLeft /></li>
    <li className="mt-7 text-2xl pl-2 text-gray-300"><FaArrowCircleRight /></li>
</ul>

</div>

{/* lower section */}

<div className="mt-10 flex  justify-between">

   {cart.map((val : items1 , id : number) => 
   <div className="flex justify-center  w-40  border-2 ml-2  hover:bg-red-500 " key={id}>
    <div  className="py-4" >
       <div className="text-6xl pl-1">{val.image}</div>
       <div className="text-[12px] pt-2 pl-2">{val.name}</div>
    </div>
   </div>

)}



</div>



<div className="pt-10 pb-2 w-full text-3xl"><hr /></div>

</div>


        </div>
    )
}


