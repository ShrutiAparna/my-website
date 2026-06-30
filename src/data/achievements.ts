export interface Achievement {
  id: string
  year: number
  title: string
  organization: string
  description?: string
}

// Add a new achievement by appending another object to this array —
// no page code needs to change. Keep the list ordered newest first.
export const achievements: Achievement[] = [
  {
    id: 'spec',
    year: 2026,
    title: 'Specialisation in Quantum Technology',
    organization: 'IIT Delhi',
    description: 'Pursuing a specialisation in quantum technology alongside the B.Tech. in Engineering Physics.',
  },
  {
    id: 'sura',
    year: 2024,
    title: 'Summer Undergraduate Research Award (SURA)',
    organization: 'Industrial R&D Unit, IIT Delhi',
    description: 'Awarded for research on the design and fabrication of diffractive optical elements.',
  },
  {
    id: 'best-project',
    year: 2023,
    title: 'Best Project Award — MCP101',
    organization: 'IIT Delhi',
    description: 'Received the Best Project Award among more than 100 submissions.',
  },
  {
    id: 'jee',
    year: 2022,
    title: 'JEE Advanced — AIR 6565',
    organization: 'Joint Entrance Examination',
    description: 'Secured AIR 6565 in JEE Advanced and ranked in the top 1 percentile in JEE Main.',
  },
  {
    id: 'cbse-merit',
    year: 2021,
    title: 'Certificate of Merit — CBSE',
    organization: 'Central Board of Secondary Education',
    description: 'Awarded for ranking among the top 0.1% of students, scoring 100% marks in Physics.',
  },
]
