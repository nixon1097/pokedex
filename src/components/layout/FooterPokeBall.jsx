const FooterPokeBall = () => {
  return (
    <section>
      <div className="h-16 bg-red-600 relative">
        <div
          className="h-16 aspect-square bg-white  rounded-full  absolute left-1/2 -translate-x-1/2
         -bottom-8 border-[6px] border-black after:block after:content-[''] after:absolute
          after:h-8 after:aspect-square after:bg-slate-800   after:rounded-full after:left-1/2 
          after:-translate-x-1/2 after:-translate-y-1/2   after:top-1/2 after:border-4 after:border-black  "
        ></div>
      </div>
      <div className="h-12 bg-black"></div>
    </section>
  );
};
export default FooterPokeBall;
