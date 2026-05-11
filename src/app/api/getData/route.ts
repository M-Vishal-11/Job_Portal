import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await prisma.user.findMany({
      where: {
        NOT: [{ age: { gte: 30 } }, { nationality: "US" }],
      },
    });

    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Database Error:", error.code, error.message);
    return NextResponse.json(
      {
        error: "Check if your database columns are synced.",
        details: error.code,
      },
      { status: 500 },
    );
  }
}
