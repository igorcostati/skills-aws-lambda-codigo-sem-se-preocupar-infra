import { log } from "./log.mjs";
export const handler = async (event) => {
  const response = {
    statusCode: 200,
    body: `<html><body>Dados da requisicao: ${ JSON.stringify(event)}</body></html>`,
    headers: {
      "Content-Type": "text/html",      
    },
  };
  log("Log de execução após o GitHub Actions", event);
  return response;
};
