export const send = async ({
  emailAddress,
  body,
}: {
  emailAddress: string;
  body: string;
}) => {
  // 外部リクエストが発生する処理
  console.log("外部リクエスト処理が走りました");
};
