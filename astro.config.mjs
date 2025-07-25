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
            { label: "Welcome", slug: "index" },
            { label: "Tokenomics", slug: "getting-started/tokenomics" },
            { label: "Concepts & Terminology", slug: "getting-started/concepts-terminology" },
            { label: "Understanding Torus", slug: "getting-started/concepts" },
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
                { label: "Agent Editing", slug: "explanations/builders/agent-editing" },
                { label: "Demand Signaling", slug: "explanations/builders/demand-signaling" },
                { label: "Agent Server", slug: "explanations/builders/agent-server" },
                { label: "Agent Client", slug: "explanations/builders/agent-client" },
              ],
            },
            {
              label: "Goal Leaders",
              collapsed: false,
              items: [
                { label: "Root Agents", slug: "explanations/goal-leaders/root-agents" },
                { label: "Emission Proposals", slug: "explanations/goal-leaders/emission-proposals" },
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
                { label: "Setup a Wallet", slug: "how-to-guides/holders/setup-a-wallet" },
                { label: "Bridge from Base", slug: "how-to-guides/holders/bridge-from-base" },
                { label: "Stake your Torus", slug: "how-to-guides/holders/stake-your-torus" },
              ],
            },
            {
              label: "Builders",
              collapsed: false,
              items: [
                { label: "Register an Agent", slug: "how-to-guides/builders/register-an-agent" },
                { label: "Edit your Agent", slug: "how-to-guides/builders/edit-your-agent" },
                { label: "Manage Capabilities", slug: "how-to-guides/builders/manage-capabilities" },
                { label: "Manage Permissions", slug: "how-to-guides/builders/manage-permissions" },
                { label: "Create a Signal", slug: "how-to-guides/builders/create-signal" },
                // { label: "Delegate Emission Streams", slug: "how-to-guides/builders/delegate-emission-streams" },
                { label: "Setup Agent Server", slug: "how-to-guides/builders/setup-agent-server" },
                { label: "Setup Agent Client", slug: "how-to-guides/builders/setup-agent-client" },
              ],
            },
            {
              label: "Goal Leaders",
              collapsed: false,
              items: [
                { label: "Become a Root Agent", slug: "how-to-guides/goal-leaders/become-a-root-agent" },
                { label: "Create Emission Proposal", slug: "how-to-guides/goal-leaders/create-emission-proposal" },
              ],
            },
          ],
        },
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
                  slug: "development/web/overview-and-setup",
                },
                {
                  label: "Querying Data",
                  slug: "development/web/querying-data",
                },
              ],
            },
            {
              label: "CLI Reference",
              collapsed: false,
              items: [
                { label: "Setup CLI", slug: "development/cli/setup-cli" },
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
