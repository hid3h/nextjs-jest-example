import { issueInvoice } from "./services/invoice-serivce";

export default async function Home() {
  const createInvoice = async (formData: FormData) => {
    "use server";

    await issueInvoice({
      amount: Number(formData.get("amount")),
    });
  };

  return (
    <>
      <form action={createInvoice}>
        <input type="number" name="amount" />
        <button type="submit">Create Invoice</button>
      </form>
    </>
  );
}
