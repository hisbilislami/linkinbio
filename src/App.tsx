import * as React from "react"; // For TypeScript files
import "./App.css";
import {
  ImGithub,
  ImHome,
  ImInstagram,
  ImTwitter,
  ImYoutube,
} from "react-icons/im";
import { FaHashtag } from "react-icons/fa";

function App() {
  return (
    <div className="w-full h-[100vh]">
      <div className="top-background h-[25%] relative ">
        <img src="./1.jpg" alt="hello" />
      </div>
      <div className="top-background h-[100%] relative bg-greenarmy overflow-x-clip">
        <div className="rounded-[50%] bg-greenarmy absolute top-[-25px] w-full h-[150px] scale-x-[140%]"></div>
        <div className="photo-profile rounded-[100%] bg-babypowder border-[1rem] border-greenarmy w-[150px] h-[150px] absolute top-[-15%] left-0 right-0 mx-auto my-0">
          <img
            src="./1.jpg"
            className="object-cover rounded-full ring-4 ring-babypowder h-[100%] w-[100%]"
          />
        </div>
        <div className="border border-[transparent] w-full h-[100%] relative">
          <div className="mt-[15%]">
            <h1 className="text-smokyblack text-2xl font-bold">
              Hisbil Islami
            </h1>
            <h4 className="text-smokyblack text-xs inline-flex items-center justify-center">
              <FaHashtag className="mx-2" style={{ color: "blueviolet" }} />
              Software engineer
              <FaHashtag className="mx-2" style={{ color: "blueviolet" }} />
            </h4>
          </div>
          <div className="mt-[50px] block">
            <a
              href="#"
              className="rounded w-[80%] inline-flex items-center bg-babypowder text-smokyblack justify-center py-4 my-2"
            >
              <ImHome />
              <p className="mx-2">Website</p>
            </a>
            <a
              href="#"
              className="rounded w-[80%] inline-flex items-center bg-babypowder text-smokyblack justify-center py-4 my-2"
            >
              <ImGithub />
              <p className="mx-2">Github</p>
            </a>
            <a
              href="#"
              className="rounded w-[80%] inline-flex items-center bg-babypowder text-smokyblack justify-center py-4 my-2"
            >
              <ImYoutube style={{ color: "crimson" }} />
              <p className="mx-2">Youtube</p>
            </a>
            <a
              href="#"
              className="rounded w-[80%] inline-flex items-center bg-babypowder text-smokyblack justify-center py-4 my-2"
            >
              <ImInstagram style={{ color: "peru" }} />
              <p className="mx-2">Instagram</p>
            </a>
            <a
              href="#"
              className="rounded w-[80%] inline-flex items-center bg-babypowder text-smokyblack justify-center py-4 my-2"
            >
              <ImTwitter style={{ color: "lightskyblue" }} />
              <p className="mx-2">Twitter</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
