import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { resources } from "../helpers/resources.js";
import Wrapper from "../components/Wrapper.jsx";
import Footer from "../components/Footer.jsx";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
const Page = () => {
  const [Hover, setHover] = useState(false);
  const { title } = useParams();
  const resource = resources.find((resource) => resource.title === title);
  return (
    <div className=" bg-gradient-t-b mt-6 from-[#323232] to-[#10020D] h-[910px] space-y-10 ">
      <Wrapper>
        <div className=" p-1 relative ">
          <div
            className="relative flex  oveflow-hidden text-white justify-start items-center   px-5 rounded-md py-5
   bg-gradient-to-br from-[#0f0f0f]  to-[#170f15] overflow-hidden  border-[1px] border-white/55  "
          >
            <div className="flex flex-col gap-16 lg:gap-24 justify-start overflow-hidden ">
              <motion.a
                // animate= {{
                //   width : Hover ? '20%' : '94px'
                // }}
                // transition={{
                //   duration : 0.3,
                target='_blank'
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                // }}
                href={resource.link}
                className="bg-white rounded-md  flex overflow-hidden w-fit text-[#301031] text-2xl py-3 px-3"
              >
                <img src={resource.image} className="md:h-24 h-12 w-auto  " alt="" />{" "}
                <span className="ml-4 flex justify-center items-center uppercase">
                  resource{" "}
                  <motion.span
                    animate={{
                      x: Hover ? 5 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    {" "}
                    <ChevronRight size={32} />
                  </motion.span>{" "}
                </span>
              </motion.a>

              <div className="flex flex-col gap-4 ">
                <h1 className="lg:text-8xl font-bold md:text-6xl  text-4xl">Description</h1>
                <p className="lg:text-3xl md:text-2xl w-[90%] lg:w-2/3 text-start text-white/75 lg:leading-10 ">
                  {resource.description}
                </p>
              </div>
              <div>
                <h1 className="lg:text-4xl md:text-3xl text-2xl  font-bold mb-4 ">Tags</h1>
                <p className="flex gap-2 lg:text-[20px] font-semibold">
                  {" "}
                  {resource.tags.map((item, index) => (
                    <span
                      className="rounded px-3 py-2 bg-white text-[#301031]"
                      key={index}
                    >
                      {item}
                    </span>
                  ))}
                </p>
              </div>
              <div className="absolute  left-1/2 fo  top-1/3 ">
                <h1 className="text-[400px] leading-[350px]  font-jersey font-extrabold  mix-blend-difference opacity-75 text-[#231226] ">
                  {resource.title}
                </h1>
              </div>
            </div>
          </div>
        </div>

       <div className="hidden lg:flex">
       <Footer className="w-full " />
       </div>
      </Wrapper>
    </div>
  );
};

export default Page;
