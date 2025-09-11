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
            { label: "Understanding Torus", slug: "getting-started/understanding-torus" },
          ],
        },
        {
          label: "Explanations",
          items: [
            { label: "Table of Contents", slug: "explanations/table-of-contents" },
            {
              label: "System",
              collapsed: true,
              items: [
                { label: "Control Space", slug: "explanations/system/control-space" },
                { label: "Permission System", slug: "explanations/system/permission-system" },
                { label: "Recursive Delegation", slug: "explanations/system/recursive-delegation" },
                { label: "Wallet Stake Permission", slug: "explanations/system/wallet-scope-delegation" },
                { label: "Stream Permissions", slug: "explanations/system/stream-permissions" },
                { label: "Capability Permissions", slug: "explanations/system/capability-permissions" },
              ],
            },
            {
              label: "Holders",
              collapsed: true,
              items: [

                { label: "Tokenomics", slug: "explanations/holders/tokenomics" },
                { label: "Staking", slug: "explanations/holders/staking" },
              ],
            },
            {
              label: "Builders",
              collapsed: true,
              items: [
                { label: "Agent Registration", slug: "explanations/builders/agent-registration" },
                { label: "Agent Managing", slug: "explanations/builders/agent-managing" },
                { label: "Demand Signaling", slug: "explanations/builders/demand-signaling" },
                { label: "Agent Server", slug: "explanations/builders/agent-server" },
                { label: "Agent Client", slug: "explanations/builders/agent-client" },
              ],
            },
            {
              label: "Goal Leaders",
              collapsed: true,
              items: [
                { label: "Root Agents", slug: "explanations/goal-leaders/root-agents" },
                { label: "DAO Treasury", slug: "explanations/goal-leaders/dao-treasury" },
                { label: "Emission Proposals", slug: "explanations/goal-leaders/emission-proposals" },
                { label: "Governance & DAO", slug: "explanations/goal-leaders/governance-dao" },
              ],
            },
            { label: "Concepts & Terminology", slug: "explanations/concepts-terminology" },
          ],
        },
        {
          label: "How-to Guides",
          items: [
            { label: "Table of Contents", slug: "how-to-guides/table-of-contents" },
            {
              label: "System",
              collapsed: true,
              items: [

                { label: "Create Capability Permission", slug: "how-to-guides/system/create-capability-permission" },
                { label: "Create Stream Permission", slug: "how-to-guides/system/create-stream-permission" },
                { label: "Create Wallet Stake Permission", slug: "how-to-guides/system/create-wallet-stake-permission" },
                { label: "Manage Permissions", slug: "how-to-guides/system/manage-permissions" },
              ],
            },
            {
              label: "Holders",
              collapsed: true,
              items: [
                { label: "Setup a Wallet", slug: "how-to-guides/holders/setup-a-wallet" },
                { label: "Bridge from Base", slug: "how-to-guides/holders/bridge-from-base" },
                { label: "Stake your Torus", slug: "how-to-guides/holders/stake-your-torus" },
                { label: "Vote on Proposals", slug: "how-to-guides/holders/vote-on-proposals" },
              ],
            },
            {
              label: "Builders",
              collapsed: true,
              items: [
                { label: "Register an Agent", slug: "how-to-guides/builders/register-an-agent" },
                { label: "Manage your Agent", slug: "how-to-guides/builders/manage-your-agent" },
                { label: "Manage Capabilities", slug: "how-to-guides/builders/manage-capabilities" },
                { label: "Create a Signal", slug: "how-to-guides/builders/create-signal" },
                { label: "Setup Agent Server", slug: "how-to-guides/builders/setup-agent-server" },
                { label: "Setup Agent Client", slug: "how-to-guides/builders/setup-agent-client" },
              ],
            },
            {
              label: "Goal Leaders",
              collapsed: true,
              items: [
                { label: "Become a Root Agent", slug: "how-to-guides/goal-leaders/become-a-root-agent" },
                { label: "Request DAO Treasury Transfer", slug: "how-to-guides/goal-leaders/request-dao-treasury-transfer" },
                { label: "Create Emission Proposal", slug: "how-to-guides/goal-leaders/create-emission-proposal" },
              ],
            },
          ],
        },
        {
          label: "Development",
          items: [
            { label: "Table of Contents", slug: "development/table-of-contents" },
            {
              label: "Web Apps",
              collapsed: true,
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
              collapsed: true,
              items: [
                { label: "Setup CLI", slug: "development/cli/setup-cli" },
                { label: "Key Management", slug: "development/cli/key-management" },
                { label: "Balance Operations", slug: "development/cli/balance-operations" },
              ],
            },
            {
              label: "Network Operations",
              collapsed: true,
              items: [
                { label: "Global Parameters", slug: "development/network/global-parameters" },
                { label: "Running a Node", slug: "development/network/running-node" },
              ],
            },
          ],
        },
      ],
      components: {
        Head: './src/components/Head.astro',
      },
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
