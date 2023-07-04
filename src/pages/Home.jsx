import React from "react";

const Home = () => {
  return (
    <div>
      <section id="section1" className="text-white h-screen flex">
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold">
          About
        </h1>
      </section>
      <section id="section2" className="text-white h-screen bg-gray-200 flex">
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold">
          Blogs
        </h1>
      </section>
      <section id="section3" className="text-white h-screen flex">
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold">
          Contact
        </h1>
      </section>
      <section id="section4" className="text-white h-screen bg-gray-400 flex">
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold">
          Projects
        </h1>
      </section>
    </div>
  );
};

export default Home;
