import React from "react";
import "./style.css";

const Pagination = props => {
  return (
    <div className="pagination">
      <a href="#">Previous page</a>
      <span className="pagination__current-page">
        page {props.currentPage} of {props.totalPages}
      </span>
      <a href="#">Next page</a>
    </div>
  );
};

export default Pagination;
