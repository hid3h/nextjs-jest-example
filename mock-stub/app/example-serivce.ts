import { send } from "./lib/send-email";

export const sendEmail = async ({ to }: { to: string }) => {
  await send({
    to,
    from: "from@example.com",
    subject: "タイトル",
    text: "あいうえお",
  });
};
