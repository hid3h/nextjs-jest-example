import { issueInvoice } from "../app/services/invoice-serivce";
import prisma from "../db";

test("請求書発行", async () => {
  await issueInvoice({ amount: 1000 });

  const invoiceIssuance = await prisma.invoiceIssuance.findFirst();
  expect(invoiceIssuance?.amount).toBe(1000);
});
