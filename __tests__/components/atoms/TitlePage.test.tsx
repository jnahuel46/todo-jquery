import { TitlePage } from '@/components/atoms/TitlePage';
import { render, screen } from '@testing-library/react';

describe("TitlePage Component", () => {
  it("renders the title correctly", () => {
    const titleText = "Mis Comunicaciones";

    render(<TitlePage title={titleText} />);
    
    // Verifica que el título se renderiza correctamente
    const titleElement = screen.getByRole('heading', { name: titleText });
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(titleText);
  });

  it("has the correct class names", () => {
    const titleText = "Mis Comunicaciones";

    render(<TitlePage title={titleText} />);
    
    // Verifica que el elemento tenga las clases CSS correctas
    const titleElement = screen.getByRole('heading', { name: titleText });
    expect(titleElement).toHaveClass("font-open-sans", "text-[20px]", "font-bold", "text-[#555555]", "dark:text-neutral100", "mb-6");
  });
});
