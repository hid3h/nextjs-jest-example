import { send } from "./lib/send-email";

export const sendEmail = async ({ emailAddress }: { emailAddress: string }) => {
  const body = "あいうえお";
  await send({ emailAddress, body });
};
