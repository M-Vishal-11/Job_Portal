import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  const recentJobs = await prisma.job.findMany({
    take: 3,
    orderBy: {
      postedAt: "desc",
    },
    include: {
      postedBy: {
        select: {
          name: true,
        },
      },
    },
  });

  return (
    <main className="bg-gray-50">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-2xl bg-white px-6 py-14 text-center shadow-md">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Find Your Dream Job
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base text-gray-600">
            Discover opportunities from top companies and apply instantly.
          </p>

          <div className="mt-6">
            <Link
              href="/jobs"
              className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              Browse Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Jobs */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900">Recent Jobs</h2>

          <Link
            href="/jobs"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            View All →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {recentJobs.map((job) => (
            <div
              key={job.id}
              className="rounded-2xl bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Top */}
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {job.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-600">{job.company}</p>
                </div>

                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                  {job.type}
                </span>
              </div>

              {/* Meta */}
              <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
                <span>📍</span>
                <span>{job.location}</span>
              </div>

              {/* Description */}
              <p className="line-clamp-3 text-sm leading-6 text-gray-600">
                {job.description}
              </p>

              {/* Footer */}
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  {job.postedBy.name}
                </span>

                <Link
                  href={`/jobs/${job.id}`}
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
