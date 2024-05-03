import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const page = () => {
  return (
    <>
      <Nav />
      <br />
      <br />
      <br />
      <div className="flex justify-center">
        <p className="text-1xl font-bold" style={{ color: "blue" }}>
          Du’a
        </p>
      </div>
      <div className=" md:flex py-2 hidden justify-center">
        <div className=" ">
          <div className="md:px-20  md:mt-20">
            <p className="text-sm  md:w-30 ">
              Du’a refers to the act of calling upon or <br />
              praying to a Allah. It is also a means of <br />
              seeking Allah’s guidance, protection, or <br />
              blessings
            </p>
            <br />
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            className="md:h-56 mx-auto md:mt-20 rounded-md"
            src="https://s3-alpha-sig.figma.com/img/8771/e0c4/0e16de03db2c9d610bd05dd1a50ea26f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cMzxcrM5Fgx~AP-H2tUxHGc1~Qx4T3w-v7PncrADIfKJJS1BdiWj6Tgfr9CceNJ-d6ifNPu4osq-iA4t8HRrWeZe2KnMK~hTGU~Ov1bwvGCFUGkGvjIwirNQZyC8oeO8FwC9K28Bw~eO0EZuI0B890OgHUj0p8XFCSEsAk7jkIDnVLe1isLzgOqg5SuMZKmtS-rugcdp3cZFVQkEoZZgMrUUk49KhlH3LfUo3Zcb4~zpLcKZrr69bzYyW9ynBgeR189l69ir2gyiHxQ5YhMrN1js5PYvxUjw5W42odaCNbGq9Cu3s4XOeM1UJHMjegjxZjHINjwJtfal0~NLGt3GNA__"
            alt=""
          />
        </div>
      </div>

      <div className="md:hidden block px-7 py-10">
        <div className="">
          <img
            className="md:h-56 mx-auto md:mt-20 rounded-md"
            src="https://s3-alpha-sig.figma.com/img/8771/e0c4/0e16de03db2c9d610bd05dd1a50ea26f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cMzxcrM5Fgx~AP-H2tUxHGc1~Qx4T3w-v7PncrADIfKJJS1BdiWj6Tgfr9CceNJ-d6ifNPu4osq-iA4t8HRrWeZe2KnMK~hTGU~Ov1bwvGCFUGkGvjIwirNQZyC8oeO8FwC9K28Bw~eO0EZuI0B890OgHUj0p8XFCSEsAk7jkIDnVLe1isLzgOqg5SuMZKmtS-rugcdp3cZFVQkEoZZgMrUUk49KhlH3LfUo3Zcb4~zpLcKZrr69bzYyW9ynBgeR189l69ir2gyiHxQ5YhMrN1js5PYvxUjw5W42odaCNbGq9Cu3s4XOeM1UJHMjegjxZjHINjwJtfal0~NLGt3GNA__"
            alt=""
          />
        </div>
        <div className=" ">
          <div className="md:px-20  ">
            <div className="md:px-20 ">
              <p className="text-sm  md:w-80 ">
                Du’a refers to the act of calling upon or <br />
                praying to a Allah. It is also a means of <br />
                seeking Allah’s guidance, protection, or <br />
                blessings
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Footer/>
      </div>
    </>
  );
};

export default page;
