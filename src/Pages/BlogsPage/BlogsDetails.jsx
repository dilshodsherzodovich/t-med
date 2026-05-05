import { useLocation, useParams } from "react-router-dom";
import PageHeading from "../../Components/PageHeading";
import Section from "../../Components/Section";
import BlogsLeft from "./BlogsDetailsSide/BlogsLeft";
import BlogsRight from "./BlogsDetailsSide/BlogsRight";
import { useQuery } from "@tanstack/react-query";
import { useHttp } from "../../hooks/useHttp";
import { useMemo } from "react";
import { formatDate } from "../../utils/format-date";
import { truncateString } from "../../utils/truncate-string";
import "./BlogsDetails.scss";

const BlogsDetails = () => {
  const { blogId, lang } = useParams();
  const { pathname } = useLocation();
  const sendRequest = useHttp();

  const { data, isLoading } = useQuery({
    queryKey: ["blogDetail", blogId],
    queryFn: () =>
      sendRequest({
        url: pathname?.includes("institution")
          ? `/reception/organization/post/detail/${blogId}/`
          : `/blog/posts//${blogId}`,
      }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const { data: news } = useQuery({
    queryKey: ["news"],
    queryFn: () => sendRequest({ url: `/blog/posts//` }),
    staleTime: 60000,
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
    return blogCategories.results.map((item) => ({
      id: item.id,
      name: item.name,
      link: `/${lang}/blog?category=${item.id}`,
    }));
  }, [blogCategories, lang]);

  const sidebarData = useMemo(() => ({
    recentPosts: (news?.results || [])
      .slice(0, 4)
      .map((item) => ({
        imgSrc: item?.images?.[0]?.image,
        date: formatDate(item?.pub_date),
        title: truncateString(item?.title, 55),
        link: `/${lang}/blog/${item?.id}`,
      })),
    categories,
    allBlogsLink: `/${lang}/blog`,
  }), [news, categories, lang]);

  const detail = useMemo(() => {
    const rawImages = data?.images?.length ? data?.images : data?.post_images;
    return {
      title: data?.title,
      imageUrls: (rawImages || []).map((i) => i?.image).filter(Boolean),
      views: data?.views_count || 0,
      secText: formatDate(data?.pub_date || data?.created_at),
      content: data?.body
        ? [data.body]
        : data?.description
        ? [data.description]
        : [],
    };
  }, [data]);

  return (
    <>
      <Section
        className="cs_page_heading cs_bg_filed cs_center"
        backgroundImage="/assets/img/hero/hero-1.png"
        backgroundPosition="center center"
      >
        <PageHeading
          data={{ title: data?.title }}
          secondaryData={data?.title}
        />
      </Section>

      <div className="bd-page">
        <div className="bd-container">
          <div className="bd-grid">
            <BlogsLeft data={detail} isLoading={isLoading} />
            <BlogsRight data={sidebarData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsDetails;
