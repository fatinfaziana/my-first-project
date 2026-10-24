export const SITE_NAME = 'Tuition Service Landing'

export const TAGLINE = 'Tuition for kindergarten to A-Level — sample data'

export const HEADLINE = {
  before: 'Focused tuition that fits',
  accent: 'your exam',
  after: '— try a free class first',
}

export const FREE_TRIAL_LINE =
  'Every new student gets one free trial class so you can see the fit before you commit.'

export const PRICES = {
  single: 60,
  comboExtra: 45,
  mostPopularExtra: 35,
}

export const PROFILE = {
  heading: 'About the tuition service',
  name: 'The tutor',
  intro:
    'A tuition service built on ten years of teaching experience, with one aim: helping every student walk into their exam prepared and confident.',
  paragraphs: [
    'For ten years this service has tutored students from kindergarten through to A-Level, teaching the why behind each answer instead of memorising steps. Students who commit to the weekly routine consistently finish with strong results and a calmer exam season.',
    'Lessons are planned around the student: past-paper practice first, then targeted work on the topics that keep costing marks. This is a teaching background first, and a service built to make that teaching work for each family.',
  ],
  points: [
    '10 years of tutoring experience',
    'A track record of strong student results',
    'Kindergarten through A-Level',
    'National and international syllabuses',
    'Small groups (2–4) or one-to-one',
  ],
}

/* Subjects by stage and syllabus (National / International).
   Sample lists, covering the subjects usually taught at each stage. */
export const SUBJECT_CATALOGUE = [
  {
    id: 'kindergarten',
    label: 'Kindergarten',
    color: 'mint',
    syllabuses: {
      national: {
        label: 'National',
        subjects: [
          'Early Literacy (Bahasa Melayu)',
          'Early Literacy (English)',
          'Early Numeracy',
          'Islamic / Moral Education',
          'Art and Craft',
          'Music and Movement',
        ],
      },
      international: {
        label: 'International',
        subjects: [
          'Phonics and Reading',
          'Early English',
          'Early Mathematics',
          'Discovery of the World',
          'Creative Arts',
          'Physical Play',
        ],
      },
    },
  },
  {
    id: 'primary',
    label: 'Primary',
    color: 'sky',
    syllabuses: {
      national: {
        label: 'National',
        subjects: [
          'Bahasa Melayu',
          'English',
          'Mathematics',
          'Science',
          'Sejarah (History)',
          'Pendidikan Islam / Moral',
        ],
      },
      international: {
        label: 'International',
        subjects: [
          'English',
          'Mathematics',
          'Science',
          'Global Perspectives',
          'Information and Communication Technology',
          'Art and Design',
        ],
      },
    },
  },
  {
    id: 'secondary',
    label: 'Secondary',
    color: 'peach',
    syllabuses: {
      national: {
        label: 'National',
        subjects: [
          'Bahasa Melayu',
          'English',
          'Mathematics',
          'Additional Mathematics',
          'Physics',
          'Chemistry',
          'Biology',
          'Sejarah (History)',
          'Pendidikan Islam / Moral',
          'Prinsip Perakaunan',
        ],
      },
      international: {
        label: 'International',
        subjects: [
          'English Language',
          'Mathematics',
          'Further Mathematics',
          'Physics',
          'Chemistry',
          'Biology',
          'Economics',
          'Business Studies',
          'Computer Science',
          'Accounting',
        ],
      },
    },
  },
]

/* Subjects offered, shown with the booking flow. */
export const SUBJECTS_INTRO = {
  heading: 'Subjects offered',
  note: 'Choose who it is for, then pick your stage, syllabus and subjects to book a class.',
  audiences: [
    {
      id: 'students',
      label: 'For students',
      blurb: 'Tuition classes from kindergarten to A-Level.',
    },
    {
      id: 'teachers',
      label: 'For teachers',
      blurb: 'Find out about teaching with us.',
    },
  ],
}

/* Standalone products, not tied to a subject choice. */
export const PRODUCTS = {
  heading: 'Products',
  note: 'Products you can get on their own: scanners, answer checkers, completed notes and the marking helper.',
  items: [
    {
      id: 'prod-scanner',
      name: 'Answer scanner',
      description:
        'Scan your answer sheet; it compares your answers against the correct answers and shows what to fix. In browser, with the backend to come.',
      price: 40,
      audience: 'students',
    },
    {
      id: 'prod-checker',
      name: 'Answer checker',
      description:
        'Check your own answers against the marking scheme and see the marks earned.',
      price: 30,
      audience: 'students',
    },
    {
      id: 'prod-notes',
      name: 'Completed all-chapters notes',
      description:
        'Full notes for every chapter, finished by a teacher, available per subject.',
      price: 55,
      audience: 'students',
    },
    {
      id: 'prod-marking',
      name: 'Marking helper',
      description:
        'Upload your marking scheme; it scans the keywords for each answer. Then scan a student’s answer to check it. Built to read handwriting, including hard-to-read writing.',
      price: 120,
      audience: 'teachers',
    },
  ],
}

export const AVAILABILITY = {
  heading: 'Booking calendar',
  freeTrialChip: 'Free trial class available',
  note: 'Green days are free or partly free and can be picked. Red days are fully booked and cannot be picked.',
  statuses: {
    free: 'Free',
    partial: 'Partly free',
    full: 'FULLY BOOKED',
    open: 'Free',
    booked: 'Booked',
  },
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

/* Combo packages, prioritising the most popular and best price. */
export const PACKAGES = [
  {
    id: 'single',
    name: 'Single subject',
    includes: 'One subject, weekly class, past-paper practice',
    popular: false,
    extraRate: null,
  },
  {
    id: 'combo-two',
    name: 'Combo: two subjects',
    includes: 'Two subjects, weekly classes, shared exam-technique hour',
    popular: true,
    tag: 'Most popular',
    extraRate: 45,
  },
  {
    id: 'combo-three',
    name: 'Combo: three subjects',
    includes: 'Three subjects, weekly classes, full revision plan',
    popular: false,
    tag: 'Best price',
    extraRate: 35,
  },
]

export const FEEDBACK = {
  heading: 'What parents and students say',
  note: 'Sample feedback. Families who send feedback get a combo price free for 2 weeks.',
  reward: 'Leave feedback and get a combo price free for 2 weeks.',
  items: [
    {
      id: 'fb-1',
      quote:
        'My daughter finally understood Chemistry calculations. The weekly feedback told me exactly what to watch.',
      parentName: 'Aina',
      childName: 'Nur',
      subject: 'SPM Chemistry',
      tone: 'mint',
    },
    {
      id: 'fb-2',
      quote:
        'Clear explanations and real past-paper practice every week. My grade moved up two bands.',
      parentName: 'Daniel',
      childName: 'Ryan',
      subject: 'IGCSE Mathematics',
      tone: 'sky',
    },
    {
      id: 'fb-3',
      quote:
        'The combo plan kept both my subjects on schedule. I never had to chase the syllabus myself.',
      parentName: 'Priya',
      childName: 'Anya',
      subject: 'A-Level Economics',
      tone: 'peach',
    },
  ],
}

export const COLLABORATE = {
  heading: 'Collaborate with us',
  eyebrow: 'Partners and teachers',
  intro:
    'Teachers who want to teach, or anyone with an idea to grow the service, are welcome to work with us as partners. Send your details and a resume, and we will get back to you.',
  levels: [
    { id: 'kindergarten', label: 'Kindergarten' },
    { id: 'primary', label: 'Primary' },
    { id: 'secondary', label: 'Secondary' },
  ],
  subjects: [
    'Mathematics',
    'Additional Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'English',
    'Bahasa Melayu',
    'Economics',
    'Business Studies',
    'Computer Science',
  ],
  successTitle: 'Thank you — your collaboration request is ready.',
  successText:
    'This is a sample page. With the backend added, this goes straight to the Excel sheet, sorted by years of experience, level of education, subjects and level to teach.',
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
  { id: 'feedback', label: 'Feedback', icon: 'feedback' },
  { id: 'availability', label: 'Booking calendar', icon: 'calendar' },
  { id: 'subjects', label: 'Subjects offered', icon: 'subjects' },
  { id: 'products', label: 'Products', icon: 'products' },
  { id: 'collaborate', label: 'Collaborate', icon: 'collaborate' },
]

export const PLACEHOLDER = 'RM -'

export function priceForSubjects(count, extraRate) {
  if (!count || count < 1) return 0
  const rate = extraRate ?? PRICES.comboExtra
  return PRICES.single + (count - 1) * rate
}