import { MailService } from "@sendgrid/mail";

export const send = async ({
  to,
  from,
  subject,
  text,
}: {
  to: string;
  from: string;
  subject: string;
  text: string;
}) => {
  const mailService = new MailService();
  mailService.setApiKey("SG.example");
  const msg = {
    to,
    from,
    subject,
    text,
  };
  await mailService.send(msg);
};
