import * as sendEmailLib from "../app/lib/send-email";
import { sendEmail } from "../app/example-serivce";

describe("email送信", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("emailが送信される", () => {
    // const sendSpy = jest.spyOn(sendEmailLib, "send")のみだと、
    // send()の中身が実行されてしまいます
    const sendSpy = jest
      .spyOn(sendEmailLib, "send")
      .mockResolvedValue();

    sendEmail({ emailAddress: "test@example.com" });

    expect(sendSpy).toHaveBeenCalledWith({
      emailAddress: "test@example.com",
      body: "あいうえお",
    });
  });

  test("emailが送信されるmock", () => {
    const sendSpy = jest.mock("../app/lib/send-email", () => {
      return {
        __esModule: true,
        send: jest.fn(),
      };
    });

    sendEmail({ emailAddress: "test@example.com" });

    expect(sendEmailLib.send).toHaveBeenCalledWith({
      emailAddress: "test@example.com",
      body: "あいうえお",
    });
  });
});
