import Button from "./Button";
import { Col8, ColLg, StyledRow } from "./Row";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  // Calculate the range of page numbers to display
  const maxPagesToShow = 5; // Adjust as needed
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  // Handle edge cases where not enough pages to show on either side
  if (endPage - startPage + 1 < maxPagesToShow) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  // Generate page numbers
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <StyledRow>
      <ColLg>
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <Button
            className="page-link"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Quay về
          </Button>
        </li>
      </ColLg>

      {/* Page numbers */}
      <Col8>
        <StyledRow
          gap="1.6rem"
          className="text-center align-center justify-center"
        >
          {pageNumbers.map((page) => (
            <div key={page}>
              <Button
                variation="icon"
                bgcolor={`${currentPage === page ? "var(--bs-primary)" : "var(--bs-light)"}`}
                color={`${currentPage === page ? "var(--bs-white)" : "var(--bs-dark)"}`}
                onClick={() => onPageChange(page)}
              >
                {page}
              </Button>
            </div>
          ))}
        </StyledRow>
      </Col8>
      <ColLg>
        <Button
          className="page-link"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Tiếp theo
        </Button>
      </ColLg>
    </StyledRow>
  );
};

export default Pagination;
