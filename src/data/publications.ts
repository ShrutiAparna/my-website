export interface Publication {
  id: string
  title: string
  authors: string[]
  year: number
  month?: string
  status?: string
  links?: {
    paper?: string
    arxiv?: string
    code?: string
    poster?: string
    slides?: string
  }
}

// Add a new publication by appending another object to this array —
// no page code needs to change.
export const publications: Publication[] = [
  {
    id: 'fl-partial-2025',
    title:
      'Overcoming Challenges of Partial Client Participation in Federated Learning: A Comprehensive Review',
    authors: ['Mrinmay Sen', 'Shruti Aparna', 'Rohit Agarwal', 'Chalavadi Krishna Mohan'],
    year: 2025,
    month: 'June',
    status: 'Prepared for submission to IEEE Transactions on Knowledge and Data Engineering (TKDE)',
    links: {
      arxiv: 'https://arxiv.org/abs/2506.02887',
    },
  },
]
