import { ContentObj } from "../../types/content";
import BoxContent from "./BoxContent";
interface Props {
  contents: ContentObj[];
}

export default function ThreeBoxContent({ contents }: Props) {
  return (
    <div className="grid grid-cols-3 gap-x-4">
      {contents.map((content) => (
        <BoxContent content={content} />
      ))}
    </div>
  );
}
