/**
 * Seed Content Script
 *
 * Populates all Payload CMS globals with default English content.
 * Translation hooks will auto-generate French versions via DeepL.
 *
 * Run via API route: curl http://localhost:3000/api/seed
 */

import type { Payload } from 'payload';

// ============================================
// SITE SETTINGS
// ============================================
export const siteSettingsData = {
  name: 'ASAD',
  fullName: 'Association Sportive des Amis du Developpement',
  description: 'ASAD is a community sports organization dedicated to promoting sports, unity, and development in Bonaberi, Douala, Cameroon since 2004.',
  slogan: 'Unity Through Sport, Strength Through Community',
  founded: 2004,
  location: {
    neighborhood: 'Bonaberi',
    city: 'Douala',
    country: 'Cameroon',
  },
  contact: {
    email: 'contact@asad-bonaberi.org',
    phone: '+237 6XX XXX XXX',
    address: 'Bonaberi, Douala, Cameroon',
  },
  social: {
    facebook: 'https://facebook.com/asadbonaberi',
    instagram: 'https://instagram.com/asadbonaberi',
  },
};

// ============================================
// HOME PAGE
// ============================================
export const homePageData = {
  heroDescription: 'A community sports organization dedicated to promoting sports, unity, and development in Bonaberi, Douala since 2004.',
  whatIsAsadTitle: 'What Does ASAD Mean?',
  whatIsAsadContent: 'ASAD is more than just a sports club. We are a family of friends united by our love for football and our commitment to community development. Founded in 2004 in Bonaberi, we have grown to become a pillar of our community.',
  storyTitle: 'Our Story',
  storyContent: 'Our mission extends beyond the football pitch. Through various programs, we support education, promote financial discipline, and provide a safety net for our members in times of need.',
  communityTitle: 'Community Programs',
  communityDescription: 'Beyond sports, we invest in our community through various programs that support members and their families.',
  galleryTitle: 'Capturing Our Moments',
  galleryDescription: 'From match days to community events, browse through our memories.',
  ctaTitle: 'Join the ASAD Family',
  ctaDescription: 'Become part of a community that values sports, unity, and mutual support. Whether you\'re a football enthusiast or looking for a supportive community, ASAD welcomes you.',
  stats: [
    { value: '100+', label: 'Active Members' },
    { value: '50+', label: 'Competitions Played' },
  ],
};

// ============================================
// HISTORY PAGE
// ============================================
export const historyPageData = {
  headerTitle: 'Our History',
  headerDescription: 'From humble beginnings in 2004 to a thriving community organization, discover the journey of ASAD.',
  introContent: 'ASAD was founded in 2004 by a group of sports enthusiasts in Bonaberi, Douala. What began as informal Sunday football matches has evolved into a comprehensive community organization that touches the lives of hundreds of families.',
  lookingForwardTitle: 'Looking Forward',
  lookingForwardContent: 'As we continue to grow, our commitment to unity, sports, and community development remains unchanged. The future holds exciting possibilities as we expand our programs and strengthen our impact in Bonaberi and beyond.',
  timelineEvents: [
    {
      year: 2004,
      title: 'ASAD Founded',
      description: 'A group of sports enthusiasts in Bonaberi came together to form the Association Sportive des Amis du Developpement, united by a passion for football and community development.',
    },
    {
      year: 2006,
      title: 'First Official Competition',
      description: 'ASAD participated in its first official neighborhood tournament, marking the beginning of our competitive journey.',
    },
    {
      year: 2010,
      title: 'Community Programs Launched',
      description: 'Expanded beyond sports to launch social programs including the back-to-school initiative and community savings schemes.',
    },
    {
      year: 2015,
      title: 'Decade of Excellence',
      description: 'Celebrated 10 years of community service with expanded membership and multiple tournament victories.',
    },
    {
      year: 2020,
      title: 'Resilience Through Challenges',
      description: 'Adapted our programs during difficult times, strengthening community bonds and support systems.',
    },
    {
      year: 2024,
      title: '20 Years Strong',
      description: 'Marking two decades of unity, sportsmanship, and community development in Bonaberi.',
    },
  ],
};

// ============================================
// LEADERSHIP PAGE
// ============================================
export const leadershipPageData = {
  headerTitle: 'Leadership Team',
  headerDescription: 'Meet the dedicated individuals who lead ASAD with vision, integrity, and commitment to our community.',
  introContent: 'Our leadership team is composed of dedicated members who volunteer their time and expertise to guide ASAD. Elected by the general assembly, they work tirelessly to ensure the organization fulfills its mission of promoting sports and community development.',
  electionNoteTitle: 'Democratic Leadership',
  electionNoteContent: 'ASAD\'s leadership is elected democratically by the general assembly of members. Elections are held according to our statutes to ensure transparent and fair governance.',
  teamMembers: [
    {
      name: 'President Name',
      role: 'President',
      bio: 'Leading ASAD with vision and dedication to community development.',
      since: 2004,
    },
    {
      name: 'Vice President Name',
      role: 'Vice President',
      bio: 'Supporting the president in all organizational matters.',
    },
    {
      name: 'Secretary General Name',
      role: 'Secretary General',
      bio: 'Managing communications and administrative affairs.',
    },
    {
      name: 'Treasurer Name',
      role: 'Treasurer',
      bio: 'Overseeing financial management and transparency.',
    },
    {
      name: 'Sports Director Name',
      role: 'Sports Director',
      bio: 'Coordinating all sporting activities and competitions.',
    },
    {
      name: 'Social Director Name',
      role: 'Social Affairs Director',
      bio: 'Managing community programs and member welfare.',
    },
  ],
};

// ============================================
// STATUTES PAGE
// ============================================
export const statutesPageData = {
  headerTitle: 'Statutes & Documents',
  headerDescription: 'Access our official governing documents that guide how ASAD operates with transparency and accountability.',
  keyStatutes: [
    {
      title: 'Article 1: Name and Purpose',
      content: 'The Association Sportive des Amis du Developpement (ASAD) is a non-profit sports and community organization dedicated to promoting unity through sports and supporting community development.',
    },
    {
      title: 'Article 2: Objectives',
      content: 'ASAD aims to organize sporting activities, foster community spirit, provide mutual support among members, and contribute to the social and economic development of the community.',
    },
    {
      title: 'Article 3: Membership',
      content: 'Membership is open to individuals who share our values and commit to participating in our activities. Members must adhere to the statutes and pay required dues.',
    },
    {
      title: 'Article 4: Governance',
      content: 'ASAD is governed by a democratically elected executive committee, with major decisions made by the general assembly of all members.',
    },
    {
      title: 'Article 5: Finances',
      content: 'The organization\'s finances are managed transparently. All members have the right to be informed about financial matters and to review financial reports.',
    },
  ],
  documentsTitle: 'Download Documents',
  documentsDescription: 'Access our official documents for detailed information about ASAD\'s governance and operations.',
  contactSectionTitle: 'Need More Information?',
  contactSectionContent: 'If you have questions about our statutes or need additional documentation, please contact our Secretary General. Members can request copies of official documents at any general assembly meeting.',
};

// ============================================
// COMMUNITY PAGE
// ============================================
export const communityPageData = {
  headerTitle: 'Community Programs',
  headerDescription: 'At ASAD, we believe in supporting our members beyond the football pitch. Our community programs provide financial, educational, and social support to members and their families.',
  introTitle: 'More Than Football',
  introContent: 'While football brought us together, our vision extends far beyond the pitch. ASAD has developed a comprehensive network of community programs designed to support members through life\'s various stages and challenges. From celebrating new life to supporting education, from promoting financial discipline to providing emergency assistance, our programs reflect the true meaning of community.',

  // ASAD Sundays
  asadSundaysTitle: 'ASAD Sundays',
  asadSundaysDescription: 'Our signature weekly gathering where members come together every Sunday for football, fellowship, and community building.',
  asadSundaysIntro: 'Every Sunday, ASAD members gather for our weekly tradition that combines sports, socializing, and solidarity. It\'s more than just football—it\'s a time for fellowship, business discussions, and strengthening community bonds.',
  asadSundaysActivities: [
    { icon: 'trophy', title: 'Football Matches', description: 'Friendly games that bring out our competitive spirit while keeping fitness fun.' },
    { icon: 'coffee', title: 'Fellowship', description: 'Socializing, catching up, and building relationships over drinks.' },
    { icon: 'users', title: 'Community Updates', description: 'Sharing news, announcements, and planning upcoming activities.' },
  ],
  asadSundaysSchedule: [
    { time: '7:00 AM', activity: 'Arrival and warm-up' },
    { time: '7:30 AM', activity: 'Football matches' },
    { time: '10:00 AM', activity: 'Fellowship and refreshments' },
    { time: '11:00 AM', activity: 'Discussions and wrap-up' },
  ],

  // Baby Shower
  babyShowerTitle: 'Baby Shower Program',
  babyShowerDescription: 'Celebrating new life in our community. We support expecting and new parents with gifts and community celebration.',
  babyShowerIntro: 'When a member welcomes a new child, the entire ASAD family celebrates. Our baby shower program ensures every new parent receives support and love from the community.',
  babyShowerFeatures: [
    { icon: 'gift', title: 'Gift Packages', description: 'Essential items for newborns collected from the community.' },
    { icon: 'party-popper', title: 'Celebration Event', description: 'A joyful gathering to welcome the new addition to our extended family.' },
    { icon: 'heart', title: 'Community Support', description: 'Ongoing support and advice from experienced parents in the community.' },
  ],
  babyShowerProcess: [
    { title: 'Announcement', description: 'Member announces the upcoming arrival to the community.' },
    { title: 'Collection', description: 'Members contribute to a gift fund or bring individual gifts.' },
    { title: 'Celebration', description: 'A special Sunday is dedicated to celebrating the new family.' },
  ],
  babyShowerEligibility: 'All active members in good standing are eligible for the baby shower program. The program covers the member\'s own children.',

  // Back to School
  backToSchoolTitle: 'Back to School Scheme',
  backToSchoolDescription: 'Annual initiative providing school supplies and support to children of members and the broader community.',
  backToSchoolIntro: 'Education is a priority for ASAD. Each year, we help ease the financial burden of the school season by providing supplies and support to children in our community.',
  backToSchoolSupport: [
    { icon: 'graduation-cap', title: 'School Supplies', description: 'Notebooks, pens, bags, and other essential school materials.' },
    { icon: 'book-open', title: 'Educational Support', description: 'Guidance and mentorship for students.' },
    { icon: 'heart', title: 'Financial Assistance', description: 'Help with school fees for families in need.' },
  ],
  backToSchoolImpact: [
    { value: '50+', label: 'Children Supported Annually' },
    { value: '100%', label: 'Member Children Coverage' },
  ],
  backToSchoolProcess: [
    { title: 'Registration', description: 'Members register their children for the program.' },
    { title: 'Collection', description: 'Funds are collected throughout the year.' },
    { title: 'Distribution', description: 'Supplies are distributed before school starts in September.' },
  ],

  // Soap & Oil Thrift
  soapOilTitle: 'Soap & Oil Thrift',
  soapOilDescription: 'A unique savings initiative where members contribute to receive household essentials, promoting financial discipline.',
  soapOilIntro: 'The Soap & Oil Thrift is a practical savings scheme that helps members plan for household essentials. By contributing regularly, members receive quality products at the end of the year.',
  soapOilBenefits: [
    { icon: 'piggy-bank', title: 'Forced Savings', description: 'Regular contributions help build financial discipline.' },
    { icon: 'shopping-bag', title: 'Quality Products', description: 'Bulk purchasing ensures quality items at good prices.' },
    { icon: 'calendar', title: 'Year-End Distribution', description: 'Products distributed before the holiday season.' },
  ],
  soapOilProcess: [
    { title: 'Registration', description: 'Members sign up and choose their contribution level.' },
    { title: 'Weekly Contributions', description: 'Small amounts are collected each Sunday.' },
    { title: 'Bulk Purchase', description: 'Products are bought in bulk at wholesale prices.' },
    { title: 'Distribution', description: 'Members receive their share before December.' },
  ],
  soapOilParticipation: 'The Soap & Oil Thrift is optional but highly encouraged. It promotes financial planning and provides practical value to participating members.',

  // Ndjangi
  ndjangiTitle: 'ASAD Ndjangi',
  ndjangiDescription: 'Traditional rotating savings and credit system adapted for our community, helping members achieve financial goals.',
  ndjangiIntro: 'Ndjangi is a traditional Cameroonian rotating savings system. ASAD\'s Ndjangi helps members access larger sums of money than they could save individually, fostering financial growth and mutual support.',
  ndjangiFeatures: [
    { icon: 'users', title: 'Community Trust', description: 'Built on mutual trust and accountability among members.' },
    { icon: 'repeat', title: 'Rotating Benefits', description: 'Each member takes turns receiving the pool.' },
    { icon: 'banknote', title: 'Financial Boost', description: 'Access to a lump sum for projects or emergencies.' },
    { icon: 'shield', title: 'No Interest', description: 'Interest-free system based on solidarity.' },
  ],
  ndjangiProcess: [
    { title: 'Formation', description: 'A group of members agrees to participate.' },
    { title: 'Contribution', description: 'Each member contributes a fixed amount weekly.' },
    { title: 'Rotation', description: 'One member receives the total pool each cycle.' },
    { title: 'Completion', description: 'The cycle ends when everyone has received once.' },
  ],
  ndjangiExample: {
    memberCount: 10,
    contributionAmount: '10,000 FCFA',
    totalPayout: '100,000 FCFA',
    description: 'With 10 members each contributing 10,000 FCFA weekly, one member receives 100,000 FCFA each week. After 10 weeks, everyone has contributed and received equally.',
  },

  // Social Fund
  socialFundTitle: 'Social Fund',
  socialFundDescription: 'Emergency support system providing financial assistance to members during difficult times, illness, or bereavement.',
  socialFundIntro: 'Life brings unexpected challenges. ASAD\'s Social Fund provides a safety net for members facing hardships, ensuring no one faces difficulties alone.',
  socialFundCoverage: [
    { icon: 'heart', title: 'Health Emergencies', description: 'Support during illness or medical emergencies.' },
    { icon: 'hand-heart', title: 'Bereavement', description: 'Assistance and solidarity during loss of loved ones.' },
    { icon: 'shield', title: 'Crisis Support', description: 'Help during unexpected personal or family crises.' },
  ],
  socialFundProcess: [
    { title: 'Notification', description: 'Member or family notifies ASAD of the situation.' },
    { title: 'Verification', description: 'Social Affairs Director verifies and assesses needs.' },
    { title: 'Mobilization', description: 'Community is informed and support is mobilized.' },
    { title: 'Disbursement', description: 'Funds are released according to established guidelines.' },
  ],
  socialFundEligible: [
    { item: 'Active members in good standing' },
    { item: 'Immediate family members of active members' },
  ],
  socialFundConditions: [
    { item: 'Member must be up to date with contributions' },
    { item: 'Situation must be verified by the executive committee' },
  ],

  // Impact Stats
  impactStats: [
    { value: '100+', label: 'Families Supported' },
    { value: '50+', label: 'Children Helped' },
  ],

  ctaTitle: 'Be Part of the Community',
  ctaDescription: 'Our community programs are open to all ASAD members. Join us and become part of a family that supports each other through every stage of life.',
};

// ============================================
// SPORTS PAGE
// ============================================
export const sportsPageData = {
  headerTitle: 'Sports at ASAD',
  headerDescription: 'Football is at the heart of ASAD. Our sporting activities bring members together every week in pursuit of excellence and unity.',
  introTitle: 'More Than Just a Game',
  introContent: 'At ASAD, football is the thread that weaves our community together. Every Sunday, members gather on the pitch to play, compete, and strengthen the bonds of friendship. Our sporting activities range from intense competitive tournaments to friendly matches that welcome players of all skill levels.',

  // Competitions
  competitionsTitle: 'Competitions',
  competitionsDescription: 'We participate in local and regional tournaments, representing ASAD with pride and sportsmanship. Our competitive spirit drives us to excellence.',
  competitionsPhilosophy: 'Competition brings out the best in us. Whether we win or lose, we represent ASAD with integrity, sportsmanship, and pride.',
  achievements: [
    { year: '2023', title: 'Bonaberi Championship', result: 'Champion', description: 'Won the local neighborhood championship.' },
    { year: '2022', title: 'Inter-Association Cup', result: 'Finalist', description: 'Reached the finals in a regional competition.' },
  ],
  upcomingEvents: [
    { title: 'Season Tournament', date: 'Ongoing', status: 'Active' },
    { title: 'End of Year Cup', date: 'December 2025', status: 'Upcoming' },
  ],

  // Friendly Matches
  friendlyMatchesTitle: 'Friendly Matches',
  friendlyMatchesDescription: 'Building relationships through friendly games with other community teams. These matches foster camaraderie and expand our network.',
  friendlyMatchesPhilosophy: 'Friendly matches are about building bridges. They\'re opportunities to meet new people, forge alliances, and enjoy the beautiful game without the pressure of competition.',
  matchTypes: [
    { icon: 'users', title: 'Inter-Neighborhood Games', description: 'Matches against teams from neighboring communities.', frequency: 'Monthly' },
    { icon: 'map-pin', title: 'Home Games', description: 'Welcoming visiting teams to our pitch.', frequency: 'Bi-weekly' },
    { icon: 'calendar', title: 'Special Occasions', description: 'Games organized for holidays and celebrations.', frequency: 'Quarterly' },
  ],
  recentMatches: [
    { opponent: 'FC Bonassama', result: '3-2', outcome: 'win', date: 'January 2025', location: 'Home' },
    { opponent: 'AS Nylon', result: '1-1', outcome: 'draw', date: 'December 2024', location: 'Away' },
  ],

  // Internal Challenge
  challengeTitle: 'ASAD # ASAD Challenge',
  challengeDescription: 'The ASAD # ASAD challenge brings members together in friendly competition. Teams are formed and compete for bragging rights.',
  challengeConcept: 'The Internal Challenge is our way of keeping competition alive within the family. Members form teams and compete against each other, creating memorable moments and friendly rivalries.',
  challengeRules: [
    { title: 'Team Formation', description: 'Teams are formed through a draft or random selection.' },
    { title: 'Round Robin', description: 'All teams play each other once in the group stage.' },
    { title: 'Playoffs', description: 'Top teams advance to knockout rounds.' },
    { title: 'Fair Play', description: 'Sportsmanship is emphasized above results.' },
  ],
  hallOfChampions: [
    { year: 2023, team: 'Team Alpha', captain: 'Captain A' },
    { year: 2022, team: 'Team Omega', captain: 'Captain B' },
  ],

  // Jerseys
  jerseysTitle: 'Jersey Collection',
  jerseysDescription: 'Our iconic green and blue jerseys have evolved over the years. Each design represents a chapter in our history.',
  jerseysIntro: 'ASAD\'s colors are more than just a uniform—they represent our identity, our history, and our unity. Each jersey tells a story of the era it represents.',
  brandColors: [
    { name: 'ASAD Green', hex: '#1a5f2a', meaning: 'Represents growth, nature, and the vibrancy of our community.' },
    { name: 'ASAD Blue', hex: '#1e40af', meaning: 'Symbolizes unity, trust, and the depth of our bonds.' },
    { name: 'White', hex: '#ffffff', meaning: 'Stands for purity, peace, and sportsmanship.' },
  ],
  jerseyHistory: [
    { era: '2004-2008', title: 'The Original', description: 'Our first jerseys, simple but meaningful.', colors: 'Green, White', status: 'Historic' },
    { era: '2009-2015', title: 'The Classic', description: 'Introduced our signature color combination.', colors: 'Green, Blue, White', status: 'Historic' },
    { era: '2016-Present', title: 'The Modern', description: 'Current design with refined aesthetics.', colors: 'Green, Blue, White', status: 'Current' },
  ],

  // Stats
  stats: [
    { value: '50+', label: 'Competitions Played' },
    { value: 'Every', label: 'Sunday We Play' },
    { value: '100+', label: 'Active Players' },
  ],
};

// ============================================
// MEMBERS PAGE
// ============================================
export const membersPageData = {
  headerTitle: 'Join ASAD',
  headerDescription: 'Become part of a community that values sports, unity, and mutual support. ASAD membership opens doors to fellowship, programs, and a family that stands together.',
  benefits: [
    {
      icon: 'users',
      title: 'Community & Fellowship',
      description: 'Join a supportive family of like-minded individuals who share your passion for sports and community.',
    },
    {
      icon: 'calendar',
      title: 'Regular Activities',
      description: 'Participate in weekly ASAD Sundays, competitions, and social events throughout the year.',
    },
    {
      icon: 'heart',
      title: 'Social Support Programs',
      description: 'Access to our social fund, baby shower program, and other support systems for you and your family.',
    },
    {
      icon: 'file-text',
      title: 'Financial Programs',
      description: 'Participate in Ndjangi, Soap & Oil Thrift, and other savings programs designed to help members.',
    },
  ],
  requirements: [
    { requirement: 'Be at least 18 years of age' },
    { requirement: 'Share ASAD\'s values of unity, sportsmanship, and community development' },
    { requirement: 'Commit to participating regularly in ASAD activities' },
    { requirement: 'Pay the registration fee and agree to regular membership dues' },
    { requirement: 'Abide by ASAD\'s statutes and internal regulations' },
    { requirement: 'Be recommended by an existing member or attend trial Sundays' },
  ],
  process: [
    {
      title: 'Express Interest',
      description: 'Contact us or attend an ASAD Sunday to express your interest in joining.',
    },
    {
      title: 'Trial Period',
      description: 'Participate in a few ASAD Sundays to get to know the community and let us know you.',
    },
    {
      title: 'Application',
      description: 'Submit your membership application with required information and registration fee.',
    },
    {
      title: 'Approval',
      description: 'The executive committee reviews applications and welcomes approved members.',
    },
  ],
  duesTitle: 'Membership Dues',
  duesContent: 'ASAD membership involves a one-time registration fee and regular dues that support our programs and activities. Specific amounts are communicated upon application. Our fees are designed to be accessible while ensuring we can deliver meaningful programs.',
  ctaTitle: 'Ready to Join?',
  ctaDescription: 'Take the first step toward becoming part of the ASAD family. Contact us to learn more or visit us on any Sunday to experience our community firsthand.',
};

// ============================================
// IN MEMORIAM PAGE
// ============================================
export const inMemoriamPageData = {
  headerTitle: 'In Memoriam',
  headerDescription: 'Honoring the memory of ASAD members who have passed on. Their contributions to our community live on in our hearts and in the legacy they left behind.',
  introContent: 'The ASAD family has lost cherished members over the years. While they are no longer with us physically, their memory, their contributions, and their spirit continue to inspire us. We honor them here, ensuring they are never forgotten.',
  departedMembers: [
    {
      name: 'Member Name',
      role: 'Founding Member',
      birthYear: 2004,
      deathYear: 2020,
      tribute: 'A dedicated member who contributed greatly to the foundation and growth of ASAD. Their spirit of unity and sportsmanship continues to inspire us.',
    },
    {
      name: 'Member Name',
      role: 'Active Member',
      birthYear: 2008,
      deathYear: 2022,
      tribute: 'Known for their unwavering support and commitment to the community. Their kindness and generosity touched many lives.',
    },
    {
      name: 'Member Name',
      role: 'Former Executive Member',
      birthYear: 2006,
      deathYear: 2023,
      tribute: 'A leader who served with integrity and dedication. Their vision helped shape many of our community programs.',
    },
  ],
  closingQuote: '"Gone from our sight, but never from our hearts. Their legacy lives on through the community they helped build."',
  contactNote: 'If you would like to add a tribute for a departed member, please contact the Social Affairs Director.',
};

// ============================================
// MEDIA PAGE
// ============================================
export const mediaPageData = {
  headerTitle: 'Media Gallery',
  headerDescription: 'Capturing the moments that make ASAD special. Browse through our collection of photos, videos, and memories from years of community building.',
  categories: [
    {
      icon: 'camera',
      title: 'Photo Gallery',
      description: 'Browse through our collection of photos from competitions, community events, and celebrations.',
      href: '/media/gallery',
      count: '500+',
      unit: 'Photos',
      disabled: false,
    },
    {
      icon: 'calendar',
      title: 'Program of the Year',
      description: 'View our annual calendar of activities, events, and important dates for the ASAD community.',
      href: '/media/program',
      count: '12',
      unit: 'Months Planned',
      disabled: false,
    },
    {
      icon: 'video',
      title: 'Videos',
      description: 'Watch highlights from our matches, events, and special moments captured on video.',
      href: '#',
      count: 'Coming',
      unit: 'Soon',
      disabled: true,
    },
  ],
  featuredTitle: 'Featured Moments',
  featuredDescription: 'Some of our most memorable captures from recent events.',
  submitTitle: 'Have Photos to Share?',
  submitDescription: 'If you have photos from ASAD events that you\'d like to add to our gallery, please share them with the media coordinator at any ASAD Sunday gathering or through our contact page.',
};

// ============================================
// PROGRAM OF YEAR PAGE
// ============================================
export const programOfYearPageData = {
  headerTitle: 'Program of the Year',
  headerDescription: 'ASAD\'s calendar of activities for the year. Plan your participation and never miss an important event.',
  downloadButtonText: 'Download PDF (Coming Soon)',
  programYear: new Date().getFullYear(),
  periods: [
    {
      month: 'January',
      events: [
        { title: 'New Year ASAD Sunday', type: 'regular', completed: true },
        { title: 'Annual General Meeting', type: 'major', completed: true },
      ],
    },
    {
      month: 'February',
      events: [
        { title: 'Regular ASAD Sundays', type: 'regular', completed: true },
        { title: 'Internal Challenge Kickoff', type: 'sports', completed: true },
      ],
    },
    {
      month: 'March',
      events: [
        { title: 'Regular ASAD Sundays', type: 'regular', completed: false },
        { title: 'Women\'s Day Celebration', type: 'social', completed: false },
      ],
    },
    {
      month: 'April - May',
      events: [
        { title: 'Regular ASAD Sundays', type: 'regular', completed: false },
        { title: 'Easter Friendly Match', type: 'sports', completed: false },
      ],
    },
    {
      month: 'June - August',
      events: [
        { title: 'Regular ASAD Sundays', type: 'regular', completed: false },
        { title: 'Summer Tournament Season', type: 'sports', completed: false },
        { title: 'Holiday Celebrations', type: 'social', completed: false },
      ],
    },
    {
      month: 'September',
      events: [
        { title: 'Back to School Distribution', type: 'community', completed: false },
        { title: 'Regular ASAD Sundays', type: 'regular', completed: false },
      ],
    },
    {
      month: 'October - November',
      events: [
        { title: 'Regular ASAD Sundays', type: 'regular', completed: false },
        { title: 'Internal Challenge Finals', type: 'sports', completed: false },
      ],
    },
    {
      month: 'December',
      events: [
        { title: 'End of Year Celebration', type: 'major', completed: false },
        { title: 'Christmas Gathering', type: 'social', completed: false },
        { title: 'Soap & Oil Distribution', type: 'community', completed: false },
      ],
    },
  ],
  notesTitle: 'Important Notes',
  notes: [
    { note: 'ASAD Sundays are held every week throughout the year unless otherwise announced.' },
    { note: 'Dates for major events are communicated in advance through our communication channels.' },
    { note: 'Special events may be added based on opportunities or member initiatives.' },
    { note: 'For the most up-to-date information, attend ASAD Sundays or contact the executive committee.' },
  ],
};

// ============================================
// CONTACT PAGE
// ============================================
export const contactPageData = {
  headerTitle: 'Contact Us',
  headerDescription: 'Have questions about ASAD? Want to join or arrange a friendly match? We\'d love to hear from you. Reach out through any of the channels below.',
  socialTitle: 'Connect on Social Media',
  socialDescription: 'Follow us on social media to stay updated with ASAD activities, photos, and announcements.',
  whenToFindUsTitle: 'When to Find Us',
  asadSundaysDescription: 'Every Sunday morning starting at 7:00 AM. This is the best time to meet the community, play football, and learn more about ASAD.',
  bestWayDescription: 'For quick responses, WhatsApp or phone calls work best. For detailed inquiries, email is preferred.',
  finalCtaTitle: 'We\'d Love to Hear From You',
  finalCtaDescription: 'Whether you\'re interested in joining, have questions about our programs, or want to arrange a friendly match with your team—don\'t hesitate to reach out. The ASAD family welcomes you!',
};

// ============================================
// SEED FUNCTION
// ============================================
export async function seedAllContent(payload: Payload) {
  console.log('🌱 Starting database seeding...\n');

  const globals = [
    { slug: 'site-settings', data: siteSettingsData, name: 'Site Settings' },
    { slug: 'home-page', data: homePageData, name: 'Home Page' },
    { slug: 'history-page', data: historyPageData, name: 'History Page' },
    { slug: 'leadership-page', data: leadershipPageData, name: 'Leadership Page' },
    { slug: 'statutes-page', data: statutesPageData, name: 'Statutes Page' },
    { slug: 'community-page', data: communityPageData, name: 'Community Page' },
    { slug: 'sports-page', data: sportsPageData, name: 'Sports Page' },
    { slug: 'members-page', data: membersPageData, name: 'Members Page' },
    { slug: 'in-memoriam-page', data: inMemoriamPageData, name: 'In Memoriam Page' },
    { slug: 'media-page', data: mediaPageData, name: 'Media Page' },
    { slug: 'program-of-year-page', data: programOfYearPageData, name: 'Program of Year Page' },
    { slug: 'contact-page', data: contactPageData, name: 'Contact Page' },
  ];

  for (const global of globals) {
    try {
      console.log(`📝 Seeding ${global.name}...`);
      await payload.updateGlobal({
        slug: global.slug,
        locale: 'en',
        data: global.data,
      });
      console.log(`✅ ${global.name} seeded (French will auto-translate)`);
    } catch (error) {
      console.error(`❌ Error seeding ${global.name}:`, error);
    }
  }

  console.log('\n⏳ Waiting for translations to complete...');
  console.log('   (DeepL translation hooks run asynchronously after each save)');

  return { success: true, message: 'Seeding complete! Check admin panel for content.' };
}
