export const levels = {
  unskilled: 'Unskilled',
  familiar: 'Familiar',
  skilled: 'Skilled',
  proficient: 'Proficient',
  advanced: 'Advanced',
  expert: 'Expert',
}
export const types = {
  frontend: 'Frontend',
  backend: 'Backend',
  tooling: 'Tooling',
  language: 'Language',
  operations: 'Operations',
  qa: 'Quality Assurance',
  cryptography: 'Cryptography',
  blockchain: 'Blockchain',
  serverless: 'Serverless',
  security: 'Security',
  software: 'Software',
  multiPlatform: 'Multi-Platform',
  cloudInfrastructure: 'Cloud Infrastructure',
  gameDevelopment: 'Game Development',
  ai: 'AI',
  mobile: 'Mobile',
}

export const skillAgeColors = [
  '#85BEFF',
  '#5CA8FF',
  '#3392FF',
  '#0070F3',
  '#005FCC',
  '#00438F',
  '#003066',
  '#001d3d',
  '#000',
]

export const skillLevelColors = {
  [levels.skilled]: '#3392FF',
  [levels.proficient]: '#0070F3',
  [levels.advanced]: '#00438F',
  [levels.expert]: '#003066',
}

export const useSkills = () => {
  const filterSkills = (filter) => {
    return skills.filter(filter)
  }

  return {
    filterSkills,
  }
}

export const skills = [
  {
    name: 'JavaScript',
    // 2012–present: continuous use across all jobs and personal projects
    periods: [{ start: 2012 }],
    level: levels.expert,
    type: types.language,
    logo: '/logos/javascript.png',
  },
  {
    name: 'CSS',
    // 2014–present: continuous use across all frontend work
    periods: [{ start: 2014 }],
    level: levels.expert,
    type: types.frontend,
    logo: '/logos/css.png',
  },
  {
    name: 'Node.js',
    // 2015–present: Looker, BNY, ProMazo, College Board, personal projects
    periods: [{ start: 2015 }],
    level: levels.expert,
    type: types.backend,
    logo: '/logos/node-js.png',
  },
  {
    name: 'React',
    // 2019–present: ProMazo → College Board (4.5yr) → Money Studio + personal
    periods: [{ start: 2019 }],
    level: levels.expert,
    type: types.frontend,
    logo: '/logos/react.png',
  },
  {
    name: 'Redux',
    // 2019–present: ProMazo → College Board → Money Studio
    periods: [{ start: 2019 }],
    level: levels.expert,
    type: types.frontend,
    logo: '/logos/redux.png',
  },
  {
    name: 'Amplify',
    // 2019–2021: ProMazo only; College Board used CDK/CloudFormation directly
    periods: [{ start: 2019, end: 2021 }],
    level: levels.expert,
    type: types.backend,
    logo: '/logos/amplify.png',
  },
  {
    name: 'Express.js',
    // 2017–2020: U of Rochester REST API, Looker interns, Mr. Bartender Node API
    periods: [{ start: 2017, end: 2020 }],
    level: levels.advanced,
    type: types.backend,
    logo: '/logos/node-js.png',
  },
  {
    name: 'Git',
    // 2014–present: continuous use
    periods: [{ start: 2014 }],
    level: levels.advanced,
    type: types.operations,
    logo: '/logos/git.png',
  },
  {
    name: 'AWS Suite',
    // 2018–present: BNY Mellon → ProMazo → College Board → Money Studio
    periods: [{ start: 2018 }],
    level: levels.advanced,
    type: types.backend,
    logo: '/logos/aws.png',
  },
  {
    name: 'GraphQL',
    // 2019–2021: ProMazo AppSync/schema work; not a primary tool after
    periods: [{ start: 2019, end: 2022 }],
    level: levels.advanced,
    type: types.language,
    logo: '/logos/graphql.png',
  },
  {
    name: 'Sass',
    // 2016–2021: personal projects through ProMazo; CSS Modules took over after
    periods: [{ start: 2016, end: 2021 }],
    level: levels.advanced,
    type: types.frontend,
    logo: '/logos/sass.png',
  },
  {
    name: 'Python',
    // 2017–2019: U of Rochester (Django); 2023–present: QuantPy, LangGraph, Flask
    periods: [{ start: 2017, end: 2019 }, { start: 2023 }],
    level: levels.proficient,
    type: types.language,
    logo: '/logos/python.png',
  },
  {
    name: 'Expo',
    // 2020–2021: ProMazo 100k Mentor Challenge only
    periods: [{ start: 2020, end: 2021 }],
    level: levels.proficient,
    type: types.frontend,
    logo: '/logos/expo.png',
  },
  {
    name: 'React Native',
    // 2020–2021: ProMazo 100k Mentor Challenge only
    periods: [{ start: 2020, end: 2021 }],
    level: levels.proficient,
    type: types.frontend,
    logo: '/logos/react.png',
  },
  {
    name: 'Next.js',
    // 2020–present: ProMazo tooling, this site, Money Studio web
    periods: [{ start: 2020 }],
    level: levels.proficient,
    type: types.frontend,
    logo: '/logos/next-js.png',
  },
  {
    name: 'TypeScript',
    // 2019–present: Looker CLI tool → College Board → Money Studio monorepo
    periods: [{ start: 2019 }],
    level: levels.advanced,
    type: types.language,
    logo: '/logos/typescript.png',
  },
  {
    name: 'Jest',
    // 2020–present: ProMazo → College Board (100% coverage on subsystems) → ongoing
    periods: [{ start: 2020 }],
    level: levels.advanced,
    type: types.qa,
    logo: '/logos/jest.png',
  },
  {
    name: 'Storybook',
    // 2020–2021: ProMazo 100k only
    periods: [{ start: 2020, end: 2021 }],
    level: levels.skilled,
    type: types.qa,
    logo: '/logos/storybook.png',
  },
  {
    name: 'GitHub Actions',
    // 2021–present: College Board CI/CD → Money Studio IaC pipelines
    periods: [{ start: 2021 }],
    level: levels.proficient,
    type: types.operations,
    logo: '/logos/github-actions.png',
  },
  {
    name: 'Playwright',
    // 2021–2026: College Board (hundreds of integration tests); not primary in current projects
    periods: [{ start: 2021, end: 2026 }],
    level: levels.proficient,
    type: types.qa,
    logo: '/logos/playwright.png',
  },
  {
    name: 'Vite',
    // 2022–present: rebuilt College Board pipeline from Webpack; used in personal projects
    periods: [{ start: 2022 }],
    level: levels.proficient,
    type: types.tooling,
    logo: '/logos/vite.png',
  },
  {
    name: 'Docker',
    // 2022–present: homelab Docker Compose stacks, Money Studio dev environment
    periods: [{ start: 2022 }],
    level: levels.proficient,
    type: types.operations,
    logo: '/logos/docker.png',
  },
  {
    name: 'Unreal Engine',
    // 2023–present: Unannounced Horror Game (UE5.3)
    periods: [{ start: 2023 }],
    level: levels.proficient,
    type: types.software,
    logo: '/logos/unreal-engine.png',
  },
  {
    name: 'LangChain',
    // 2023–present: Interactive Narrative LangGraph pipeline, Money Studio RAG
    periods: [{ start: 2023 }],
    level: levels.proficient,
    type: types.backend,
    logo: '/logos/langchain.png',
  },
  {
    name: 'C++',
    // 2023–present: Von Neumann Toy (Vulkan renderer, SDF cone marching)
    periods: [{ start: 2023 }],
    level: levels.skilled,
    type: types.language,
    logo: '/logos/cpp.png',
  },
  {
    name: 'Vulkan',
    // 2023–present: Von Neumann Toy custom rendering engine
    periods: [{ start: 2023 }],
    level: levels.skilled,
    type: types.tooling,
    logo: '/logos/vulkan.png',
  },
  {
    name: 'Flask',
    // 2024–present: QuantPy API / Interactive Narrative backend tooling
    periods: [{ start: 2024 }],
    level: levels.skilled,
    type: types.backend,
    logo: '/logos/flask.png',
  },
  {
    name: 'Serverless Framework',
    // 2019–2021: Mr. Bartender Node.js REST API, early ProMazo work
    periods: [{ start: 2019, end: 2021 }],
    level: levels.skilled,
    type: types.backend,
    logo: '/logos/serverless.png',
  },
  {
    name: 'Vue.js',
    // 2017–2020: U of Rochester LASSO rewrite, Mr. Bartender kiosk UI
    periods: [{ start: 2017, end: 2020 }],
    level: levels.skilled,
    type: types.frontend,
    logo: '/logos/vue-js.png',
  },
  {
    name: 'Django',
    // 2017–2019: U of Rochester LASSO maintenance and rewrite
    periods: [{ start: 2017, end: 2019 }],
    level: levels.skilled,
    type: types.backend,
    logo: '/logos/django.png',
  },
  {
    name: 'SQL',
    // 2017–2020: U of Rochester (Django ORM), BNY Mellon (RDS, 8-table schema);
    // switched to DynamoDB/NoSQL at ProMazo and beyond
    periods: [{ start: 2017, end: 2020 }],
    level: levels.proficient,
    type: types.language,
    logo: '/logos/sql.png',
  },
  // {
  //   name: 'Laravel',
  //   periods: [{ start: 2018, end: 2019 }],
  //   level: levels.skilled,
  //   type: types.backend,
  //   logo: '/logos/laravel.png',
  // },
]

export default skills
