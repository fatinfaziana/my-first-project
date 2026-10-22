export const SITE_NAME = 'Tuition Service Landing'

export const TAGLINE = 'Tuition for SPM, IGCSE and A-Level — sample data'

export const HEADLINE = {
  before: 'Focused tuition that fits',
  accent: 'your exam',
  after: '— try a free class first',
}

export const FREE_TRIAL_LINE =
  'Every new student gets one free trial class so you can see the fit before you commit.'

export const OBJECTIVE_PRICE = 60
export const COMBO_EXTRA_PRICE = 45

export const LEVELS = [
  {
    id: 'spm',
    name: 'SPM',
    subjects: [
      { id: 'spm-addmath', name: 'Additional Mathematics', level: 'SPM' },
      { id: 'spm-chem', name: 'Chemistry', level: 'SPM' },
      { id: 'spm-phy', name: 'Physics', level: 'SPM' },
      { id: 'spm-bio', name: 'Biology', level: 'SPM' },
    ],
  },
  {
    id: 'igcse',
    name: 'IGCSE',
    subjects: [
      { id: 'igcse-math', name: 'Mathematics', level: 'IGCSE' },
      { id: 'igcse-chem', name: 'Chemistry', level: 'IGCSE' },
      { id: 'igcse-bio', name: 'Biology', level: 'IGCSE' },
      { id: 'igcse-eng', name: 'English', level: 'IGCSE' },
    ],
  },
  {
    id: 'alevel',
    name: 'A-Level',
    subjects: [
      { id: 'alevel-math', name: 'Mathematics', level: 'A-Level' },
      { id: 'alevel-chem', name: 'Chemistry', level: 'A-Level' },
      { id: 'alevel-econ', name: 'Economics', level: 'A-Level' },
      { id: 'alevel-phy', name: 'Physics', level: 'A-Level' },
    ],
  },
]

export const PROFILE = {
  heading: 'About the tuition service',
  name: 'The tutor',
  intro:
    'A tuition service built on ten years of teaching experience, with one aim: helping every student walk into their exam prepared and confident.',
  paragraphs: [
    'For ten years this service has tutored students across SPM, IGCSE and A-Level, teaching the why behind each answer instead of memorising steps. Students who commit to the weekly routine consistently finish with strong results and a calmer exam season.',
    'Lessons are planned around the student: past-paper practice first, then targeted work on the topics that keep costing marks. This is a teaching background first, and a service built to make that teaching work for each family.',
  ],
  points: [
    '10 years of tutoring experience',
    'A track record of strong student results',
    'SPM, IGCSE and A-Level subject specialist',
    'Small groups (2–4) or one-to-one',
    'Weekly feedback on each student’s progress',
  ],
}

export const PACKAGES = [
  {
    id: 'single',
    name: 'Single subject',
    includes: 'One subject, weekly class, past-paper practice',
    popular: false,
  },
  {
    id: 'combo-two',
    name: 'Combo: two subjects',
    includes: 'Two subjects, weekly classes, shared exam-technique hour',
    popular: true,
  },
  {
    id: 'combo-three',
    name: 'Combo: three subjects',
    includes: 'Three subjects, weekly classes, full revision plan',
    popular: false,
  },
]

export const COURSE_COLORS = {
  spm: 'mint',
  igcse: 'sky',
  alevel: 'peach',
}

export const COLLABORATE = {
  heading: 'Collaborate with us',
  eyebrow: 'For teachers',
  intro:
    'Teachers are welcome to join and teach their own subjects. Send your resume and the subjects you can teach, and we will get back to you.',
  subjectsNote: 'Subjects we are looking for',
  subjects: [
    'Mathematics (SPM, IGCSE, A-Level)',
    'Additional Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'English',
    'Economics',
  ],
  successTitle: 'Thank you — your collaboration request is ready.',
  successText: 'This is a sample page, nothing was sent or saved.',
}

export const AVAILABILITY = {
  heading: 'Availability',
  freeTrialChip: 'Free trial class available',
  note: 'Sample calendar for a full month. Free days can be picked; fully booked days are shaded and cannot be picked.',
  statuses: {
    free: 'Free',
    booked: 'Booked',
    full: 'Fully booked',
    open: 'Open',
  },
  slots: [
    { id: 'mon-1930', day: 'Monday', time: '7:30 PM', mode: 'Online' },
    { id: 'wed-1930', day: 'Wednesday', time: '7:30 PM', mode: 'Online' },
    { id: 'thu-1700', day: 'Thursday', time: '5:00 PM', mode: 'In person' },
    { id: 'sat-1000', day: 'Saturday', time: '10:00 AM', mode: 'In person' },
    { id: 'sat-1400', day: 'Saturday', time: '2:00 PM', mode: 'Online' },
    { id: 'sun-1000', day: 'Sunday', time: '10:00 AM', mode: 'Online' },
  ],
  calendar: {
    month: 'Sample Month',
    year: 2026,
    firstWeekday: 3,
    dayCount: 31,
    fullyBooked: [4, 5, 12, 18, 19, 20, 25, 26],
    partlyBooked: [3, 6, 10, 13, 17, 24, 27],
    daySlots: {
      3: [
        { time: '7:30 PM', mode: 'Online', status: 'free' },
        { time: '5:00 PM', mode: 'In person', status: 'booked' },
      ],
      6: [
        { time: '10:00 AM', mode: 'In person', status: 'booked' },
        { time: '2:00 PM', mode: 'Online', status: 'free' },
      ],
      10: [
        { time: '7:30 PM', mode: 'Online', status: 'booked' },
        { time: '8:30 PM', mode: 'Online', status: 'free' },
      ],
      13: [
        { time: '10:00 AM', mode: 'In person', status: 'free' },
        { time: '2:00 PM', mode: 'Online', status: 'booked' },
      ],
      17: [
        { time: '5:00 PM', mode: 'In person', status: 'booked' },
        { time: '7:30 PM', mode: 'Online', status: 'free' },
      ],
      24: [{ time: '7:30 PM', mode: 'Online', status: 'booked' }],
      27: [
        { time: '10:00 AM', mode: 'In person', status: 'free' },
        { time: '2:00 PM', mode: 'Online', status: 'free' },
      ],
    },
  },
}

export const FEEDBACK = {
  heading: 'What clients say',
  note: 'Sample feedback',
  items: [
    {
      id: 'fb-1',
      quote:
        'My daughter finally understood Chemistry calculations. The weekly feedback told me exactly what to watch.',
      name: 'Aina',
      subject: 'SPM Chemistry',
    },
    {
      id: 'fb-2',
      quote:
        'Clear explanations and real past-paper practice every week. My grade moved up two bands.',
      name: 'Daniel',
      subject: 'IGCSE Mathematics',
    },
    {
      id: 'fb-3',
      quote:
        'The combo plan kept both my subjects on schedule. I never had to chase the syllabus myself.',
      name: 'Priya',
      subject: 'A-Level Economics',
    },
  ],
}

export const PRODUCTS = {
  heading: 'Products and services',
  note: 'Sample catalogue. Pick who it is for, then a stage and department to narrow the list.',
  audiences: [
    { id: 'teachers', label: 'For teachers', blurb: 'Tools that cut marking time.' },
    {
      id: 'students',
      label: 'For students',
      blurb: 'Answer checkers and completed teacher notes.',
    },
  ],
  stages: [
    { id: 'kindergarten', label: 'Kindergarten' },
    { id: 'primary', label: 'Primary' },
    { id: 'secondary', label: 'Secondary' },
  ],
  departments: [
    { id: 'all', label: 'All departments' },
    { id: 'science', label: 'Science' },
    { id: 'maths', label: 'Maths' },
    { id: 'language', label: 'Language' },
    { id: 'humanities', label: 'Humanities' },
  ],
  items: [
    {
      id: 't-scan',
      audience: 'teachers',
      stage: 'secondary',
      department: 'all',
      name: 'Camera marking helper',
      description:
        'Teachers enter the questions and the keywords that earn marks, then the system reads the answer paper and marks it. Built for objective and subjective papers.',
      price: 120,
    },
    {
      id: 't-scan-primary',
      audience: 'teachers',
      stage: 'primary',
      department: 'all',
      name: 'Camera marking helper (Primary)',
      description:
        'The same keyword marking tool, set up for primary-level objective and short-answer papers.',
      price: 95,
    },
    {
      id: 's-check-sci-secondary',
      audience: 'students',
      stage: 'secondary',
      department: 'science',
      name: 'Science answer checker (SPM / IGCSE / A-Level)',
      description:
        'Practice sets with a self-check sheet so students confirm their own answers across Science subjects.',
      price: 40,
    },
    {
      id: 's-check-maths-secondary',
      audience: 'students',
      stage: 'secondary',
      department: 'maths',
      name: 'Maths answer checker (SPM / IGCSE / A-Level)',
      description:
        'Worked practice sets with a self-check sheet so students mark their own Maths answers.',
      price: 40,
    },
    {
      id: 's-check-primary',
      audience: 'students',
      stage: 'primary',
      department: 'all',
      name: 'Primary answer checker',
      description:
        'Practice sets for primary subjects with a self-check sheet for students and parents.',
      price: 30,
    },
    {
      id: 's-check-kinder',
      audience: 'students',
      stage: 'kindergarten',
      department: 'all',
      name: 'Kindergarten practice pack',
      description:
        'Playful early-years practice sheets with a simple self-check for parents.',
      price: 20,
    },
    {
      id: 's-notes-sci-secondary',
      audience: 'students',
      stage: 'secondary',
      department: 'science',
      name: 'Completed Science notes',
      description:
        'Full topic notes finished by a teacher, ready to study from for SPM, IGCSE and A-Level Science.',
      price: 55,
    },
    {
      id: 's-notes-maths-secondary',
      audience: 'students',
      stage: 'secondary',
      department: 'maths',
      name: 'Completed Maths notes',
      description:
        'Full topic notes finished by a teacher, ready to study from for SPM, IGCSE and A-Level Maths.',
      price: 55,
    },
    {
      id: 's-notes-lang-secondary',
      audience: 'students',
      stage: 'secondary',
      department: 'language',
      name: 'Completed Language notes',
      description:
        'Full topic notes finished by a teacher for English and other languages at secondary level.',
      price: 50,
    },
    {
      id: 's-notes-primary',
      audience: 'students',
      stage: 'primary',
      department: 'all',
      name: 'Completed Primary notes',
      description:
        'Full topic notes finished by a teacher, covering all primary subjects.',
      price: 45,
    },
    {
      id: 's-notes-kinder',
      audience: 'students',
      stage: 'kindergarten',
      department: 'all',
      name: 'Kindergarten teacher notes',
      description:
        'Ready-made early-years notes and activity guides finished by a teacher.',
      price: 35,
    },
  ],
  emptyNote: 'No products match that choice yet. Try another stage or department.',
}

export const CONTACT = {
  heading: 'Get in touch',
  lines: [
    'WhatsApp: +60 12-000 0000 (sample)',
    'Email: hello@example.com (sample)',
    'Area: Online and in-person, sample location',
  ],
  disclaimer:
    'This page uses sample data only. Nothing is sent, saved or booked from this site.',
}

export const NAV_LINKS = [
  { id: 'profile', label: 'Profile', icon: 'profile' },
  { id: 'subjects', label: 'What you can study', icon: 'subjects' },
  { id: 'availability', label: 'Availability', icon: 'calendar' },
  { id: 'feedback', label: 'Feedback', icon: 'feedback' },
  { id: 'products', label: 'Products', icon: 'products' },
  { id: 'collaborate', label: 'Collaborate', icon: 'collaborate' },
  { id: 'booking', label: 'Book a class', icon: 'book' },
]

export const PLACEHOLDER = 'RM -'

export function priceForSubjects(levelId, subjectIds) {
  const level = LEVELS.find((item) => item.id === levelId)
  if (!level) return 0
  const count = level.subjects.filter((subject) =>
    subjectIds.includes(subject.id),
  ).length
  if (count === 0) return 0
  return OBJECTIVE_PRICE + (count - 1) * COMBO_EXTRA_PRICE
}