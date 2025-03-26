import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Header } from "../Header";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: { src: string; alt: string }) => {
    return <img src={src} alt={alt} {...props} />;
  },
}));

describe("Header Component", () => {
  it("renders the header with the correct title and text", () => {
    render(
      <Header
        url="/test-image.png"
        title="Test Title"
        text="Test Subtitle"
      />
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
    expect(screen.getByRole("img", { hidden: true })).toHaveAttribute("src", "/test-image.png");
  });

  it("renders the header without subtitle when text is not provided", () => {
    render(
      <Header
        url="/test-image.png"
        title="Test Title"
        text={undefined}
      />
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.queryByText("Test Subtitle")).not.toBeInTheDocument();
  });
});
