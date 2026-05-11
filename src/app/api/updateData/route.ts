import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function PUT() {
  try {
    const updatedUser = await prisma.user.deleteMany({
      where: {},
    });
    return NextResponse.json(updatedUser);
  } catch (e) {
    console.log(e);
    return NextResponse.json(e);
  }
}
