import React from "react";
import styled from "styled-components";

//페이지 넘어가게 하는 컴포넌트

const Pagination = ({ postsPerPage, totalPosts, Paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <nav>
        <div className="flex justify-center">
          {pageNumbers.map((number) => (
            <div key={number} className="border-solid border-2 border-sky-500 px-5 mx-2">
              <div onClick={() => Paginate(number)} className="page-link">
                {number}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Pagination;