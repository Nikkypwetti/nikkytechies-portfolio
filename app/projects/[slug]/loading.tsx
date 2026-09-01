export default function ProjectLoading() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-28" aria-live="polite" aria-busy="true">
      <div className="animate-pulse space-y-8">
        <div className="h-5 w-36 rounded-full bg-muted" />
        <div className="h-14 max-w-3xl rounded-2xl bg-muted md:h-20" />
        <div className="h-7 max-w-2xl rounded-xl bg-muted" />
        <div className="aspect-video w-full rounded-3xl bg-muted" />
      </div>
      <p className="sr-only">Loading the next case study</p>
    </main>
  );
}
