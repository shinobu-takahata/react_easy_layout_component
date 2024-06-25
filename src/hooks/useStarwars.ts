import { useEffect, useState } from "react";
interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

interface UseStarwars {
  character: Character | null;
  handleCharacterButtonClick: () => void;
}

export function useStarwars(): UseStarwars {
  const [character, setCharacter] = useState<Character | null>(null);

  const [id, setId] = useState(1);

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await fetch(`https://swapi.dev/api/people/${id}`);
      const data = await response.json();
      setCharacter(data);
    };

    fetchCharacter();
  }, [id]);

  const handleCharacterButtonClick = () => {
    setId((prev) => prev + 1);
  };

  return {
    character,
    handleCharacterButtonClick,
  };
}
