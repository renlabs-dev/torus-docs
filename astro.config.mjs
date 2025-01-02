// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.torus.network",
  integrations: [
    starlight({
      title: "Torus Docs",
      logo: {
        replacesTitle: true,
        light: "./src/assets/light-logo.svg",
        dark: "./src/assets/dark-logo.svg",
      },
      social: {
        github: "https://github.com/renlabs-dev",
        telegram: "https://t.me/torusnetwork",
        discord: "https://discord.gg/torus",
        "x.com": "https://twitter.com/torus_network",
      },
      sidebar: [
        {
          label: "Getting Started",
          items: [{ label: "Introduction", slug: "index" }],
        },
        {
          label: "Concepts",
          items: [
            { label: "Basics", slug: "concepts/basics" },
            { label: "Weight System", slug: "concepts/weight-system" },
            { label: "Governance", slug: "concepts/governance" },
          ],
        },
        {
          label: "Installation",
          items: [
            { label: "Setup Torus CLI", slug: "installation/setup-torus-cli" },
            { label: "Setup Wallet", slug: "installation/setup-wallet" },
          ],
        },
        {
          label: "Agents",
          items: [
            { label: "What is a Agent", slug: "agents/what-is-a-agent" },
            { label: "Register a Agent", slug: "agents/register-a-agent" },
            {
              label: "Connect to a Agent",
              slug: "agents/connect-to-a-agent",
            },
          ],
        },
        {
          label: "Working with Keys",
          items: [
            { label: "Key Basics", slug: "keys/key-basics" },
            {
              label: "Balance Operations",
              slug: "keys/balance-operations",
            },
          ],
        },
        {
          label: "Subspace",
          items: [
            { label: "Torus Blockchain", slug: "subspace/torus-blockchain" },
            { label: "Global Parameters", slug: "subspace/global-parameters" },
            { label: "Yuma Consensus", slug: "subspace/yuma-consensus" },
            { label: "Testnet", slug: "subspace/testnet" },
            { label: "EVM", slug: "subspace/evm" },
            {
              label: "Running a Local Node",
              slug: "subspace/running-a-local-node",
            },
            {
              label: "Running a Private Chain",
              slug: "subspace/running-a-private-chain",
            },
          ],
        },
      ],
      editLink: {
        baseUrl: "https://github.com/renlabs-dev/torus-docs/edit/main/docs/",
      },
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
