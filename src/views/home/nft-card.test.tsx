import { nft } from "@/data";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vite-plus/test";
import NftCard from "./nft-card";

describe("NftCard", () => {
  it("names the card after its title heading", () => {
    render(<NftCard nft={nft} />);

    expect(
      screen.getByRole("article", { name: "Equilibrium #3429" }),
    ).toContainElement(screen.getByRole("heading", { level: 1 }));
  });

  it("pairs each listing detail with its label", () => {
    render(<NftCard nft={nft} />);

    const details = screen
      .getAllByRole("term")
      .map((term) => [
        term.textContent,
        term.nextElementSibling?.textContent ?? null,
      ]);

    expect(details).toEqual([
      ["Price", "0.041 ETH"],
      ["Time left", "3 days left"],
    ]);
  });

  it("gives the time left a machine-readable duration", () => {
    render(<NftCard nft={nft} />);

    expect(screen.getByText("3 days left")).toHaveAttribute("datetime", "P3D");
  });

  it("announces the artwork and hides the avatar beside the creator's name", () => {
    render(<NftCard nft={nft} />);

    expect(screen.getAllByRole("img")).toEqual([
      screen.getByAltText(
        "Equilibrium #3429, a glass cube on a deep blue ground",
      ),
    ]);
  });

  it("stops the keyboard once per destination, title then creator", async () => {
    const user = userEvent.setup();
    render(<NftCard nft={nft} />);

    await user.tab();
    expect(
      screen.getByRole("link", { name: "Equilibrium #3429" }),
    ).toHaveFocus();

    await user.tab();
    expect(screen.getByRole("link", { name: "Jules Wyvern" })).toHaveFocus();

    await user.tab();
    expect(document.body).toHaveFocus();
  });

  it("sends the artwork and title to the listing, the name to the creator", () => {
    render(<NftCard nft={nft} />);
    const hrefOf = (name: string) =>
      screen.getByRole("link", { name }).getAttribute("href");

    expect([
      hrefOf("Equilibrium #3429, a glass cube on a deep blue ground"),
      hrefOf("Equilibrium #3429"),
      hrefOf("Jules Wyvern"),
    ]).toEqual([
      "/nfts/equilibrium-3429",
      "/nfts/equilibrium-3429",
      "/creators/jules-wyvern",
    ]);
  });
});
