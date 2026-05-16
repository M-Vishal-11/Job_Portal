import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ jobId: string }> },
) {
  const session = await auth();

  if (!session || !session?.user?.id) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  try {
    const { jobId } = await params;
    const job = await prisma.job.findUnique({ where: { id: jobId } });

    if (!job) {
      return NextResponse.json({ error: "Job Not Found" }, { status: 404 });
    }

    const existingApplication = await prisma.application.findFirst({
      where: {
        jobId: jobId,
        userId: session.user.id,
      },
    });

    if (existingApplication) {
      return NextResponse.json(
        { error: "You have already applied for this job" },
        { status: 404 },
      );
    }

    const application = await prisma.application.create({
      data: {
        jobId: jobId,
        userId: session.user.id,
        status: "PENDING",
      },
    });

    console.log(application);

    return NextResponse.json({ jobApplicationCreated: true });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: e });
  }
}
