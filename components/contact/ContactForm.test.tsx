import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ContactForm } from "@/components/contact/ContactForm";

describe("ContactForm", () => {
  it("shows validation errors on empty submission", async () => {
    render(<ContactForm/>);
    fireEvent.click(screen.getByRole("button", { name: /send us a note/i }));
    expect(await screen.findByText("Name must be at least 2 characters")).toBeInTheDocument();
    expect(screen.getByText("Please enter a valid email address")).toBeInTheDocument();
  });

  it("accepts a valid request and displays success", async () => {
    const user = userEvent.setup();
    render(<ContactForm/>);
    await user.type(screen.getByLabelText("Full name"), "Alex Morgan");
    await user.type(screen.getByLabelText("Email address"), "alex@example.com");
    await user.selectOptions(screen.getByLabelText("I’m dreaming of"), "Beach");
    await user.type(screen.getByLabelText("A little about your trip"), "We are hoping to visit the coast this summer.");
    await user.click(screen.getByRole("button", { name: /send us a note/i }));
    expect(await screen.findByRole("status", {}, { timeout: 3000 })).toHaveTextContent("Your next chapter starts here.");
  }, 10000);
});
