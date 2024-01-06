import React from "react";
import Box from "./game";
import Frame from "./keyboard";
export default function Hero() {
  return (
    <>
      <div className="flex flex-col" id="HeroSec">
        <h1 id="Welcome" className=" font-bold text-center">
          Welcome!
        </h1>
        <p id="toptext" className=" text-center">
          Go to this step by step guideline process on how to certify for your
          weekly benefits: 
          <a
            href="https://dev.d2p2mm3quesvi8.amplifyapp.com/"
            className="underline text-[#228B22]"
            id="link1"
          >
            See our guideline
          </a>
        </p>
        <p className="flex justify-center text-white">
          <a id="timer" className="bg-[#6495ED]">00 : 10 : 06 : 250</a>
        </p>
        <Box />
        <Frame/>
      </div>
    </>
  );
}
