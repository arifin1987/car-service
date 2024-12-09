import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, img, title, price } = service;
  return (
    <div className="border p-4 w-80 h-70">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <p className="text-red-500">Price:${price}</p>
      <Link to={`/checkout/${_id}`}>Checkout</Link>
    </div>
  );
};

export default ServiceCard;
