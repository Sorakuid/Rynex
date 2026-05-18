import { render, screen } from "@testing-library/react";

import ProductCard from "@/components/product/product-card";

describe("ProductCard", () => {
  const mockProduct = {
    id: 1,
    title: "Test Template",
    slug: "test-template",
    description: "A test template",
    shortDescription: "Test description",
    price: 99,
    category: "Portfolio",
    techStack: ["React", "Next.js", "TypeScript"],
    thumbnailUrl: "https://example.com/image.jpg",
    isFeatured: true,
    isActive: true,
    downloadCount: 100,
  };

  it("renders product title", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText("Test Template")).toBeInTheDocument();
  });

  it("renders product price", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText("$99")).toBeInTheDocument();
  });

  it("renders tech stack badges", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Next.js")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });

  it("renders featured badge when isFeatured is true", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText("Featured")).toBeInTheDocument();
  });

  it("links to product detail page", () => {
    render(<ProductCard product={mockProduct} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/products/test-template");
  });
});
