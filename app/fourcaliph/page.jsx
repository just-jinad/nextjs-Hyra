import React from "react";
import Nav from "../components/Nav";
// import Footer from "../Component/Footer";

const page = () => {
  return (
    <>
      <Nav />
      <br />
      <br />
      <br />
      <div className="flex justify-center">
        <p className="text-1xl font-bold" style={{ color: "#fee08e" }}>
          The Four Rightly Guided Caliph
        </p>
      </div>
      <div className=" md:flex py-2 hidden justify-center">
        <div className=" ">
          <div className="md:px-20  md:mt-20">
            <p className="text-sm  md:w-52 ">
              The four rightly guided caliphs, also known as the Khulafa
              Rashidun, are considered to be the first four leaders of the
              Islamic community after the death of Prophet Muhammad. They are : 
            </p>
            <br />
            <div>1. Abubakr as-Siddiq</div>
            <div>2.   Umar ibn al-Khattab </div>
            <div>3. Uthman ibn Affan</div>
            <div>4.  Ali ibn Abi Talib</div>
           
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            className="md:h-72 mx-auto md:mt-20 rounded-md"
            style={{width:'60%'}}
            src="https://s3-alpha-sig.figma.com/img/fe39/4bf9/7c47f9f6a84865e5b79c369f4546e060?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NJaZJR-iAoUFZb-R1IolJ0tBZYCAI1RlJwgL32szwLSvhi3jpBwpX0wBKxnLLyvTwdv0nasDs7UQNdHoU83mNxiNFvW2CWG2GGIplzyTW2j~40oKcU5J0qs6IhM7cIbcu5EVGEkU6SSQrzyfMaMDm0pXuLmKrswutiq8iinjLRFopLfoL8Q-ngpTcEqeZwdouwnv5vUH31F9fuQKGs18C7hA7j22iGY2ryZRdfsMH3ASj~i5-q37HXJ2~I-pK0A2tvw7evNOceEbbJP~VGqA0A8T59RMr-ilQsOg5gm4gocCl2nauq9a~2FPEfXayYdnT9ifCA5pQ5~GprrcrCaukQ__"
            alt=""
          />
        </div>
      </div>


      <div className="md:hidden block px-7 py-10">
        <div className="">
        <img
            className="md:h-72 mx-auto md:mt-20 rounded-md"
       
            src="https://s3-alpha-sig.figma.com/img/fe39/4bf9/7c47f9f6a84865e5b79c369f4546e060?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NJaZJR-iAoUFZb-R1IolJ0tBZYCAI1RlJwgL32szwLSvhi3jpBwpX0wBKxnLLyvTwdv0nasDs7UQNdHoU83mNxiNFvW2CWG2GGIplzyTW2j~40oKcU5J0qs6IhM7cIbcu5EVGEkU6SSQrzyfMaMDm0pXuLmKrswutiq8iinjLRFopLfoL8Q-ngpTcEqeZwdouwnv5vUH31F9fuQKGs18C7hA7j22iGY2ryZRdfsMH3ASj~i5-q37HXJ2~I-pK0A2tvw7evNOceEbbJP~VGqA0A8T59RMr-ilQsOg5gm4gocCl2nauq9a~2FPEfXayYdnT9ifCA5pQ5~GprrcrCaukQ__"
            alt=""
          />
        </div>
        <br />
        <div className=" ">
          <div className="md:px-20  md:mt-20">
          <div className=" ">
          <div className="md:px-20  md:mt-20">
            <p className="text-sm  md:w-52 ">
              The four rightly guided caliphs, also known as the Khulafa
              Rashidun, are considered to be the first four leaders of the
              Islamic community after the death of Prophet Muhammad. They are : 
            </p>
            <br />
            <div>1. Abubakr as-Siddiq</div>
            <div>2.   Umar ibn al-Khattab </div>
            <div>3. Uthman ibn Affan</div>
            <div>4.  Ali ibn Abi Talib</div>
           
          </div>
        </div>
          </div>
        </div>
      </div>
   
    </>
  );
};

export default page;
