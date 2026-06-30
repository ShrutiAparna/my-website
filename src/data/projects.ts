export interface Project {
  id: string
  title: string
  subtitle: string
  period: string
  description: string
  contributions: string[]
  tech: string[]
  highlight?: string
  links?: {
    github?: string
    paper?: string
    demo?: string
  }
}

// Add a new project by appending another object to this array —
// no page code needs to change.
export const projects: Project[] = [
  {
    id: 'neural-dp',
    title: 'Neural Solver for Dynamic Programming Problems',
    subtitle: '0/1 Knapsack — Deep Learning Course Project',
    period: 'Nov 2025',
    description:
      'Built a sequence-to-sequence neural model (BiLSTM with attention) to learn dynamic programming table construction and solution decoding without explicit knowledge of problem constraints. Designed a multi-task learning framework to jointly predict DP tables, optimal values, and item selections.',
    contributions: [
      'Built BiLSTM with attention for DP table construction and solution decoding',
      'Designed multi-task learning to jointly predict tables, values, and selections',
      'Developed adversarial test suites to evaluate generalisation under distribution shift',
    ],
    tech: ['Python', 'PyTorch', 'BiLSTM', 'Attention', 'Multi-task Learning'],
    highlight: '87.6% F1 on held-out instances',
  },
  {
    id: 'fmri-tools',
    title: 'Advanced Functional Brain Imaging Analysis Toolkit',
    subtitle: 'GLM Analysis · Neuroimaging Pipelines · Prof. Rahul Garg, IIT Delhi',
    period: 'Feb 2024 – Apr 2025',
    description:
      'Developed comprehensive Python command-line tools for General Linear Model (GLM) analysis of fMRI data, supporting both single-subject and group-level statistical analysis, including motion correction, spatial smoothing, temporal filtering, and registration to standard brain templates.',
    contributions: [
      'Developed GLM analysis tools for single-subject and group-level fMRI studies',
      'Implemented a full neuroimaging preprocessing pipeline',
      'Validated against FSL outputs with correlation analysis across multiple subjects',
    ],
    tech: ['Python', 'NumPy', 'SciPy', 'FSL', 'Neuroimaging'],
  },
  {
    id: 'offer-ranking',
    title: 'Personalized Offer Ranking',
    subtitle: 'American Express Campus Challenge 2025',
    period: 'May 2025 – Jul 2025',
    description:
      'Built an offer ranking model to predict P(click | impression) using customer, transaction, and offer metadata, optimised under strict evaluation constraints to align model outputs with real-world engagement objectives.',
    contributions: [
      'Built a ranking model for P(click | impression) prediction',
      'Optimised ranking performance under strict competition evaluation constraints',
    ],
    tech: ['Python', 'XGBoost', 'LightGBM', 'Feature Engineering'],
    highlight: 'MAP@7 = 0.567 · Top 30 nationwide',
  },
  {
    id: 'jd-prefill',
    title: 'SFT and DPO Fine-tuning for Job Description Prefill',
    subtitle: 'Data Science Intern · InfoEdge (Naukri.com)',
    period: 'May 2025 – Jul 2025',
    description:
      'Improved structured field extraction from unstructured job descriptions by fine-tuning LLaMA-8B, strengthening the JD Prefill pipeline used in production. Productionised an end-to-end SFT + DPO fine-tuning pipeline enabling scalable onboarding of new fields and systematic correction of high-error fields via preference optimisation.',
    contributions: [
      'Fine-tuned LLaMA-8B for structured field extraction from job descriptions',
      'Productionised an end-to-end SFT + DPO pipeline for scalable field onboarding',
      'Built an automated evaluation framework with field-wise precision and regression checks',
    ],
    tech: ['Python', 'LLaMA-8B', 'SFT', 'DPO', 'Hugging Face'],
  },
  {
    id: 'chip-verification',
    title: 'AI Agents for Chip Design and Verification',
    subtitle: 'Founding Intern · Xorvis AI',
    period: 'Oct 2025 – Dec 2026',
    description:
      'Built a domain-specific data corpus and database covering RTL, verification, and chip-level workflows. Designed agent systems that transform design specifications into knowledge graphs for structured reasoning over modules, signals, and verification intent, and developed automated verification agents orchestrating EDA tools end-to-end.',
    contributions: [
      'Built a domain-specific corpus and database for RTL and chip-level workflows',
      'Designed knowledge-graph agents for structured design-specification reasoning',
      'Developed automated verification agents orchestrating EDA tools end-to-end',
    ],
    tech: ['Python', 'LLM Agents', 'Knowledge Graphs', 'RTL', 'EDA Tools'],
  },
]
