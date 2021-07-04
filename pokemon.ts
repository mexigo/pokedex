import { Ability, GameIndice, IPokemon, Stat } from "./interfaces/pokemon.ts";
import { IPokemonRaw } from "./interfaces/pokemon_raw.ts";
import {
  normalizeStats,
  normalizeAbilities,
  normalizeGameIndices,
} from "./normalizer.ts";

class Pokemon implements IPokemon {
  public id: number;
  public name: string;
  public height: number;
  public stats: Stat[];
  public abilities: Ability[];
  public gameIndices: GameIndice[];

  constructor(pokemon: IPokemonRaw) {
    const { id, name, height, stats, abilities, game_indices } = pokemon;
    this.id = id;
    this.name = name;
    this.height = height;
    this.stats = normalizeStats(stats);
    this.abilities = normalizeAbilities(abilities);
    this.gameIndices = normalizeGameIndices(game_indices);
  }
}

export const createPokemon = (pokemonRaw: IPokemonRaw): Pokemon =>
  new Pokemon(pokemonRaw);
