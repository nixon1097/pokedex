const Pagination = ({
  pageNumber,
  setPageNumber,
  pagesInCurrentBlock,
  lastPage,
}) => {
  const handlePrevuisPokemons = () => {
    setPageNumber(pageNumber - 1);
  };
  const handleNextPokemons = () => {
    setPageNumber(pageNumber + 1);
  };
  return (
    <>
      <section className="h-[50%] mb-2 text-sm ">
        <ul className="flex gap-3 justify-center flex-wrap text-center  font-bold items-center ">
          {pageNumber !== 1 && (
            <>
              <li>
                <button onClick={handlePrevuisPokemons}>
                  <i className="bx bxs-left-arrow bx-fade-left-hover bx-sm"></i>
                </button>
              </li>
              {pageNumber > 5 && (
                <li>
                  <button
                    onClick={() => setPageNumber(1)}
                    className=" px-2 h-8 w-8 font-bold  text-white flex justify-center text-center items-center  bg-red-400 hover:bg-red-600 xxs:h-10 xxs:w-10 "
                  >
                    <i className="bx bx-first-page bx-sm"></i>
                  </button>
                </li>
              )}
            </>
          )}
          {pagesInCurrentBlock.map((page) => (
            <li key={page}>
              <button
                onClick={() => setPageNumber(page)}
                className={` px-2 h-7 w-7 font-bold  text-white flex justify-center text-center items-center  xxs:h-10 xxs:w-10 hover:bg-red-600
                 ${
                   pageNumber === page
                     ? "bg-red-600 rounded-full text-base"
                     : "bg-red-400 "
                 } `}
              >
                {page}
              </button>
            </li>
          ))}

          {pageNumber !== lastPage && (
            <>
              <li>
                <button
                  onClick={() => setPageNumber(lastPage)}
                  className=" p-2 h-8 w-8  font-bold  text-white flex justify-center text-center items-center  bg-red-400 hover:bg-red-600 xxs:h-10 xxs:w-10 "
                >
                  <i className="bx bx-last-page bx-sm"></i>
                </button>
              </li>
              <li>
                <button onClick={handleNextPokemons}>
                  <i className="bx bxs-right-arrow bx-sm  bx-fade-right-hover"></i>
                </button>
              </li>
            </>
          )}
        </ul>
      </section>
    </>
  );
};
export default Pagination;
