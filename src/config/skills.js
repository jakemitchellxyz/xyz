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
  language: 'Language',
  operations: 'Operations',
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

export const skills = [
  {
    name: 'JavaScript',
    years: 9,
    level: levels.expert,
    type: types.language,
    logo: '/logos/javascript.png',
  },
  {
    name: 'CSS',
    years: 7,
    level: levels.expert,
    type: types.frontend,
    logo: '/logos/css.png',
  },
  {
    name: 'Node.js',
    years: 6,
    level: levels.expert,
    type: types.backend,
    logo: '/logos/node-js.png',
  },
  {
    name: 'React',
    years: 4,
    level: levels.expert,
    type: types.frontend,
    logo: '/logos/react.png',
  },
  {
    name: 'Redux',
    years: 3,
    level: levels.expert,
    type: types.frontend,
    logo: '/logos/redux.png',
  },
  {
    name: 'Amplify',
    years: 2,
    level: levels.expert,
    type: types.backend,
    logo: '/logos/amplify.png',
  },
  {
    name: 'Git',
    years: 7,
    level: levels.advanced,
    type: types.operations,
    logo: '/logos/git.png',
  },
  {
    name: 'AWS Suite',
    years: 3,
    level: levels.advanced,
    type: types.backend,
    logo: '/logos/aws.png',
  },
  {
    name: 'GraphQL',
    years: 2,
    level: levels.advanced,
    type: types.language,
    logo: '/logos/graphql.png',
  },
  {
    name: 'Sass',
    years: 5,
    level: levels.advanced,
    type: types.frontend,
    logo: '/logos/sass.png',
  },
  {
    name: 'Python',
    years: 3,
    level: levels.proficient,
    type: types.language,
    logo: '/logos/python.png',
  },
  {
    name: 'Expo',
    years: 1,
    level: levels.proficient,
    type: types.frontend,
    logo: '/logos/expo.png',
  },
  {
    name: 'React Native',
    years: 1,
    level: levels.proficient,
    type: types.frontend,
    logo: '/logos/react.png',
  },
  {
    name: 'Next.js',
    years: 1,
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
