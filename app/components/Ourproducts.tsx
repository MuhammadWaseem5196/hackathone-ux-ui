"use client";

import { useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Image from "next/image"; // Importing Image from next/image

interface items3 {
  image: string;
}

export default function OurProduct() {
  const [cart] = useState<items3[]>([
    {
      image: "/images/50752d55f8b60f2aa2923183dadbc135.png",
    },
    {
      image: "/images/db5174aff99bb9337d2dc9598a0b44e4.png",
    },
    {
      image: "/images/8cc24eeff489863523b63971c3ff8e4a.png",
    },
    {
      image: "/images/b7b02d10672f6f6147762cf52bfcfc54.png",
    },
    {
      image: "/images/b7b02d10672f6f6147762cf52bfcfc54.png",
    },
    {
      image: "/images/50752d55f8b60f2aa2923183dadbc135.png",
    },
    {
      image: "/images/db5174aff99bb9337d2dc9598a0b44e4.png",
    },
    {
      image: "/images/8cc24eeff489863523b63971c3ff8e4a.png",
    },
  ]);

  return (
    <div className="flex justify-center w-screen mt-10">
      <div className="w-[82%] h-auto mt-10">
        {/* upper section */}
        <div className="">
          <h1 className="text-red-500 text-sm pl-4">Today&apos;s</h1>
          <ul className="flex justify-between">
            <div>
              <h1 className="text-2xl pl-3 font-bold mt-6">Flash Sales</h1>
            </div>

            <div className="flex">
              <li className="mt-7 text-2xl text-gray-300">
                <FaArrowCircleLeft />
              </li>
              <li className="mt-7 text-2xl pl-2 text-gray-300">
                <FaArrowCircleRight />
              </li>
            </div>
          </ul>
        </div>

        {/* lower section */}
        <div className="mt-10 grid grid-cols-4 gap-4 mb-10">
          {cart.map((val: items3, id: number) => (
            <div
              className=" bg-white rounded-lg shadow-lg mt-6"
              key={id}
            >
              {/* Image Section */}
              <div className="relative bg-gray-200 p-6">
                <Image
                  src={val.image}
                  alt="Product"
                  width={300} // Set width for the image
                  height={300} // Set height for the image
                  className="w-30 h-40 ml-3"
                ></Image>
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
                <div className="flex mt-2">
                  <span className="text-red-500 text-sm">$39.99</span>
                  <span className="text-gray-600 line-through ml-2 text-sm">
                    $49.99
                  </span>
                </div>

                {/* Rating Section */}
                <div className="flex items-center mt-2">
                  <span className="text-sm">
                    <span className="pr-2">⭐⭐⭐⭐</span>{"(30)"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center w-full pt-14">
          <div className="w-25 h-7 bg-red-600 text-white text-sm flex justify-normal items-center p-4">
            View All Products
          </div>
        </div>

        <div className="pt-10 pb-2 w-full text-3xl">
          <hr />
        </div>
      </div>
    </div>
  );
}
