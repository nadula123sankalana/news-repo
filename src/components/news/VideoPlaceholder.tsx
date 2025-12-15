import { Play } from "lucide-react";

interface VideoPlaceholderProps {
  imageUrl?: string;
  caption?: string;
}

export function VideoPlaceholder({ imageUrl, caption }: VideoPlaceholderProps) {
  return (
    <figure className="my-6 max-w-4xl mx-auto">
      <div className="relative aspect-video bg-muted rounded-sm overflow-hidden group cursor-pointer">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt="Article illustration" 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-muted to-accent flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary transition-colors shadow-lg">
                <Play className="w-8 h-8 text-primary-foreground ml-1" />
              </div>
              <p className="text-sm text-muted-foreground">Watch video</p>
            </div>
          </div>
        )}
        {imageUrl && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
              <Play className="w-6 h-6 text-primary-foreground ml-1" />
            </div>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-sm">
            VIDEO
          </span>
        </div>
      </div>
      {caption && (
        <figcaption className="text-xs text-muted-foreground mt-2 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
