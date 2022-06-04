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
    yearStarted: 2012,
    level: levels.expert,
    type: types.language,
    logo: '/logos/javascript.png',
  },
  {
    name: 'CSS',
    yearStarted: 2014,
    level: levels.expert,
    type: types.frontend,
    logo: '/logos/css.png',
  },
  {
    name: 'Node.js',
    yearStarted: 2015,
    level: levels.expert,
    type: types.backend,
    logo: '/logos/node-js.png',
  },
  {
    name: 'React',
    yearStarted: 2017,
    level: levels.expert,
    type: types.frontend,
    logo: '/logos/react.png',
  },
  {
    name: 'Redux',
    yearStarted: 2018,
    level: levels.expert,
    type: types.frontend,
    logo: '/logos/redux.png',
  },
  {
    name: 'Amplify',
    yearStarted: 2019,
    level: levels.expert,
    type: types.backend,
    logo: '/logos/amplify.png',
  },
  {
    name: 'Express.js',
    yearStarted: 2017,
    level: levels.advanced,
    type: types.backend,
    logo: '/logos/node-js.png',
  },
  {
    name: 'Git',
    yearStarted: 2014,
    level: levels.advanced,
    type: types.operations,
    logo: '/logos/git.png',
  },
  {
    name: 'AWS Suite',
    yearStarted: 2018,
    level: levels.advanced,
    type: types.backend,
    logo: '/logos/aws.png',
  },
  {
    name: 'GraphQL',
    yearStarted: 2019,
    level: levels.advanced,
    type: types.language,
    logo: '/logos/graphql.png',
  },
  {
    name: 'Sass',
    yearStarted: 2016,
    level: levels.advanced,
    type: types.frontend,
    logo: '/logos/sass.png',
  },
  {
    name: 'Python',
    yearStarted: 2017,
    yearEnded: 2019,
    level: levels.proficient,
    type: types.language,
    logo: '/logos/python.png',
  },
  {
    name: 'Expo',
    yearStarted: 2020,
    yearEnded: 2022,
    level: levels.proficient,
    type: types.frontend,
    logo: '/logos/expo.png',
  },
  {
    name: 'React Native',
    years: 1,
    yearStarted: 2020,
    yearEnded: 2022,
    level: levels.proficient,
    type: types.frontend,
    logo: '/logos/react.png',
  },
  {
    name: 'Next.js',
    yearStarted: 2020,
    level: levels.proficient,
    type: types.frontend,
    logo: '/logos/next-js.png',
  },
  // {
  //   name: 'Serverless',
  //   years: 1,
  //   level: levels.proficient,
  //   type: types.backend,
  //   logo: '/logos/serverless.png',
  // },
  // {
  //   name: 'Vue.js',
  //   years: 2,
  //   level: levels.skilled,
  //   type: types.frontend,
  //   logo: '/logos/vue-js.png',
  // },
  // {
  //   name: 'Django',
  //   years: 2,
  //   level: levels.skilled,
  //   type: types.backend,
  //   logo: '/logos/django.png',
  // },
  // {
  //   name: 'SQL',
  //   years: 2,
  //   level: levels.skilled,
  //   type: types.language,
  //   logo: '/logos/sql.png',
  // },
  // {
  //   name: 'Laravel',
  //   years: 1,
  //   level: levels.skilled,
  //   type: types.backend,
  //   logo: '/logos/laravel.png',
  // },
]

export default skills
