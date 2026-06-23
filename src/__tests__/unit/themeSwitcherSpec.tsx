import { render, screen } from "@testing-library/react";

import { ThemeSwitcher } from "@/components/themeSwitcher";

describe("Theme switcher", () => {
  it("renders the Component", () => {
    render(<ThemeSwitcher />);

    const button = screen.getByLabelText("Toggle theme");

    expect(button).toBeInTheDocument();
  });
});
