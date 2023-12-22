import prisma from "../../db";

export const issueInvoice = async ({ amount }: { amount: number }) => {
  const invoice = await prisma.invoiceIssuance.create({
    data: {
      amount,
      issuedAt: new Date(),
    },
  });
  return invoice;
};

export const fetchLatestInvoice = async () => {
  const invoice = await prisma.invoiceIssuance.findFirst({
    orderBy: {
      issuedAt: "desc",
    },
  });
  return invoice;
};
