import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Teachings from './components/Teachings'

const Home = () => {
    return (
        <>
            <Nav />

            <div className=' md:flex py-8 hidden'>
                <div className=' md:w-1/2'>
                    <div className='md:px-20  md:mt-20'>
                        <p className='md:text-4xl font-bold'>Discover a world where education meets excitement
                        </p>
                        <p className='text-sm mt-7 md:w-96'>Our Islamic app for kids is designed to inspire and teach in the most enjoyable way. Our app is not just educational; it's an adventure in faith</p>
                    </div>
                </div>
                <div className='md:w-1/2'>
                    <img className='md:h-72 mx-auto md:mt-14 rounded-md' src="https://s3-alpha-sig.figma.com/img/a16a/bda1/0462006a4f1b798567dfd1883a5996fd?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KWpDuZlXZkwEtEX81GB2DB2Ouik-ubzAY0IJaPwngEDJTsZeWZc10IKnTKzBEPsQM9g9LvRwyAlHjzqChzgudi0qoq~0sbaYSkmTOeUYQ~4cvOExQDIQ2dJVXbZVQ6ix~IuRyqNHWx75B-I6cX6s6f4c8hjp7NY152aINmS64T1PRNA-G6ChTvLUJRs7JxIN6CN8sB5um2OIJJUIJoe31EkOyJjU3i2A6m5OTU03XFqTZG0pIxA8GuXXjT0BOFHsX~xPAXYTzYCTTUjRE0LayFUkhjkQXbh4f2B82VjuyP0u43BdSKXCUhy-0YU7G68ySiJ0Miy2I-qljMFusmnDsw__" alt="" />
                </div>
            </div>
            
            <div className='md:hidden block px-7 py-10'>
                <div className='mt-10 md:w-1/2'>
                    <img className='h-44 mx-auto md:mt-14 rounded-md' src="https://s3-alpha-sig.figma.com/img/a16a/bda1/0462006a4f1b798567dfd1883a5996fd?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KWpDuZlXZkwEtEX81GB2DB2Ouik-ubzAY0IJaPwngEDJTsZeWZc10IKnTKzBEPsQM9g9LvRwyAlHjzqChzgudi0qoq~0sbaYSkmTOeUYQ~4cvOExQDIQ2dJVXbZVQ6ix~IuRyqNHWx75B-I6cX6s6f4c8hjp7NY152aINmS64T1PRNA-G6ChTvLUJRs7JxIN6CN8sB5um2OIJJUIJoe31EkOyJjU3i2A6m5OTU03XFqTZG0pIxA8GuXXjT0BOFHsX~xPAXYTzYCTTUjRE0LayFUkhjkQXbh4f2B82VjuyP0u43BdSKXCUhy-0YU7G68ySiJ0Miy2I-qljMFusmnDsw__" alt="" />
                </div>
                <div className='text-center md:w-1/2'>
                    <div className='md:px-20  md:mt-20'>
                        <p className=' text-xl  mt-6 mb-8 font-bold'>Discover a world where education meets excitement
                        </p>
                        <p className='text-md mt-4 md:w-96'>Our Islamic app for kids is designed to inspire and teach in the most enjoyable way. Our app is not just educational; it's an adventure in faith</p>
                    </div>
                </div>
            </div>

            <div className='px-2'>
                <p className='text-center text-2xl mt-5 font-bold'>Why Choose Us</p>
                <div className=' flex-wrap grid md:grid-cols-4  grid-cols-2 md:gap-10 gap-4 md:px-44   mt-10'>
                    <div className='bg-[#0802A3] text-white px-3 py-7 text-center rounded-md '>
                        <img className='h-14 w-16 rounded-sm mx-auto mb-4' src="https://s3-alpha-sig.figma.com/img/a16a/bda1/0462006a4f1b798567dfd1883a5996fd?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KWpDuZlXZkwEtEX81GB2DB2Ouik-ubzAY0IJaPwngEDJTsZeWZc10IKnTKzBEPsQM9g9LvRwyAlHjzqChzgudi0qoq~0sbaYSkmTOeUYQ~4cvOExQDIQ2dJVXbZVQ6ix~IuRyqNHWx75B-I6cX6s6f4c8hjp7NY152aINmS64T1PRNA-G6ChTvLUJRs7JxIN6CN8sB5um2OIJJUIJoe31EkOyJjU3i2A6m5OTU03XFqTZG0pIxA8GuXXjT0BOFHsX~xPAXYTzYCTTUjRE0LayFUkhjkQXbh4f2B82VjuyP0u43BdSKXCUhy-0YU7G68ySiJ0Miy2I-qljMFusmnDsw__" alt="" />
                        <p className='text-sm'> Our app contains the fundamental teaching of Islam for Kids</p>
                    </div>
                    <div className='bg-[#FF7676] text-white px-3 py-7 text-center rounded-md '>
                        <img className='h-14 w-16 rounded-sm mx-auto mb-4' src="https://s3-alpha-sig.figma.com/img/3575/b91a/cd30942a4b872528285006aad5411863?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LfZkwKFzAIz4A2g-SDkFIh0AfCj6IaLtq92WZOVMemGlMb86tvu45oGH8brUlnr-Na7uK-q0y0Hi1-QXhlRgy9fQrhB9nLspmRujWL6lSxpdwu1T-EOuG5wmojpCSDPVEirvUuAItUxogqFEHsOYfhO4NsICZamJu3aaMxkLitwoPP11Wf6SO8CzPP2weYlZ59DGbtM2O55nO~gQCs6aPhFMENPUEyzBxLN1sWBQSfs639rfgcM6xLnhEhz5KqnBDJ8IK-TaRMMNI~S19tRPCpnk7PFFCVt4zxtlweEzjHAL7SZ6THDSb~2KgOoXUfMmVsZanpVWIBofb~WPWa8yQw__" alt="" />
                        <p className='text-sm'> We make it interesting by including the the Stories of the Prophets and his Companions  </p>
                    </div>
                    <div className='bg-[#FF4B91] text-white px-3 py-7 text-center rounded-md '>
                        <img className='h-14 w-16 rounded-sm mx-auto mb-4' src="https://s3-alpha-sig.figma.com/img/8771/e0c4/0e16de03db2c9d610bd05dd1a50ea26f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cMzxcrM5Fgx~AP-H2tUxHGc1~Qx4T3w-v7PncrADIfKJJS1BdiWj6Tgfr9CceNJ-d6ifNPu4osq-iA4t8HRrWeZe2KnMK~hTGU~Ov1bwvGCFUGkGvjIwirNQZyC8oeO8FwC9K28Bw~eO0EZuI0B890OgHUj0p8XFCSEsAk7jkIDnVLe1isLzgOqg5SuMZKmtS-rugcdp3cZFVQkEoZZgMrUUk49KhlH3LfUo3Zcb4~zpLcKZrr69bzYyW9ynBgeR189l69ir2gyiHxQ5YhMrN1js5PYvxUjw5W42odaCNbGq9Cu3s4XOeM1UJHMjegjxZjHINjwJtfal0~NLGt3GNA__" alt="" />
                        <p className='text-sm'> As we all know that Du’a is an essential part of our life as a Muslim. Du’a is also included in our app </p>
                    </div>
                    <div className='bg-[#FFCD4B] text-white px-3 py-7 text-center rounded-md '>
                        <img className='h-14 w-16 rounded-sm mx-auto mb-4' src="https://s3-alpha-sig.figma.com/img/ce0b/b403/7df7cc49a886b4b8502f1a1fbec4d83d?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VqUInkTNYJPjcKfPZ-6YFh3-aTJgwJmk0G8PqwPoUt9iifzVYNuwkscPmRNS3C1bqXpjkC6WvZPI2P4rdpcfLw0o58rgA4vL3FF-Bzou5gX6NY0ET7cWQvAD48h4Z2nPuVIpbXJo72R5JXPMjQEG~WZcAS~ZNkAMGw1GeIBXXA0~1oRgJJdJbRXgdI5n~2u8YiAuBt0PLOL4hne8BoGkP934L3cZWuzCgxxpApMkkzxkwHhBKoDMA7PylAP34zNkPMtapYvbo98FEy-YQupS-bFB-1fQG4Zgdw9klFf6b8YXi97OkCCexDEGQ84kHe49kiWOECQtC6EO2yXBufERaA__" alt="" />
                        <p className='text-sm'> Our app contains the 99 Names of Allah  </p>
                    </div>
                </div>
            </div>

            <div className='px-3'>
               <Teachings/>
            </div>
            <div className='bg-[#FF4B91] md:flex flex py-7 px-7 md:py-9 mt-16 justify-between'>
                <div className='md:w-1/2 md:px-40'>
                    <p className='font-bold text-xl text-white '>
                        The Prophet (S.A.W) said “Seeking knowledge is an obligation upon every Muslim”
                    </p>
                    <button className='text-[#FF4B91] flex justify-around rounded bg-white md:py-1 py-4 px-2 md:px-5 mt-5'>
                        <p> Get started with us </p> <i className="bi ms-3 text-md bi-arrow-right"></i></button>
                </div>
                <div className='md:w-1/2'>
                    <img className='md:h-52 rounded mx-auto' src="https://s3-alpha-sig.figma.com/img/b1d7/0295/355078eed907ef2987eb3fdb24ab7b34?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PXKB4k~ne-Nmh6zzy8QRxqApGGPet5R6qD9qQaV0~NLPBP~N0cj-l4Rmr90riHuTvuzOFohrsJ0AJSdlpaViWRssmfvoz8XX4VFXi~65HB9vMwwhz9oHHnNTbFykftEXtrCvP1TE-E8ojcJSxvM672J~R9vnakxK1fREmTq8kwgM4RnZxI5XW7hzMhnEuW~TeQBAF-Jihj6hAjjoeHvw0ZnWIDTNanjGBw0fOSGRfNY9b2Qu~AiLZhejBlQyfe9z52cWCO-bLdit~WPrfg2yrXhVX1OEnKt-aKaAW72qXU1T9zDZI1pfcCMKpKhYUE3-7k58jrB1IzNgkWUFKFHrTw__" alt="" />
                </div>
            </div>
            <Footer/>

        </>
    )
}

export default Home