"use client";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import React, { useState } from "react";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordReset, setIsPasswordReset] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to reset password
    // For demonstration purposes, let's just set isPasswordReset to true if passwords match
    if (password === confirmPassword) {
      setIsPasswordReset(true);
    } else {
      alert("Passwords do not match. Please try again.");
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8 md:p-20">
        <div className="">
          <h1 className="text-2xl font-bold mb-6">Reset Password</h1>
          {!isPasswordReset ? (
            <form onSubmit={handleSubmit}>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                New Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full bg-gray-100 border border-pink-400 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2 mb-4"
                placeholder="Enter new password"
                required
              />
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className="w-full bg-gray-100 border border-pink-400 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2 mb-4"
                placeholder="Confirm new password"
                required
              />
              <button
                type="submit"
                className="w-full bg-pink-500 text-white text-sm font-semibold rounded p-2 hover:bg-pink-600"
              >
                Reset Password
              </button>
            </form>
          ) : (
            <p className="text-green-600">Password reset successfully!</p>
          )}
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

export default ResetPassword;
