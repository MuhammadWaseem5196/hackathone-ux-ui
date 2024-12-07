import Catogery from "./components/Catogery";
import FlashSale from "./components/FlashSale";

import Hero from "./components/Hero";
import NewArrival from "./components/NewArrival";
import OurProduct from "./components/Ourproducts";
import SellingProd from "./components/Sellingproducts";



export default function Home() {
  return (
    
    <div className="w-screen overflow-y-hidden">
      

      {/* hero sedtion */}  
      <Hero/>

      {/* fleshSale */}

      <FlashSale/>

      {/* Catogery */}

      <Catogery/>

      {/* sellingproduct */}

      <SellingProd/>
    
     {/* Our Products */}

    <OurProduct/>

    {/* newArrivals */}

    <NewArrival/>

   

    </div>
   
  );
}
