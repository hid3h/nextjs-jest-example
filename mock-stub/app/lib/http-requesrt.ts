import fetch from "node-fetch";

export const httpRequest = async ({ url }: { url: string }) => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};
