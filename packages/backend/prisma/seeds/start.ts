import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

const main = async () => {
  const salt = await bcrypt.genSalt();

  console.log("Seeding database...");

  await prisma.user.deleteMany();
  await prisma.user.create({
    data: {
      email: "admin@admin.com",
      name: "Admin",
      password: bcrypt.hashSync("admin", salt),
    },
  });

  console.log("Database seeded!");
};

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
