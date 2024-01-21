import prisma from "../../db";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export const issueInvoice = async ({ amount }: { amount: number }) => {
  try {
    // throw new PrismaClientKnownRequestError("two", {
    //   code: "P1",
    //   clientVersion: "0.0.0",
    //   batchRequestIdx: 1,
    // });
    const invoice = await prisma.invoiceIssuance.create({
      data: {
        amount,
        issuedAt: new Date(),
      },
    });

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
      "PrismaClientKnownRequestError.prototype;",
      PrismaClientKnownRequestError.prototype
    );

    console.log(
      "===",
      Object.getPrototypeOf(e) === PrismaClientKnownRequestError.prototype
    );

    if (e instanceof PrismaClientKnownRequestError) {
      console.log("入りました", e.code);
      console.log(e.meta);
    } else {
      console.log("入っていません");
    }
  }
};
