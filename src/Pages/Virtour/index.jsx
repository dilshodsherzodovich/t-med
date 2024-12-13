import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function Virtour() {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get("id")) {
      setSearchParams({ id: 1 });
    }
  }, []);

  const links = [
    {
      id: 1,
      link: "https://kuula.co/share/collection/7ZjhB?logo=-1&info=0&fs=1&vr=0&sd=1&initload=1&thumbs=3&inst=0&keys=0",
    },
    {
      id: 2,
      link: "https://kuula.co/share/collection/7ZyXb?logo=-1&info=0&fs=1&vr=0&sd=1&initload=1&thumbs=3&inst=0&keys=0",
    },
    {
      id: 3,
      link: "https://kuula.co/share/collection/7ZyXK?logo=-1&info=0&fs=1&vr=0&sd=1&initload=0&thumbs=3&inst=0&keys=0",
    },
    {
      id: 4,
      link: "https://kuula.co/share/collection/7ZyXc?logo=-1&info=0&fs=1&vr=0&sd=1&initload=0&thumbs=3&inst=0&keys=0",
    },
  ];

  return (
    searchParams.get("id") && (
      <iframe
        class="ku-embed"
        frameborder="0"
        allow="xr-spatial-tracking; gyroscope; accelerometer"
        allowfullscreen
        scrolling="no"
        src={links.find((link) => link?.id === +searchParams.get("id")).link}
        width="100%"
        // height='100vh'
        style={{ height: "100vh" }}
      ></iframe>
    )
  );
}
