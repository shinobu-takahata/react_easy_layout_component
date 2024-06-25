import { useState } from "react";
interface PokemonData {
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
    };
  }[];
  stats: {
    stat: {
      name: string;
      value: number;
    };
  }[];
}
interface UsePokemon {
  pokemonName: string;
  error: string;
  pokemonData: PokemonData | null;
  handleSearchClick: () => void;
  handleChangePokemonName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function usePokemon(): UsePokemon {
  const [pokemonName, setPokemonName] = useState("");
  const [error, setError] = useState("");
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);

  const fetchPokemon = async () => {
    try {
      console.log(pokemonName);

      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
      );
      const data = await response.json();
      console.log("ポケモン");

      console.log(data);

      if (response.status === 404) {
        setError("ポケモンが見つかりませんでした。");
        setPokemonData(null);
      } else {
        setError("");
        setPokemonData(data);
      }
    } catch (error) {
      setError("エラーが発生しました");
    }
  };

  const handleSearchClick = () => {
    fetchPokemon();
  };

  const handleChangePokemonName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value);
  };

  return {
    pokemonName,
    error,
    pokemonData,
    handleSearchClick,
    handleChangePokemonName,
  };
}
