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
          label: "Core Concepts",
          items: [
            { label: "Network Overview", slug: "concepts/network-overview" },
            { label: "Stake & Weights", slug: "concepts/stake-weights" },
            { label: "Governance & DAO", slug: "concepts/governance-dao" },
            { label: "Tokenomics", slug: "concepts/tokenomics" },
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
            { label: "Emission Stream Allocation", slug: "agents/emission-stream-allocation" },
            { label: "Managing Your Agent", slug: "agents/management" },
          ],
        },
        {
          label: "Advanced Features",
          items: [
            { label: "Control Space", slug: "advanced/control-space" },
            { label: "Permission System", slug: "advanced/permissions" },
            { label: "Capability Permissions", slug: "advanced/capability-permissions" },
          ],
        },
        {
          label: "CLI & Tools",
          items: [
            { label: "Key Management", slug: "cli/key-management" },
            { label: "Balance Operations", slug: "cli/balance-operations" },
          ],
        },
        {
          label: "Web Apps",
          items: [
            { label: "Torus Portal", slug: "web-apps/torus-portal" },
            { label: "Torus Allocator", slug: "web-apps/torus-allocator" },
            { label: "Torus Wallet", slug: "web-apps/torus-wallet" },
            { label: "Torus Bridge", slug: "web-apps/torus-bridge" },
            { label: "Torus DAO", slug: "web-apps/torus-dao" },
          ],
        },
        {
          label: "Development",
          items: [
            {
              label: "Web Apps Overview",
              slug: "development/web-apps-overview",
            },
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
