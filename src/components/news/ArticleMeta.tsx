import { Facebook, Linkedin, Twitter, MessageCircle, Bookmark, Share2 } from "lucide-react";

interface ArticleMetaProps {
  author: string;
  role: string;
  publishDate: string;
  publishTime: string;
  commentCount: number;
}

export function ArticleMeta({ author, role, publishDate, publishTime, commentCount }: ArticleMetaProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-4 border-y border-news-divider">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
            <span className="text-sm font-semibold text-muted-foreground">
              {author.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm">Par {author}</p>
            <p className="text-xs text-muted-foreground">{role}</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          Publié le {publishDate} à {publishTime}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1877F2] text-white hover:opacity-90 transition-opacity">
            <Facebook className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-foreground text-background hover:opacity-90 transition-opacity">
            <Twitter className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0A66C2] text-white hover:opacity-90 transition-opacity">
            <Linkedin className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-accent transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
        <div className="h-6 w-px bg-border" />
        <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <MessageCircle className="w-4 h-4" />
          <span>{commentCount}</span>
        </button>
        <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <Bookmark className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
