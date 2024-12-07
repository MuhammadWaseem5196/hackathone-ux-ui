import { FaAngleDown } from "react-icons/fa";



export default function TopBanner(){

    return(
        <div className=" bg-black text-white pt-2 pb-2 text-sm flex ">
           <div className="flex justify-center w-[100%] "> <h3 >Summer Sale For All Suim Suits And Free Express Delivery - OFF 50%!  </h3> <div className="pl-20 underlin "> <b >Shop Now </b> </div>
           <div className="pt-1 pl-1 "><FaAngleDown /></div> </div>
           
        </div>
    )
}