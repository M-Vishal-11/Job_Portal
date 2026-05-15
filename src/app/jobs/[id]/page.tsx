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
    <div>
      <div>
        <Link href="/jobs">🔙 Back to Jobs</Link>
        <h1>{job.title}</h1>
        <p>{job.company}</p>
        <div>
          <span>{job.location}</span>
          <span>.</span>
          <span>{job.type}</span>
          {job.salary && (
            <>
              <span>.</span>
              <span>{job.salary}</span>
            </>
          )}
        </div>
        <div>
          <span>Posted By {job.postedBy.name}</span>
          <span>.</span>
          <span>
            {formatDistanceToNow(new Date(job.postedAt), { addSuffix: true })}
          </span>
        </div>
        <div>
          <ApplyButton jobId={job.id} />
        </div>
      </div>
    </div>
  );
}
