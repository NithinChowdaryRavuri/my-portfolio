import React from "react";

const LeetCode = () => {
  return (
    <section className="py-8 leading-7 max-w-7xl text-gray-900 bg-white sm:py-12 md:py-16 lg:py-24">
      <div className="max-w-6xl px-4 mx-auto border-solid lg:px-12">
        <div className="flex flex-col items-start leading-7 gap-4 text-gray-900 border-0 border-gray-200 lg:items-center lg:flex-row">
          <div className="box-border flex-1 text-center border-solid sm:text-left">
            <h2 className="m-0 text-3xl font-semibold leading-tight tracking-tight text-left text-black border-0 border-gray-200 sm:text-4xl">
              DSA Finatic
            </h2>
            <p className="mt-2 text-xl text-left text-gray-900 border-0 border-gray-200 sm:text-2xl">
              Solved over 400 leetcode problems.
            </p>
          </div>
          <a
            href="https://leetcode.com/u/NithinChowdaryRavuri/"
            target="_blank"
            className="relative inline-block px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white">
              Leetcode &rarr;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LeetCode;
