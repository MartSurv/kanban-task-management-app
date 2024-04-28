type PageProps = { params: { id: "3" }; searchParams: { taskId: "21" } };

export default function Page({ searchParams: { taskId } }: PageProps) {
  if (!taskId) {
    return null;
  }

  return (
    <div className="absolute h-screen w-screen transform bg-black/50">
      <article className="absolute left-1/2 top-1/2 w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-8 dark:bg-dark-grey dark:text-white">
        Im a modal
      </article>
    </div>
  );
}
