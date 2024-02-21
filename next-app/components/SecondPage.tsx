import React from "react";

const SecondPage = () => {
  return (
    <div className="bg-black min-h-screen bg-main-color p-4 flex flex-col text-white">
      <div>
        <p className="text-sm">Who we are</p>
        <h1 className="text-4xl font-bold mb-6" style={{ lineHeight: "1.5" }}>
          <span className="">The Story Behind our Name</span>
          <br />
        </h1>
        <p className="text-4xl mb-16">level Five</p>
      </div>
      <div className="px-32 py-10 ">
        <p className="mb-5" style={{ lineHeight: "2" }}>
          Level Five Information Systems Technology Company emerged as a
          boutique IT house with a distinctive story. The choice of “Level Five”
          was akin to the journey through a boutique, where each level
          represents a curated space of expertise. Just as one explores unique
          offerings in a boutique, Level Five aspires to deliver specialized and
          tailored IT solutions at the highest level of proficiency.
        </p>
        <p className="" style={{ lineHeight: "2" }}>
          The “Level Five” designation reflects the boutique approach – an
          exclusive commitment to excellence, personalization, and attention to
          detail. Like a boutique that carefully selects its inventory, our IT
          house meticulously crafts solutions that cater specifically to the
          unique needs of each client. In this narrative, “Level Five” becomes
          not just a measure of proficiency but a promise of a boutique IT
          experience, where technology is finely curated and elegantly tailored
          for every client’s journey.
        </p>
      </div>
    </div>
  );
};

export default SecondPage;
