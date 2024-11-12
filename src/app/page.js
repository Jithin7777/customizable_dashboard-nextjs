import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-gray-800 to-dark-700 p-6">
      <div className="text-center">
        <h1 className="text-4xl text-white font-extrabold mb-6">
          Welcome to Your Customizable Dashboard
        </h1>
        <h2 className="text-2xl text-white font-semibold mb-4">
          Easily Manage and Customize Your Widgets
        </h2>
        <p className="text-xl text-white mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptas
          reiciendis inventore pariatur accusantium, provident vero aut omnis,
          porro eligendi dignissimos architecto, ab facere repellendus repellat
          sint cum aperiam similique!
        </p>

        <div className="flex justify-center gap-8">
          <Link
            className="inline-block bg-white text-blue-700 font-semibold text-lg py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition duration-200"
            href="/dashboard"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
