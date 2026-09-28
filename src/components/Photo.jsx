import { useState } from "react";
import { Building2 } from "lucide-react";

export default function Photo({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-iiti-navy to-iiti-royal text-iiti-gold ${className}`}
        role="img"
        aria-label={alt || "Campus photograph"}
      >
        <Building2 className="h-10 w-10 opacity-80" aria-hidden="true" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
    />
  );
}
