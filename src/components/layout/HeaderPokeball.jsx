const HeaderPokeball = () => {
  return (
    <header>
      <div className="h-12 bg-red-600 relative w-screen">
        <img
          src="/image/banner.png"
          alt=""
          className="h-[36px] XXS:h-full w-auto  translate-x-3
           translate-y-6 realive xxs:tranlate-y-4"
        />
        <div
          className="h-[68px] aspect-square bg-white  rounded-full  absolute right-0 -translate-x-1/4 xxs:-translate-x-1/2
        -bottom-14 border-[7px] border-black after:block after:content-[''] after:absolute
          after:h-9 after:aspect-square after:bg-slate-800   after:rounded-full after:left-1/2 
          after:-translate-x-1/2 after:-translate-y-1/2   after:top-1/2 after:border-4 after:border-black  "
        >
          {" "}
        </div>
      </div>
      <div className="h-[44px] bg-black"></div>
    </header>
  );
};

export default HeaderPokeball;
