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

/* Booking types: one-to-one costs more, groups (2–4) cost less, online is
   cheaper than in person. Each subject's listed price is the group, in-person
   rate; these adjust it. */
export const CLASS_TYPES = {
  group: { id: 'group', label: 'Group (2–4)', factor: 1 },
  oneToOne: { id: 'oneToOne', label: 'One-to-one', factor: 1.6 },
}

export const MODES = {
  online: { id: 'online', label: 'Online', factor: 0.9 },
  inPerson: { id: 'inPerson', label: 'In person', factor: 1 },
}

export const COMBO_DISCOUNT = 0.25

export function subjectPriceFor(basePrice, classType, mode, isCombo) {
  const classFactor = CLASS_TYPES[classType]?.factor ?? 1
  const modeFactor = MODES[mode]?.factor ?? 1
  const comboFactor = isCombo ? 1 - COMBO_DISCOUNT : 1
  return Math.round(basePrice * classFactor * modeFactor * comboFactor)
}

/* Trial class: pick up to 3 subjects, RM 10 each. */
export const TRIAL = {
  id: 'trial',
  label: 'Free trial class',
  pricePerClass: 10,
  maxSubjects: 3,
  blurb: 'Try up to 3 subjects for RM 10 each. See availability, then book.',
}

export function allSubjectsFor(stage, syllabus) {
  const stageData = SUBJECT_CATALOGUE.find((item) => item.id === stage)
  const syll = stageData?.syllabuses[syllabus]
  if (!syll) return []
  return syll.groups.flatMap((group) =>
    group.subjects.map((subject) => ({ ...subject, group: group.label })),
  )
}

export const PROFILE = {
  heading: 'About the tuition service',
  name: 'The tutor',
  photo: '/tutor.jpg',
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
        groups: [
          {
            id: 'bahasa',
            label: 'Bahasa',
            subjects: [
              { name: 'Awal Literasi (Bahasa Melayu)', price: 40 },
              { name: 'Awal Literasi (English)', price: 45 },
            ],
          },
          {
            id: 'matematik',
            label: 'Matematik',
            subjects: [{ name: 'Awal Numerasi', price: 45 }],
          },
          {
            id: 'moral',
            label: 'Agama & Moral',
            subjects: [{ name: 'Pendidikan Islam / Moral', price: 35 }],
          },
          {
            id: 'lain',
            label: 'Lain-lain',
            subjects: [
              { name: 'Seni dan Kraf', price: 35 },
              { name: 'Muzik dan Pergerakan', price: 35 },
            ],
          },
        ],
      },
      international: {
        label: 'International',
        groups: [
          {
            id: 'language',
            label: 'Language',
            subjects: [
              { name: 'Phonics and Reading', price: 50 },
              { name: 'Early English', price: 50 },
            ],
          },
          {
            id: 'maths',
            label: 'Mathematics',
            subjects: [{ name: 'Early Mathematics', price: 50 }],
          },
          {
            id: 'others',
            label: 'Others',
            subjects: [
              { name: 'Discovery of the World', price: 40 },
              { name: 'Creative Arts', price: 40 },
              { name: 'Physical Play', price: 35 },
            ],
          },
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
        groups: [
          {
            id: 'sains',
            label: 'Sains',
            subjects: [{ name: 'Sains', price: 60 }],
          },
          {
            id: 'matematik',
            label: 'Matematik',
            subjects: [{ name: 'Matematik', price: 60 }],
          },
          {
            id: 'bahasa',
            label: 'Bahasa',
            subjects: [
              { name: 'Bahasa Melayu', price: 50 },
              { name: 'English', price: 55 },
            ],
          },
          {
            id: 'sejarah',
            label: 'Sejarah',
            subjects: [{ name: 'Sejarah', price: 50 }],
          },
          {
            id: 'moral',
            label: 'Agama & Moral',
            subjects: [{ name: 'Pendidikan Islam / Moral', price: 45 }],
          },
        ],
      },
      international: {
        label: 'International',
        groups: [
          {
            id: 'science',
            label: 'Science',
            subjects: [{ name: 'Science', price: 65 }],
          },
          {
            id: 'maths',
            label: 'Mathematics',
            subjects: [{ name: 'Mathematics', price: 65 }],
          },
          {
            id: 'language',
            label: 'Language',
            subjects: [{ name: 'English', price: 60 }],
          },
          {
            id: 'humanities',
            label: 'Humanities & Global',
            subjects: [{ name: 'Global Perspectives', price: 55 }],
          },
          {
            id: 'others',
            label: 'Others',
            subjects: [
              { name: 'Information and Communication Technology', price: 60 },
              { name: 'Art and Design', price: 50 },
            ],
          },
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
        groups: [
          {
            id: 'sains',
            label: 'Sains',
            subjects: [
              { name: 'Fizik', price: 75 },
              { name: 'Kimia', price: 75 },
              { name: 'Biologi', price: 70 },
            ],
          },
          {
            id: 'matematik',
            label: 'Matematik',
            subjects: [
              { name: 'Matematik', price: 70 },
              { name: 'Matematik Tambahan', price: 80 },
            ],
          },
          {
            id: 'bahasa',
            label: 'Bahasa',
            subjects: [
              { name: 'Bahasa Melayu', price: 55 },
              { name: 'English', price: 60 },
              { name: 'Bahasa Cina', price: 60 },
            ],
          },
          {
            id: 'perniagaan',
            label: 'Perdagangan',
            subjects: [
              { name: 'Prinsip Perakaunan', price: 65 },
              { name: 'Perniagaan', price: 60 },
              { name: 'Ekonomi', price: 65 },
            ],
          },
          {
            id: 'moral',
            label: 'Agama & Moral',
            subjects: [
              { name: 'Pendidikan Islam', price: 50 },
              { name: 'Al-Quran dan Sunnah', price: 50 },
            ],
          },
          {
            id: 'sejarah',
            label: 'Sejarah',
            subjects: [{ name: 'Sejarah', price: 55 }],
          },
          {
            id: 'lain',
            label: 'Lain-lain',
            subjects: [
              { name: 'Sains Komputer', price: 85 },
              { name: 'Pendidikan Seni Visual', price: 50 },
            ],
          },
        ],
      },
      international: {
        label: 'International',
        groups: [
          {
            id: 'science',
            label: 'Science',
            subjects: [
              { name: 'Physics', price: 85 },
              { name: 'Chemistry', price: 85 },
              { name: 'Biology', price: 80 },
            ],
          },
          {
            id: 'maths',
            label: 'Mathematics',
            subjects: [
              { name: 'Mathematics', price: 75 },
              { name: 'Further Mathematics', price: 90 },
            ],
          },
          {
            id: 'language',
            label: 'Language',
            subjects: [
              { name: 'English Language', price: 65 },
              { name: 'Chinese', price: 70 },
            ],
          },
          {
            id: 'commerce',
            label: 'Commerce',
            subjects: [
              { name: 'Accounting', price: 70 },
              { name: 'Business Studies', price: 70 },
              { name: 'Economics', price: 75 },
            ],
          },
          {
            id: 'humanities',
            label: 'Humanities',
            subjects: [{ name: 'History', price: 55 }],
          },
          {
            id: 'others',
            label: 'Others',
            subjects: [
              { name: 'Computer Science', price: 85 },
              { name: 'Art and Design', price: 50 },
              { name: 'Global Perspectives', price: 55 },
            ],
          },
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
        'Full notes for every chapter, finished by a teacher. Pick a set below — all sets are the same price.',
      price: 55,
      audience: 'students',
      options: [
        'Science (Physics, Chemistry, Biology)',
        'Maths (Mathematics, Additional / Further Maths)',
        'Languages (English, Bahasa Melayu)',
        'Business (Economics, Accounting, Business Studies)',
      ],
      optionsNote: 'Same price for any set',
    },
    {
      id: 'prod-marking',
      name: 'Marking helper (mark4you)',
      description:
        'Upload your marking scheme; it scans the keywords for each answer, then scan a student’s answer to check it. Built to read handwriting, including hard-to-read writing.',
      price: 120,
      audience: 'teachers',
      url: 'https://v0-mark4you.vercel.app/',
      urlLabel: 'Try mark4you',
    },
  ],
}

export const AVAILABILITY = {
  heading: 'Bookings',
  freeTrialChip: 'Free trial class available',
  note: 'Colours show at a glance before you click: green is a fully free day, yellow is partly booked, red is fully booked. Pick a date in any month to book ahead.',
  statuses: {
    free: 'Free',
    partial: 'Partly booked',
    full: 'Fully booked',
    open: 'Free',
    booked: 'Booked',
  },
  allTimes: ['10:00 AM', '2:00 PM', '5:00 PM', '7:30 PM'],
  months: [
    {
      id: 'month-1',
      label: 'Sample Month',
      year: 2026,
      firstWeekday: 3,
      dayCount: 31,
      fullyBooked: [4, 5, 12, 18, 19, 20, 25, 26],
      partlyBooked: [3, 6, 10, 13, 17, 24, 27],
    },
    {
      id: 'month-2',
      label: 'Next Month',
      year: 2026,
      firstWeekday: 6,
      dayCount: 30,
      fullyBooked: [7, 8, 14, 21, 22, 28],
      partlyBooked: [2, 9, 15, 16, 23, 29],
    },
    {
      id: 'month-3',
      label: 'Month After',
      year: 2026,
      firstWeekday: 1,
      dayCount: 31,
      fullyBooked: [3, 10, 11, 17, 24, 31],
      partlyBooked: [4, 5, 12, 18, 19, 25, 26],
    },
  ],
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
      rating: 5,
    },
    {
      id: 'fb-2',
      quote:
        'Clear explanations and real past-paper practice every week. My grade moved up two bands.',
      parentName: 'Daniel',
      childName: 'Ryan',
      subject: 'IGCSE Mathematics',
      tone: 'sky',
      rating: 5,
    },
    {
      id: 'fb-3',
      quote:
        'The combo plan kept both my subjects on schedule. I never had to chase the syllabus myself.',
      parentName: 'Priya',
      childName: 'Anya',
      subject: 'A-Level Economics',
      tone: 'peach',
      rating: 4,
    },
    {
      id: 'fb-4',
      quote:
        'Patient with my son and always explains until he gets it. Booking was easy too.',
      parentName: 'Farah',
      childName: 'Adam',
      subject: 'Primary Science',
      tone: 'mint',
      rating: 4,
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
  { id: 'subjects', label: 'Subjects offered', icon: 'subjects' },
  { id: 'booking', label: 'Bookings', icon: 'calendar' },
  { id: 'products', label: 'Products', icon: 'products' },
  { id: 'collaborate', label: 'Collaborate', icon: 'collaborate' },
  { id: 'contact', label: 'Contact', icon: 'profile' },
]

export const PLACEHOLDER = 'RM -'

export function priceForSubjects(count, extraRate) {
  if (!count || count < 1) return 0
  const rate = extraRate ?? PRICES.comboExtra
  return PRICES.single + (count - 1) * rate
}