import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center ms-2 me-2 w-full text-gray-700 ">
      <div className="space-y-4">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-2xl">Page Not Found</p>
        <p className="text-lg">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="text-blue-500 hover:text-blue-700 underline font-semibold"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
