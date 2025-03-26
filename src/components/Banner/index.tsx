import React from "react";
import { StyledBanner, StyledBannerLogo, StyledBannerText } from "@/styles";

export const Banner: React.FC = () => {
  return (
    <>
      <StyledBanner>
        <StyledBannerLogo>
          <h1 className="title">almà</h1>
          <StyledBannerText>
            Get An Assessment
            <br />
            Of Your Immigration Case
          </StyledBannerText>
        </StyledBannerLogo>
      </StyledBanner>
    </>
  );
};
