-- CreateTable
CREATE TABLE "InvoiceIssuance" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "issuedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InvoiceIssuance_pkey" PRIMARY KEY ("id")
);
