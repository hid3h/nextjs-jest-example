import prisma from "../../db";
import { Prisma } from "@prisma/client";
import JestPrisma from "@quramy/jest-prisma-node"

export const issueInvoice = async ({ amount }: { amount: number }) => {
  try {
    const invoice = await prisma.invoiceIssuance.create({
      data: {
        amount,
        issuedAt: new Date(),
      },
    });

    // ここでid重複によるエラーが発生させる
    await prisma.invoiceIssuance.create({
      data: {
        id: invoice.id,
        amount,
        issuedAt: new Date(),
      },
    });
  } catch (e) {
    console.log("e", e);
    console.log("Object.getPrototypeOf(e)", Object.getPrototypeOf(e));
    console.log(
      "Prisma.PrismaClientKnownRequestError.prototype;",
      Prisma.PrismaClientKnownRequestError.prototype
    );

    console.log(
      "===",
      Object.getPrototypeOf(e) === Prisma.PrismaClientKnownRequestError.prototype
    );

    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      console.log("入りました", e.code);
      console.log(e.meta);
    } else {
      console.log("入っていません");
    }
  }
};
