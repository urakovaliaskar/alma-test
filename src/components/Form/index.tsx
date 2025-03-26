import React, { useState } from "react";
import { FormDataProps } from "@/types";
import {
  FormContainer,
  StyledForm,
  StyledInput,
  StyledCheckboxGroup,
  CheckboxLabel,
  StyledFileInput,
  StyledTextArea,
  SubmitButton,
  ErrorMessage,
} from "@/styles";
import { Header } from "@/components";

interface FormProps {
  onSubmit: (formData: FormDataProps) => void;
}

export const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    url: "",
    visaCategories: [] as string[],
    file: null as File | null,
    additionalInfo: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    url: "",
    visaCategories: "",
    file: "",
    additionalInfo: "",
  });

  const visaOptions = ["O-1", "EB-1A", "EB-2 NIW", "I don't know"];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let errorValue = "";

    if (name === "email") {
      errorValue = validateEmail(value) ? "" : "Valid email is required.";
    } else if (name === "url") {
      errorValue = validateUrl(value) ? "" : "Please enter a valid URL.";
    }

    setErrors({ ...errors, [name]: errorValue });
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (category: string) => {
    setFormData((prevState) => {
      const newVisaCategories = prevState.visaCategories.includes(category)
        ? prevState.visaCategories.filter((v) => v !== category)
        : [...prevState.visaCategories, category];

      return { ...prevState, visaCategories: newVisaCategories };
    });

    setErrors({ ...errors, visaCategories: "" });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    setFormData({ ...formData, file });

    setErrors({
      ...errors,
      file: file ? "" : "Please upload a file.",
    });
  };

  const validateUrl = (url: string) => {
    const pattern = /^(https?:\/\/)?([\w\d-]+\.)+[\w]{2,}([\/?].*)?$/;
    return pattern.test(url);
  };

  const validateEmail = (email: string) => {
    const pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      firstName: formData.firstName ? "" : "First Name is required.",
      lastName: formData.lastName ? "" : "Last Name is required.",
      email: /\S+@\S+\.\S+/.test(formData.email)
        ? ""
        : "Valid email is required.",
      url: validateUrl(formData.url) ? "" : "Please enter a valid URL.",
      visaCategories:
        formData.visaCategories.length > 0
          ? ""
          : "Please select at least one visa category.",
      file: formData.file ? "" : "Please upload a file.",
      additionalInfo: formData.additionalInfo
        ? ""
        : "Additional information is required.",
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    onSubmit(formData);
  };

  return (
    <FormContainer>
      <Header url="/info.webp" title="Want to understand your visa options?" text="Submit the form below and our team of experienced attorneys will review your information and send a preliminary assessment of your case based on your goals." />
      <StyledForm onSubmit={handleSubmit} role="form">
        <StyledInput
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          aria-invalid={!!errors.firstName}
        />
        {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}

        <StyledInput
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          aria-invalid={!!errors.lastName}
        />
        {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}

        <StyledInput
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          aria-invalid={!!errors.email}
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

        <StyledInput
          type="url"
          name="url"
          placeholder="Portfolio / LinkedIn URL"
          onChange={handleChange}
          aria-invalid={!!errors.url}
        />
        {errors.url && <ErrorMessage>{errors.url}</ErrorMessage>}

        <Header url="/dice.webp" title="Visa categories of interest?" />
        <StyledCheckboxGroup aria-invalid={!!errors.visaCategories}>
          {visaOptions.map((option) => (
            <CheckboxLabel key={option}>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(option)}
                checked={formData.visaCategories.includes(option)}
              />
              {option}
            </CheckboxLabel>
          ))}
        </StyledCheckboxGroup>
        {errors.visaCategories && (
          <ErrorMessage>{errors.visaCategories}</ErrorMessage>
        )}

        <StyledFileInput
          id="file-upload"
          type="file"
          placeholder="Resume/CV Upload"
          onChange={handleFileChange}
          aria-invalid={!!errors.file}
        />
        {errors.file && <ErrorMessage>{errors.file}</ErrorMessage>}

        <Header url="/heart.png" title="How can we help you?" />
        <StyledTextArea
          name="additionalInfo"
          placeholder="What is your current status and when does it expire!
What is your past immigration history? Are you
or short-term employment visa or both? Are there any timeline considerators?"
          onChange={handleChange}
          aria-invalid={!!errors.additionalInfo}
          rows={5}
        />
        {errors.additionalInfo && (
          <ErrorMessage>{errors.additionalInfo}</ErrorMessage>
        )}

        <SubmitButton type="submit">Submit</SubmitButton>
      </StyledForm>
    </FormContainer>
  );
};
