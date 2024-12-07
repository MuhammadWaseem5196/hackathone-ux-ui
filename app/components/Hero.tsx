import { FaAngleRight } from "react-icons/fa";
import Image from "next/image";
import { IoLogoApple } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";


export default function Hero(){

    return(
        <div className=" w-screen flex justify-center ">
        <div className=" w-[82%] flex justify-between ">
        {/* right side of hero  */}
         <div className="w-[20%] h-90 border-r-2 border-r-gray-100  ">
             <ul className="pt-9 flex flex-col gap-3">
                <li className="flex  items-center"><span className="mr-6">Women&apos;s Fashion </span><FaAngleRight /></li>
                <li className="flex  items-center"><span className="mr-12">Men&apos;s Fashion </span><FaAngleRight /></li>
                <li>Electronics</li>
                <li>Home & lifestyle</li>
                <li>Medicine</li>
                <li>Sports & Outdoor</li>
                <li>Baby&apos;s & Toys</li>
                <li>Groceries & Pets</li>
                <li>Health & Beauty</li> 
             </ul>
         </div>

       {/* left side of hero */}
        <div className="w-[76%] h-80 flex bg-black mt-9">
               
               {/* right section  */}

               <div className=" pt-12 pl-10  float-start text-white">
                 <h3 className="font-light text-[13px] mt-2 flex items-center"><span className="text-5xl pr-4 pb-2 "><IoLogoApple /></span>iphone 14 Series</h3>
                  <h1 className="text-5xl">Up to 10% Off Voucher</h1>

                  <button className=" mt-8  text-white flex items-center"><span className="border-b-[1px] border-b-white">Shop Now</span><span className="pl-3"><FaLongArrowAltRight /></span></button>
                  <ul className="flex flex-row gap-2 mt-6 translate-x-24 float-end">
                    <li className="w-3 h-3 rounded-full bg-gray-400"></li>
                    <li className="w-3 h-3 rounded-full bg-gray-400"></li>
                    <li className="w-3 h-3 rounded-full bg-red-600 border-2 border-white"></li>
                    <li className="w-3 h-3 rounded-full bg-gray-400"></li>
                    <li className="w-3 h-3 rounded-full bg-gray-400"></li>
                  </ul>
                </div>
                  
               

                {/* right image section  */}

               <div className="h-auto  mt-5 p-1 float-end overflow-hidden ">

                <Image src={"/Images/7215f42e5883a64157f0aa3a4d1a866a.jpg"}  width={700} height={500} alt="image"></Image>
 
        </div>


        </div>
              
          
        </div>
        </div>
    )
}