import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

const main = async () => {
  const salt = await bcrypt.genSalt();

  console.log("Seeding database...");

  console.log("Database seeded!");
};

await main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
