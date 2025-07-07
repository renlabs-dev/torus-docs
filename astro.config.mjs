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
          items: [
            { label: "Introduction", slug: "index" },
            { label: "Concepts & Terminology", slug: "getting-started/concepts" },
            { label: "Setup CLI", slug: "getting-started/setup-cli" },
            { label: "Setup Wallet", slug: "getting-started/setup-wallet" },
          ],
        },
        {
          label: "v0.5",
          items: [
           // { label: "Network Overview", slug: "concepts/network-overview" },
           { label: "Control Space", slug: "v05/control-space" },
           { label: "Permission System", slug: "v05/permissions" },
           { label: "Capability Permissions", slug: "v05/capability-permissions" },
           { label: "Emission Permissions", slug: "v05/emission-permissions" },
           { label: "Tokenomics", slug: "concepts/tokenomics" },
           { label: "Governance & DAO", slug: "concepts/governance-dao" },
          ],
        },
        {
          label: "Working with Agents",
          items: [
            { label: "Register an Agent", slug: "agents/register-agent" },
            { label: "Become a Root Agent", slug: "agents/apply-root-agent" },
            { label: "Agent Server Setup", slug: "agents/server-setup" },
            { label: "Agent Client", slug: "agents/client" },
            { label: "Demand Signaling", slug: "agents/demand-signaling" },
            { label: "Managing Your Agent", slug: "agents/management" },
          ],
        },
        {
          label: "CLI & Tools",
          items: [
            { label: "Key Management", slug: "cli/key-management" },
            { label: "Balance Operations", slug: "cli/balance-operations" },
          ],
        },
        // {
        //   label: "Web Apps",
        //   items: [
        //     {
        //       label: "Overview",
        //       slug: "development/web-apps-overview",
        //     },
        //     { label: "Torus Portal", slug: "web-apps/torus-portal" },
        //     { label: "Torus Allocator", slug: "web-apps/torus-allocator" },
        //     { label: "Torus Wallet", slug: "web-apps/torus-wallet" },
        //     { label: "Torus Bridge", slug: "web-apps/torus-bridge" },
        //     { label: "Torus DAO", slug: "web-apps/torus-dao" },
        //   ],
        // },
        {
          label: "Development",
          items: [
            {
              label: "Development Guide",
              slug: "development/guide",
            },
            {
              label: "Querying Data",
              slug: "development/querying-data",
            },
          ],
        },
        {
          label: "Network Operations",
          items: [
            { label: "Global Parameters", slug: "network/global-parameters" },
            {
              label: "Running a Node",
              slug: "network/running-node",
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
  
  vite: {
    server: {
      host: true,
      allowedHosts: true,
    },
  },
});
