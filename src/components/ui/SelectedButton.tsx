interface Props {
  name: string;
  onClick?: () => void;
}

export default function SelectedButton({ name, onClick }: Props) {
  return (
    <button
      type="button"
      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      onClick={onClick}
    >
      {name}
    </button>
  );
}
