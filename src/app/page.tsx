import { nft } from "@/data";
import { NftCard } from "@/views/home";

export default function Home() {
  return (
    <main className="@container grid grow place-items-center px-6 py-12">
      <NftCard nft={nft} />
    </main>
  );
}
