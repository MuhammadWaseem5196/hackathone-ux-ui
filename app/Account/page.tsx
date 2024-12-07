import React from 'react';
import { FaGoogle } from 'react-icons/fa'; // Import Google icon from react-icons

const CreateAccount = () => {
  return (
    <div className="flex h-screen flex-col">
      {/* Header Section */}
      

      {/* Main Content Section */}
      <div className="flex mt-2">
        {/* Left Image Section with Border */}
        <div className="w-7/12 bg-cover bg-center border-r-4 border-gray-300" style={{ backgroundImage: 'url("/images/a1c7dc5b68a42239311e510f54d8cd59.jpg")' }}>
          {/* Image area with border */}
        </div>

        {/* Right Form Section */}
        <div className="w-5/12 flex justify-center items-center bg-white">
          <div className="w-8/12">
            <h1 className="text-3xl font-bold text-center mb-8">Create Account</h1>

            {/* Input Fields */}
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="border-b-2 border-gray-400 py-2 px-2 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="border-b-2 border-gray-400 py-2 px-2 focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="border-b-2 border-gray-400 py-2 px-2 focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <button className="w-full mt-6 py-2 bg-blue-600 text-white text-lg font-bold focus:outline-none hover:bg-blue-700">
              Create Account
            </button>

            {/* Google Sign-In Button */}
            <button className="w-full mt-4 py-2 bg-gray-200 text-black text-lg font-semibold focus:outline-none hover:bg-gray-300 flex items-center justify-center gap-2">
              <FaGoogle className="text-lg" /> Sign in with Google
            </button>

            {/* Already have an account */}
            <div className="text-center mt-4">
              <span className="text-sm text-gray-500">Already have an account?</span>
              <a href="/signin" className="text-blue-600 text-sm font-semibold hover:underline"> Sign In</a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      
    </div>
  );
};

export default CreateAccount;
