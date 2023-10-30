import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,_270px)] justify-center items-center -translate-x-5 lg:-translate-x-6 max-w-[1200px] mx-auto gap-10 py-4  ">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} />
      ))}
    </section>
  );
};
export default PokemonList;
