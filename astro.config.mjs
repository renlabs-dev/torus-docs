// @ts-check
import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

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
            { label: "Tokenomics", slug: "getting-started/tokenomics" },
            {
              label: "Concepts & Terminology",
              slug: "getting-started/concepts",
            },
          ],
        },
        {
          label: "Explanations",
          items: [
            { label: "Start Here", slug: "explanations/start-here" },
            {
              label: "v0.5",
              items: [
                { label: "Control Space", slug: "explanations/v05/control-space" },
                { label: "Permission System", slug: "explanations/v05/permissions" },
                {
                  label: "Capability Permissions",
                  slug: "explanations/v05/capability-permissions",
                },
                { label: "Emission Permissions", slug: "explanations/v05/emission-permissions" },
                { label: "Governance & DAO", slug: "explanations/v05/governance-dao" },
              ],
            },
            {
              label: "Builders",
              collapsed: false,
              items: [
                { label: "Agent Registration", slug: "explanations/builders/agent-registration" },
                { label: "Agent Server", slug: "explanations/builders/agent-server" },
                { label: "Agent Client", slug: "explanations/builders/agent-client" },
                { label: "Agent Editing", slug: "explanations/builders/agent-editing" },
                { label: "Demand Signaling", slug: "explanations/builders/demand-signaling" },
              ],
            },
            {
              label: "Leaders",
              collapsed: false,
              items: [
                { label: "Root Agents", slug: "explanations/root-agents/root-agents" },
              ],
            },
          ],
        },
        {
          label: "How-to Guides",
          items: [
            { label: "Start Here", slug: "how-to-guides/start-here" },
            {
              label: "Holders",
              collapsed: false,
              items: [
                { label: "Setup a Wallet", slug: "how-to-guides/participants/setup-a-wallet" },
                { label: "Bridge from Base", slug: "how-to-guides/participants/bridge-from-base" },
                { label: "Stake your Torus", slug: "how-to-guides/participants/stake-your-torus" },
              ],
            },
            {
              label: "Builders",
              collapsed: false,
              items: [
                { label: "Setup CLI", slug: "how-to-guides/builders/setup-cli" },
                { label: "Register an Agent", slug: "how-to-guides/builders/register-an-agent" },
                { label: "Edit your Agent", slug: "how-to-guides/builders/edit-your-agent" },
                { label: "Create a Signal", slug: "how-to-guides/builders/create-signal" },
                { label: "Setup Agent Server", slug: "how-to-guides/builders/setup-agent-server" },
                { label: "Setup Agent Client", slug: "how-to-guides/builders/setup-agent-client" },
              ],
            },
            {
              label: "Goal Leaders",
              collapsed: false,
              items: [
                { label: "Become a Root Agent", slug: "how-to-guides/root-agents/become-a-root-agent" },
              ],
            },
          ],
        },
        // {
        //   label: "Web Apps",
        //   items: [
        //     { label: "Torus Portal", slug: "web-apps/torus-portal" },
        //     { label: "Torus Allocator", slug: "web-apps/torus-allocator" },
        //     { label: "Torus Wallet", slug: "web-apps/torus-wallet" },
        //     { label: "Torus DAO", slug: "web-apps/torus-dao" },
        //   ],
        // },
        {
          label: "Development",
          items: [
            { label: "Start Here", slug: "development/start-here" },
            {
              label: "Web Apps",
              collapsed: false,
              items: [
                {
                  label: "Overview and Setup",
                  slug: "development/web-apps-overview-and-setup",
                },
                {
                  label: "Querying Data",
                  slug: "development/querying-data",
                },
              ],
            },
            {
              label: "CLI Reference",
              collapsed: false,
              items: [
                { label: "Key Management", slug: "development/cli/key-management" },
                { label: "Balance Operations", slug: "development/cli/balance-operations" },
              ],
            },
            {
              label: "Network Operations",
              collapsed: false,
              items: [
                { label: "Global Parameters", slug: "development/network/global-parameters" },
                { label: "Running a Node", slug: "development/network/running-node" },
              ],
            },
          ],
        },
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
