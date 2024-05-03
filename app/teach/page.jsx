"use client"
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Nav';
import { data } from '@/app/data/page';
import React, { useEffect, useState } from 'react';
import { SpinnerCircular } from "spinners-react";


const Teachid = ({ params }) => {
    const [isloading, setIsloading] = useState(true);
    useEffect(() => {
        let timer = setTimeout(() => setIsloading(false), 2000);
        return () => clearTimeout(timer);
    });
    const eachid = data.find((img) => img.id === parseInt(params.teachid));
    if (!eachid) {
        console.log("no image found");
    }
    else {
        console.log(eachid);
    }
    return (
        <>
            <Navbar />
            {isloading ? (
                <div className="flex  justify-center items-center h-screen">
                    <SpinnerCircular
                        size={40}
                        thickness={180}
                        speed={100}
                        color="rgba(57, 64, 172, 0.82)"
                        secondaryColor="rgba(67, 57, 172, 0.55)"
                    />
                </div>
            ) : (
                <div>
                    <div className='py-20'>
                        <p className='text-[#0802A3]  text-center font-bold text-xl md:mt-0 mt-5'>{eachid.textCard}</p>
                    </div>
                    <div className='md:px-64 md:block hidden'>

                        <div className='md:flex'>
                            <div className='md:w-1/2  text-[12px]'>
                                <p className='text-[#0802A3] font-bold w-44 '>{eachid.title}</p>
                                <p className=' mt-5'>{eachid.subTitle}</p>
                                <div className=''>
                                    <div
                                        className=""
                                        dangerouslySetInnerHTML={{ __html: eachid.listText }}
                                    />
                                </div>
                            </div>
                            <div className='md:w-1/2'>
                                <img className='h-52 w-52 -mt-8 object-cover rounded mx-auto' src={eachid.imgUrl} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='px- md:hidden block'>

                        <div className='grid grid-cols-1 mt-4  px-8  '>
                            <div className='w-full'>
                                <img className='h-full rounded -mt-10 mx-auto' src={eachid.imgUrl} alt="" />
                            </div>
                            <div className=' w-full mt-3 pb-28 mx-auto  text-[12px]'>
                                <p className='text-[#0802A3] font-bold w-44 '>{eachid.title}</p>
                                <p className=' mt-5'>{eachid.subTitle}</p>
                                <div className='mt-3 '>
                                    <div
                                        className=""
                                        dangerouslySetInnerHTML={{ __html: eachid.listText }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='fixed bottom-0 w-full'>
                        <Footer />
                    </div>
                </div>
            )}
        </>
    )
}

export default Teachid
