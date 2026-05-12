"use client";
import React from "react";

export default function PostJobPage() {
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      title: formData.get("title"),
      company: formData.get("company"),
      location: formData.get("location"),
      type: formData.get("type"),
      description: formData.get("description"),
      salary: formData.get("salary"),
    };
    console.log(data);
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-100 via-white to-blue-100 px-4 py-10">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-2xl">
        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Post a Job 🚀
          </h1>

          <p className="mt-3 text-gray-600">
            Fill in the details below to publish a new job listing.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-7" onSubmit={handleSubmit}>
          {/* Job Title */}
          <div>
            <label
              htmlFor="title"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Job Title
            </label>

            <input
              type="text"
              name="title"
              id="title"
              required
              placeholder="Frontend Developer"
              className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {/* Company */}
          <div>
            <label
              htmlFor="company"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Company
            </label>

            <input
              type="text"
              name="company"
              id="company"
              required
              placeholder="Google"
              className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="location"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Location
            </label>

            <input
              type="text"
              name="location"
              id="location"
              required
              placeholder="Chennai, India"
              className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {/* Job Type */}
          <div>
            <label
              htmlFor="type"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Job Type
            </label>

            <select
              name="type"
              id="type"
              required
              className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            >
              <option value="">Select Job Type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Description
            </label>

            <textarea
              name="description"
              id="description"
              rows={6}
              required
              placeholder="Describe the role, responsibilities, skills required..."
              className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            ></textarea>
          </div>

          {/* Salary */}
          <div>
            <label
              htmlFor="salary"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Salary (Optional)
            </label>

            <input
              type="text"
              name="salary"
              id="salary"
              placeholder="₹8,00,000 - ₹12,00,000"
              className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-2xl bg-blue-600 px-6 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.01] hover:bg-blue-700 active:scale-[0.98]"
          >
            Post Job
          </button>
        </form>
      </div>
    </main>
  );
}
