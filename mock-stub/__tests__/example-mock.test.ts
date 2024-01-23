jest.mock("@sendgrid/mail");
import { sendEmail } from "../app/example-serivce";
import { MailService } from "@sendgrid/mail";
const MailServiceMock = MailService as jest.MockedClass<typeof MailService>;

describe("email送信", () => {
  test("emailが送信されるmock", async () => {
    await sendEmail({ to: "to@example.com" });

    expect(MailServiceMock.mock.instances[0].send).toHaveBeenCalledWith({
      to: "to@example.com",
      from: "from@example.com",
      subject: "タイトル",
      text: "あいうえお",
    });
  });
});
