"use client";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState<any>(null); // State to store database results

  const handleFetch = async () => {
    try {
      // 1. Hit the endpoint
      const response = await fetch("/api/getData");

      // 2. Turn the raw response into a JSON object
      const result = await response.json();

      // 3. Update the UI
      setData(result);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  return (
    <div className="p-10">
      <button
        onClick={handleFetch}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Fetch Users
      </button>

      {/* 4. Display the data once it's loaded */}
      {data && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
