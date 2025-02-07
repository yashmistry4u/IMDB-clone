import React from "react";

function Pagination({ handleNext, handlePrev, pageNo }) {
  return (
    <div className="bg-gray-400 p-4 flex justify-center">
      <div className="px-8">
        <i onClick={handlePrev} class="fa-solid fa-arrow-left"></i>
      </div>
      <div className="font-bold">{pageNo}</div>
      <div className="px-8">
        <i onClick={handleNext} class="fa-solid fa-arrow-right">
          {handleNext}
        </i>
      </div>
    </div>
  );
}

export default Pagination;
