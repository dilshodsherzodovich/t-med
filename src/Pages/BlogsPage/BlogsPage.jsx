import { useMemo, useState } from "react";
import PageHeading from "../../Components/PageHeading";

import BlogsSection1 from "../../Components/BlogsSection/BlogsSection1";
import Section from "../../Components/Section";
import { useQuery } from "@tanstack/react-query";
import { useHttp } from "../../hooks/useHttp";
import Pagination from "../../Components/Pagination";
import { formatDate } from "../../utils/format-date";
import { useSearchParams } from "react-router-dom";
import hero2 from "/assets/img/hero2.png";
import { useTranslation } from "react-i18next";

const BlogsPage = () => {
  const sendRequest = useHttp();

  const [page, setPage] = useState(1);

  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");

  const { t } = useTranslation();

  const headingData = {
    title: t("pages.news.title"),
  };

  const blogsSectionData = {
    sectionSubtitle: t("pages.news.title"),
    sectionTitle: "",
  };

  const handlePageChange = (e) => {
    setPage(+e.selected + 1);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["blogs", page, category],
    queryFn: () =>
      sendRequest({
        url: `/blog/posts//?page=${page}${
          category ? `&category=${category}` : ""
        }`,
      }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const { data: blogCategories } = useQuery({
    queryKey: ["blogCategories"],
    queryFn: () => sendRequest({ url: `/blog/post-category//` }),
    staleTime: 10000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const categories = useMemo(() => {
    if (!blogCategories?.results?.length) return [];
    return blogCategories?.results?.map((item) => {
      return {
        id: item?.id,
        name: item?.name,
        link: `/blog?category=${item?.id}`,
      };
    });
  }, [blogCategories]);

  const blogData = useMemo(() => {
    return data?.results?.map((item) => {
      return {
        id: item?.id,
        category: categories?.find((cat) => cat?.id === item?.category)?.name,
        date: formatDate(item?.pub_date),
        link: `/blog/${item?.id}`,
        linkText: t("root.readMore"),
        title: item?.title,
        subtitle: item?.body,
        image: item?.images[0]?.image,
      };
    });
  }, [data, categories]);

  return (
    <>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        backgroundImage={hero2}
      >
        <PageHeading data={headingData} secondaryData={t("pages.news.title")} />
      </Section>

      {/* Start Blog Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <BlogsSection1
          loading={isLoading}
          data={blogsSectionData}
          blogs={blogData}
          categories={categories}
        />

        <Pagination
          pageCount={data?.count}
          handlePageClick={handlePageChange}
        />
      </Section>

      {/* End Blog Section */}
    </>
  );
};

export default BlogsPage;
