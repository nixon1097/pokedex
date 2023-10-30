import { bgByType } from "../../const/pokemos";

const MovementsList = ({ pokemon, types }) => {
  const moves = pokemon?.moves.map((move) => move.move.name);
  const currentMovents = moves.slice(0, 7);
  console.log(types);
  return (
    <>
      <h2 className=" justify-center font-bold text-2xl">Movements</h2>
      <section className=" overflow-scroll h-[20%]   grid gap-2 px-1 rounded-xl  text-sm">
        <ul className="flex flex-wrap  gap-2   text-center justify-evenly  items-center">
          {currentMovents?.map((move) => (
            <li
              className={` rounded-xl  shadow-lg shadow-cyan-500/50 w-[min(80px,_60px)] font-semibold  `}
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
