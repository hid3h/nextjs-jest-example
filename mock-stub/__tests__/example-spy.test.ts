import { sendEmail } from "../app/example-serivce";
import { MailService } from "@sendgrid/mail";

describe("email送信", () => {
  test("emailが送信される", async () => {
    // const sendSpy = jest.spyOn(MailService.prototype, "send")のみだと、
    // send()の中身が実行されてしまいます
    const sendSpy = jest
      .spyOn(MailService.prototype, "send")
      // send()のreturnの型に合わせる必要がある
      .mockResolvedValue([{} as any, {}]);

    await sendEmail({ to: "to@example.com" });

    expect(sendSpy).toHaveBeenCalledWith({
      to: "to@example.com",
      from: "from@example.com",
      subject: "タイトル",
      text: "あいうえお",
    });
  });
});
