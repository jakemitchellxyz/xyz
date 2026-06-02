import React from 'react'

import Keyword from '../components/Keyword'

import { types } from './skills'

export const useProjects = () => {
  const getTopProjects = (filter, count = 3) => {
    const eligible = projects.filter(p => p.showOnResume !== false)
    if (!filter) {
      return [...eligible]
        .sort((a, b) => a.defaultRank - b.defaultRank)
        .slice(0, count)
    }
    return [...eligible]
      .map(p => ({
        ...p,
        score: p.technologies.filter(t => filter.includes(t)).length,
      }))
      .sort((a, b) => b.score - a.score || a.defaultRank - b.defaultRank)
      .slice(0, count)
  }

  // Returns all projects matching a given tag (for the Projects index page)
  const getProjectsByTag = (tag) => {
    return projects.filter(p => p.technologies.includes(tag))
  }

  return { getTopProjects, getProjectsByTag }
}

export const projects = [
  // ── Professional Projects ──────────────────────────────────────────────────
  // showOnResume: false keeps them off the resume's Relevant Projects section
  // since they already appear in Employment History.
  {
    name: 'Bluebook (Digital SAT)',
    logo: '/logos/college-board.png',
    link: '/projects/bluebook',
    tagline: 'Senior Software Engineer at The College Board',
    defaultRank: 0,
    technologies: [
      types.frontend,
      types.backend,
      types.serverless,
      types.security,
      types.blockchain,
      types.qa,
      types.tooling,
      types.language,
      types.multiPlatform,
      types.cloudInfrastructure,
    ],
    victories: [
      <>Production <Keyword>React PWA</Keyword> serving millions of concurrent students during the Digital SAT, with strict correctness, performance, and availability requirements across tens of millions of diverse devices</>,
      <>AWS serverless backend with <Keyword>cross-region active-active</Keyword> architecture, a <Keyword>blockchain integrity ledger</Keyword> per student, and three DynamoDB tables at <Keyword>billions-of-records</Keyword> scale</>,
      <><Keyword>31 critical vulnerabilities</Keyword> remediated, <Keyword>JScrambler</Keyword> obfuscation pipeline implemented, and observability-as-code infrastructure monitoring deployed for Lambda, DynamoDB, and API Gateway</>,
    ],
  },
  {
    name: '100k Mentor Challenge',
    logo: '/logos/100k.png',
    link: '/projects/100k',
    tagline: 'Lead Solutions Architect at ProMazo',
    defaultRank: 0.5,
    technologies: [
      types.frontend,
      types.backend,
      types.serverless,
      types.qa,
      types.tooling,
      types.mobile,
      types.multiPlatform,
      types.cloudInfrastructure,
    ],
    victories: [
      <>Cross-platform <Keyword>iOS and Android</Keyword> app built by a 3-engineer team: launched from <Keyword>MVP to 1,000+ downloads</Keyword> within months with a 4.2★ App Store rating and Fortune 500 corporate partners</>,
      <>AWS serverless backend with a dedicated <Keyword>EC2 matching algorithm</Keyword> computing ranked mentor/mentee candidate lists from preference vectors via stable-match resolution</>,
      <><Keyword>220k+ line</Keyword> React Native codebase with full CI/CD pipeline to both app stores via <Keyword>AWS Amplify</Keyword>, plus Jest, Storybook, and Docsify for QA and living documentation</>,
    ],
  },

  // ── Personal Projects ──────────────────────────────────────────────────────
  {
    name: 'Money Studio',
    logo: '/logos/money-studio.png',
    link: '/projects/money-studio',
    tagline: 'Founder & Principal Engineer',
    defaultRank: 1,
    technologies: [
      types.frontend,
      types.backend,
      types.serverless,
      types.security,
      types.tooling,
      types.language,
      types.blockchain,
      types.mobile,
      types.multiPlatform,
      types.cloudInfrastructure,
      types.ai,
    ],
    victories: [
      <>Built as <Keyword>founder and principal engineer</Keyword>: a TypeScript monorepo shipping a financial visualization platform to <Keyword>5 platforms</Keyword> (web PWA, iOS, Android, Electron, Tauri) from a single codebase</>,
      <>On-device <Keyword>AI assistant</Keyword> powered by <Keyword>WebLLM</Keyword> (WebGPU/WASM) with a custom <Keyword>RAG pipeline</Keyword> grounded in the user&apos;s financial data via an encrypted local vector store</>,
      <>Architected a <Keyword>knowledge graph</Keyword> data layer, a node-based <Keyword>visual logic editor</Keyword>, and an <Keyword>AWS CDK backend</Keyword> with full IaC security scanning (<Keyword>SAST</Keyword>, <Keyword>SCA</Keyword>, <Keyword>DAST</Keyword>, Checkov, OpenSSF Scorecard)</>,
      <>Integrated <Keyword>5 Web3 wallet connectors</Keyword> (MetaMask, Coinbase, Phantom, Binance, Gnosis Safe) to include live crypto holdings in the financial knowledge graph</>,
    ],
  },
  {
    name: 'Mr. Bartender',
    logo: '/logos/mr-bartender-tiny.png',
    link: '/projects/mr-bartender',
    tagline: 'IoT Smart Kegerator',
    defaultRank: 2,
    technologies: [
      types.frontend,
      types.backend,
      types.serverless,
      types.tooling,
      types.operations,
    ],
    victories: [
      <>Built the <Keyword>entire software stack</Keyword> of an IoT cocktail dispenser: firmware, cloud backend, consumer PWA, and admin platform across <Keyword>4 independently deployed codebases</Keyword></>,
      <>Integrated <Keyword>AWS IoT Core</Keyword> (MQTT) for real-time cloud-to-device communication between a React PWA and a <Keyword>Raspberry Pi</Keyword> driving GPIO pump relays on demand</>,
      <>Architecture spans a <Keyword>React</Keyword> consumer PWA, <Keyword>Vue</Keyword> kiosk UI, <Keyword>Serverless Framework</Keyword> Node.js REST API, and <Keyword>Firebase</Keyword> admin platform, deployed live in a fraternity house</>,
    ],
  },
  {
    name: 'Interactive Narrative World Engine',
    logo: null,
    link: '/projects/interactive-narrative',
    tagline: 'Local LLM Simulation System',
    defaultRank: 3,
    technologies: [
      types.backend,
      types.language,
      types.tooling,
      types.gameDevelopment,
      types.ai,
    ],
    victories: [
      <>Designed an <Keyword>8-node LangGraph pipeline</Keyword> for AI-assisted fiction: pre-response schedule reconciliation and spatial analysis ground every model response in consistent world state before generation</>,
      <><Keyword>Fuzzy entity resolution</Keyword> via persistent Chroma vector stores prevents hallucinated inventory mutations; a <Keyword>secondary reasoning model</Keyword> (JSON-only, lower temperature) writes all state deltas deterministically to SQLite</>,
      <>Scene-aware <Keyword>image generation</Keyword> pipeline reads SQLite world state to compose diffusion prompts, select <Keyword>LoRAs</Keyword>, and choose sampler parameters entirely from structured data</>,
    ],
  },
  {
    name: 'Von Neumann Toy',
    logo: null,
    link: '/projects/von-neumann-toy',
    tagline: 'C++ / Vulkan Space Simulation',
    defaultRank: 4,
    technologies: [
      types.language,
      types.tooling,
      types.gameDevelopment,
    ],
    victories: [
      <>Rendered an entire solar system using <Keyword>only 2 screen-space quads</Keyword>: all geometry is described as <Keyword>Signed Distance Fields</Keyword> and resolved by a Vulkan fragment shader performing cone marching for intersections, normals, shadows, and PBR lighting</>,
      <>Competing drone factions use <Keyword>swarm intelligence</Keyword>, <Keyword>convolutional neural networks</Keyword>, and <Keyword>evolutionary algorithms</Keyword>; a <Keyword>zero-knowledge-proof consensus protocol</Keyword> coordinates decentralized drone communication across the swarm</>,
      <>Solar system data sourced from <Keyword>JPL Horizons SPICE</Keyword>, Hipparcos 2, ETOPO 2022, NOAA-20 VIIRS Black Marble, and WMM 2025 for physically accurate planetary positions, surfaces, and magnetic fields</>,
    ],
  },
  {
    name: 'Custom Homelab',
    logo: null,
    link: '/projects/homelab',
    tagline: 'Qubes OS Production Homelab',
    defaultRank: 5,
    technologies: [
      types.operations,
      types.security,
      types.tooling,
      types.cloudInfrastructure,
    ],
    victories: [
      <>Production homelab on <Keyword>Qubes OS</Keyword> with a Type-1 Xen hypervisor: every service isolated in its own App Qube, all inter-qube data flow enforced through cryptographically signed <Keyword>qrexec</Keyword> policy rules</>,
      <>Zero public internet exposure; all remote access tunneled through <Keyword>Tailscale</Keyword> (WireGuard mesh VPN); Nginx reverse proxy handles internal service routing across the mesh</>,
      <>Docker Compose stacks for media pipeline (Plex, Sonarr, Radarr), automated acquisition, and a <Keyword>GPU-passthrough CUDA qube</Keyword> for ML workloads including Unsloth fine-tuning and JupyterLab</>,
    ],
  },
  {
    name: 'Unannounced Horror Game',
    logo: null,
    link: '/projects/unannounced-game',
    tagline: 'UE5.3 Multiplayer Horror Game',
    defaultRank: 6,
    technologies: [
      types.backend,
      types.tooling,
      types.gameDevelopment,
    ],
    victories: [
      <>Designed a <Keyword>data-table-driven 11-tier size system</Keyword> for a UE5.3 multiplayer horror game: every movement parameter, collision profile, and physics value reads from data tables</>,
      <>Four-layer <Keyword>Blueprint inheritance hierarchy</Keyword> shared by players and enemies via a common size interface; size state replicated with <Keyword>server-RPC authority gating</Keyword> and notify callbacks on simulated proxies</>,
      <>Session layer uses a <Keyword>brokered peer-to-peer architecture</Keyword> on AWS: a lightweight broker manages matchmaking and lobby state; gameplay traffic routes through <Keyword>Epic Online Services</Keyword> without a dedicated game server</>,
    ],
  },
  {
    name: 'QuantPy',
    logo: null,
    link: '/projects/quantpy',
    tagline: 'Python Portfolio Optimization Library',
    defaultRank: 7,
    technologies: [
      types.language,
      types.backend,
      types.tooling,
      types.ai,
    ],
    victories: [
      <>Python library implementing <Keyword>Modern Portfolio Theory</Keyword>: Sharpe ratio maximization, minimum variance optimization, and efficient frontier tracing via <Keyword>SciPy SLSQP</Keyword> constrained optimization</>,
      <>Implemented the <Keyword>closed-form Two-Fund Separation Theorem</Keyword> for exact analytical weight solutions alongside the numerical optimizer, enabling comparison of both approaches on the same frontier</>,
      <>Rendered interactive <Keyword>Plotly efficient frontier charts</Keyword> from a universe of 40+ tickers, overlaying cumulative return traces for equal-weight, Sharpe-optimal, and benchmark portfolios (SPY, QQQ)</>,
    ],
  },
]

export default useProjects
