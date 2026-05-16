import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/auth/signin");
  }

  const [applications, postedJobs] = await Promise.all([
    prisma.application.findMany({
      where: {
        userId: session.user.id,
      },
      include: {
        job: true,
      },
      orderBy: {
        appliedAt: "desc",
      },
    }),

    prisma.job.findMany({
      where: {
        postedById: session.user.id,
      },
      include: {
        _count: {
          select: {
            applications: true,
          },
        },
      },
      orderBy: {
        postedAt: "desc",
      },
    }),
  ]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-100 px-4 py-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>

            <p className="mt-2 text-lg text-gray-600">
              Manage your posted jobs and applications
            </p>
          </div>

          <Link
            href="/jobs/post"
            className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
          >
            + Post New Job
          </Link>
        </div>

        {/* Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Posted Jobs */}
          <section className="rounded-3xl bg-white p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Posted Jobs</h2>

              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                {postedJobs.length} Jobs
              </span>
            </div>

            <div className="space-y-5">
              {postedJobs.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-gray-300 p-8 text-center">
                  <p className="text-gray-500">
                    You haven't posted any jobs yet.
                  </p>
                </div>
              ) : (
                postedJobs.map((job) => (
                  <div
                    key={job.id}
                    className="rounded-2xl border border-gray-200 p-5 transition hover:shadow-lg"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {job.title}
                        </h3>

                        <p className="mt-1 text-blue-600 font-medium">
                          {job.company}
                        </p>

                        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-gray-500">
                          <span>{job.location}</span>
                          <span>•</span>
                          <span>{job.type}</span>
                          <span>•</span>

                          <span>
                            {formatDistanceToNow(new Date(job.postedAt), {
                              addSuffix: true,
                            })}
                          </span>
                        </div>
                      </div>

                      <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
                        {job._count.applications} applications
                      </span>
                    </div>

                    <div className="mt-5">
                      <Link
                        href={`/jobs/${job.id}`}
                        className="inline-flex rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
                      >
                        View Job
                      </Link>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>

          {/* Applications */}
          <section className="rounded-3xl bg-white p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                Your Applications
              </h2>

              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                {applications.length} Applied
              </span>
            </div>

            <div className="space-y-5">
              {applications.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-gray-300 p-8 text-center">
                  <p className="text-gray-500">
                    You haven't applied for any jobs yet.
                  </p>
                </div>
              ) : (
                applications.map((application) => (
                  <div
                    key={application.id}
                    className="rounded-2xl border border-gray-200 p-5 transition hover:shadow-lg"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {application.job.title}
                        </h3>

                        <p className="mt-1 text-blue-600 font-medium">
                          {application.job.company}
                        </p>

                        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-gray-500">
                          <span>{application.job.location}</span>
                          <span>•</span>
                          <span>{application.job.type}</span>
                          <span>•</span>

                          <span>
                            Applied{" "}
                            {formatDistanceToNow(
                              new Date(application.appliedAt),
                              { addSuffix: true },
                            )}
                          </span>
                        </div>
                      </div>

                      <span
                        className={`rounded-full px-3 py-1 text-sm font-semibold
                          ${
                            application.status === "PENDING"
                              ? "bg-yellow-100 text-yellow-700"
                              : application.status === "ACCEPTED"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                          }
                        `}
                      >
                        {application.status}
                      </span>
                    </div>

                    <div className="mt-5">
                      <Link
                        href={`/jobs/${application.job.id}`}
                        className="inline-flex rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
                      >
                        View Job
                      </Link>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
