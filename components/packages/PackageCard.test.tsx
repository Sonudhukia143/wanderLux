import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PackageCard } from "@/components/packages/PackageCard";
import type { HolidayPackage } from "@/lib/types";

const packageItem: HolidayPackage = { id: "test", title: "Island escape", destination: "Bali", country: "Indonesia", category: "Beach", duration: "7 days · 6 nights", price: 1200, rating: 4.8, reviews: 20, highlights: ["Beach stay"], imageUrl: "/bali.jpg", imageAlt: "Green Balinese temple" };

describe("PackageCard", () => {
  it("shows destination, category, duration, price, and descriptive image text", () => {
    render(<PackageCard item={packageItem}/>);
    expect(screen.getByRole("heading", { name: "Bali" })).toBeInTheDocument();
    expect(screen.getByText("Beach")).toBeInTheDocument();
    expect(screen.getByText("7 days · 6 nights")).toBeInTheDocument();
    expect(screen.getByText("$1,200")).toBeInTheDocument();
    expect(screen.getByAltText("Green Balinese temple")).toBeInTheDocument();
  });
});
