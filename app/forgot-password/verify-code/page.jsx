"use client";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import React, { useState } from "react";

const VerifyCode = () => {
  const [code, setCode] = useState("");
  const [isCodeValid, setIsCodeValid] = useState(false);

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to verify the entered code
    // For demonstration purposes, let's just set isCodeValid to true if the code is '1234'
    setIsCodeValid(code === '1234');
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-10 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-20">
        <div className="">
          <h1 className="text-2xl font-bold mb-6">Verify Code</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="code" className="block text-sm font-medium mb-2">
              Enter the verification code sent to your email/phone number
            </label>
            <input
              type="text"
              id="code"
              value={code}
              onChange={handleCodeChange}
              className="w-full bg-gray-100 border border-pink-400 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2 mb-4"
              placeholder="Enter code here"
              required
            />
            <button
              type="submit"
              className="w-full bg-pink-500 text-white text-sm font-semibold rounded p-2 hover:bg-pink-600"
            >
              Verify Code
            </button>
          </form>
          {isCodeValid && <p className="mt-4 text-green-600">Code verified successfully!</p>}
          {isCodeValid === false && <p className="mt-4 text-red-600">Invalid code. Please try again.</p>}
        </div>
          {/* Second Column (Hidden on small screens) */}
          <div className="hidden md:block">
            <div className="p-6">
              <Image
                className="mx-auto w-full"
                width={200}
                height={200}
                src="/image 250.png"
                alt="Illustration"
              />
            </div>
          </div>
        </div>
      </div>
        <Footer/>
    </div>
  );
};

export default VerifyCode;
