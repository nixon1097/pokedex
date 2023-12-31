import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderPokeball from "../components/layout/HeaderPokeball";
import FooterPokeBall from "../components/layout/FooterPokeBall";
import { bgByType, borderByType } from "../const/pokemos";
import MovementsList from "../components/pokedex/MovementsList";

const URL_POKEMONS = "https://pokeapi.co/api/v2/pokemon";

const PokemonDetail = () => {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const abilities = pokemon?.abilities.map((ability) => ability.ability.name);
  const type = pokemon?.types[0].type.name;
  const types = pokemon?.types.map((type) => type.type.name);

  const getPercentStat = (statValue) => {
    const MAX_STAT_VALUE = 255;
    const percent = ((100 * statValue) / MAX_STAT_VALUE).toFixed(1);
    return `${percent}%`;
  };

  useEffect(() => {
    axios
      .get(URL_POKEMONS + `/${pokemonId}/`)
      .then(({ data }) => setPokemon(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className=" text-center capitalize grid  h-screen justify-center items-center ">
      <header className="-translate-y-5 z-10">
        <HeaderPokeball />
      </header>
      <section className="xxs:flex gap-2 justify-center ">
        <article
          className={` mx-[0.1%] w-[min(100%,_350px)] h-[400px] rounded-xl  text-lg font-bold -mt-8  capitalize  relative  border-8  xxxs:mx-auto  xxxs:-mt-3
        ${borderByType[type]} -translate-x-74 z-2`}
        >
          <header className={`${bgByType[type]} h-[60px] w-full`}> </header>
          <div className="relative pt-1 ">
            <div className="absolute w-full -top-3 -translate-y-2/3">
              <img
                src={pokemon?.sprites.other["official-artwork"].front_default}
                alt="image pokemon"
                className="max-w-[180px] mx-auto block h-[80px] drop-shadow-2xl  "
              />
            </div>
          </div>
          <h3 className="pt-2  -mt-2">#{pokemon?.id}</h3>
          <h2>{pokemon?.name}</h2>
          <section className="grid  grid-cols-2 px-2 py-2 -mt-3 justify-center items-center gap-2">
            <article className="grid justify-center items-center pr-4 ">
              <h2 className="text-sm text-slate-500">Types</h2>
              <ul className="text-xs  font-bold flex gap-2 text-white pt-2 ">
                {types?.map((type) => (
                  <li
                    key={type}
                    className={` rounded-xl ${bgByType[type]}  shadow-lg shadow-cyan-500/50 w-[min(80px,_60px)] font-semibold  `}
                  >
                    <h4>{type}</h4>
                  </li>
                ))}
              </ul>
            </article>
            <article className="grid justify-center items-center pr-2">
              <h2 className="text-sm text-slate-500">abilities</h2>
              <ul className="text-xs  font-bold flex gap-1 text-white pt-2  items-center tex">
                {abilities?.map((ability) => (
                  <li
                    key={ability}
                    className={` rounded-xl ${bgByType[type]}  shadow-lg shadow-cyan-500/50 w-[min(70px,_150px)]  font-semibold  text-[10px] flex justify-center items-center text-center `}
                  >
                    <h4 className="text-center flex justify-center items-center ">
                      {ability}
                    </h4>
                  </li>
                ))}
              </ul>
            </article>
          </section>
          {/* stats */}
          <section className="  grid gap-3 px-4 text-start">
            <h3 className="-mt-2 ">stats</h3>
            <ul className="grid  h-[80px] -mt-5 text-base font-semibold ">
              {pokemon?.stats.map((stat) => (
                <li key={stat.stat.name} className="capitalize">
                  <div className="flex justify-between items-center">
                    <h5>{stat.stat.name}</h5>
                    <span>{stat.base_stat}/255</span>
                  </div>
                  {/* total bar */}
                  <div className="bg-slate-200 rounded-md h-2 overflow-hidden xxs:h-6">
                    {/* Bar Progr */}
                    <div
                      style={{ width: getPercentStat(stat.base_stat) }}
                      className={` ${bgByType[type]} h-full `}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </article>
        <article
          className={`border-8  gap-2 p-2  mx-[0.1] w-[min(100%,_350px)] rounded-xl xxxs:mx-auto xxxs:mt-2 ${borderByType[type]}`}
        >
          <MovementsList pokemon={pokemon} type={type} />
        </article>
      </section>
      <footer className="translate-y-3">
        <FooterPokeBall />
      </footer>
    </main>
  );
};
export default PokemonDetail;
