import Image from 'next/image'; // Import Image component from Next.js
import { TbTruckDelivery } from "react-icons/tb";

export default function NewArrival() {
  return (
    <div className="w-full h-auto mt-8 flex justify-center">
      <div className="w-[82%]">
        <div className="">
          <span className="text-red-500 mt-2 block">Featured</span>
          <span className="mt-8 block text-3xl">New Arrivals</span>
        </div>
        <div className="grid grid-cols-4 grid-rows-2 mt-8 gap-3 mb-8">
          <div className="bg-black col-span-2 row-span-2 relative">
            <Image
              src="/images/0c1817d3afa266b3c9f8c81ff0ed4428.png"
              alt="PlayStation 5"
              layout="fill"
              objectFit="cover"
              className="relative"
            />
            <div className="absolute bg-none h-40 w-72 bottom-0 left-5 text-white z-[1]">
              <span className="text-3xl block">Play station 5</span>
              <span className="block text-justify text-xs font-sans opacity-65 leading-tight">
                Lorem ipsum nobis distinctio dolore obcaecati deleniti iste quod expedita similique ab assumenda ex
              </span>
              <button className="w-20 text-[13px] h-6 border-[0.5px] border-white mt-3 border-opacity-70">
                Buy Now
              </button>
            </div>
          </div>

          <div className="h-60 bg-lime-500 col-span-2 relative">
            <Image
              src="/images/08463f7e8f57dd3048a2444dbfa0cb90.jpg"
              alt="Women's Collection"
              layout="fill"
              objectFit="cover"
              className="transform scale-x-[-1] relative"
            />
            <div className="absolute bg-none h-40 w-72 bottom-0 left-5 text-white z-[1]">
              <span className="text-2xl block mt-8">Women Collection&apos;s</span>
              <span className="block text-justify text-xs font-sans opacity-65 leading-tight">
                Lorem ipsum dolore obcaecati deleniti iste quod expedita similique ab assumenda ex
              </span>
              <button className="w-20 text-[13px] h-6 border-[0.5px] border-white mt-3 border-opacity-70">
                Buy Now
              </button>
            </div>
          </div>

          <div className="h-60 w-62 bg-black relative">
            <Image
              src="/images/2977438364a41d7e8c9d1e9a794d43ed.png"
              alt="Speaker"
              layout="intrinsic"
              width={300}
              height={300}
              className="ml-10 h-full w-full object-cover"
            />
            <div className="absolute bg-none h-40 w-72 bottom-0 left-5 text-white z-[1]">
              <span className="text-xl block mt-8">Speaker</span>
              <span className="block text-justify text-xs font-sans w-40 opacity-65 leading-tight">
                Lorem ipsum iste quod expedita similique ab assumenda ex
              </span>
              <button className="w-20 text-[13px] h-6 border-[0.5px] border-white mt-3 border-opacity-70">
                Buy Now
              </button>
            </div>
          </div>

          <div className="h-60 w-62 bg-black relative">
            <Image
              src="/images/5102562cf220504d288fa568eaa816dd.png"
              alt="Perfumes"
              layout="intrinsic"
              width={300}
              height={300}
              className="h-full w-full object-cover"
            />
            <div className="absolute bg-none h-40 w-72 bottom-0 left-5 text-white z-[1]">
              <span className="text-xl block mt-8">Perfumes</span>
              <span className="block text-justify text-xs font-sans w-40 opacity-65 leading-tight">
                Lorem ipsum iste quod expedita similique ab assumenda
              </span>
              <button className="w-20 text-[13px] h-6 border-[0.5px] border-white mt-3 border-opacity-70">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center mb-10">
          <div className="flex mt-20 w-[80%]">
            <div className="w-1/3 flex justify-center items-center">
              {/* Centering ball */}
              <div className="flex flex-col justify-center items-center">
                {/* Ensures content is centered vertically and horizontally */}
                <div className="h-20 w-20 rounded-full border-8 border-gray-400 bg-black text-white text-5xl flex justify-center items-center">
                  <TbTruckDelivery />
                </div>
                <div className="text-xl mt-2">Free And Fast delivery</div>
                <div className="text-sm mt-1">Free delivery all over Pakistan</div>
                {/* Reduced gap */}
              </div>
            </div>

            <div className="w-1/3 flex justify-center">
              <div className="flex flex-col justify-center items-center">
                {/* Ensures content is centered vertically and horizontally */}
                <div className="h-20 w-20 rounded-full border-8 border-gray-400 bg-black text-white text-5xl flex justify-center items-center">
                  <TbTruckDelivery />
                </div>
                <div className="text-xl mt-2">Free And Fast delivery</div>
                <div className="text-sm mt-1">Free delivery all over Pakistan</div>
                {/* Reduced gap */}
              </div>
            </div>

            <div className="w-1/3 flex justify-center">
              <div className="flex flex-col justify-center items-center">
                {/* Ensures content is centered vertically and horizontally */}
                <div className="h-20 w-20 rounded-full border-8 border-gray-400 bg-black text-white text-5xl flex justify-center items-center">
                  <TbTruckDelivery />
                </div>
                <div className="text-xl mt-2">Free And Fast delivery</div>
                <div className="text-sm mt-1">Free delivery all over Pakistan</div>
                {/* Reduced gap */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
