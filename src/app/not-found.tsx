import { nft, SITE_NAME } from "@/data";
import type { Metadata } from "next";
import Link from "next/link";

const description = `Nothing is minted at this address, but ${nft.title} is still listed at ${nft.price}.`;

export const metadata: Metadata = {
  title: `${SITE_NAME} | Page not found`,
  description,
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <main className="@container grid grow place-items-center px-6 py-12">
      <div className="w-full max-w-card rounded-card bg-surface p-6 shadow-card @card:pb-8">
        <p className="text-meta-sm font-semibold text-accent @card:text-meta">
          Error 404
        </p>
        <h1 className="mt-2 text-title font-semibold">Page not found</h1>
        <p className="mt-3 text-body font-light text-pretty text-muted @card:mt-4">
          {description}
        </p>
        <p className="mt-4 border-t border-line pt-4 text-meta-sm @card:mt-6 @card:text-meta">
          <Link href="/" className="v-link">
            Back to {nft.title}
          </Link>
        </p>
      </div>
    </main>
  );
}
