export interface ResearchProject {
  id: string
  title: string
  subtitle: string
  institution: string
  advisor?: string
  period: string
  description: string
  contributions: string[]
  tech: string[]
  links?: {
    paper?: string
    code?: string
    poster?: string
    slides?: string
  }
  featured?: boolean
}

// Add a new research project by appending another object to this array —
// no page code needs to change.
export const research: ResearchProject[] = [
  {
    id: 'cv-qkd',
    title: 'Machine Learning for CV-QKD Parameter Estimation',
    subtitle: 'Quantum Key Distribution · Neural Networks',
    institution: 'CARE, IIT Delhi',
    advisor: 'Prof. Neelkanth Kundu',
    period: 'Aug 2025 – Present',
    description:
      'Designing feature-driven neural networks to estimate channel transmittance and excess noise in optical communication links for continuous-variable quantum key distribution (CV-QKD). The approach achieves accurate secret key rate prediction across synthetic data and real experimental fiber links, with improved robustness over traditional statistical estimators in noisy real-world sensing environments.',
    contributions: [
      'Designed a feature-driven neural network for channel parameter estimation',
      'Achieved accurate secret key rate (SKR) prediction on real experimental fiber links',
      'Demonstrated improved robustness over traditional statistical estimators',
    ],
    tech: ['Python', 'PyTorch', 'Quantum Optics', 'Neural Networks'],
    featured: true,
  },
  {
    id: 'phase-retrieval',
    title: 'Computational Imaging and Phase Retrieval for Biological Microscopy',
    subtitle: 'Computational Imaging · Digital Holography',
    institution: 'Optics and Photonics Center (OPC), IIT Delhi',
    advisor: 'Prof. Kedar Khare',
    period: 'Aug 2025 – Nov 2025',
    description:
      'Developed a constrained phase-only optimisation framework for multipixel interferometric phase retrieval, exploiting spatial redundancy and sparsity to surpass independent-pixel phase estimation limits. Validated on synthetic datasets and digital holographic microscopy (DHM) images of biological samples, including red blood cells.',
    contributions: [
      'Developed constrained phase-only optimisation for interferometric phase retrieval',
      'Exploited spatial redundancy and sparsity to surpass pixel-level estimation limits',
      'Validated on DHM images of biological samples (red blood cells)',
    ],
    tech: ['Python', 'NumPy', 'Optimization', 'Digital Holography'],
    featured: true,
  },
  {
    id: 'diffractive-optics',
    title: 'Design and Fabrication of Diffractive Optical Elements',
    subtitle: 'Optics · Nanofabrication · SURA',
    institution: 'Dept. of Physics, IIT Delhi',
    advisor: 'Summer Undergraduate Research Award (SURA)',
    period: 'Apr 2024 – Jun 2024',
    description:
      'Designed phase-only diffractive optical elements using iterative phase retrieval with gradient-based refinement, reducing mean absolute error in target intensity reconstruction by 67% relative to Gerchberg–Saxton designs. Fabricated optimised phase masks on quartz substrates using UV lithography and experimentally validated beam-shaping performance.',
    contributions: [
      'Designed phase-only DOEs using iterative phase retrieval with gradient refinement',
      'Reduced mean absolute error by 67% over Gerchberg–Saxton baseline designs',
      'Fabricated phase masks on quartz via UV lithography and validated experimentally',
    ],
    tech: ['Python', 'MATLAB', 'UV Lithography', 'Phase Retrieval'],
    featured: true,
  },
  {
    id: 'fmri-reconstruction',
    title: 'Visual Image Reconstruction from Human Brain Activity',
    subtitle: 'Neuroscience · Generative AI · fMRI',
    institution: 'Dept. of CSE, IIT Delhi',
    advisor: 'Prof. Rahul Garg',
    period: 'Aug 2024 – Nov 2024',
    description:
      'Enhanced a state-of-the-art pipeline for reconstructing visual stimuli from human brain activity using deep generative models. Integrated CLIP, VQGAN, and Bayesian priors for semantic guidance, improving perceptual similarity of reconstructions, and validated quantitatively using SSIM and correlation-based metrics over baseline methods.',
    contributions: [
      'Integrated CLIP, VQGAN, and Bayesian priors for semantic guidance',
      'Improved perceptual similarity of reconstructions over baseline methods',
      'Validated improvements using SSIM and correlation-based metrics',
    ],
    tech: ['Python', 'PyTorch', 'CLIP', 'VQGAN', 'fMRI Analysis'],
  },
]
