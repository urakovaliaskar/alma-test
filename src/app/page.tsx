"use client"

import { useRouter } from "next/navigation";
import { Header, Form } from "@/components";
import { FormDataProps } from "@/types";

export default function Home() {
  const router = useRouter();

  const handleSubmit = async (formData: FormDataProps) => {
    try {
      const response = await fetch("/api/applicant", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        router.push("/confirmation");
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Header />
      <Form onSubmit={handleSubmit} />
    </>
  );
}
