import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { bgByType, borderByType, textByType } from "../../const/pokemos";

const PokemonCard = ({ pokemonUrl }) => {
  const [pokemon, setpokemon] = useState(null);
  const type = pokemon?.types[0].type.name;
  const types = pokemon?.types.map((type) => type.type.name);
  console.log(types);
  useEffect(() => {
    axios
      .get(pokemonUrl)
      .then(({ data }) => setpokemon(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Link to={`/pokedex/${pokemon?.id}`}>
      <section
        className={`capitalaze border-8 rounded-lg capitalize ${borderByType[type]} text-center ${textByType[type]} h-[95%] w-[300px] `}
      >
        <header className={`${bgByType[type]} h-[100px]  `}></header>
        <div className="relative pt-9 ">
          <div className="absolute w-full top-0 -translate-y-2/3">
            <img
              src={pokemon?.sprites.other["official-artwork"].front_default}
              alt="image pokemon"
              className="max-w-[180px] mx-auto block h-[140px] drop-shadow-2xl  "
            />
          </div>
          <h3 className="text-lg font-bold">{pokemon?.name}</h3>
          <span className="text-xl font-semibold text-black ">{types}</span>
          <div className="relative  -translate-y-1/2 top-1">
            <div className="border-y-[1px] rounded-lg w-[200px]   mx-auto block  "></div>
          </div>
          <h5 className="font-semibold text-slate-400 text-lg p-2 ">type</h5>
          <ul className="grid grid-cols-2   px-4  mb-2 text-lg text-center">
            {pokemon?.stats.slice(0, 4).map((stat) => (
              <li key={stat.stat.name} className="grid  gap-1">
                <h6 className="font-semibold text-slate-400">
                  {stat.stat.name}
                </h6>
                <span className="font-bold">{stat.base_stat}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Link>
  );
};
export default PokemonCard;
