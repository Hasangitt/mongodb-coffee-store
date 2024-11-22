import { Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Swal from "sweetalert2";
function App() {

const handleAddCoffee = e =>{
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const chef = form.chef.value;
  const supplier = form.supplier.value;
  const taste = form.taste.value;
  const category = form.category.value;
  const details = form.details.value;
  const photo = form.photo.value;
  const coffee = {name, chef, supplier, taste, category, details, photo};
  console.log(coffee);
  fetch('http://localhost:5000/coffees', {
    method: "POST",
    headers: {
      "content-type" : "application/json"
    },
    body: JSON.stringify(coffee)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    if(data.insertedId){
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your coffee has been saved",
        showConfirmButton: false,
        timer: 1500
      });
      form.reset();
    }
  });
  
}

  return (
    <>
      <h1 className="text-4xl maamli text-center py-5">MongoDB Coffee House</h1>
      <Header></Header>
      <Link className="flex justify-center mb-6" to="/coffees"><button className="bg-[#D2B48C] text-black p-4 rounded-lg hover:bg-transparent hover:border hover:text-white font-semibold">All Coffees....</button></Link>
      <div className=" md:w-2/3 mx-auto space-y-10 bg-yellow-50 p-8">
        <h3 className="text-center text-black text-3xl edu font-semibold">
          Add New Coffee
        </h3>
        <form onSubmit={handleAddCoffee} className="space-y-5">
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
            value="Add Coffee"
            className="input text-black font-semibold cursor-pointer input-bordered bg-[#D2B48C] w-full"
          />
        </form>
      </div>
    </>
  );
}

export default App;
