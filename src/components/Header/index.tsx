import Image from "next/image";
import { StyledFormHeader, FormTitle, FormSubtitle } from "@/styles";
import { HeaderProps } from "@/types";
import { FC } from "react";

export const Header: FC<HeaderProps> = ({ url, title, text }) => {
  return (
    <StyledFormHeader>
      <Image
        src={url}
        alt=""
        tabIndex={-1}
        aria-hidden="true"
        width={100}
        height={100}
      />
      <FormTitle>{title}</FormTitle>
      {text && <FormSubtitle>
        {text}
      </FormSubtitle>}
    </StyledFormHeader>
  );
};
