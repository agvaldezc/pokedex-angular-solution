interface IBasicData {
  id: number;
  name: string;
}

interface INamedResource {
  name: string;
  url: string;
}
export interface IPokemonSprite {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
}

export interface IPokemonAbility {
  ability: INamedResource;
}

export interface IPokemonMove {
  move: INamedResource;
}

export interface IPokemonType {
  slot: number;
  type: INamedResource;
}

export interface IPokemon extends IBasicData {
  abilities: IPokemonAbility[];
  moves: IPokemonMove[];
  types: IPokemonType[];
  sprites: IPokemonSprite;
}
