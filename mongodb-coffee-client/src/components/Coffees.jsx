import { Link, useLoaderData } from "react-router-dom";
import Coffee from "./Coffee";
import { useState } from "react";
import Header from "./Header";
import Swal from "sweetalert2";

const Coffees = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)

  const handleDeleteCoffee = _id => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${_id}`, {
          method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
        console.log(data);
        if(data.deletedCount > 0){
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
          const remaining = coffees.filter(coffee => coffee._id !== _id)
          setCoffees(remaining);
        })
      
      }
    });
  }

  return (
    <div className="md:w-2/3 md:mx-auto ">
      <h1 className="text-4xl maamli text-center py-5">MongoDB Coffee House</h1>
      <Header></Header>
      <h1 className="text-center text-3xl edu font-semibold mb-6">
        All Coffees Here: {coffees.length}
      </h1>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
        {coffees.map((coffee) => (
          <Coffee key={coffee._id} onDelete={handleDeleteCoffee} coffee={coffee}></Coffee>
        ))}
      </div>
      <Link className="flex justify-center mt-6" to="/">
        <button className="bg-[#D2B48C] text-black p-4 rounded-lg hover:bg-transparent hover:border hover:text-white font-semibold">
          Add More...
        </button>
      </Link>
    </div>
  );
};

export default Coffees;
