"use client"

import Image from "next/image";
import { FormContainer, FormTitle, FormSubtitle, SubmitButton } from "@/styles";

export default function Confirmation() {
  return (
    <FormContainer>
      <Image
        src="/info.webp"
        alt=""
        tabIndex={-1}
        aria-hidden="true"
        width={100}
        height={100}
      />
      <FormTitle>Thank You</FormTitle>
      <FormSubtitle>
        Your information was submitted to our team of immigration attorneys.
        Expect an email from hello@tryalma.ai
      </FormSubtitle>
      <SubmitButton type="submit">Submit</SubmitButton>
    </FormContainer>
  );
}
