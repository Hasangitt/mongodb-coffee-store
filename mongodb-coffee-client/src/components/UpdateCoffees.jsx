import { Link, useLoaderData } from "react-router-dom";
import Header from "./Header";

const UpdateCoffees = () => {
  const loadedCoffees = useLoaderData();

  const handleUpdatedCoffee = e => {
    e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const chef = form.chef.value;
  const supplier = form.supplier.value;
  const taste = form.taste.value;
  const category = form.category.value;
  const details = form.details.value;
  const photo = form.photo.value;
  const updatedCoffee = {name, chef, supplier, taste, category, details, photo};
  console.log(updatedCoffee);
  fetch(`http://localhost:5000/coffees/${loadedCoffees._id}`, {
    method: "PUT",
    headers: {
      "content-type" : "application/json"
    },
    body: JSON.stringify(updatedCoffee)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    if(data.modifiedCount > 0){
      alert('Updated Successfully.')
      form.reset();
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  });
  }

  return (
    <div>
      <h1 className="text-4xl maamli text-center py-5">MongoDB Coffee House</h1>
      <Header></Header>
      <div className="card md:w-2/3 mx-auto card-side bg-yellow-50 text-black shadow-xl p-2 md:space-x-5 mb-10">
        <figure>
          <img className="w-[300px] h-[300px]" src={loadedCoffees.photo} alt="photo" />
        </figure>
        <div className="space-y-5">
            <h2 className="card-title">Name: {loadedCoffees.name}</h2>
            <p>Chef: {loadedCoffees.chef}</p>
            <p>Supplier: {loadedCoffees.supplier}</p>
            <p>Taste: {loadedCoffees.taste}</p>
            <p>Category: {loadedCoffees.category}</p>
            <p>Details: {loadedCoffees.details}</p>
          </div>
      </div>
      <div className=" md:w-2/3 mx-auto space-y-10 bg-yellow-50 p-8">
        <h3 className="text-center text-black text-3xl edu font-semibold">
          Update Coffee Item of: {loadedCoffees.name}
        </h3>
        <form onSubmit={handleUpdatedCoffee} className="space-y-5">
          <div className="flex gap-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered input-success w-full"
            />
            <input
              type="text"
              name="chef"
              placeholder="Chef"
              className="input input-bordered input-success w-full"
            />
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              name="supplier"
              placeholder="Supplier"
              className="input input-bordered input-success w-full"
            />
            <input
              type="text"
              name="taste"
              placeholder="Taste"
              className="input input-bordered input-success w-full"
            />
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              name="category"
              placeholder="Category"
              className="input input-bordered input-success w-full"
            />
            <input
              type="text"
              name="details"
              placeholder="Details"
              className="input input-bordered input-success w-full"
            />
          </div>
          <input
            type="text"
            name="photo"
            placeholder="PhotoURL"
            className="input input-bordered input-success w-full"
          />
          <input
            type="submit"
            value="Update Coffee"
            className="input text-black font-semibold cursor-pointer input-bordered bg-[#D2B48C] w-full"
          />
        </form>
      </div>
      <Link className="flex justify-center mt-6" to="/coffees">
        <button className="bg-[#D2B48C] text-black p-4 rounded-lg hover:bg-transparent hover:border hover:text-white font-semibold">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default UpdateCoffees;
