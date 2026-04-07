// Unsplash image helper - category-relevant stock photos with stable URLs
const unsplash = (id: string, w = 800, h = 600) => `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&q=80`;

export interface Subcategory {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  workCount: number;
}

export type WorkType = "image" | "video";

export interface PortfolioWork {
  id: string;
  title: string;
  category: string;
  subcategory: string;
  image: string;
  hoverImage?: string;
  /** All images for this work (shown in lightbox gallery) */
  galleryImages?: string[];
  type: WorkType;
  videoUrl?: string;
}

/** Auto-generate YouTube thumbnail from a YouTube URL */
function ytThumb(url: string): string {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([^&\s]+)/,
    /(?:youtu\.be\/)([^?\s]+)/,
    /(?:youtube\.com\/embed\/)([^?\s]+)/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return `https://img.youtube.com/vi/${m[1]}/hqdefault.jpg`;
  }
  return "";
}

export const categories = ["All", "Graphic Design", "Motion Graphics", "Video Editing"];

export const subcategories: Subcategory[] = [
  // Graphic Design
  { id: "logo-design", name: "Logo Design", category: "Graphic Design", description: "Unique, memorable logos that define your brand", icon: "✏️", workCount: 15 },
  { id: "brochure-design", name: "Brochure Design", category: "Graphic Design", description: "Multi-page layouts that tell your brand story", icon: "📖", workCount: 8 },
  { id: "flyer-design", name: "Flyer Design", category: "Graphic Design", description: "Eye-catching single-page promotional materials", icon: "📄", workCount: 12 },
  { id: "poster-design", name: "Poster Design", category: "Graphic Design", description: "Bold visuals for events, campaigns & ads", icon: "🖼️", workCount: 15 },
  { id: "brand-identity", name: "Brand Identity Design", category: "Graphic Design", description: "Complete visual identity systems for brands", icon: "🎨", workCount: 6 },
  { id: "business-card", name: "Business Card Design", category: "Graphic Design", description: "Professional cards that leave lasting impressions", icon: "💳", workCount: 20 },
  { id: "banner-design", name: "Banner Design", category: "Graphic Design", description: "Digital & print banners for all platforms", icon: "🏷️", workCount: 18 },
  { id: "social-media-post", name: "Social Media Post Design", category: "Graphic Design", description: "Scroll-stopping social content designs", icon: "📱", workCount: 30 },
  { id: "social-media-ads", name: "Social Media Ad Creatives", category: "Graphic Design", description: "High-converting ad designs for campaigns", icon: "📣", workCount: 22 },
  { id: "packaging-design", name: "Packaging Design", category: "Graphic Design", description: "Product packaging that stands out on shelves", icon: "📦", workCount: 10 },
  { id: "label-design", name: "Label Design", category: "Graphic Design", description: "Custom product labels with strong shelf appeal", icon: "🏷️", workCount: 14 },
  { id: "catalog-design", name: "Catalog Design", category: "Graphic Design", description: "Professional product catalogs & lookbooks", icon: "📚", workCount: 5 },
  { id: "infographic-design", name: "Infographic Design", category: "Graphic Design", description: "Data-driven visuals that simplify complexity", icon: "📊", workCount: 9 },
  { id: "menu-design", name: "Menu Design", category: "Graphic Design", description: "Restaurant & café menus with appetizing layouts", icon: "🍽️", workCount: 7 },
  { id: "company-profile", name: "Company Profile Design", category: "Graphic Design", description: "Corporate profiles that build credibility", icon: "🏢", workCount: 4 },

  // Motion Graphics
  { id: "logo-animation", name: "Logo Animation", category: "Motion Graphics", description: "Bring your logo to life with dynamic motion", icon: "✨", workCount: 16 },
  { id: "intro-outro", name: "Intro & Outro Animation", category: "Motion Graphics", description: "Professional video openings & closings", icon: "🎬", workCount: 12 },
  { id: "explainer-animation", name: "Explainer Animation", category: "Motion Graphics", description: "Animated videos that explain complex ideas", icon: "💡", workCount: 8 },
  { id: "social-media-animation", name: "Social Media Animation", category: "Motion Graphics", description: "Animated content for social platforms", icon: "🔄", workCount: 20 },
  { id: "title-animation", name: "Title Animation", category: "Motion Graphics", description: "Cinematic text & title sequences", icon: "🔤", workCount: 10 },
  { id: "product-animation", name: "Product Animation", category: "Motion Graphics", description: "3D & 2D product showcase animations", icon: "🎁", workCount: 6 },
  { id: "kinetic-typography", name: "Kinetic Typography", category: "Motion Graphics", description: "Text-driven animations with rhythm & energy", icon: "🔡", workCount: 9 },
  { id: "character-animation", name: "2D Character Animation", category: "Motion Graphics", description: "Expressive characters that tell stories", icon: "🧑‍🎨", workCount: 5 },
  { id: "ui-ux-animation", name: "UI/UX Animation", category: "Motion Graphics", description: "Interface animations & micro-interactions", icon: "📲", workCount: 11 },

  // Video Editing
  { id: "corporate-video", name: "Corporate Video", category: "Video Editing", description: "Professional corporate films & presentations", icon: "🏢", workCount: 14 },
  { id: "youtube-editing", name: "YouTube Video Editing", category: "Video Editing", description: "Engaging edits that boost watch time", icon: "▶️", workCount: 25 },
  { id: "social-reels", name: "Social Media Reels", category: "Video Editing", description: "Short-form vertical videos for social", icon: "📱", workCount: 35 },
  { id: "product-video", name: "Product Video", category: "Video Editing", description: "Compelling product demos & showcases", icon: "🎥", workCount: 12 },
  { id: "event-highlight", name: "Event Highlight", category: "Video Editing", description: "Captivating recaps of events & conferences", icon: "🎉", workCount: 8 },
  { id: "documentary", name: "Documentary Editing", category: "Video Editing", description: "Story-driven long-form documentary edits", icon: "🎞️", workCount: 4 },
  { id: "music-video", name: "Music Video", category: "Video Editing", description: "Creative edits synced to music & beats", icon: "🎵", workCount: 6 },
  { id: "wedding-video", name: "Wedding Video", category: "Video Editing", description: "Cinematic wedding films & highlight reels", icon: "💒", workCount: 10 },
  { id: "testimonial-video", name: "Testimonial Video", category: "Video Editing", description: "Client & customer testimonial productions", icon: "🗣️", workCount: 15 },
];

const SAMPLE_VIDEOS = {
  logoAnim1: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  logoAnim2: "https://www.youtube.com/watch?v=9bZkp7q19f0",
  introOutro1: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
  introOutro2: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
  explainer1: "https://www.youtube.com/watch?v=RgKAFK5djSk",
  explainer2: "https://www.youtube.com/watch?v=OPf0YbXqDm0",
  socialAnim1: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ",
  socialAnim2: "https://www.youtube.com/watch?v=60ItHLz5WEA",
  titleAnim1: "https://www.youtube.com/watch?v=YQHsXMglC9A",
  titleAnim2: "https://www.youtube.com/watch?v=CevxZvSJLk8",
  productAnim1: "https://www.youtube.com/watch?v=hT_nvWreIhg",
  productAnim2: "https://www.youtube.com/watch?v=lp-EO5I60KA",
  kinetic1: "https://www.youtube.com/watch?v=bo_efYhYU2A",
  kinetic2: "https://www.youtube.com/watch?v=pRpeEdMmmQ0",
  character1: "https://www.youtube.com/watch?v=HP-MbfHFUqs",
  character2: "https://www.youtube.com/watch?v=e-ORhEE9VVg",
  uiux1: "https://www.youtube.com/watch?v=IUN664s7N-c",
  uiux2: "https://www.youtube.com/watch?v=Sagg08DrO5U",
  corporate1: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  corporate2: "https://www.youtube.com/watch?v=9bZkp7q19f0",
  youtube1: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
  youtube2: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
  reels1: "https://www.youtube.com/watch?v=RgKAFK5djSk",
  reels2: "https://www.youtube.com/watch?v=OPf0YbXqDm0",
  productVid1: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ",
  productVid2: "https://www.youtube.com/watch?v=60ItHLz5WEA",
  event1: "https://www.youtube.com/watch?v=YQHsXMglC9A",
  event2: "https://www.youtube.com/watch?v=CevxZvSJLk8",
  doc1: "https://www.youtube.com/watch?v=hT_nvWreIhg",
  doc2: "https://www.youtube.com/watch?v=lp-EO5I60KA",
  music1: "https://www.youtube.com/watch?v=bo_efYhYU2A",
  music2: "https://www.youtube.com/watch?v=pRpeEdMmmQ0",
  wedding1: "https://www.youtube.com/watch?v=HP-MbfHFUqs",
  wedding2: "https://www.youtube.com/watch?v=e-ORhEE9VVg",
  testimonial1: "https://www.youtube.com/watch?v=IUN664s7N-c",
  testimonial2: "https://www.youtube.com/watch?v=Sagg08DrO5U",
};

// Category-relevant Unsplash images
const IMG = {
  // Logo Design
  logo1: unsplash("photo-1626785774573-4b799315345d"), // logo sketch
  logo1m: unsplash("photo-1636955816868-fcb881e57954"), // logo mockup
  logo1g1: unsplash("photo-1558655146-9f40138edfeb"), // branding board
  logo1g2: unsplash("photo-1611532736597-de2d4265fba3"), // logo on card

  logo2: unsplash("photo-1572044162444-ad60f128bdea"), // minimal logo
  logo2m: unsplash("photo-1600132806608-231446b2e7d2"), // signage mockup
  logo2g1: unsplash("photo-1586717791821-3f44a563fa4c"), // letterhead
  logo2g2: unsplash("photo-1611162617474-5b21e879e113"), // brand guide

  logo3: unsplash("photo-1563906267088-b029e7101114"), // emblem style
  logo3m: unsplash("photo-1605379399642-870262d3d051"), // screen mockup
  logo3g1: unsplash("photo-1634942537034-2531766767d1"), // app icon
  logo3g2: unsplash("photo-1560472355-536de3962603"), // merch mockup

  // Brochure Design
  brochure1: unsplash("photo-1586075010923-2dd4570fb338"), // brochure flat lay
  brochure1m: unsplash("photo-1544716278-ca5e3f4abd8c"), // brochure mockup
  brochure1g1: unsplash("photo-1586281380349-632531db7ed4"), // open brochure
  brochure1g2: unsplash("photo-1557200134-90327ee9fafa"), // print detail

  brochure2: unsplash("photo-1553484771-371a605b060b"), // corporate brochure
  brochure2m: unsplash("photo-1554774853-719586f82d77"), // hand holding brochure
  brochure2g1: unsplash("photo-1600585154340-be6161a56a0c"), // inside spread

  brochure3: unsplash("photo-1497366216548-37526070297c"), // real estate
  brochure3m: unsplash("photo-1497366811353-6870744d04b2"), // office setting
  brochure3g1: unsplash("photo-1560518883-ce09059eeffa"), // property layout
  brochure3g2: unsplash("photo-1503387762-592deb58ef4e"), // architecture
  brochure3g3: unsplash("photo-1564013799919-ab600027ffc6"), // house photo

  // Flyer Design
  flyer1: unsplash("photo-1514525253161-7a46d19cd819"), // concert/music event
  flyer1m: unsplash("photo-1501281668745-f7f57925c3b4"), // festival scene
  flyer1g1: unsplash("photo-1470229722913-7c0e2dbbafd3"), // crowd at concert

  flyer2: unsplash("photo-1533174072545-7a4b6ad7a6c3"), // party/celebration
  flyer2m: unsplash("photo-1519671482749-fd09be7ccebf"), // summer vibes
  flyer2g1: unsplash("photo-1504196606672-aef5c9cefc92"), // tropical party

  // Poster Design
  poster1: unsplash("photo-1561214115-f2f134cc4912"), // art gallery
  poster1m: unsplash("photo-1578301978162-7aae4d755744"), // poster on wall
  poster1g1: unsplash("photo-1579762715118-a6f1d789e9e0"), // exhibition

  poster2: unsplash("photo-1501612780327-45045538702b"), // retro/vintage
  poster2m: unsplash("photo-1508700115892-45ecd05ae2ad"), // vinyl/music
  poster2g1: unsplash("photo-1524368535928-5b5e00ddc30b"), // neon lights
  poster2g2: unsplash("photo-1493225457124-a3eb161ffa5f"), // stage lights

  // Brand Identity
  brand1: unsplash("photo-1600132806370-bf17e65e942f"), // stationery
  brand1m: unsplash("photo-1586717791821-3f44a563fa4c"), // letterhead
  brand1g1: unsplash("photo-1558655146-9f40138edfeb"), // moodboard
  brand1g2: unsplash("photo-1611532736597-de2d4265fba3"), // brand cards

  brand2: unsplash("photo-1507003211169-0a1dd7228f2d"), // corporate
  brand2m: unsplash("photo-1611162617474-5b21e879e113"), // brand guide
  brand2g1: unsplash("photo-1560472355-536de3962603"), // merch

  // Business Cards
  card1: unsplash("photo-1611532736597-de2d4265fba3"), // premium cards
  card1m: unsplash("photo-1586717791821-3f44a563fa4c"), // card on desk
  card1g1: unsplash("photo-1600132806370-bf17e65e942f"), // stationery set

  card2: unsplash("photo-1572044162444-ad60f128bdea"), // dark cards
  card2m: unsplash("photo-1611162617474-5b21e879e113"), // hand holding card
  card2g1: unsplash("photo-1558655146-9f40138edfeb"), // close-up detail

  // Banner Design
  banner1: unsplash("photo-1472851294608-062f824d29cc"), // ecommerce/shopping
  banner1m: unsplash("photo-1556742049-0cfed4f6a45d"), // online store
  banner1g1: unsplash("photo-1607082348824-0a96f2a4b9da"), // product display

  banner2: unsplash("photo-1607083206869-4c7672e72a8a"), // sale/discount
  banner2m: unsplash("photo-1556742111-a301076d9d18"), // shopping bags
  banner2g1: unsplash("photo-1483985988355-763728e1935b"), // fashion sale

  // Social Media Post
  social1: unsplash("photo-1558618666-fcd25c85f82e"), // fashion/style
  social1m: unsplash("photo-1539109136881-3be0616acf4b"), // phone mockup
  social1g1: unsplash("photo-1515886657613-9f3515b0c78f"), // model shoot

  social2: unsplash("photo-1534438327276-14e5300c3a48"), // fitness
  social2m: unsplash("photo-1517836357463-d25dfeac3438"), // gym workout
  social2g1: unsplash("photo-1571019614242-c5c5dee9f50e"), // fitness lifestyle

  social3: unsplash("photo-1445205170230-053b83016050"), // fashion grid
  social3m: unsplash("photo-1490481651871-ab68de25d43d"), // phone screen
  social3g1: unsplash("photo-1469334031218-e382a71b716b"), // outfit flat lay

  // Social Media Ads
  ads1: unsplash("photo-1571019613454-1cb2f99b2d8b"), // fitness ad
  ads1m: unsplash("photo-1576678927484-cc907957088c"), // gym equipment
  ads1g1: unsplash("photo-1518611012118-696072aa579a"), // running

  ads2: unsplash("photo-1488085061387-422e29b40080"), // travel
  ads2m: unsplash("photo-1476514525535-07fb3b4ae5f1"), // beach travel
  ads2g1: unsplash("photo-1469854523086-cc02fe5d8800"), // road trip

  // Packaging Design
  pkg1: unsplash("photo-1607082350899-7e105aa886ae"), // product packaging
  pkg1m: unsplash("photo-1605000797499-95a51c5269ae"), // box mockup
  pkg1g1: unsplash("photo-1547592166-23ac45744acd"), // organic product
  pkg1g2: unsplash("photo-1526947425960-945c6e72858f"), // green packaging

  pkg2: unsplash("photo-1556228578-0d85b1a4d571"), // skincare bottles
  pkg2m: unsplash("photo-1571781926291-c477ebfd024b"), // cosmetics
  pkg2g1: unsplash("photo-1596462502278-27bfdc403348"), // beauty packaging

  // Label Design
  label1: unsplash("photo-1559056199-641a0ac8b55e"), // coffee beans
  label1m: unsplash("photo-1497935586351-b67a49e012bf"), // coffee bag
  label1g1: unsplash("photo-1514432324607-a09d9b4aefda"), // coffee cup

  label2: unsplash("photo-1506377247377-2a5b3b417ebb"), // wine bottle
  label2m: unsplash("photo-1510812431401-41d2bd2722f3"), // wine pouring
  label2g1: unsplash("photo-1553361371-9b22f78e8b1d"), // vineyard

  // Catalog Design
  catalog1: unsplash("photo-1445205170230-053b83016050"), // fashion
  catalog1m: unsplash("photo-1558171813-4c088753af8f"), // lookbook
  catalog1g1: unsplash("photo-1515886657613-9f3515b0c78f"), // model
  catalog1g2: unsplash("photo-1469334031218-e382a71b716b"), // wardrobe

  catalog2: unsplash("photo-1555041469-a586c61ea9bc"), // furniture
  catalog2m: unsplash("photo-1506439773649-6e0eb8cfb237"), // interior
  catalog2g1: unsplash("photo-1524758631624-e2822e304c36"), // living room

  // Infographic Design
  info1: unsplash("photo-1551288049-bebda4e38f71"), // data dashboard
  info1m: unsplash("photo-1460925895917-afdab827c52f"), // charts screen
  info1g1: unsplash("photo-1504868584819-f8e8b4b6d7e3"), // analytics

  info2: unsplash("photo-1576091160399-112ba8d25d1d"), // healthcare
  info2m: unsplash("photo-1530497610245-94d3c16cda28"), // medical data
  info2g1: unsplash("photo-1559757175-5700dde675bc"), // health stats

  // Menu Design
  menu1: unsplash("photo-1414235077428-338989a2e8c0"), // fine dining
  menu1m: unsplash("photo-1550966871-3ed3cdb51f3a"), // restaurant table
  menu1g1: unsplash("photo-1504674900247-0877df9cc836"), // gourmet dish

  menu2: unsplash("photo-1579871494447-9811cf80d66c"), // sushi
  menu2m: unsplash("photo-1553621042-f6e147245754"), // japanese food
  menu2g1: unsplash("photo-1583623025817-d180a2221d0a"), // sushi platter

  // Company Profile
  profile1: unsplash("photo-1497366216548-37526070297c"), // corporate office
  profile1m: unsplash("photo-1497366811353-6870744d04b2"), // meeting room
  profile1g1: unsplash("photo-1542744173-8e7e91415f5d"), // team meeting
  profile1g2: unsplash("photo-1504384308090-c894fdcc538d"), // tech office

  profile2: unsplash("photo-1519389950473-47ba0277781c"), // startup office
  profile2m: unsplash("photo-1553877522-43269d4ea984"), // team at work
  profile2g1: unsplash("photo-1531482615713-2adb69a1a225"), // whiteboard session
};

export const portfolioItems: PortfolioWork[] = [
  // ===== GRAPHIC DESIGN =====

  // Logo Design — 3 clients
  {
    id: "cafe-logo", title: "Artisan Café Logo Design", category: "Graphic Design", subcategory: "logo-design", type: "image",
    image: IMG.logo1, hoverImage: IMG.logo1m,
    galleryImages: [IMG.logo1, IMG.logo1m, IMG.logo1g1, IMG.logo1g2],
  },
  {
    id: "tech-startup-logo", title: "Tech Startup Logo — NovaByte", category: "Graphic Design", subcategory: "logo-design", type: "image",
    image: IMG.logo2, hoverImage: IMG.logo2m,
    galleryImages: [IMG.logo2, IMG.logo2m, IMG.logo2g1, IMG.logo2g2],
  },
  {
    id: "fitness-brand-logo", title: "Fitness Brand Emblem Logo", category: "Graphic Design", subcategory: "logo-design", type: "image",
    image: IMG.logo3, hoverImage: IMG.logo3m,
    galleryImages: [IMG.logo3, IMG.logo3m, IMG.logo3g1, IMG.logo3g2],
  },

  // Brochure Design — 3 clients
  {
    id: "spa-brochure", title: "Luxury Spa Tri-fold Brochure", category: "Graphic Design", subcategory: "brochure-design", type: "image",
    image: IMG.brochure1, hoverImage: IMG.brochure1m,
    galleryImages: [IMG.brochure1, IMG.brochure1m, IMG.brochure1g1, IMG.brochure1g2],
  },
  {
    id: "ocean-brochure", title: "Ocean Resort Brochure", category: "Graphic Design", subcategory: "brochure-design", type: "image",
    image: IMG.brochure2, hoverImage: IMG.brochure2m,
    galleryImages: [IMG.brochure2, IMG.brochure2m, IMG.brochure2g1],
  },
  {
    id: "realestate-brochure", title: "Real Estate Corporate Brochure", category: "Graphic Design", subcategory: "brochure-design", type: "image",
    image: IMG.brochure3, hoverImage: IMG.brochure3m,
    galleryImages: [IMG.brochure3, IMG.brochure3m, IMG.brochure3g1, IMG.brochure3g2, IMG.brochure3g3],
  },

  // Flyer Design
  {
    id: "festival-flyer", title: "Music Festival Event Flyer", category: "Graphic Design", subcategory: "flyer-design", type: "image",
    image: IMG.flyer1, hoverImage: IMG.flyer1m,
    galleryImages: [IMG.flyer1, IMG.flyer1m, IMG.flyer1g1],
  },
  {
    id: "summer-party-flyer", title: "Summer Party Flyer", category: "Graphic Design", subcategory: "flyer-design", type: "image",
    image: IMG.flyer2, hoverImage: IMG.flyer2m,
    galleryImages: [IMG.flyer2, IMG.flyer2m, IMG.flyer2g1],
  },

  // Poster Design
  {
    id: "art-exhibition-poster", title: "Art Exhibition Poster", category: "Graphic Design", subcategory: "poster-design", type: "image",
    image: IMG.poster1, hoverImage: IMG.poster1m,
    galleryImages: [IMG.poster1, IMG.poster1m, IMG.poster1g1],
  },
  {
    id: "retro-concert-poster", title: "Retro Concert Poster", category: "Graphic Design", subcategory: "poster-design", type: "image",
    image: IMG.poster2, hoverImage: IMG.poster2m,
    galleryImages: [IMG.poster2, IMG.poster2m, IMG.poster2g1, IMG.poster2g2],
  },

  // Brand Identity
  {
    id: "luxe-print", title: "Brand Identity — Luxe Print Co.", category: "Graphic Design", subcategory: "brand-identity", type: "image",
    image: IMG.brand1, hoverImage: IMG.brand1m,
    galleryImages: [IMG.brand1, IMG.brand1m, IMG.brand1g1, IMG.brand1g2],
  },
  {
    id: "microsat-brand", title: "Corporate Identity — Microsat", category: "Graphic Design", subcategory: "brand-identity", type: "image",
    image: IMG.brand2, hoverImage: IMG.brand2m,
    galleryImages: [IMG.brand2, IMG.brand2m, IMG.brand2g1],
  },

  // Business Card
  {
    id: "gold-foil-cards", title: "Gold Foil Premium Business Cards", category: "Graphic Design", subcategory: "business-card", type: "image",
    image: IMG.card1, hoverImage: IMG.card1m,
    galleryImages: [IMG.card1, IMG.card1m, IMG.card1g1],
  },
  {
    id: "matte-black-cards", title: "Matte Black Luxury Cards", category: "Graphic Design", subcategory: "business-card", type: "image",
    image: IMG.card2, hoverImage: IMG.card2m,
    galleryImages: [IMG.card2, IMG.card2m, IMG.card2g1],
  },

  // Banner Design
  {
    id: "ecommerce-banner", title: "E-Commerce Promotional Banner", category: "Graphic Design", subcategory: "banner-design", type: "image",
    image: IMG.banner1, hoverImage: IMG.banner1m,
    galleryImages: [IMG.banner1, IMG.banner1m, IMG.banner1g1],
  },
  {
    id: "black-friday-banner", title: "Black Friday Sale Banner", category: "Graphic Design", subcategory: "banner-design", type: "image",
    image: IMG.banner2, hoverImage: IMG.banner2m,
    galleryImages: [IMG.banner2, IMG.banner2m, IMG.banner2g1],
  },

  // Social Media Post
  {
    id: "stylehub-social", title: "Social Media Campaign — StyleHub", category: "Graphic Design", subcategory: "social-media-post", type: "image",
    image: IMG.social1, hoverImage: IMG.social1m,
    galleryImages: [IMG.social1, IMG.social1m, IMG.social1g1],
  },
  {
    id: "fitness-social", title: "Fitness Brand Social Post", category: "Graphic Design", subcategory: "social-media-post", type: "image",
    image: IMG.social2, hoverImage: IMG.social2m,
    galleryImages: [IMG.social2, IMG.social2m, IMG.social2g1],
  },
  {
    id: "stylehub-social-2", title: "Fashion Brand Social Grid", category: "Graphic Design", subcategory: "social-media-post", type: "image",
    image: IMG.social3, hoverImage: IMG.social3m,
    galleryImages: [IMG.social3, IMG.social3m, IMG.social3g1],
  },

  // Social Media Ads
  {
    id: "fitness-ads", title: "Fitness Brand Ad Creatives", category: "Graphic Design", subcategory: "social-media-ads", type: "image",
    image: IMG.ads1, hoverImage: IMG.ads1m,
    galleryImages: [IMG.ads1, IMG.ads1m, IMG.ads1g1],
  },
  {
    id: "travel-ads", title: "Travel Agency Ad Campaign", category: "Graphic Design", subcategory: "social-media-ads", type: "image",
    image: IMG.ads2, hoverImage: IMG.ads2m,
    galleryImages: [IMG.ads2, IMG.ads2m, IMG.ads2g1],
  },

  // Packaging Design
  {
    id: "freshroots-pkg", title: "Packaging Design — FreshRoots", category: "Graphic Design", subcategory: "packaging-design", type: "image",
    image: IMG.pkg1, hoverImage: IMG.pkg1m,
    galleryImages: [IMG.pkg1, IMG.pkg1m, IMG.pkg1g1, IMG.pkg1g2],
  },
  {
    id: "skincare-pkg", title: "Premium Skincare Packaging", category: "Graphic Design", subcategory: "packaging-design", type: "image",
    image: IMG.pkg2, hoverImage: IMG.pkg2m,
    galleryImages: [IMG.pkg2, IMG.pkg2m, IMG.pkg2g1],
  },

  // Label Design
  {
    id: "coffee-label", title: "Artisan Coffee Label Design", category: "Graphic Design", subcategory: "label-design", type: "image",
    image: IMG.label1, hoverImage: IMG.label1m,
    galleryImages: [IMG.label1, IMG.label1m, IMG.label1g1],
  },
  {
    id: "wine-label", title: "Vineyard Wine Label Design", category: "Graphic Design", subcategory: "label-design", type: "image",
    image: IMG.label2, hoverImage: IMG.label2m,
    galleryImages: [IMG.label2, IMG.label2m, IMG.label2g1],
  },

  // Catalog Design
  {
    id: "fashion-catalog", title: "Fashion Lookbook Catalog", category: "Graphic Design", subcategory: "catalog-design", type: "image",
    image: IMG.catalog1, hoverImage: IMG.catalog1m,
    galleryImages: [IMG.catalog1, IMG.catalog1m, IMG.catalog1g1, IMG.catalog1g2],
  },
  {
    id: "furniture-catalog", title: "Modern Furniture Catalog", category: "Graphic Design", subcategory: "catalog-design", type: "image",
    image: IMG.catalog2, hoverImage: IMG.catalog2m,
    galleryImages: [IMG.catalog2, IMG.catalog2m, IMG.catalog2g1],
  },

  // Infographic Design
  {
    id: "business-infographic", title: "Business Statistics Infographic", category: "Graphic Design", subcategory: "infographic-design", type: "image",
    image: IMG.info1, hoverImage: IMG.info1m,
    galleryImages: [IMG.info1, IMG.info1m, IMG.info1g1],
  },
  {
    id: "healthcare-infographic", title: "Healthcare Data Infographic", category: "Graphic Design", subcategory: "infographic-design", type: "image",
    image: IMG.info2, hoverImage: IMG.info2m,
    galleryImages: [IMG.info2, IMG.info2m, IMG.info2g1],
  },

  // Menu Design
  {
    id: "fine-dining-menu", title: "Fine Dining Restaurant Menu", category: "Graphic Design", subcategory: "menu-design", type: "image",
    image: IMG.menu1, hoverImage: IMG.menu1m,
    galleryImages: [IMG.menu1, IMG.menu1m, IMG.menu1g1],
  },
  {
    id: "sushi-menu", title: "Japanese Sushi Bar Menu", category: "Graphic Design", subcategory: "menu-design", type: "image",
    image: IMG.menu2, hoverImage: IMG.menu2m,
    galleryImages: [IMG.menu2, IMG.menu2m, IMG.menu2g1],
  },

  // Company Profile
  {
    id: "corporate-profile", title: "Corporate Company Profile", category: "Graphic Design", subcategory: "company-profile", type: "image",
    image: IMG.profile1, hoverImage: IMG.profile1m,
    galleryImages: [IMG.profile1, IMG.profile1m, IMG.profile1g1, IMG.profile1g2],
  },
  {
    id: "tech-startup-profile", title: "Tech Startup Company Profile", category: "Graphic Design", subcategory: "company-profile", type: "image",
    image: IMG.profile2, hoverImage: IMG.profile2m,
    galleryImages: [IMG.profile2, IMG.profile2m, IMG.profile2g1],
  },

  // ===== MOTION GRAPHICS =====
  { id: "techvista-logo", title: "Logo Animation — TechVista", category: "Motion Graphics", subcategory: "logo-animation", image: ytThumb(SAMPLE_VIDEOS.logoAnim1), type: "video", videoUrl: SAMPLE_VIDEOS.logoAnim1 },
  { id: "neon-logo-reveal", title: "Neon Logo Reveal Animation", category: "Motion Graphics", subcategory: "logo-animation", image: ytThumb(SAMPLE_VIDEOS.logoAnim2), type: "video", videoUrl: SAMPLE_VIDEOS.logoAnim2 },
  { id: "cinematic-intro", title: "Cinematic Logo Reveal Intro", category: "Motion Graphics", subcategory: "intro-outro", image: ytThumb(SAMPLE_VIDEOS.introOutro1), type: "video", videoUrl: SAMPLE_VIDEOS.introOutro1 },
  { id: "minimal-outro", title: "Minimal Clean Outro", category: "Motion Graphics", subcategory: "intro-outro", image: ytThumb(SAMPLE_VIDEOS.introOutro2), type: "video", videoUrl: SAMPLE_VIDEOS.introOutro2 },
  { id: "finflow-explainer", title: "Explainer Video — FinFlow App", category: "Motion Graphics", subcategory: "explainer-animation", image: ytThumb(SAMPLE_VIDEOS.explainer1), type: "video", videoUrl: SAMPLE_VIDEOS.explainer1 },
  { id: "medisync-explainer", title: "Healthcare Explainer — MediSync", category: "Motion Graphics", subcategory: "explainer-animation", image: ytThumb(SAMPLE_VIDEOS.explainer2), type: "video", videoUrl: SAMPLE_VIDEOS.explainer2 },
  { id: "shopnow-social-anim", title: "Social Promo — ShopNow", category: "Motion Graphics", subcategory: "social-media-animation", image: ytThumb(SAMPLE_VIDEOS.socialAnim1), type: "video", videoUrl: SAMPLE_VIDEOS.socialAnim1 },
  { id: "launch-countdown", title: "Product Launch Countdown", category: "Motion Graphics", subcategory: "social-media-animation", image: ytThumb(SAMPLE_VIDEOS.socialAnim2), type: "video", videoUrl: SAMPLE_VIDEOS.socialAnim2 },
  { id: "epic-title-reveal", title: "Epic Title Reveal Sequence", category: "Motion Graphics", subcategory: "title-animation", image: ytThumb(SAMPLE_VIDEOS.titleAnim1), type: "video", videoUrl: SAMPLE_VIDEOS.titleAnim1 },
  { id: "glitch-title", title: "Glitch Text Title Animation", category: "Motion Graphics", subcategory: "title-animation", image: ytThumb(SAMPLE_VIDEOS.titleAnim2), type: "video", videoUrl: SAMPLE_VIDEOS.titleAnim2 },
  { id: "sneaker-360", title: "Sneaker 360° Product Spin", category: "Motion Graphics", subcategory: "product-animation", image: ytThumb(SAMPLE_VIDEOS.productAnim1), type: "video", videoUrl: SAMPLE_VIDEOS.productAnim1 },
  { id: "perfume-product", title: "Luxury Perfume Product Reveal", category: "Motion Graphics", subcategory: "product-animation", image: ytThumb(SAMPLE_VIDEOS.productAnim2), type: "video", videoUrl: SAMPLE_VIDEOS.productAnim2 },
  { id: "inspirational-kinetic", title: "Inspirational Quote Typography", category: "Motion Graphics", subcategory: "kinetic-typography", image: ytThumb(SAMPLE_VIDEOS.kinetic1), type: "video", videoUrl: SAMPLE_VIDEOS.kinetic1 },
  { id: "lyrics-kinetic", title: "Song Lyrics Kinetic Video", category: "Motion Graphics", subcategory: "kinetic-typography", image: ytThumb(SAMPLE_VIDEOS.kinetic2), type: "video", videoUrl: SAMPLE_VIDEOS.kinetic2 },
  { id: "mascot-intro", title: "Brand Mascot Character Intro", category: "Motion Graphics", subcategory: "character-animation", image: ytThumb(SAMPLE_VIDEOS.character1), type: "video", videoUrl: SAMPLE_VIDEOS.character1 },
  { id: "story-character", title: "Story Time Character Animation", category: "Motion Graphics", subcategory: "character-animation", image: ytThumb(SAMPLE_VIDEOS.character2), type: "video", videoUrl: SAMPLE_VIDEOS.character2 },
  { id: "app-walkthrough", title: "App Walkthrough UI Motion", category: "Motion Graphics", subcategory: "ui-ux-animation", image: ytThumb(SAMPLE_VIDEOS.uiux1), type: "video", videoUrl: SAMPLE_VIDEOS.uiux1 },
  { id: "dashboard-reveal", title: "Dashboard Analytics UI Reveal", category: "Motion Graphics", subcategory: "ui-ux-animation", image: ytThumb(SAMPLE_VIDEOS.uiux2), type: "video", videoUrl: SAMPLE_VIDEOS.uiux2 },

  // ===== VIDEO EDITING =====
  { id: "tech-corporate", title: "Tech Company Corporate Film", category: "Video Editing", subcategory: "corporate-video", image: ytThumb(SAMPLE_VIDEOS.corporate1), type: "video", videoUrl: SAMPLE_VIDEOS.corporate1 },
  { id: "annual-report-video", title: "Annual Report Highlight Video", category: "Video Editing", subcategory: "corporate-video", image: ytThumb(SAMPLE_VIDEOS.corporate2), type: "video", videoUrl: SAMPLE_VIDEOS.corporate2 },
  { id: "gaming-review", title: "Gaming Review YouTube Edit", category: "Video Editing", subcategory: "youtube-editing", image: ytThumb(SAMPLE_VIDEOS.youtube1), type: "video", videoUrl: SAMPLE_VIDEOS.youtube1 },
  { id: "travel-vlog", title: "Travel Vlog Cinematic Edit", category: "Video Editing", subcategory: "youtube-editing", image: ytThumb(SAMPLE_VIDEOS.youtube2), type: "video", videoUrl: SAMPLE_VIDEOS.youtube2 },
  { id: "fashion-reel", title: "Fashion Brand Reel — OOTD", category: "Video Editing", subcategory: "social-reels", image: ytThumb(SAMPLE_VIDEOS.reels1), type: "video", videoUrl: SAMPLE_VIDEOS.reels1 },
  { id: "food-reel", title: "Recipe Quick Reel", category: "Video Editing", subcategory: "social-reels", image: ytThumb(SAMPLE_VIDEOS.reels2), type: "video", videoUrl: SAMPLE_VIDEOS.reels2 },
  { id: "smartwatch-promo", title: "Smartwatch Product Promo", category: "Video Editing", subcategory: "product-video", image: ytThumb(SAMPLE_VIDEOS.productVid1), type: "video", videoUrl: SAMPLE_VIDEOS.productVid1 },
  { id: "skincare-demo", title: "Skincare Routine Demo Video", category: "Video Editing", subcategory: "product-video", image: ytThumb(SAMPLE_VIDEOS.productVid2), type: "video", videoUrl: SAMPLE_VIDEOS.productVid2 },
  { id: "tech-summit", title: "Tech Summit 2024 Highlight", category: "Video Editing", subcategory: "event-highlight", image: ytThumb(SAMPLE_VIDEOS.event1), type: "video", videoUrl: SAMPLE_VIDEOS.event1 },
  { id: "charity-gala", title: "Charity Gala Evening Recap", category: "Video Editing", subcategory: "event-highlight", image: ytThumb(SAMPLE_VIDEOS.event2), type: "video", videoUrl: SAMPLE_VIDEOS.event2 },
  { id: "ocean-plastic-doc", title: "Ocean Plastic Crisis Mini Doc", category: "Video Editing", subcategory: "documentary", image: ytThumb(SAMPLE_VIDEOS.doc1), type: "video", videoUrl: SAMPLE_VIDEOS.doc1 },
  { id: "street-art-doc", title: "Street Art Culture Documentary", category: "Video Editing", subcategory: "documentary", image: ytThumb(SAMPLE_VIDEOS.doc2), type: "video", videoUrl: SAMPLE_VIDEOS.doc2 },
  { id: "indie-mv", title: "Indie Band Music Video", category: "Video Editing", subcategory: "music-video", image: ytThumb(SAMPLE_VIDEOS.music1), type: "video", videoUrl: SAMPLE_VIDEOS.music1 },
  { id: "hiphop-mv", title: "Hip-Hop Music Video Edit", category: "Video Editing", subcategory: "music-video", image: ytThumb(SAMPLE_VIDEOS.music2), type: "video", videoUrl: SAMPLE_VIDEOS.music2 },
  { id: "beach-wedding", title: "Beach Wedding Cinematic Film", category: "Video Editing", subcategory: "wedding-video", image: ytThumb(SAMPLE_VIDEOS.wedding1), type: "video", videoUrl: SAMPLE_VIDEOS.wedding1 },
  { id: "garden-wedding", title: "Garden Wedding Highlight Reel", category: "Video Editing", subcategory: "wedding-video", image: ytThumb(SAMPLE_VIDEOS.wedding2), type: "video", videoUrl: SAMPLE_VIDEOS.wedding2 },
  { id: "saas-testimonial", title: "SaaS Client Testimonial", category: "Video Editing", subcategory: "testimonial-video", image: ytThumb(SAMPLE_VIDEOS.testimonial1), type: "video", videoUrl: SAMPLE_VIDEOS.testimonial1 },
  { id: "fitness-testimonial", title: "Fitness Transformation Story", category: "Video Editing", subcategory: "testimonial-video", image: ytThumb(SAMPLE_VIDEOS.testimonial2), type: "video", videoUrl: SAMPLE_VIDEOS.testimonial2 },
];

export function getSubcategoryById(id: string) {
  return subcategories.find((s) => s.id === id);
}

export function getWorkBySubcategory(subcategoryId: string) {
  return portfolioItems.filter((w) => w.subcategory === subcategoryId);
}

export function getSubcategoriesByCategory(category: string) {
  return subcategories.filter((s) => s.category === category);
}
