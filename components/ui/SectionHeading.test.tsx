import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SectionHeading } from "@/components/ui/SectionHeading";

describe("SectionHeading", () => {
  it("renders the eyebrow and title", () => {
    render(<SectionHeading eyebrow="Our story" title="Travel with meaning"/>);
    expect(screen.getByText("Our story")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Travel with meaning" })).toBeInTheDocument();
  });
});
