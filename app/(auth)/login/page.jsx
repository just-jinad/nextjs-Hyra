"use client";
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import Footer from '../../components/Footer';
import axios from 'axios';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required('email is required'),
      password: Yup.string().required('Password is required')
    }),
    onSubmit: values => {
      // You can handle form submission here
      console.log(values);
      axios.post('api/user/login', values)
      .then((result) => {
        console.log(result.data);
        alert(result.data.message)

      }).catch((err) => {
        
      });
    }
  });

  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 pb-20 md:grid-cols-2 gap-8">

          <div className="p-4">
            <form onSubmit={formik.handleSubmit} className='shadow-lg md:p-10 md:-10 mt-32 p-5'>
              <p className='font-semibold pb-8'>Login to your account</p>
              {/* email Input */}
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className={`bg-white border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-blue-700'} text-sm block w-full p-2.5`}
                  placeholder="Enter your email"
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                ) : null}
              </div>
              {/* Password Input */}
              <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className={`bg-white border ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-blue-700'} text-sm block w-full p-2.5`}
                  placeholder="Enter your password"
                  {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
                ) : null}
              </div>
              {/* Remember Me */}
              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium">Remember Me</label>
                <Link href="/forgot-password" className="ms-2 text-sm font-medium">Forgot Password</Link>
              </div>
              {/* Submit Button */}
              <button type="submit" className="bg-blue-700 text-white text-center rounded py-2 px-6 font-semibold">Sign in</button>
              <p className='flex justify-between pt-4'>
                <span>Don’t have an account?</span>
                <Link href="/signup" className='text-blue-800 font-bold cursor-pointer'>Sign Up</Link>
              </p>
            </form>
          </div>

          {/* Second Column (Hidden on small screens) */}
          <div className="hidden md:block p-4">
            {/* Content of the second column */}
            <img className='md:h-96  mt-32' src="/image 249.png" alt="" />
          </div>
        </div>
      </div>
      <div className='fixed bottom-0 w-full'>
        <Footer />
      </div>
    </>
  )
}

export default Login;
