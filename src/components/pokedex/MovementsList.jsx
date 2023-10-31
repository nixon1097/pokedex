import { bgByType } from "../../const/pokemos";

const MovementsList = ({ pokemon, type }) => {
  const moves = pokemon?.moves.map((move) => move.move.name);
  const currentMovents = moves;
  console.log(type);
  return (
    <>
      <h2 className=" justify-center font-bold text-2xl py-2 items-start">
        Movements
      </h2>
      <section className=" overflow-scroll  h-[150px]   grid gap-1  rounded-xl  text-sm">
        <ul className="flex flex-wrap  gap-4   h-full text-center justify-evenly  items-center text-white">
          {currentMovents?.map((move) => (
            <li
              className={` rounded-xl ${bgByType[type]} px-2 shadow-lg shadow-cyan-500/50 w-[min(100%,_auto]   `}
              key={move}
            >
              <h4>{move}</h4>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
export default MovementsList;
