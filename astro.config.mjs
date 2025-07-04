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
            {
              label: "v1 Concepts and Terminology",
              slug: "concepts/terminology",
            },
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
            { label: "Concepts", slug: "agents/what-is-an-agent" },
            {
              label: "Register to the Network",
              slug: "agents/register-an-agent",
            },
            {
              label: "Edit your Agent",
              slug: "agents/edit-your-agent",
            },
            {
              label: "Connect to a Module",
              slug: "agents/connect-to-an-agent",
            },
            {
              label: "Agent Server",
              slug: "agents/agent-server",
            },
            {
              label: "Agent Client",
              slug: "agents/agent-client",
            },
            {
              label: "Namespace Permissions",
              slug: "agents/namespace-permissions",
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
          label: "The Chain",
          items: [
            { label: "Global Parameters", slug: "chain/global-parameters" },
            {
              label: "Running a Local Node",
              slug: "chain/running-the-chain",
            },
          ],
        },
        {
          label: "Web apps",
          items: [
            {
              label: "Introduction",
              slug: "web-apps/intro",
            },
            {
              label: "Installation",
              slug: "web-apps/installation",
            },
            {
              label: "Develop",
              slug: "web-apps/develop",
            },
            {
              label: "Querying allocated stake",
              slug: "web-apps/querying-stake-weight",
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
