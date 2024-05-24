import React from "react";

const Skills = () => {
  return (
    <section className="w-full py-16 overflow-hidden bg-white relative">
      <div className="w-1/2 h-full bg-gray-50 md:block hidden absolute transform -translate-x-64 left-0 top-0"></div>
      <div className="w-1/2 h-full bg-gray-50 md:block hidden absolute transform -translate-x-24 -skew-x-[30deg] left-0 top-0"></div>
      <div className="max-w-6xl relative mx-auto flex sm:px-0 px-10 flex-col items-start sm:items-center justify-center">
        <h2 className="text-gray-900 text-3xl font-bold">My Skills</h2>
        <div className="flex flex-wrap justify-start sm:grid sm:grid-cols-4 md:grid-cols-7 gap-6 mt-8 text-5xl sm:text-6xl md:text-7xl">
          <i className="devicon-html5-plain-wordmark colored"></i>
          <i className="devicon-css3-plain-wordmark colored"></i>
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-typescript-plain colored"></i>
          <i className="devicon-python-plain-wordmark colored"></i>
          <i className="devicon-java-plain-wordmark colored"></i>
          <i className="devicon-react-original-wordmark colored"></i>
          <i className="devicon-nextjs-original-wordmark colored"></i>
          <i className="devicon-vuejs-plain-wordmark colored"></i>
          <i className="devicon-svelte-plain colored"></i>
          <i className="devicon-tailwindcss-original colored"></i>
          <i className="devicon-nodejs-plain-wordmark colored"></i>
          <i className="devicon-express-original-wordmark colored"></i>
          <i className="devicon-mongodb-plain-wordmark colored"></i>
          <i className="devicon-postgresql-plain-wordmark colored"></i>
        </div>
      </div>
    </section>
  );
};

export default Skills;
