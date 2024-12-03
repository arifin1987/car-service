import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center my-6">
        <h1 className="text-4xl font-semibold">Our Service Area</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or <br /> randomised words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-2 my-4">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Service;