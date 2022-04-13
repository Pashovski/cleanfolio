const header = {
  homepage: 'https://www.linkedin.com/in/pauledavidson',
  title: 'PD.',
}

const about = {
  name: 'Paul Davidson',
  role: 'Full Stack Developer',
  description:
    'Before I returned to my original passion of software engineering I was a multimedia engineer',
  resume:
    'https://drive.google.com/file/d/1jlMsla9vm7VFwQLaNn4cBoNp6FR0TKg7/view',
  social: {
    linkedin: 'https://www.linkedin.com/in/pauledavidson',
    github: 'https://github.com/Pashovski',
  },
}

const projects = [
  {
    name: 'Support Desk',
    description: 'MERN app that allows users to create edit support tickets',
    stack: ['MongoDB', 'Express', 'React', 'Node'],
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
    sourceCode: 'https://github.com/Pashovski/github-finder',
    livePreview: 'https://github-finder-three-theta.vercel.app/',
  },
]

const skills = [
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
  email: 'pauleugenedavidson@gmail.com',
}

export { header, about, projects, skills, contact }
