export default function Page({ params }: { params: { board: string } }) {
  return <div>{params.board}</div>;
}
