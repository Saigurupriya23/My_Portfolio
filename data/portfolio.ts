export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  points: string[];
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
};

// Add this type
export type Education = {
  institution: string;
  degree: string;
  location: string;
  period: string;
  courses: string[];
};


// ─── Skills shown in "Technical Arsenal" ───────────────────────
export const skills = [
  'C++',
  'Python', 
  'HTML',
  'CSS',
  'JavaScript',
  'Flask',
  'SQL',  
  'SQLAlchemy',
  'SQLite',  
  'OpenCV',  
  'PyTorch',
  'NumPy / Pandas',
  'Redis',
  'TCP/IP',
  'Data Structures & Algorithms',
  'OOP',
  'Operating Systems',
  'Computer Networks',
  'Machine Learning',
  'Computer Architecture',
  'Colab / GitHub',
  'VS Code',
  'Linux',
  'Git',
];

// ─── Work Experience ────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    company: 'Hybrid Deep Learning and Geometric Approach for Ellipse Detection',
    role: 'B.Tech Project',   // was "Graduate Researcher"
    location: 'Indian Institute of Technology, Kharagpur, India',
    period: 'Jan 2026 - Apr 2026',               // was "2023 – Present"
    points: [
      'Developed an ellipse detection framework for noisy & complex visual scenes where traditional contour methods were unreliable and deep learning methods were computationally expensive.',
      'Combined R-CNN based object detection with geometric contour fitting to improve detection accuracy and robustness across challenging inputs; Integrated Feature Pyramid Network for multi-scale feature extraction and used Region Proposal Network with ROI Align to generate precise candidate regions .',
      'Refined localization through bounding box regression and ellipse parameter estimation, supported by a multi-component loss function for classification, regression, and occlusion handling .',
      'Evaluated the framework on the FDDB dataset and demonstrated stronger real-world generalization than purely geometric approaches in difficult detection scenarios .',
    ],
  },
  
  // Keep GVPCOE education entry as-is or move to a separate Education section
];

// ─── Education  ────────────────────────────────────────────
export const education: Education[] = [
  {
    institution: 'Indian Institute of Technology, Kharagpur',
    degree: 'Dual Degree in Electronics & Electrical Communications Engineering with Specialization in Vision and Artificial Intelligence',
    location: 'Kharagpur, India',
    period: 'Nov 2022 - May 2027',
    courses: [
      'Digital Electronics', 
      'Analog Devices', 
      'Nano Electronics', 
      'Algorithms', 
      'Operating Systems', 
      'Computer Architecture',
      'Probability and Statistics', 
      'Linear Algebra', 
      'Computer Vision', 
      'Machine Learning', 
      'Deep Learning', 
      'Image Processing',
    ],
  },
  {
    institution: 'Lakshya School',
    degree: '11th and 12th Grade (Science Stream)',
    location: 'Kakinada, India',
    period: 'Jun 2020 - May 2022',
    courses: [
      'Mathematics', 
      'Physics', 
      'Chemistry',
      'Computers',
    ],
  },
];

// ─── Featured Projects ──────────────────────────────────────────
export const projects: Project[] = [
  {
    title: 'NYC Subway Arrival Telegram Bot',
    description:
      'Production Telegram bot built with async Python (aiohttp + asyncio). Fetches MTA GTFS-RT feeds concurrently, with per-stage latency instrumentation, rate limiting, and stale-feed detection for production reliability.',
    tech: ['Python', 'asyncio', 'aiohttp', 'Telegram Bot API', 'GTFS-RT'],
    githubUrl: 'https://github.com/saulgoodman-bot/SubwayCatch',
  },
  {
    title: 'IIT Kharagpur Online Guest House Booking System',
    description:
      'Developed a full-stack Guest House Booking System using Flask, HTML/CSS, SQLAlchemy, and SMTP with secure role-based authentication, online payments, OTP/email notifications, and optimized database performance for efficient reservation management.',
    tech: ['Flask', 'HTML/CSS', 'SQLAlchemy', 'SMTP', 'Role-Based Access Control'],
    githubUrl: 'https://github.com/Saigurupriya23/IIT-Kharagpur-Guest-House',
  },
  {
    title: 'C++-Based Huffman Compression System',
    description:
      'High-performance file compression tool built using data structures and algorithms for lossless compression with memory management and efficient I/O',
    tech: ['C++', 'DSA', 'Huffman Coding / Encoding', 'MMT'],
    githubUrl: 'https://github.com/Saigurupriya23/Zipper-File',
  },
  {
    title: 'C++ Wordle Solver',
    description:
      'Developed a C++-based Wordle Solver that uses constraint satisfaction, dynamic filtering, and heuristic ranking to efficiently narrow search space, achieving a 92% solve rate within four guesses across 10,000 simulated games.',
    tech: ['C++', 'OOP', 'Constraint Satisfaction', 'Heuristic Search', 'Dynamic Filtering'],
    githubUrl: 'https://github.com/Saigurupriya23/Wordle-Solver',
  },
  
];
