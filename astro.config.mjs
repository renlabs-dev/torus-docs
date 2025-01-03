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
          label: "The Vision",
          items: [
            { label: "Introduction", slug: "index" },
            { label: "v1 Concepts and Terminologies", slug: "concepts/terminologies" },

          ],
        },
        {
          label: "v0",
          items: [
            { label: "Basics", slug: "concepts/basics" },
            { label: "Torus DAO", slug: "concepts/torus-dao" },
            {
              label: "Agent Application",
              slug: "concepts/agent-application",
            },
            { label: "Tokenomics", slug: "concepts/tokenomics" },
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
          label: "Agents & Modules",
          items: [
            { label: "What are agents and modules", slug: "agents/what-is-a-agent" },
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
            { label: "Global Parameters", slug: "subspace/global-parameters" },
            {
              label: "Running a Local Node",
              slug: "subspace/running-the-chain",
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
