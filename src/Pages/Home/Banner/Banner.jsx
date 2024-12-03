import img from "../../../../public/assets/images/banner/1.jpg";

const Banner = () => {
  return (
    <div
      className=" min-h-screen "
      style={{ backgroundImage: `url("${img}")` }}
    >
      <div className="  absolute top-1/2 right-16">
        <h1 className="text-4xl text-white">
          Affordable Price For Car Servicing
        </h1>
        <p className="text-white">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
        <button className="bg-orange-500 p-2 text-white rounded mr-2">
          Discover More
        </button>
        <button className="border-2 border-orange-500 p-2 text-white">
          Latest Project
        </button>
      </div>
    </div>
  );
};

export default Banner;
