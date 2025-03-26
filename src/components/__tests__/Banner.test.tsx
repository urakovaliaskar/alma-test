import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Banner } from "../Banner";

describe("Banner Component", () => {
  it("renders the banner with the correct title and text", () => {
    render(<Banner />);

    expect(screen.getByText("almà")).toBeInTheDocument();
    expect(
      screen.getByText("Get An AssessmentOf Your Immigration Case", { exact: false })
    ).toBeInTheDocument();
  });
});
