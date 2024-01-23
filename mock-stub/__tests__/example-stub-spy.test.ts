import fetch, { Response } from "node-fetch";
import { fetchHttpbin } from "../app/example-serivce";

describe("データ取得", () => {
  test("httpbinのデータが取得される", async () => {
    const resp = { data: "test2" };
    jest
      .spyOn(fetch, "default")
      .mockResolvedValue(new Response(JSON.stringify(resp)));

    const result = await fetchHttpbin();

    expect(result).toEqual({
      data: "test2",
    });
  });
});
