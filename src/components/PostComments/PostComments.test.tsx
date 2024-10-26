import { fireEvent, render, screen } from "@testing-library/react";
import PostComment from ".";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  it("Teste para verificar a inserção de comentários", () => {
    render(<PostComment />);
    fireEvent.change(screen.getByTestId("textarea"), {
      target: {
        value: "comentário 1",
      },
    });

    fireEvent.click(screen.getByTestId("submit-comment"));

    fireEvent.change(screen.getByTestId("textarea"), {
      target: {
        value: "comentário 2",
      },
    });

    fireEvent.click(screen.getByTestId("submit-comment"));

    expect(screen.getByText("comentário 1")).toBeInTheDocument();
    expect(screen.getByText("comentário 2")).toBeInTheDocument();
    expect(screen.getAllByTestId("list-comments")).toHaveLength(2);
  });
});
