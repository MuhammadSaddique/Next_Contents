import React from "react";
import Group from "./public/Group.png";

const SecondPage = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row bg-black min-h-screen bg-main-color text-white">
      {/* Image Container */}
      <div className="flex-1 lg:flex-col lg:max-w-full">
        <img
          src={"Group.png"}
          alt="Group"
          className="h-auto w-full object-cover"
        />
      </div>

      {/* Text Container */}
      <div className="flex-1 p-8 flex items-center justify-center">
        <div>
          <p className="text-sm">Who we are</p>
          <h1
            className="text-4xl lg:text-5xl font-bold mb-2"
            style={{ lineHeight: "1.5" }}
          >
            <span className="text-lg md:text-2xl sm:text-lg lg:text-3xl">
              The Story Behind our Name
            </span>
            <br />
          </h1>
          <p className="text-4xl mb-4 md:text-2xl sm:text-lg lg:text-3xl">
            level Five
          </p>

          <div className="mb-5" style={{ lineHeight: "2" }}>
            <p>
              Level Five Information Systems Technology Company emerged as a
              boutique IT house with a distinctive story. The choice of “Level
              Five” was akin to the journey through a boutique, where each level
              represents a curated space of expertise. Just as one explores
              unique offerings in a boutique, Level Five aspires to deliver
              specialized and tailored IT solutions at the highest level of
              proficiency.
            </p>
          </div>

          <div style={{ lineHeight: "2" }}>
            <p>
              The “Level Five” designation reflects the boutique approach – an
              exclusive commitment to excellence, personalization, and attention
              to detail. Like a boutique that carefully selects its inventory,
              our IT house meticulously crafts solutions that cater specifically
              to the unique needs of each client. In this narrative, “Level
              Five” becomes not just a measure of proficiency but a promise of a
              boutique IT experience, where technology is finely curated and
              elegantly tailored for every client’s journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
