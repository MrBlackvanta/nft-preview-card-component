import avatar2x from "@/assets/image-avatar-2x.webp";
import avatar from "@/assets/image-avatar.webp";
import artwork2x from "@/assets/image-equilibrium-2x.webp";
import artwork from "@/assets/image-equilibrium.webp";

export const nft = {
  title: "Equilibrium #3429",
  href: "/nfts/equilibrium-3429",
  description: "Our Equilibrium collection promotes balance and calm.",
  price: "0.041 ETH",
  timeLeft: { label: "3 days left", duration: "P3D" },
  artwork: {
    image: artwork,
    image2x: artwork2x,
    alt: "Equilibrium #3429, a glass cube on a deep blue ground",
  },
  creator: {
    name: "Jules Wyvern",
    href: "/creators/jules-wyvern",
    avatar,
    avatar2x,
  },
};

export type Nft = typeof nft;
