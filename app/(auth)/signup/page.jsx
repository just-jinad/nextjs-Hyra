"use client";
import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Footer from "@/app/components/Footer";
import axios from "axios";
import { useRouter } from "next/navigation";
const Create = () => {
  let router  = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      userName: "",
      password: "",
      confirmPassword:"",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
      .max(15, "Must be 15 characters or less")
        .required("Input name"),
      email: Yup.string()
        .matches(
          /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
          "Email must contain @ and .com"
        )
        .required("Email cannot be empty")
        .min(8, "Password must have atleast 8 Charaters."),
        userName: Yup.string()
        .max(500, "Must be 500 characters or less")
        .required("Required"),
      password: Yup.string()
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/,
          "Password must contain atleast 1 lowercase, 1 uppercase, 1 number and 1 special character."
        )
        .min(8, "Password must have atleast 8 Charaters.")
        .required("Password cannot be empty."),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "password most match")
        .required("Password cannot be empty."),
      }),
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
        axios.post("api/user/signup", values).then((data)=>{
          console.log(data)
         if (data) {
          router.push('/login')
         }else{
          router.push('/signup');
         }
        })
          .catch((err)=>{
            console.log(err);
          })
      },
    });
    console.log(formik);
    
    return (
    <div className="bg-[#FFCD4B] md:bg-white h-s    creen">
      <p className="md:hidden block text-center text-2xl font-bold py-5">
        Hello!
      </p>
      <div className="md:flex justify-between pb-20">
        <div className="md:w-1/2 md:px-24 py-3 ">
          <div className="shadow-md md:px-4 px-8 py-6 bg-white md:py-5 rounded-tr-[35px] rounded-tl-[35px]">
            <form onSubmit={formik.handleSubmit}>
              <p className="font-bold text-xl md:text-md">Create an account</p>
              <div class="relative mb-4 mt-3">
                <label for="name" class="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  placeholder="Name"
                  type="text"
                  name="name"
                  class="w-full mb-2 bg-white rounded border !border-[#FFCD4B] focus:border-[#FFCD4B] !focus:ring-2 focus:ring-[#FFCD4B] text-sm outline-none text-gray-700  h-12 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  id="userName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                 {formik.touched.name && formik.errors.name ? (
              <div className="border border-red-700 bg-red-200 rounded-md p-3">{formik.errors.name}</div>
            ) : null}
            <br />
              </div>
              <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-600">
                  Email/Phone Number
                </label>
                <input
                  placeholder="Email/Phone number"
                  type="email"
                  name="email"
                  class="w-full bg-white rounded border !border-[#FFCD4B] focus:border-[#FFCD4B] !focus:ring-2 focus:ring-[#FFCD4B] text-sm outline-none text-gray-700  h-12 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  id="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="border border-red-700 bg-red-200 rounded-md p-3">
                    {formik.errors.email}
                  </div>
                ) : null}
                <br />
              </div>
              <div class="relative mb-4">
                <label for="userName" class="leading-7 text-sm text-gray-600">
                  UserName
                </label>
                <input
                  placeholder="UserName"
                  type="text"
                  name="userName"
                  class="w-full bg-white rounded border !border-[#FFCD4B] focus:border-[#FFCD4B] !focus:ring-2 focus:ring-[#FFCD4B] text-sm outline-none text-gray-700  h-12 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  id="userName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.userName}
                />
                 {formik.touched.userName && formik.errors.userName ? (
                  <div className="border border-red-700 bg-red-200 rounded-md p-3">
                    {formik.errors.userName}
                  </div>
                ) : null}
                <br />
              </div>

              <div class="relative mb-4">
                <label for="password" class="leading-7 text-sm text-gray-600">
                  Password
                </label>
                <input
                  placeholder="Password"
                  type="text"
                  name="password"
                  class="w-full bg-white rounded border !border-[#FFCD4B] focus:border-[#FFCD4B] !focus:ring-2 focus:ring-[#FFCD4B] text-sm outline-none text-gray-700 h-12 px-3 pr-10 leading-8 transition-colors duration-200 ease-in-out relative"
                  id="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
              <div className="border border-red-700 bg-red-200 rounded-md p-3">{formik.errors.password}</div>
            ) : null}
            <br />
                <i class="bi bi-eye-slash absolute top-1/2 transform -translate-y-1/2 mt-3 right-3 text-gray-400 cursor-pointer"></i>
              </div>

              <div class="relative mb-4">
                <label for="confirm-pw" class="leading-7 text-sm text-gray-600">
                  Confirm Password
                </label>
                <input
                  placeholder="Confirm Password"
                  type="text"
                  name="confirmPassword"
                  class="w-full bg-white rounded border !border-[#FFCD4B] focus:border-[#FFCD4B] !focus:ring-2 focus:ring-[#FFCD4B] text-sm outline-none text-gray-700 h-12 px-3 pr-10 leading-8 transition-colors duration-200 ease-in-out relative"
                  id="confirmPassword"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                />
                 {formik.touched.confirmPassword && formik.errors.confirmPassword? (
              <div className="border border-red-700 bg-red-200 rounded-md p-3">{formik.errors.confirmPassword}</div>
            ) : null}
            <br />
                <i class="bi bi-eye-slash absolute top-1/2 transform -translate-y-1/2 mt-3 right-3 text-gray-400 cursor-pointer"></i>
              </div>
              <button
                type="submit"
                className="text-sm !bg-[#FFCD4B] text-black font-bold w-full md:py-2 py-4 px-4 rounded"
              >
                Sign Up
              </button>
              <button
                type="button"
                className=" mt-3 border py-4 !border-[#FFCD4B] flex justify-center text-black font-bold w-full md:py-2 px-4 rounded"
              >
                <img
                  className="h-4 "
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                  alt=""
                />
                <p className="ms-3 text-sm"> Continue with google </p>
              </button>
            </form>
          </div>
        </div>
        <div className="md:w-1/2 items-center flex justify-center flex-col-1 h-full">
          <img
            className=" md:h-96 md:block hidden md:mt-24 "
            src="https://s3-alpha-sig.figma.com/img/bc69/f30c/e637c7e28dfdcabce58f80b39b093527?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EfZHF-Bd-6JdaCS49~ZBKjuapeV~IB3B80-8UaSX7XT2S2mRhwWaaiBQcwCCVaEdw~3iEwjohWKM7379Yao9GzqX~mAO53hWGwQVFosQfzXCC3LR9-iLCwhqvTTDBUHEl2zlLAORIegBbV3j1s10qb~SjyUg4LJdXAEAkVpuNdCbok1NLXvy4NfQGlQRt8deW3n9tK3KR8bzUBVLEmb3Wq4VCwdYbSNrOFVcKOF651GLlgiZztJ9GlW9kOxLVxNz5qiOyrAcpJZGZ4quIac2gRLPhFo-shrLtkfKyw1IK5Enxz9ngJ0YT49VSjrzPQh8BIPdhueoGodQrhxBEo7bsg__"
            alt=""
          />
        </div>
      </div>
      <div className="md:block hidden fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Create;
