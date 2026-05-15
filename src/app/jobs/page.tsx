import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Jobs({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { q, type, location } = await searchParams;

  const query = q as string | undefined;
  const searchType = type as string | undefined;
  const searchLocation = location as string | undefined;

  const jobs = await prisma.job.findMany({
    where: {
      AND: [
        query
          ? {
              OR: [
                { title: { contains: query, mode: "insensitive" } },
                { company: { contains: query, mode: "insensitive" } },
                { description: { contains: query, mode: "insensitive" } },
              ],
            }
          : {},
        searchType ? { type: searchType } : {},
        searchLocation
          ? {
              location: { contains: searchLocation, mode: "insensitive" },
            }
          : {},
      ],
    },
    orderBy: { postedAt: "desc" },
    include: { postedBy: true },
  });

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-100 via-white to-blue-100 px-4 py-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900">
            Find Your Dream Job 🚀
          </h1>

          <p className="mt-3 text-lg text-gray-600">
            Explore the latest opportunities from top companies.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-10 rounded-3xl bg-white p-6 shadow-xl">
          <form className="grid gap-4 md:grid-cols-4">
            <input
              type="text"
              name="q"
              placeholder="Search jobs..."
              className="rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />

            <select
              name="type"
              className="rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            >
              <option value="">All Types</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>

            <input
              type="text"
              name="location"
              placeholder="Location"
              className="rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />

            <button
              type="submit"
              className="rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:scale-[1.01]"
            >
              Search
            </button>
          </form>
        </div>

        {/* Jobs Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Top */}
              <div>
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {job.title}
                    </h2>

                    <p className="mt-1 text-lg font-medium text-blue-600">
                      {job.company}
                    </p>
                  </div>

                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                    {job.type}
                  </span>
                </div>

                {/* Location */}
                <div className="mb-4 flex items-center gap-2 text-gray-500">
                  📍
                  <span>{job.location}</span>
                </div>

                {/* Description */}
                <p className="line-clamp-4 text-gray-600">{job.description}</p>
              </div>

              {/* Bottom */}
              <div className="mt-6">
                {job.salary && (
                  <div className="mb-4">
                    <span className="rounded-xl bg-green-100 px-3 py-2 text-sm font-semibold text-green-700">
                      💰 {job.salary}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Posted by{" "}
                    <span className="font-medium text-gray-700">
                      {job.postedBy.name}
                    </span>
                  </span>

                  <Link
                    href={`/jobs/${job.id}`}
                    className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {jobs.length === 0 && (
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-gray-700">
              No jobs found 😔
            </h2>

            <p className="mt-3 text-gray-500">
              Try searching with different keywords.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
