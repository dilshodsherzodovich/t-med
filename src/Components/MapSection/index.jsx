import { useQuery } from "@tanstack/react-query";
import SvgMap from "../SvgMap";
import "./map.scss";
import MapSlider from "./MapSlider";
import { useHttp } from "../../hooks/useHttp";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

function MapSection() {
  const sendRequest = useHttp();

  const { t } = useTranslation();

  const [activeRegion, setActiveRegion] = useState(null);

  const { data: organizationRegions, isSuccess } = useQuery({
    queryKey: ["organizations-regions"],
    queryFn: () => sendRequest({ url: `/reception/organization-by-region//` }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  useEffect(() => {
    if (isSuccess) {
      setActiveRegion("Toshkent shahri");
    }
  }, [isSuccess]);

  const activeRegionId = useMemo(() => {
    return organizationRegions?.find((item) => {
      return item?.name === activeRegion;
    })?.id;
  }, [activeRegion, organizationRegions]);

  const { data: activeRegionInts, isLoading } = useQuery({
    queryKey: ["activeRegionInts", activeRegionId],
    queryFn: () =>
      sendRequest({
        url: `/reception/organization-by-region//${activeRegionId}/`,
      }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
    enabled: activeRegionId !== null && activeRegionId !== undefined,
  });

  return (
    <div className="uzb-map container">
      <div className="cs_section_heading cs_style_1 cs_type_1 mb-2">
        <div className="cs_section_heading_left">
          <p className="cs_section_subtitle cs_accent_color">
            <span className="cs_shape_left" />
            {t("pages.home.svgMap.title")}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-7">
          <SvgMap
            activeRegion={activeRegion}
            setActiveRegion={setActiveRegion}
          />
        </div>
        <div className="col-12 col-md-5">
          <MapSlider
            isLoading={isLoading}
            sliders={activeRegionInts?.region_organizations}
          />
        </div>
      </div>
    </div>
  );
}

export default MapSection;
