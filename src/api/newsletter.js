import { useHttp } from "../hooks/useHttp";

export const postNewsLetter = async (data) => {
  const sendRequest = useHttp();
  return await sendRequest({ url: "/account/send-sms", method: "POST", data });
};
