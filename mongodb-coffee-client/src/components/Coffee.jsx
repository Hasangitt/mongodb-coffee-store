import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Coffee = ({ coffee, onDelete }) => {
  const { name, chef, supplier, taste, category, details, photo } = coffee;
 
  return (
    <section>
      <div className="card card-side bg-yellow-50 text-black shadow-xl p-2 md:space-x-5">
        <figure>
          <img className="w-[300px] h-[300px]" src={photo} alt="photo" />
        </figure>
        <div className="flex justify-evenly items-center w-full">
          <div className="space-y-5">
            <h2 className="card-title">Name: {name}</h2>
            <p>Chef: {chef}</p>
            <p>Supplier: {supplier}</p>
            <p>Taste: {taste}</p>
            <p>Category: {category}</p>
            <p>Details: {details}</p>
          </div>
          <div className="join join-vertical">
            <button className="btn btn-primary join-item">View</button>
           <Link to={`/update/${coffee._id}`}><button className="btn btn-accent join-item">Update</button></Link>
            <button onClick={() => onDelete(coffee._id)} className="btn btn-active join-item">Delete</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coffee;

Coffee.propTypes = {
  coffee: PropTypes.node,
  onDelete: PropTypes.node
};
