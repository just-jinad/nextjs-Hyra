import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='bg-black text-center mx-auto'>
                <p className='gap-3 flex justify-center py-2'>
                <i className="bi text-white bi-google-play"></i>
                <i className="bi text-white bi-instagram"></i>
                <i className="bi text-white bi-whatsapp"></i>
                </p>
            </div>
            <div className='bg-[#0802A3]'>
                <p className='text-white text-center text-md py-2'>@2023 Copyrights: Hyra</p>
            </div>
    </div>
  )
}

export default Footer