// Placeholder image helper - generates unique images via picsum
const pic = (id: number, w = 800, h = 600) => `https://picsum.photos/seed/${id}/${w}/${h}`;

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

export const portfolioItems: PortfolioWork[] = [
  // ===== GRAPHIC DESIGN =====
  // Brochure Design — 3 clients, each with unique design + mockup + gallery
  {
    id: "spa-brochure", title: "Luxury Spa Tri-fold Brochure", category: "Graphic Design", subcategory: "brochure-design", type: "image",
    image: pic(101), hoverImage: pic(102),
    galleryImages: [pic(101), pic(102), pic(103), pic(104)],
  },
  {
    id: "ocean-brochure", title: "Ocean Resort Brochure", category: "Graphic Design", subcategory: "brochure-design", type: "image",
    image: pic(111), hoverImage: pic(112),
    galleryImages: [pic(111), pic(112), pic(113)],
  },
  {
    id: "realestate-brochure", title: "Real Estate Corporate Brochure", category: "Graphic Design", subcategory: "brochure-design", type: "image",
    image: pic(121), hoverImage: pic(122),
    galleryImages: [pic(121), pic(122), pic(123), pic(124), pic(125)],
  },

  // Flyer Design
  {
    id: "festival-flyer", title: "Music Festival Event Flyer", category: "Graphic Design", subcategory: "flyer-design", type: "image",
    image: pic(201), hoverImage: pic(202),
    galleryImages: [pic(201), pic(202), pic(203)],
  },
  {
    id: "summer-party-flyer", title: "Summer Party Flyer", category: "Graphic Design", subcategory: "flyer-design", type: "image",
    image: pic(211), hoverImage: pic(212),
    galleryImages: [pic(211), pic(212), pic(213)],
  },

  // Poster Design
  {
    id: "art-exhibition-poster", title: "Art Exhibition Poster", category: "Graphic Design", subcategory: "poster-design", type: "image",
    image: pic(301), hoverImage: pic(302),
    galleryImages: [pic(301), pic(302), pic(303)],
  },
  {
    id: "retro-concert-poster", title: "Retro Concert Poster", category: "Graphic Design", subcategory: "poster-design", type: "image",
    image: pic(311), hoverImage: pic(312),
    galleryImages: [pic(311), pic(312), pic(313), pic(314)],
  },

  // Brand Identity
  {
    id: "luxe-print", title: "Brand Identity — Luxe Print Co.", category: "Graphic Design", subcategory: "brand-identity", type: "image",
    image: pic(401), hoverImage: pic(402),
    galleryImages: [pic(401), pic(402), pic(403), pic(404)],
  },
  {
    id: "microsat-brand", title: "Corporate Identity — Microsat", category: "Graphic Design", subcategory: "brand-identity", type: "image",
    image: pic(411), hoverImage: pic(412),
    galleryImages: [pic(411), pic(412), pic(413)],
  },

  // Business Card
  {
    id: "gold-foil-cards", title: "Gold Foil Premium Business Cards", category: "Graphic Design", subcategory: "business-card", type: "image",
    image: pic(501), hoverImage: pic(502),
    galleryImages: [pic(501), pic(502), pic(503)],
  },
  {
    id: "matte-black-cards", title: "Matte Black Luxury Cards", category: "Graphic Design", subcategory: "business-card", type: "image",
    image: pic(511), hoverImage: pic(512),
    galleryImages: [pic(511), pic(512), pic(513)],
  },

  // Banner Design
  {
    id: "ecommerce-banner", title: "E-Commerce Promotional Banner", category: "Graphic Design", subcategory: "banner-design", type: "image",
    image: pic(601), hoverImage: pic(602),
    galleryImages: [pic(601), pic(602), pic(603)],
  },
  {
    id: "black-friday-banner", title: "Black Friday Sale Banner", category: "Graphic Design", subcategory: "banner-design", type: "image",
    image: pic(611), hoverImage: pic(612),
    galleryImages: [pic(611), pic(612), pic(613)],
  },

  // Social Media Post
  {
    id: "stylehub-social", title: "Social Media Campaign — StyleHub", category: "Graphic Design", subcategory: "social-media-post", type: "image",
    image: pic(701), hoverImage: pic(702),
    galleryImages: [pic(701), pic(702), pic(703)],
  },
  {
    id: "fitness-social", title: "Fitness Brand Social Post", category: "Graphic Design", subcategory: "social-media-post", type: "image",
    image: pic(711), hoverImage: pic(712),
    galleryImages: [pic(711), pic(712), pic(713)],
  },
  {
    id: "stylehub-social-2", title: "Fashion Brand Social Grid", category: "Graphic Design", subcategory: "social-media-post", type: "image",
    image: pic(721), hoverImage: pic(722),
    galleryImages: [pic(721), pic(722), pic(723)],
  },

  // Social Media Ads
  {
    id: "fitness-ads", title: "Fitness Brand Ad Creatives", category: "Graphic Design", subcategory: "social-media-ads", type: "image",
    image: pic(801), hoverImage: pic(802),
    galleryImages: [pic(801), pic(802), pic(803)],
  },
  {
    id: "travel-ads", title: "Travel Agency Ad Campaign", category: "Graphic Design", subcategory: "social-media-ads", type: "image",
    image: pic(811), hoverImage: pic(812),
    galleryImages: [pic(811), pic(812), pic(813)],
  },

  // Packaging Design
  {
    id: "freshroots-pkg", title: "Packaging Design — FreshRoots", category: "Graphic Design", subcategory: "packaging-design", type: "image",
    image: pic(901), hoverImage: pic(902),
    galleryImages: [pic(901), pic(902), pic(903), pic(904)],
  },
  {
    id: "skincare-pkg", title: "Premium Skincare Packaging", category: "Graphic Design", subcategory: "packaging-design", type: "image",
    image: pic(911), hoverImage: pic(912),
    galleryImages: [pic(911), pic(912), pic(913)],
  },

  // Label Design
  {
    id: "coffee-label", title: "Artisan Coffee Label Design", category: "Graphic Design", subcategory: "label-design", type: "image",
    image: pic(1001), hoverImage: pic(1002),
    galleryImages: [pic(1001), pic(1002), pic(1003)],
  },
  {
    id: "wine-label", title: "Vineyard Wine Label Design", category: "Graphic Design", subcategory: "label-design", type: "image",
    image: pic(1011), hoverImage: pic(1012),
    galleryImages: [pic(1011), pic(1012), pic(1013)],
  },

  // Catalog Design
  {
    id: "fashion-catalog", title: "Fashion Lookbook Catalog", category: "Graphic Design", subcategory: "catalog-design", type: "image",
    image: pic(1101), hoverImage: pic(1102),
    galleryImages: [pic(1101), pic(1102), pic(1103), pic(1104)],
  },
  {
    id: "furniture-catalog", title: "Modern Furniture Catalog", category: "Graphic Design", subcategory: "catalog-design", type: "image",
    image: pic(1111), hoverImage: pic(1112),
    galleryImages: [pic(1111), pic(1112), pic(1113)],
  },

  // Infographic Design
  {
    id: "business-infographic", title: "Business Statistics Infographic", category: "Graphic Design", subcategory: "infographic-design", type: "image",
    image: pic(1201), hoverImage: pic(1202),
    galleryImages: [pic(1201), pic(1202), pic(1203)],
  },
  {
    id: "healthcare-infographic", title: "Healthcare Data Infographic", category: "Graphic Design", subcategory: "infographic-design", type: "image",
    image: pic(1211), hoverImage: pic(1212),
    galleryImages: [pic(1211), pic(1212), pic(1213)],
  },

  // Menu Design
  {
    id: "fine-dining-menu", title: "Fine Dining Restaurant Menu", category: "Graphic Design", subcategory: "menu-design", type: "image",
    image: pic(1301), hoverImage: pic(1302),
    galleryImages: [pic(1301), pic(1302), pic(1303)],
  },
  {
    id: "sushi-menu", title: "Japanese Sushi Bar Menu", category: "Graphic Design", subcategory: "menu-design", type: "image",
    image: pic(1311), hoverImage: pic(1312),
    galleryImages: [pic(1311), pic(1312), pic(1313)],
  },

  // Company Profile
  {
    id: "corporate-profile", title: "Corporate Company Profile", category: "Graphic Design", subcategory: "company-profile", type: "image",
    image: pic(1401), hoverImage: pic(1402),
    galleryImages: [pic(1401), pic(1402), pic(1403), pic(1404)],
  },
  {
    id: "tech-startup-profile", title: "Tech Startup Company Profile", category: "Graphic Design", subcategory: "company-profile", type: "image",
    image: pic(1411), hoverImage: pic(1412),
    galleryImages: [pic(1411), pic(1412), pic(1413)],
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
