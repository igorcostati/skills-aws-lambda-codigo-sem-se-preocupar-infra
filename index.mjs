import { log } from "./log.mjs";
export const handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(event),
  };
  log("Log de execução após o GitHub Actions", event);
  return response;
};
