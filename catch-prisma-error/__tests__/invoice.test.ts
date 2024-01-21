import {
  fetchLatestInvoice,
  issueInvoice,
} from "../app/services/invoice-serivce";
import prisma from "../db";

test("請求書発行", async () => {
  await issueInvoice({ amount: 1000 });

  const invoiceIssuance = await prisma.invoiceIssuance.findFirst();
  expect(invoiceIssuance?.amount).toBe(1000);
});

// test("最新の請求書取得", async () => {
//   await issueInvoice({ amount: 1000 });
//   await issueInvoice({ amount: 2000 });

//   const latestInvoiceIssuance = await fetchLatestInvoice();
//   expect(latestInvoiceIssuance?.amount).toBe(2000);
// });
