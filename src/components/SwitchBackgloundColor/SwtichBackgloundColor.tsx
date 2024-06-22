import { useSwtichBackgloundColor } from "../../hooks/useSwtichBackgloundColor";
import Button from "../ui/Button";

export default function SwtichBackgloundColor() {
  const { currentColor, handleCurrentColorIndex } = useSwtichBackgloundColor();
  return (
    <div className="h-screen pt-8" style={{ backgroundColor: currentColor }}>
      <div className="flex justify-center">
        <Button name="色を変更" onClick={handleCurrentColorIndex} />
      </div>
    </div>
  );
}
