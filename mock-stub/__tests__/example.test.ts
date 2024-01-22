import * as hogeModel from "../app/hoge-model";
import { exampleService } from "../app/example-serivce";

describe("mock test1", () => {
  test("spyOnでhoge()のreturnを置き換える", () => {
    const hogeSpy = jest.spyOn(hogeModel, "hoge").mockReturnValue({
      message: "mockedあいうえお",
    });
    const reslut = exampleService();
    expect(reslut).toEqual({
      message: "mockedあいうえお",
    });
    expect(hogeSpy).toHaveBeenCalled();
    expect(hogeSpy.mock.calls).toEqual([[]]);
    expect(hogeSpy.mock.instances).toEqual([undefined]);
    expect(hogeSpy.mock.results).toEqual([
      {
        type: "return",
        value: {
          message: "mockedあいうえお",
        },
      },
    ]);
  });

  test("spyOnしたreturnはリセットされているのか？", () => {
    const reslut = exampleService();
    expect(reslut).toEqual({
      message: "mockedあいうえお",
    });
    // ↑成功するのでリセットされていないことが確認できる
  });
});


describe("mock test2", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("spyOnでhoge()のreturnを置き換える", () => {
    jest.spyOn(hogeModel, "hoge").mockReturnValue({
      message: "mockedあいうえお",
    });
    const reslut = exampleService();
    expect(reslut).toEqual({
      message: "mockedあいうえお",
    });
  });

  test("spyOnしたreturnはリセットされているのか？", () => {
    const reslut = exampleService();
    expect(reslut).toEqual({
      message: "mockedあいうえお",
    });
    // ↑成功するのでリセットされていないことが確認できる
  });
});
