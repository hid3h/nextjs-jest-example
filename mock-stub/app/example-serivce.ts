import { httpRequest } from "./lib/http-requesrt";
import { send } from "./lib/send-email";

export const sendEmail = async ({ to }: { to: string }) => {
  await send({
    to,
    from: "from@example.com",
    subject: "タイトル",
    text: "あいうえお",
  });
};

export const fetchHttpbin = async () => {
  const jsonResponse = await httpRequest({ url: "https://httpbin.org/get" });
  console.log("jsonResponse", jsonResponse);
  return jsonResponse;
};
