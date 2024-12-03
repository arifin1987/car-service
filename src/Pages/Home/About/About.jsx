import img1 from "../../../../public/assets/images/about_us/person.jpg";
import img2 from "../../../../public/assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className=" flex flex-col gap-8 lg:flex-row my-16">
      <div className="w-1/2  relative">
        <img className="w-3/4 " src={img1} alt="" />
        <img className="w-1/2 absolute right-5 top-1/2" src={img2} alt="" />
      </div>

      <div className="w-1/2  flex flex-col">
        <h1 className="text-4xl mb-4">About Us</h1>
        <h2 className="text-2xl font-bold mb-4">
          We are qualified & of experience in this field
        </h2>
        <p className="flex-grow">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some <br /> form, by injected
          humour, or randomised words which dont look even slightly believable.
        </p>
        <button className="bg-orange-700 text-white p-2 rounded w-1/4">
          Get More Info
        </button>
      </div>
    </div>
  );
};

export default About;
