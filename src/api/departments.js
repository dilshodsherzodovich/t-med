import { useHttp } from "../hooks/useHttp";

export const getDepartments = async () => {
  const sendRequest = useHttp();
  return await sendRequest({ url: "/reception/department//" });
};
