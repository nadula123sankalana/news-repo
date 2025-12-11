export function NewsHeader() {
  return (
    <header className="bg-news-nav text-news-nav">
      <div className="container flex items-center justify-center h-14">
        <div className="flex items-center gap-2">
          <div className="bg-primary text-primary-foreground font-bold text-xl px-2 py-1 rounded-sm">
            INFO
          </div>
          <span className="font-headline text-2xl font-bold">
            Business
          </span>
        </div>
      </div>
    </header>
  );
}