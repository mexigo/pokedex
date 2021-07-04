import { Ability, GameIndice, Stat } from "./interfaces/pokemon.ts";
import {
  AbilityRaw,
  GameIndiceRaw,
  StatRaw,
} from "./interfaces/pokemon_raw.ts";

export const normalizeStats = (stats: StatRaw[]): Stat[] =>
  stats.map(({ base_stat, stat, effort }) => ({
    baseStat: base_stat,
    name: stat.name,
    url: stat.url,
    effort: effort,
  }));

export const normalizeAbilities = (abilities: AbilityRaw[]): Ability[] =>
  abilities.map((ability) => ({
    name: ability.ability.name,
    url: ability.ability.url,
    isHidden: ability.is_hidden,
    slot: ability.slot,
  }));

export const normalizeGameIndices = (
  gameIndices: GameIndiceRaw[]
): GameIndice[] =>
  gameIndices.map(({ game_index, version }) => ({
    index: game_index,
    name: version.name,
    url: version.url,
  }));
