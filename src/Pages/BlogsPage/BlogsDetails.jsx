import { useParams } from "react-router-dom";
import PageHeading from "../../Components/PageHeading";
import Section from "../../Components/Section";
import BlogsLeft from "./BlogsDetailsSide/BlogsLeft";
import BlogsRight from "./BlogsDetailsSide/BlogsRight";
import { useQuery } from "@tanstack/react-query";
import { useHttp } from "../../hooks/useHttp";
import { useMemo } from "react";
import { formatDate } from "../../utils/format-date";
import { truncateString } from "../../utils/truncate-string";
import hero2 from "/assets/img/hero2.png";

const BlogsDetails = () => {
  const { blogId, lang } = useParams();

  const sendRequest = useHttp();

  const { data } = useQuery({
    queryKey: ["blogDetail"],
    queryFn: () => sendRequest({ url: `/blog/posts//${blogId}` }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const { data: news } = useQuery({
    queryKey: ["news"],
    queryFn: () => sendRequest({ url: `/blog/posts//` }),
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
        link: `/${lang}/blog?category=${item?.id}`,
      };
    });
  }, [blogCategories, lang]);

  const lastThreeNews = useMemo(() => {
    return {
      searchPlaceholder: "Qidiruv....",
      secTitle: "Kategoriyalar",
      recentPosts: news?.results?.length
        ? news?.results
            ?.filter((_, index) => index < 3)
            ?.map((item) => ({
              imgSrc: item?.images[0]?.image,
              date: formatDate(item?.pub_date),
              title: truncateString(item?.title, 30),
              link: `/blog/${item?.id}`,
            }))
        : [],
      categories,
    };
  }, [news, categories]);

  const detail = useMemo(() => {
    return {
      imageSrc: data?.images[0].image,
      imageAlt: data?.title,
      text: "Admin",
      secText: formatDate(data?.pub_date),
      thirdSecTitle: "Xabarni jo'natish",
      content: data?.body ? [data.body] : [],
    };
  }, [data]);

  return (
    <>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        backgroundImage={hero2}
      >
        <PageHeading data={{ title: data?.title }} />
      </Section>

      <>
        {/* Start Blog Details Section */}

        <Section
          topSpaceLg="80"
          topSpaceMd="120"
          bottomSpaceLg="80"
          bottomSpaceMd="120"
        >
          <div className="container">
            <div className="row">
              <BlogsLeft data={detail} />

              <BlogsRight data={lastThreeNews} />
            </div>
          </div>
        </Section>

        {/* End Blog Details Section */}
      </>
    </>
  );
};

export default BlogsDetails;
