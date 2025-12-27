import { PrismaClient } from "@prisma/client";
export const db = new PrismaClient();

async function test() {
  const user = await db.user.create({
    data: {
      username: "Test",
    },
  });
  console.log(user);
}

test();

export default db;
