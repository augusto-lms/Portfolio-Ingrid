function getEmbedUrl(url?: string) {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    const allowed = parsed.hostname === "instagram.com" || parsed.hostname.endsWith(".instagram.com");
    const match = parsed.pathname.match(/^\/(p|reel|tv)\/([A-Za-z0-9_-]+)/);
    return allowed && match ? `https://www.instagram.com/${match[1]}/${match[2]}/embed/captioned/` : null;
  } catch {
    return null;
  }
}

export function InstagramEmbed({ value }: { value: { url?: string } }) {
  const embedUrl = getEmbedUrl(value.url);
  return (
    <aside className="instagram-block" aria-label="Publicação do Instagram">
      {embedUrl ? (
        <iframe
          src={embedUrl}
          title="Publicação da Ingrid no Instagram"
          loading="lazy"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      ) : (
        <p>Não foi possível carregar esta publicação. {value.url && <a href={value.url} rel="noreferrer" target="_blank">Ver no Instagram →</a>}</p>
      )}
    </aside>
  );
}
