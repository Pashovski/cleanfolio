const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Paul Davidson',
  role: 'Front End Engineer',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/pauledavidson',
    github: 'https://github.com/Pashovski',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Support Desk',
    description: 'MERN app that allows users to create edit support tickets',
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    sourceCode: 'https://github.com/Pashovski/support-desk',
    livePreview: 'https://davidsonsupportdesk.herokuapp.com/',
  },
  {
    name: 'House Marketplace',
    description:
      'A full-stack app that allows users to list their homes for sale or rent',
    stack: ['React', 'Firebase'],
    sourceCode: 'https://github.com/Pashovski/house-marketplace',
    livePreview: 'https://house-marketplace-psi-amber.vercel.app/',
  },
  {
    name: 'Github Finder',
    description: 'A React App that allows users to search Github Accounts',
    stack: ['Tailwind', 'DaisyUI', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github-finder-three-theta.vercel.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Firebase',
  'React',
  'Redux',
  'Ruby',
  'Material UI',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'pauleugenedavidson@gmail.com',
}

export { header, about, projects, skills, contact }
