type Props = {
  id: string;
};

export function TechnologyIcon({ id }: Props) {
  return (
    <span className="text-xs font-semibold">
      {id}
    </span>
  );
}