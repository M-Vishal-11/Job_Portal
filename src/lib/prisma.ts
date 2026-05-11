import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

// 1. Setup the connection pool using your environment variable
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });

// 2. Create the adapter
const adapter = new PrismaPg(pool);

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// 3. Pass the adapter to the PrismaClient constructor
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter, // This fulfills the "valid options" requirement
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
