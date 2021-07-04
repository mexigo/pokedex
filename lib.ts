import { ASCII } from "./ascii.ts";
import { IPokemon } from "./interfaces/pokemon.ts";
import { createPokemon } from "./pokemon.ts";

export const compare = (pokemonA: IPokemon, pokemonB: IPokemon) => {
  console.log(ASCII.one);
  console.log(pokemonA.name);
  console.log(pokemonA.stats);
  console.log(ASCII.two);
  console.log(pokemonB.name);
  console.log(pokemonB.stats);
};

export const search = async (name: string): Promise<IPokemon> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const json = await response.json();
  return createPokemon(json);
};
