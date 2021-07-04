export interface AbilityRaw {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}
export interface FormRaw {
  name: string;
  url: string;
}

export interface GameIndiceRaw {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}

export interface VersionDetailRaw {
  rarity: number;
  version: {
    name: string;
    url: string;
  };
}

export interface HeldItemRaw {
  item: {
    name: string;
    url: string;
  };
  version_details: VersionDetailRaw[];
}

export interface VersionGroupDetailRaw {
  level_learned_at: number;
  move_learn_method: {
    name: string;
    url: string;
  };
  version_group: {
    name: string;
    url: string;
  };
}

export interface MoveRaw {
  move: {
    name: string;
    url: string;
  };
  version_group_details: VersionGroupDetailRaw[];
}

export interface StatRaw {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface TypeRaw {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface SpritesRaw {
  back_default: string;
  front_default: string;
  other: {
    dreamworld: {
      front_default: string;
    };
    "official-artwork": {
      front_default: string;
    };
  };
}

export interface IPokemonRaw {
  abilities: AbilityRaw[];
  base_experience: number;
  forms: FormRaw[];
  game_indices: GameIndiceRaw[];
  held_items: HeldItemRaw[]; //not sure
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: MoveRaw[];
  name: string;
  order: number;
  weight: number;
  stats: StatRaw[];
  types: TypeRaw[];
  sprites: SpritesRaw;
}
