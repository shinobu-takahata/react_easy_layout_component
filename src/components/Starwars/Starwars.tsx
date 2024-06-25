import Button from "../ui/Button";
import { useStarwars } from "../../hooks/useStarwars";

export default function Starwars() {
  const { character, handleCharacterButtonClick } = useStarwars();
  return (
    <div className="mx-auto max-w-4xl mt-10">
      <div className="flex justify-center">
        <div>
          <div className="text-center text-base">
            <h2>name: {character?.name}</h2>
            <p>height: {character?.height}</p>
          </div>

          <Button
            name="次のキャラクター"
            onClick={handleCharacterButtonClick}
          />
        </div>
      </div>
    </div>
  );
}
