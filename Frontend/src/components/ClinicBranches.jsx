import React from "react";
import img1 from "../assets/1.png";

const clinics = [
  {
    name: "Lucknow Clinic",
    address: "Nishith Plaza, Engineering College Chauraha",
    image: img1,
  },
 
];

export default function ClinicBranches() {
  return (
    <section className="py-16 px-4 text-center bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-green-600">
        Find Your Nearest Clinic Branch
      </h2>
      <p className="mt-2 text-lg font-semibold text-gray-800">
        first Convenient Locations In Lucknow{" "}
        <span className="text-green-600">One Trusted Name</span>
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        {clinics.map((clinic, index) => (
          <div
            key={index}
            className="border rounded-2xl p-4 shadow-sm hover:shadow-md transition w-64"
          >
            <img
              src={clinic.image}
              alt={clinic.name}
              className="w-full h-44 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-green-600">
              {clinic.name}
            </h3>
            <p className="text-gray-600 mt-1">{clinic.address}</p>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
              📞 Contact Us
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}