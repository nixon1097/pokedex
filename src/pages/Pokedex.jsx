import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PokemonList from "../components/pokedex/PokemonList";
import HeaderPokeball from "../components/layout/HeaderPokeball";
import { paginateData } from "../utils/pagination";
import FooterPokeBall from "../components/layout/FooterPokeBall";
import Pagination from "../components/pokedex/Pagination";
const URL_POKEMONS = "https://pokeapi.co/api/v2/pokemon?limit=1292";
const URL_TYPES = "https://pokeapi.co/api/v2/type";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);

  const [pokemonName, setPokemonName] = useState("");
  const [types, setTypes] = useState([]);
  const [currentType, setCurrentType] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  // filtrado de pokemon
  const pokemonsByName = pokemons.filter((pokemon) =>
    pokemon.name.includes(pokemonName)
  );
  const { itemsInCurrentPage, pagesInCurrentBlock, lastPage, blockActual } =
    paginateData(pokemonsByName, pageNumber);

  const trainerName = useSelector((store) => store.trainerName);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPokemonName(e.target.pokemonName.value.toLowerCase().trim());
  };
  const handleChangeType = (e) => {
    setCurrentType(e.target.value);
  };

  // trae todos los pokemons
  useEffect(() => {
    if (currentType === "") {
      axios
        .get(URL_POKEMONS)
        .then(({ data }) => setPokemons(data.results))
        .catch((err) => console.log(err));
    }
  }, [currentType]);
  //trae todos los tipos disponibles
  useEffect(() => {
    axios
      .get(URL_TYPES)
      .then(({ data }) => setTypes(data.results))
      .catch((err) => console.log(err));
  }, []);
  //trae todos los pokemons por tipo
  useEffect(() => {
    if (currentType !== "") {
      axios
        .get(URL_TYPES + `/${currentType}/`)
        .then(({ data }) => {
          setPokemons(data.pokemon.map((pokemon) => pokemon.pokemon));
        })
        .catch((err) => console.log(err));
    }
    //? resetea la paginacion
    setPageNumber(1);
  }, [currentType]);

  return (
    <main>
      <HeaderPokeball />
      <section className=" mx-[10%] pt-2 grid text-red-600 font-semibold justify-center  items-center text-center min-h-[200px] gap-2 text-base  ">
        <p className="text-2xl  xxs:text-4xl p-2">
          Welcom{" "}
          <span className="font-bold capitalize XXS:text-3xl">
            {" "}
            {trainerName}
          </span>
          , here you can fin your favorite pokemon
        </p>

        <form onSubmit={handleSubmit} className=" grid  gap-4 ">
          <div className="flex  border-2 border-red-600 justify-center shadow-sm  shadow-red-500  rounded-sm ">
            <input
              name="pokemonName"
              type="text"
              autoComplete="off"
              placeholder=" pokemon name ..."
              required
              minLength={1}
              maxLength={15}
              className=" bg-slate-100 hover:bg-slate-200/70   outline-none  flex-1  text-center text-black "
            />
            <button className=" bg-red-500  text-white px-2 w-[20%] flex xxs:grid xxs:grid-cols-2 gap-1 text-sm justify-center items-center text-center hover:bg-red-700 ">
              <p className=" collapse XXS:visible pl-2 ">Seach</p>{" "}
              <i className="bx bx-search-alt  bx-sm p-1 "></i>
            </button>
          </div>
          <select
            className="capitalize p-1 px-2 rounded-xl bg-white mx-[20%]  text-center flex shadow-sm  border-2 outline-none  border-red-500"
            onChange={handleChangeType}
          >
            <option value="">All pokemons</option>
            {types.map((type) => (
              <option value={type.name} key={type.url}>
                {type.name}
              </option>
            ))}
          </select>
        </form>
        <Pagination
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          pagesInCurrentBlock={pagesInCurrentBlock}
          lastPage={lastPage}
        />
      </section>
      <PokemonList pokemons={itemsInCurrentPage} URL_POKEMONS={URL_POKEMONS} />

      <section className="mx-[10%]  text-red-600 font-semibold pb-2">
        <Pagination
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          pagesInCurrentBlock={pagesInCurrentBlock}
          lastPage={lastPage}
        />
      </section>

      <footer>
        <FooterPokeBall />
      </footer>
    </main>
  );
};
export default Pokedex;
