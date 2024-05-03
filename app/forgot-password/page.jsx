"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "../components/Footer";

const PasswordRecovery = () => {
  const [email, setEmail] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send recovery code to the provided email
    // For demonstration purposes, let's just set isCodeSent to true
    setIsCodeSent(true);
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-20">
          {/* First Column */}
          <div className="p-6 pt-20">
            <div className="max-w-md mx-auto">
              <h1 className="text-2xl font-bold mb-6">Forgot Password?</h1>
              {!isCodeSent ? (
                <form onSubmit={handleSubmit}>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Enter your Email/Phone number
                  </label>
                  <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="w-full bg-gray-100 border border-pink-400 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2 mb-4"
                    placeholder="John@gmail.com"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-pink-500 text-white text-sm font-semibold rounded p-2 hover:bg-pink-600"
                  >
                    Send Code
                  </button>
                </form>
              ) : (
                <p>Recovery code sent to {email}. Check your inbox!</p>
              )}
            </div>
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
      <Footer />
    </div>
  );
};

export default PasswordRecovery;
