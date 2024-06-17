"use client";

import { useEffect } from "react";

export default function error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-10 space-y-4">
      <h1>Something went wrong. Please try again later.</h1>
      <button
        className="py-2 px-4 rounded-md border hover:bg-amber-600"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
