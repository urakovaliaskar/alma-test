"use client"

import { useRouter } from "next/navigation";
import { Header } from "@/components";
import { FormContainer, SubmitButton } from "@/styles";

export default function Confirmation() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };
  return (
    <FormContainer>
      <Header url="/info.webp" title="Thank You" text="Your information was submitted to our team of immigration attorneys.
        Expect an email from hello@tryalma.ai" />
      <SubmitButton onClick={handleClick}>Go Back to Homepage</SubmitButton>
    </FormContainer>
  );
}
