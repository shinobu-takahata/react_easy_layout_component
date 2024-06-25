import Button from "../ui/Button";
import { usePokemon } from "../../hooks/usePokemon";

export default function Pokemon() {
  const {
    pokemonName,
    pokemonData,
    error,
    handleChangePokemonName,
    handleSearchClick,
  } = usePokemon();
  return (
    <div className="mx-auto max-w-4xl mt-10">
      <div className="flex justify-center">
        <div>
          <input
            className="border outline-none px-3 py-2 rounded"
            type="text"
            placeholder="ポケモンの名前を入力"
            value={pokemonName}
            onChange={handleChangePokemonName}
          />
          <Button name="検索" onClick={handleSearchClick} />
          {error && <p className="mt-2 text-base text-red-500">{error}</p>}
        </div>
      </div>
      {/* ポケモンの情報 */}
      {pokemonData && (
        <div className="flex justify-center">
          <p>name: {pokemonData.name}</p>
          <img src={pokemonData.sprites.front_default} alt="" />
        </div>
      )}
    </div>
  );
}
