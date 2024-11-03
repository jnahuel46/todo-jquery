import React from "react";
import { Button } from "../atoms/Button";

interface Props {
  currentPage: number;
  totalPages: number;
  handlePage: (page: number) => void;
}

export const Paginator = ({ currentPage, totalPages, handlePage }: Props) => {
  return (
    <div className="pt-[30px] flex justify-between items-center">
      <Button
        title="Anterior"
        onClick={() => handlePage(currentPage - 1)}
        disabled={currentPage === 1}
      />
      <span className="flex-1 text-center mx-2 dark:text-neutral100">
        Pag. {currentPage} de {totalPages === 0 ? 1 : totalPages}
      </span>
      <Button
        title="Siguiente"
        onClick={() => handlePage(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    </div>
  );
};
