import ThreeBoxContent from "./ThreeBoxContent";
const contents = [
  {
    title: "これはタイトルです",
    content:
      "これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。",
  },
  {
    title: "これはタイトルです",
    content:
      "これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。",
  },
  {
    title: "これはタイトルです",
    content:
      "これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。",
  },
];
export default function Content() {
  return (
    <div className="mx-auto max-w-4xl mt-10">
      <ThreeBoxContent contents={contents} />
    </div>
  );
}
