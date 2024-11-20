import React from "react";
import ReactPaginate from "react-paginate";
import "./pagination.css";

function Pagination({ pageCount, handlePageClick }) {
  return (
    <div className="d-flex justify-content-center my-4">
      <ReactPaginate
        previousLabel={<span aria-hidden="true">&laquo;</span>}
        nextLabel={<span aria-hidden="true">&raquo;</span>}
        breakLabel={"..."}
        pageCount={Math.floor(+pageCount / 10) + 1}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
        disabledClassName={"disabled"}
      />
    </div>
  );
}

export default Pagination;
