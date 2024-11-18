import React from "react";
import ReactPaginate from "react-paginate";
import "./pagination.css";

function Pagination({ pageCount, handlePageClick }) {
  return (
    <ReactPaginate
      className="custom-pagination"
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;
