import logoAsset from "@/assets/shree-radhe-logo.jpeg.asset.json";

export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Shree Radhe Travels logo"
      className={`${className} rounded-md object-contain bg-white`}
      loading="eager"
      decoding="async"
    />
  );
}

export const LOGO_URL = logoAsset.url;
