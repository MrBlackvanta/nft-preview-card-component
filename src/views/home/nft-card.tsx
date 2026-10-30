import { ClockIcon, EthereumIcon, ViewIcon } from "@/components/icons";
import type { Nft } from "@/data";
import { useId } from "react";

export default function NftCard({ nft }: { nft: Nft }) {
  const titleId = useId();
  const { artwork, creator } = nft;

  return (
    <article
      aria-labelledby={titleId}
      className="w-full max-w-card rounded-card bg-surface p-6 shadow-card @card:pb-8"
    >
      <a
        href={nft.href}
        tabIndex={-1}
        className="group/artwork relative block overflow-hidden rounded-lg"
      >
        <img
          src={artwork.image.src}
          srcSet={`${artwork.image.src} 1x, ${artwork.image2x.src} 2x`}
          width={artwork.image.width}
          height={artwork.image.height}
          alt={artwork.alt}
          fetchPriority="high"
          className="w-full"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 grid place-items-center bg-accent/50 opacity-0 ease-out group-hover/artwork:opacity-100 motion-safe:transition-opacity motion-safe:duration-250"
        >
          <ViewIcon />
        </span>
      </a>
      <h1 id={titleId} className="mt-6 text-title font-semibold">
        <a href={nft.href} className="v-link">
          {nft.title}
        </a>
      </h1>
      <p className="mt-3 text-body font-light text-muted @card:mt-4">
        {nft.description}
      </p>
      <dl className="mt-4 flex items-center justify-between text-meta-sm @card:mt-6 @card:text-meta">
        <div>
          <dt className="sr-only">Price</dt>
          <dd className="flex items-center gap-1.5 font-semibold text-accent">
            <EthereumIcon />
            {nft.price}
          </dd>
        </div>
        <div>
          <dt className="sr-only">Time left</dt>
          <dd className="flex items-center gap-1.75 text-muted">
            <ClockIcon />
            <time dateTime={nft.timeLeft.duration}>{nft.timeLeft.label}</time>
          </dd>
        </div>
      </dl>
      <footer className="mt-4 flex items-center gap-4 border-t border-line pt-4 @card:mt-6">
        <img
          src={creator.avatar.src}
          srcSet={`${creator.avatar.src} 1x, ${creator.avatar2x.src} 2x`}
          width={creator.avatar.width}
          height={creator.avatar.height}
          alt=""
          className="rounded-full outline -outline-offset-1 outline-white"
        />
        <p className="text-meta-sm text-muted @card:text-meta">
          Creation of{" "}
          <a
            href={creator.href}
            className="whitespace-nowrap v-link text-white"
          >
            {creator.name}
          </a>
        </p>
      </footer>
    </article>
  );
}
