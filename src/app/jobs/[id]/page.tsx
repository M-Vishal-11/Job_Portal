// app/jobs/[id]/page.tsx

import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDistanceToNow } from "date-fns";
import ApplyButton from "./Applybutton";

export default async function JobPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const jobId = (await params).id;

  const job = await prisma.job.findUnique({
    where: { id: jobId },
    include: { postedBy: true },
  });

  if (!job) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-100 via-white to-blue-100 px-4 py-10">
      <div className="mx-auto max-w-4xl">
        {/* Back Button */}
        <Link
          href="/jobs"
          className="mb-6 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-md transition hover:shadow-lg"
        >
          ← Back to Jobs
        </Link>

        {/* Main Card */}
        <div className="rounded-3xl bg-white p-8 shadow-2xl">
          {/* Top Section */}
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                {job.title}
              </h1>

              <p className="mt-3 text-2xl font-semibold text-blue-600">
                {job.company}
              </p>

              {/* Meta */}
              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-gray-600">
                <span className="rounded-full bg-gray-100 px-4 py-2">
                  📍 {job.location}
                </span>

                <span className="rounded-full bg-blue-100 px-4 py-2 text-blue-700">
                  {job.type}
                </span>

                {job.salary && (
                  <span className="rounded-full bg-green-100 px-4 py-2 text-green-700">
                    💰 {job.salary}
                  </span>
                )}
              </div>
            </div>

            {/* Apply Button */}
            <div className="w-full md:w-auto">
              <ApplyButton jobId={job.id} />
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 h-px bg-gray-200"></div>

          {/* Description */}
          <div>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Job Description
            </h2>

            <p className="whitespace-pre-line leading-8 text-gray-700">
              {job.description}
            </p>
          </div>

          {/* Footer */}
          <div className="mt-10 flex flex-wrap items-center gap-3 border-t pt-6 text-sm text-gray-500">
            <span>
              Posted by{" "}
              <span className="font-semibold text-gray-700">
                {job.postedBy.name}
              </span>
            </span>

            <span>•</span>

            <span>
              {formatDistanceToNow(new Date(job.postedAt), {
                addSuffix: true,
              })}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
