import { useHttp } from "../hooks/useHttp";

export function getNewsList(page = 1, pageSize = 10) {
  const sendRequest = useHttp();
  return sendRequest({
    url: "/blog/posts/",
    method: "GET",
    params: { page, pageSize },
  });
}
