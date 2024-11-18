import React, { useState } from "react";
import PageHeading from "../../Components/PageHeading";

import BlogsSection1 from "../../Components/BlogsSection/BlogsSection1";
import Section from "../../Components/Section";
import { getNewsList } from "../../api/blog";
import { useQuery } from "@tanstack/react-query";
import { useHttp } from "../../hooks/useHttp";
import Pagination from "../../Components/Pagination";

const headingData = {
  title: "Yangiliklar",
};

const blogsSectionData = {
  sectionSubtitle: "YANGILIKLAR",
  sectionTitle: "",
  blogsData: [
    {
      id: 1,
      category: "Tibbiyot",
      date: "11 Noyabr",
      author: "Admin",
      comments: "2 Comments",
      title: "Hurmatli va aziz temir yo‘l tibbiyot xodimlari!",
      subtitle: `Siz, aziz hamkasblarimni “Temir
        yo‘l ijtimoiy xizmatlar” muassasasi rahbariyati nomidan kasb bayramingiz - Tibbiyot xodimlari kuni munosabati bilan samimiy tabriklayman.`,
      image:
        "http://api.nsu-railway.uz/media/contents/photos/main/5294395942738453394.jpg",
      link: "/blog/blog-details",
      linkText: "Batafsil",
    },
    {
      id: 2,
      category: "Ijtimoiy",
      date: "11 Noyabr",
      author: "Admin",
      comments: "2 Comments",
      title:
        "“Oʻzbekiston temir yoʻllari” AJ tashkil etilganligining 30 yilligi",
      subtitle: `“Oʻzbekiston temir yoʻllari” AJ tashkil etilganligining 30 yilligi
        munosabati bilan, temir yoʻl sohasidagi uzoq yillik samarali va unumli mehnatlari, soha rivojiga qoʻshgan munosib hissasi hamda jamoat ishlaridagi faol ishtiroki uchun "Temir yo‘l ijtimoiy xizmatlar" muassasasi bir guruh tibbiy xodimlariga “Oʻzbekiston temir yoʻllari” AJ raisi nomidan taqdim etilgan ko‘krak nishonlari va esdalik sovg‘alari Muassasa boshlig‘i M.M.Mamasidikov tomonidan tantanali topshirildi.
        `,
      image:
        "http://api.nsu-railway.uz/media/contents/photos/main/5291775295428354997.jpg",
      link: "/blog/blog-details",
      linkText: "Batafsil",
    },
    {
      id: 3,
      category: "Tibbiyot",
      date: "11 Noyabr",
      author: "Admin",
      comments: "2 Comments",
      title: "Hurmatli va aziz temir yo‘l tibbiyot xodimlari!",
      subtitle: `Siz, aziz hamkasblarimni “Temir
        yo‘l ijtimoiy xizmatlar” muassasasi rahbariyati nomidan kasb bayramingiz - Tibbiyot xodimlari kuni munosabati bilan samimiy tabriklayman.`,
      image:
        "http://api.nsu-railway.uz/media/contents/photos/main/5294395942738453394.jpg",
      link: "/blog/blog-details",
      linkText: "Batafsil",
    },
    {
      id: 4,
      category: "Ijtimoiy",
      date: "11 Noyabr",
      author: "Admin",
      comments: "2 Comments",
      title:
        "“Oʻzbekiston temir yoʻllari” AJ tashkil etilganligining 30 yilligi",
      subtitle: `“Oʻzbekiston temir yoʻllari” AJ tashkil etilganligining 30 yilligi
        munosabati bilan, temir yoʻl sohasidagi uzoq yillik samarali va unumli mehnatlari, soha rivojiga qoʻshgan munosib hissasi hamda jamoat ishlaridagi faol ishtiroki uchun "Temir yo‘l ijtimoiy xizmatlar" muassasasi bir guruh tibbiy xodimlariga “Oʻzbekiston temir yoʻllari” AJ raisi nomidan taqdim etilgan ko‘krak nishonlari va esdalik sovg‘alari Muassasa boshlig‘i M.M.Mamasidikov tomonidan tantanali topshirildi.
        `,
      image:
        "http://api.nsu-railway.uz/media/contents/photos/main/5291775295428354997.jpg",
      link: "/blog/blog-details",
      linkText: "Batafsil",
    },
    {
      id: 5,
      category: "Tibbiyot",
      date: "11 Noyabr",
      author: "Admin",
      comments: "2 Comments",
      title: "Hurmatli va aziz temir yo‘l tibbiyot xodimlari!",
      subtitle: `Siz, aziz hamkasblarimni “Temir
        yo‘l ijtimoiy xizmatlar” muassasasi rahbariyati nomidan kasb bayramingiz - Tibbiyot xodimlari kuni munosabati bilan samimiy tabriklayman.`,
      image:
        "http://api.nsu-railway.uz/media/contents/photos/main/5294395942738453394.jpg",
      link: "/blog/blog-details",
      linkText: "Batafsil",
    },
    {
      id: 6,
      category: "Ijtimoiy",
      date: "11 Noyabr",
      author: "Admin",
      comments: "2 Comments",
      title:
        "“Oʻzbekiston temir yoʻllari” AJ tashkil etilganligining 30 yilligi",
      subtitle: `“Oʻzbekiston temir yoʻllari” AJ tashkil etilganligining 30 yilligi
        munosabati bilan, temir yoʻl sohasidagi uzoq yillik samarali va unumli mehnatlari, soha rivojiga qoʻshgan munosib hissasi hamda jamoat ishlaridagi faol ishtiroki uchun "Temir yo‘l ijtimoiy xizmatlar" muassasasi bir guruh tibbiy xodimlariga “Oʻzbekiston temir yoʻllari” AJ raisi nomidan taqdim etilgan ko‘krak nishonlari va esdalik sovg‘alari Muassasa boshlig‘i M.M.Mamasidikov tomonidan tantanali topshirildi.
        `,
      image:
        "http://api.nsu-railway.uz/media/contents/photos/main/5291775295428354997.jpg",
      link: "/blog/blog-details",
      linkText: "Batafsil",
    },
  ],
};

const BlogsPage = () => {
  const sendRequest = useHttp();

  const [page, setPage] = useState(1);

  const handlePageChange = (e) => {
    setPage(+e.selected + 1);
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["users", page],
    queryFn: () => sendRequest({ url: `/blog/posts//?page=${page}` }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  return (
    <>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        backgroundImage="https://medilo-react.vercel.app/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* Start Blog Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <BlogsSection1 data={blogsSectionData} />

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
