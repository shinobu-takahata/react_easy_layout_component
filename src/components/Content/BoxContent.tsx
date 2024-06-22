import { ContentObj } from "../../types/content";

interface Props {
  content: ContentObj;
}
export default function BoxContent({ content }: Props) {
  return (
    <div className="shadow-xl p-6">
      <h3 className="text-xl font-bold">{content.title}</h3>
      <p className="mt-4 text-base">{content.content}</p>
    </div>
  );
}
