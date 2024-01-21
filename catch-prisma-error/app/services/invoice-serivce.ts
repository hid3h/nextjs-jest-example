import prisma from "../../db";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export declare class HogeErrorType {
  fuga: string;
}

class HogeError extends Error implements HogeErrorType {
  constructor(public fuga: string) {
    super();
  }
}

export const issueInvoice = async ({ amount }: { amount: number }) => {
  try {
    // throw new PrismaClientKnownRequestError("two", {
    //   code: "P1",
    //   clientVersion: "0.0.0",
    //   batchRequestIdx: 1,
    // });
    const invoice = await prisma.invoiceIssuance.create({
      data: {
        id: "1",
        amount,
        issuedAt: new Date(),
      },
    });

    await prisma.invoiceIssuance.create({
      data: {
        id: "1",
        amount,
        issuedAt: new Date(),
      },
    });
  } catch (e) {
    console.log(e);
    console.log(
      "e instanceof Prisma.PrismaClientKnownRequestError",
      PrismaClientKnownRequestError
    );
    console.log(
      "PrismaClientKnownRequestError.prototype",
      PrismaClientKnownRequestError.prototype
    );

    if (e instanceof HogeError) {
      console.log("HogeError", e.fuga);
    }

    if (e instanceof PrismaClientKnownRequestError) {
      console.log("入ってますか？", e.code);
      console.log(e.meta);
    }
  }
  // return invoice;
};

export const fetchLatestInvoice = async () => {
  const invoice = await prisma.invoiceIssuance.findFirst({
    orderBy: {
      issuedAt: "desc",
    },
  });
  return invoice;
};
