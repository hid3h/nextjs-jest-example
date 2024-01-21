import {
  fetchLatestInvoice,
  issueInvoice,
} from "./services/invoice-serivce";

export default async function Home() {
  const createInvoice = async (formData: FormData) => {
    "use server";

    await issueInvoice({
      amount: Number(formData.get("amount")),
    });
  };

  const latestInvoice = await fetchLatestInvoice();

  return (
    <>
      <form action={createInvoice}>
        <input type="number" name="amount" />
        <button type="submit">Create Invoice</button>
      </form>
      <div>
        <h1>Latest Invoice</h1>
        <p>{latestInvoice?.amount}</p>
      </div>
    </>
  );
}
