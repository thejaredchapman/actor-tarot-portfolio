export interface TarotRole {
  id: string
  cardNumber: string
  cardName: string
  arcana: string
  character: string
  production: string
  productionType: string
  director: string
  year: string
  description: string
  quote: string
  symbolMeaning: string
}

export interface TarotCredit {
  category: string
  cardName: string
  credits: {
    role: string
    production: string
    venue?: string
    director?: string
    year: string
  }[]
}

export const actorInfo = {
  name: 'Cassandra Veil',
  tagline: 'Every role is a reading. Every stage, a sacred spread.',
  bio: `Cassandra Veil is a classically trained actor whose magnetic presence transcends the boundaries between stage and screen. With over a decade of experience spanning Shakespeare to contemporary experimental theatre, independent film, and prestige television, she brings an otherworldly depth to every character she inhabits.

Known for her transformative performances and her ability to find the profound humanity within even the most enigmatic roles, Cassandra has been called "a force of nature wrapped in mystery" by The Stage. Her work draws from a deep well of emotional intelligence, physical discipline, and an intuitive understanding of the human condition that audiences describe as almost... prophetic.

When not performing, Cassandra studies comparative mythology, practices contemplative arts, and advocates for diversity in storytelling. She holds an MFA from the Yale School of Drama and is a proud member of SAG-AFTRA and Actors' Equity.`,
  representation: {
    agent: 'Arcana Artists Agency',
    agentName: 'Morgan Blackwood',
    agentEmail: 'morgan@arcanaartists.com',
    manager: 'Veiled Path Management',
    managerName: 'Elena Thorne',
    managerEmail: 'elena@veiledpath.com',
  },
  stats: {
    yearsActive: '12+',
    productions: '40+',
    awards: '8',
    training: 'Yale MFA',
  },
  skills: [
    'Classical Theatre',
    'Contemporary Drama',
    'Shakespeare',
    'Chekhov',
    'Physical Theatre',
    'Stage Combat',
    'Vocal Performance',
    'Dialect Work (RP, Southern, Irish, French)',
    'On-Camera Technique',
    'Improvisation',
    'Meisner Technique',
    'Viewpoints',
  ],
}

export const featuredRoles: TarotRole[] = [
  {
    id: 'the-star',
    cardNumber: 'XVII',
    cardName: 'The Star',
    arcana: 'Major Arcana',
    character: 'Lady Macbeth',
    production: 'Macbeth',
    productionType: 'Theatre',
    director: 'Adrian Noble',
    year: '2024',
    description:
      'A Lady Macbeth stripped of Victorian restraint — raw, feral, and incandescent. This interpretation explored ambition as a form of grief, transforming the famous sleepwalking scene into a devastating reckoning with loss.',
    quote:
      '"Veil\'s Lady Macbeth doesn\'t just unravel — she combusts, leaving the audience breathless in the ashes." — The Guardian',
    symbolMeaning:
      'The Star represents hope, inspiration, and the inner light that guides us through darkness — much like this career-defining performance.',
  },
  {
    id: 'the-empress',
    cardNumber: 'III',
    cardName: 'The Empress',
    arcana: 'Major Arcana',
    character: 'Nora Helmer',
    production: "A Doll's House",
    productionType: 'Theatre',
    director: 'Ivo van Hove',
    year: '2023',
    description:
      "A radical reimagining of Ibsen's classic, set in a sterile modern apartment. Cassandra's Nora began as perfectly porcelain and ended as molten steel, her famous door-slam replaced by an eerie, silent departure that haunted audiences for weeks.",
    quote:
      '"The definitive Nora of our generation." — The New York Times',
    symbolMeaning:
      'The Empress embodies feminine power, nurturing, and the eventual reclamation of one\'s own sovereignty.',
  },
  {
    id: 'the-high-priestess',
    cardNumber: 'II',
    cardName: 'The High Priestess',
    arcana: 'Major Arcana',
    character: 'Dr. Iris Vantage',
    production: 'The Liminal Hour',
    productionType: 'Film',
    director: 'Chloé Zhao',
    year: '2024',
    description:
      'In this psychological thriller, Cassandra plays a neuroscientist who discovers that her patients\' dreams are bleeding into reality. A masterclass in quiet terror, her performance anchors the film\'s exploration of consciousness and perception.',
    quote:
      '"A performance of exquisite restraint and devastating power." — Variety',
    symbolMeaning:
      'The High Priestess guards the threshold between the known and unknown, conscious and unconscious.',
  },
  {
    id: 'the-moon',
    cardNumber: 'XVIII',
    cardName: 'The Moon',
    arcana: 'Major Arcana',
    character: 'Elara Nightshade',
    production: 'Midnight Meridian',
    productionType: 'Television',
    director: 'Mike Flanagan',
    year: '2023',
    description:
      'A gothic limited series following a medium who uncovers her family\'s dark legacy. Cassandra\'s portrayal balanced genuine warmth with creeping dread, earning her a Critics\' Choice nomination.',
    quote:
      '"Veil turns the screen into a séance — you can\'t look away." — IndieWire',
    symbolMeaning:
      'The Moon represents intuition, the subconscious, and the courage to navigate uncertainty.',
  },
  {
    id: 'the-magician',
    cardNumber: 'I',
    cardName: 'The Magician',
    arcana: 'Major Arcana',
    character: 'Prospera',
    production: 'The Tempest',
    productionType: 'Theatre',
    director: 'Phyllida Lloyd',
    year: '2022',
    description:
      'A gender-flipped Prospero brought to life with thunderous authority and tender vulnerability. Cassandra commanded the stage like a conductor commands an orchestra — every gesture, every silence, perfectly orchestrated.',
    quote:
      '"Shakespeare would have written it this way if he\'d known Cassandra Veil." — Time Out London',
    symbolMeaning:
      'The Magician channels the elements, manifesting vision into reality through sheer will and mastery.',
  },
  {
    id: 'the-lovers',
    cardNumber: 'VI',
    cardName: 'The Lovers',
    arcana: 'Major Arcana',
    character: 'Catherine Earnshaw',
    production: 'Wuthering Heights',
    productionType: 'Film',
    director: 'Andrea Arnold',
    year: '2022',
    description:
      'A wild, visceral Catherine who is as much a force of the moors as Heathcliff himself. Cassandra brought a feral physicality and aching tenderness that redefined the literary heroine for modern audiences.',
    quote:
      '"The definitive screen Catherine — untamed, heartbreaking, unforgettable." — Sight & Sound',
    symbolMeaning:
      'The Lovers represent passionate connection, profound choices, and the union of opposing forces.',
  },
]

export const resumeCredits: TarotCredit[] = [
  {
    category: 'Theatre',
    cardName: 'The Tower',
    credits: [
      { role: 'Lady Macbeth', production: 'Macbeth', venue: 'National Theatre', director: 'Adrian Noble', year: '2024' },
      { role: 'Nora Helmer', production: "A Doll's House", venue: 'Park Avenue Armory', director: 'Ivo van Hove', year: '2023' },
      { role: 'Prospera', production: 'The Tempest', venue: 'Donmar Warehouse', director: 'Phyllida Lloyd', year: '2022' },
      { role: 'Blanche DuBois', production: 'A Streetcar Named Desire', venue: 'Young Vic', director: 'Benedict Andrews', year: '2021' },
      { role: 'Hedda Gabler', production: 'Hedda Gabler', venue: 'Almeida Theatre', director: 'Robert Icke', year: '2020' },
      { role: 'Nina', production: 'The Seagull', venue: 'Chichester Festival', director: 'Jamie Lloyd', year: '2019' },
      { role: 'Viola', production: 'Twelfth Night', venue: 'Globe Theatre', director: 'Emma Rice', year: '2018' },
      { role: 'Antigone', production: 'Antigone', venue: 'BAM Harvey Theater', director: 'Anne Bogart', year: '2017' },
    ],
  },
  {
    category: 'Film',
    cardName: 'The Wheel of Fortune',
    credits: [
      { role: 'Dr. Iris Vantage', production: 'The Liminal Hour', director: 'Chloé Zhao', year: '2024' },
      { role: 'Catherine Earnshaw', production: 'Wuthering Heights', director: 'Andrea Arnold', year: '2022' },
      { role: 'Sister Marguerite', production: 'The Silence Between', director: 'Terrence Malick', year: '2021' },
      { role: 'Detective Maren Voss', production: 'Blackwater', director: 'Denis Villeneuve', year: '2020' },
      { role: 'Young Ada Lovelace', production: 'The Enchantress of Numbers', director: 'Greta Gerwig', year: '2019' },
    ],
  },
  {
    category: 'Television',
    cardName: 'Judgement',
    credits: [
      { role: 'Elara Nightshade', production: 'Midnight Meridian (Limited Series)', director: 'Mike Flanagan', year: '2023' },
      { role: 'Agent Lydia Cross', production: 'The Bureau — Season 3', director: 'Cary Fukunaga', year: '2021' },
      { role: 'Dr. Evelyn Marsh', production: 'Cartography of Ghosts (Limited Series)', director: 'Ari Aster', year: '2020' },
    ],
  },
]

export const awards = [
  { name: 'Olivier Award — Best Actress', production: 'Macbeth', year: '2024', card: 'The Sun' },
  { name: "Critics' Choice Nomination — Best Actress in a Limited Series", production: 'Midnight Meridian', year: '2023', card: 'The Star' },
  { name: 'Evening Standard Award — Best Actress', production: "A Doll's House", year: '2023', card: 'Strength' },
  { name: 'Independent Spirit Award — Best Female Lead', production: 'Wuthering Heights', year: '2022', card: 'The Empress' },
  { name: 'Ian Charleson Award — Runner-up', production: 'The Tempest', year: '2022', card: 'The Magician' },
  { name: 'WhatsOnStage Award — Best Actress in a Play', production: 'A Streetcar Named Desire', year: '2021', card: 'The Moon' },
  { name: 'BIFA Nomination — Best Performance', production: 'The Silence Between', year: '2021', card: 'The Hermit' },
  { name: 'Stage Debut Award — Highly Commended', production: 'Antigone', year: '2017', card: 'The Fool' },
]

export const galleryImages = [
  {
    id: 1,
    title: 'The Visionary',
    cardName: 'The Star',
    description: 'Ethereal studio portrait — silver and moonlight',
    type: 'headshot' as const,
  },
  {
    id: 2,
    title: 'The Transformer',
    cardName: 'Death',
    description: 'Lady Macbeth — sleepwalking scene, National Theatre',
    type: 'production' as const,
  },
  {
    id: 3,
    title: 'The Sovereign',
    cardName: 'The Empress',
    description: 'Nora Helmer — the departure, Park Avenue Armory',
    type: 'production' as const,
  },
  {
    id: 4,
    title: 'The Flame',
    cardName: 'The Sun',
    description: 'Commercial headshot — warmth and confidence',
    type: 'headshot' as const,
  },
  {
    id: 5,
    title: 'The Tempest',
    cardName: 'The Tower',
    description: 'Prospera — the storm conjuration, Donmar Warehouse',
    type: 'production' as const,
  },
  {
    id: 6,
    title: 'The Enigma',
    cardName: 'The High Priestess',
    description: 'Dr. Iris Vantage — dream laboratory, The Liminal Hour',
    type: 'production' as const,
  },
  {
    id: 7,
    title: 'The Wild',
    cardName: 'Strength',
    description: 'Catherine Earnshaw — on the moors, Wuthering Heights',
    type: 'production' as const,
  },
  {
    id: 8,
    title: 'The Mystic',
    cardName: 'The Moon',
    description: 'Theatrical headshot — dramatic and mysterious',
    type: 'headshot' as const,
  },
]

export const testimonials = [
  {
    quote: "Working with Cassandra is like watching alchemy happen in real time. She takes words on a page and transmutes them into something alive, breathing, and wholly her own.",
    author: 'Adrian Noble',
    role: 'Director, Macbeth',
    card: 'The Hierophant',
  },
  {
    quote: "I've directed hundreds of actors. Cassandra is one of perhaps five who made me forget I was watching a performance. She doesn't act — she becomes.",
    author: 'Ivo van Hove',
    role: "Director, A Doll's House",
    card: 'The Emperor',
  },
  {
    quote: "She has this extraordinary ability to hold an entire room in the palm of her hand with nothing more than a look. The camera worships her, but it's her soul that makes the image unforgettable.",
    author: 'Chloé Zhao',
    role: 'Director, The Liminal Hour',
    card: 'Temperance',
  },
]

export interface UpcomingShow {
  id: string
  cardNumber: string
  cardName: string
  role: string
  production: string
  venue: string
  dates: string
  director: string
  description: string
  ticketStatus: 'available' | 'limited' | 'sold-out'
}

export const upcomingShows: UpcomingShow[] = [
  {
    id: 'show-1',
    cardNumber: 'XIV',
    cardName: 'Temperance',
    role: 'Medea',
    production: 'Medea',
    venue: 'National Theatre, London',
    dates: 'April 12 — May 24, 2026',
    director: 'Katie Mitchell',
    description: 'A searing new production that reimagines Euripides\' tragedy through the lens of modern displacement and maternal fury.',
    ticketStatus: 'available',
  },
  {
    id: 'show-2',
    cardNumber: 'XI',
    cardName: 'Justice',
    role: 'Portia',
    production: 'The Merchant of Venice',
    venue: 'Shakespeare\'s Globe, London',
    dates: 'June 8 — July 19, 2026',
    director: 'Sam Mendes',
    description: 'A bold exploration of mercy, justice, and the masks we wear — performed in the round under open sky.',
    ticketStatus: 'limited',
  },
  {
    id: 'show-3',
    cardNumber: 'XII',
    cardName: 'The Hanged Man',
    role: 'Martha',
    production: 'Who\'s Afraid of Virginia Woolf?',
    venue: 'Harold Pinter Theatre, West End',
    dates: 'September 3 — November 15, 2026',
    director: 'Marianne Elliott',
    description: 'Albee\'s scorching masterpiece of marital warfare. A battle of wits, wounds, and devastating truth.',
    ticketStatus: 'available',
  },
]

export const tarotCardBacks = [
  'The Fool', 'The Magician', 'The High Priestess', 'The Empress',
  'The Emperor', 'The Hierophant', 'The Lovers', 'The Chariot',
  'Strength', 'The Hermit', 'Wheel of Fortune', 'Justice',
  'The Hanged Man', 'Death', 'Temperance', 'The Devil',
  'The Tower', 'The Star', 'The Moon', 'The Sun',
  'Judgement', 'The World',
]
