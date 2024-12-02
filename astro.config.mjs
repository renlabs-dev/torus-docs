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
            { label: "Setup Torus", slug: "installation/setup-torus" },
            { label: "Setup Wallet", slug: "installation/setup-wallet" },
          ],
        },
        {
          label: "Modules",
          items: [
            { label: "What is a Module", slug: "modules/what-is-a-module" },
            { label: "Register a Module", slug: "modules/register-a-module" },
            {
              label: "Connect to a Module",
              slug: "modules/connect-to-a-module",
            },
          ],
        },
        {
          label: "Subnets",
          items: [
            { label: "What is a Subnet", slug: "subnets/what-is-a-subnet" },
            {
              label: "Participating on a Subnet",
              slug: "subnets/participating-on-a-subnet",
            },
            { label: "Building a Subnet", slug: "subnets/building-a-subnet" },
            { label: "Subnet Template", slug: "subnets/subnet-template" },
            { label: "Deploying a Subnet", slug: "subnets/deploying-a-subnet" },
            { label: "Subnet Parameters", slug: "subnets/subnet-parameters" },
            { label: "General Subnet", slug: "subnets/general-subnet" },
            { label: "General Subnet DAO", slug: "subnets/general-subnet-dao" },
            { label: "Yuma Subnets", slug: "subnets/yuma-subnets" },
            { label: "Root Subnet", slug: "subnets/root-subnet" },
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
          label: "Mining",
          items: [
            { label: "What is mining", slug: "mining/what-is-mining" },
            { label: "Create a Miner", slug: "mining/create-a-miner" },
            { label: "Run a miner", slug: "mining/run-a-miner" },
          ],
        },
        {
          label: "Validating",
          items: [
            {
              label: "What is validating",
              slug: "validating/what-is-validating",
            },
            {
              label: "Create a Validator",
              slug: "validating/create-a-validator",
            },
            { label: "Run a Validator", slug: "validating/run-a-validator" },
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
