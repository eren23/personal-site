/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Pabolo Gmbh',
    position: 'AI Engineer',
    url: 'https://paramax.ai',
    startDate: '01-05-2023',
    summary: 'Pabolo is an AI movie generation company. We use AI to generate movies from mere text.',
    highlights: [
      'Developing state-of-the-art AI models for image generation',
      'Developing state-of-the-art AI models for video generation',
      'Deploying AI models to production via implementing services supporting efficient inference',
    ],
  },
  {
    name: 'Margin Technologies',
    position: 'Software Engineer',
    url: 'https://margin.io',
    endDate: '01-05-2023',
    startDate: '01-02-2021',
    summary: 'Margin is a crypto market making company that provides liquidity to crypto exchanges.',
    highlights: [
      'Supporting existing B2C web applications and adding new features',
      'Developing new B2B web applications',
    ],
  },
  {
    name: 'Medron Technologies',
    position: 'Software Engineer',
    url: 'https://medronteknoloji.com',
    endDate: '11-01-2020',
    startDate: '01-09-2017',
    summary: 'Medron is an industrial IoT company that provides solutions for industrial automation.',
    highlights: [
      'Developing software for industrial IoT',
      'Doing R&D on AI for industrial automation',
    ],
  },
];

export default work;
