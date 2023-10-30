import { useDispatch } from "react-redux";
import { setTrainerName } from "../store/slice/trainerName.slice";
import { useNavigate } from "react-router-dom";
import FooterPokeball from "../components/layout/FooterPokeBall";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(setTrainerName(e.target.trainerName.value));

    navigate("pokedex");
  };

  return (
    <main className="h-screen grid grid-rows-[1fr_auto]">
      <section className="grid place-content-center text-center  text-red-600 font-mono  ">
        <div className="p-4 border-2 mx-[2%] rounded-md  mx-w-[250px]  shadow-xl  bg-white/95">
          <div>
            <img src="/image/banner.png" alt="" className="mb-2" />
          </div>
          <h3 className="text-2xl">Hello Trainer!</h3>
          <p className="text-lg pb-2">To start give me your name:</p>
          <form
            onSubmit={handelSubmit}
            className="text-sm flex justify-center mx-[10%] px-2 sm:mx[10%] max-w-[600px] text-white  "
          >
            <input
              type="text"
              name="trainerName"
              autoComplete="off"
              placeholder="Your name ..."
              required
              minLength={1}
              maxLength={15}
              className="bg-ambar-950  rounded-s-xl border-2 border-red-500 border-r-0 outline-none  flex-1  text-center text-black shadow-sm  shadow-red-500"
            />
            <button className=" bg-red-600 border-2 border-l-0 rounded-r-xl border-red-500 py-2 px-4 flex items-center gap-2 hover:bg-rose-700 shadow-sm shadow-red-500 hover:drop-shadow-md hover:shadow-red-400">
              Start!
            </button>
          </form>
        </div>
      </section>
      <footer>
        <FooterPokeball />
      </footer>
    </main>
  );
};
export default Home;
