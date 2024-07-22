import React from 'react';
import Button from '../Button/Button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (event: React.MouseEvent, newPage: number) => {
    event.stopPropagation();
    onPageChange(newPage);
  };

  return (
    <div className="pagination">
      <Button
        onClick={(event) => handlePageChange(event, currentPage - 1)}
        disabled={currentPage === 1}
        variant="pagination"
      >
        Previous
      </Button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <Button
        onClick={(event) => handlePageChange(event, currentPage + 1)}
        disabled={currentPage === totalPages}
        variant="pagination"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
