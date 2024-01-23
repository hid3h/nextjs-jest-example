jest.mock("node-fetch");
import fetch from "node-fetch";
import { fetchHttpbin } from "../app/example-serivce";
const { Response } = jest.requireActual("node-fetch");
const fetchMock = fetch as jest.MockedFunction<typeof fetch>;

describe("データ取得", () => {
  test("httpbinのデータが取得される", async () => {
    const resp = { data: "test" };
    fetchMock.mockResolvedValue(new Response(JSON.stringify(resp)));
    
    const result = await fetchHttpbin();

    expect(result).toEqual({
      data: "test",
    });
  });
});
