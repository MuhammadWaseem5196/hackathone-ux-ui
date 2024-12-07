
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import Link from "next/link";

export default function Nevbar(){

    return(
        <div  className=" flex justify-center w-screen">
            <header className=" text-gray-600 body-font flex justify-center w-[82%] ">
  <div className="container mx-auto  flex flex-wrap  pb-3 flex-col md:flex-row items-center">
   <h1 className="text-3xl font-extrabold">Exclusive</h1>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/" ><a  className="mr-8 hover:text-gray-900">Home</a></Link>
      <a className="mr-8 hover:text-gray-900">Contact</a>
      <a className="mr-8 hover:text-gray-900">About</a>
      <Link href="/Account"><a  className="mr-8 hover:text-gray-900">Sign Up</a></Link>
    </nav>
    <div className="flex bg-gray-100 justify-center items-center p-1 pl-2 pr-2">
        <input type="text" placeholder="What are you looking for" className="bg-gray-100 text-sm " /><CiSearch/>
    </div>
    <div className="flex text-2xl p-3 w-20 justify-between">
    <FaRegHeart />
    <BsCart3 />
    
    </div>
  </div>
</header>

        </div>
    )
}