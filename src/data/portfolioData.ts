import brandIdentity from "@/assets/portfolio/brand-identity.jpg";
import packagingDesign from "@/assets/portfolio/packaging-design.jpg";
import socialCampaign from "@/assets/portfolio/social-campaign.jpg";

// Graphic Design images
import brochureDesign1 from "@/assets/portfolio/brochure-design-1.jpg";
import brochureDesign2 from "@/assets/portfolio/brochure-design-2.jpg";
import brochureDesign3 from "@/assets/portfolio/brochure-design-3.jpg";
import flyerDesign1 from "@/assets/portfolio/flyer-design-1.jpg";
import flyerDesign2 from "@/assets/portfolio/flyer-design-2.jpg";
import posterDesign1 from "@/assets/portfolio/poster-design-1.jpg";
import posterDesign2 from "@/assets/portfolio/poster-design-2.jpg";
import brandIdentity2 from "@/assets/portfolio/brand-identity-2.jpg";
import businessCard1 from "@/assets/portfolio/business-card-1.jpg";
import businessCard2 from "@/assets/portfolio/business-card-2.jpg";
import bannerDesign1 from "@/assets/portfolio/banner-design-1.jpg";
import bannerDesign2 from "@/assets/portfolio/banner-design-2.jpg";
import socialMediaPost1 from "@/assets/portfolio/social-media-post-1.jpg";
import socialMediaPost2 from "@/assets/portfolio/social-media-post-2.jpg";
import socialMediaAds1 from "@/assets/portfolio/social-media-ads-1.jpg";
import socialMediaAds2 from "@/assets/portfolio/social-media-ads-2.jpg";
import labelDesign1 from "@/assets/portfolio/label-design-1.jpg";
import labelDesign2 from "@/assets/portfolio/label-design-2.jpg";
import catalogDesign1 from "@/assets/portfolio/catalog-design-1.jpg";
import catalogDesign2 from "@/assets/portfolio/catalog-design-2.jpg";
import infographicDesign1 from "@/assets/portfolio/infographic-design-1.jpg";
import infographicDesign2 from "@/assets/portfolio/infographic-design-2.jpg";
import menuDesign1 from "@/assets/portfolio/menu-design-1.jpg";
import menuDesign2 from "@/assets/portfolio/menu-design-2.jpg";
import companyProfile1 from "@/assets/portfolio/company-profile-1.jpg";
import companyProfile2 from "@/assets/portfolio/company-profile-2.jpg";
import packagingDesign2 from "@/assets/portfolio/packaging-design-2.jpg";

// Note: Motion Graphics & Video Editing thumbnails are auto-generated from YouTube URLs

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

// YouTube video URLs for Motion Graphics & Video Editing categories
// Replace these with your actual YouTube/Drive/Cloudinary URLs
const SAMPLE_VIDEOS = {
  // Logo Animation
  logoAnim1: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  logoAnim2: "https://www.youtube.com/watch?v=9bZkp7q19f0",
  // Intro & Outro
  introOutro1: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
  introOutro2: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
  // Explainer Animation
  explainer1: "https://www.youtube.com/watch?v=RgKAFK5djSk",
  explainer2: "https://www.youtube.com/watch?v=OPf0YbXqDm0",
  // Social Media Animation
  socialAnim1: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ",
  socialAnim2: "https://www.youtube.com/watch?v=60ItHLz5WEA",
  // Title Animation
  titleAnim1: "https://www.youtube.com/watch?v=YQHsXMglC9A",
  titleAnim2: "https://www.youtube.com/watch?v=CevxZvSJLk8",
  // Product Animation
  productAnim1: "https://www.youtube.com/watch?v=hT_nvWreIhg",
  productAnim2: "https://www.youtube.com/watch?v=lp-EO5I60KA",
  // Kinetic Typography
  kinetic1: "https://www.youtube.com/watch?v=bo_efYhYU2A",
  kinetic2: "https://www.youtube.com/watch?v=pRpeEdMmmQ0",
  // Character Animation
  character1: "https://www.youtube.com/watch?v=HP-MbfHFUqs",
  character2: "https://www.youtube.com/watch?v=e-ORhEE9VVg",
  // UI/UX Animation
  uiux1: "https://www.youtube.com/watch?v=IUN664s7N-c",
  uiux2: "https://www.youtube.com/watch?v=Sagg08DrO5U",
  // Corporate Video
  corporate1: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  corporate2: "https://www.youtube.com/watch?v=9bZkp7q19f0",
  // YouTube Editing
  youtube1: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
  youtube2: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
  // Social Reels
  reels1: "https://www.youtube.com/watch?v=RgKAFK5djSk",
  reels2: "https://www.youtube.com/watch?v=OPf0YbXqDm0",
  // Product Video
  productVid1: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ",
  productVid2: "https://www.youtube.com/watch?v=60ItHLz5WEA",
  // Event Highlight
  event1: "https://www.youtube.com/watch?v=YQHsXMglC9A",
  event2: "https://www.youtube.com/watch?v=CevxZvSJLk8",
  // Documentary
  doc1: "https://www.youtube.com/watch?v=hT_nvWreIhg",
  doc2: "https://www.youtube.com/watch?v=lp-EO5I60KA",
  // Music Video
  music1: "https://www.youtube.com/watch?v=bo_efYhYU2A",
  music2: "https://www.youtube.com/watch?v=pRpeEdMmmQ0",
  // Wedding Video
  wedding1: "https://www.youtube.com/watch?v=HP-MbfHFUqs",
  wedding2: "https://www.youtube.com/watch?v=e-ORhEE9VVg",
  // Testimonial Video
  testimonial1: "https://www.youtube.com/watch?v=IUN664s7N-c",
  testimonial2: "https://www.youtube.com/watch?v=Sagg08DrO5U",
};

export const portfolioItems: PortfolioWork[] = [
  // ===== GRAPHIC DESIGN (type: "image") =====
  // Brochure Design
  { id: "spa-brochure", title: "Luxury Spa Tri-fold Brochure", category: "Graphic Design", subcategory: "brochure-design", image: brochureDesign1, hoverImage: brochureDesign2, type: "image" },
  { id: "ocean-brochure", title: "Ocean Resort Brochure", category: "Graphic Design", subcategory: "brochure-design", image: brochureDesign2, hoverImage: brochureDesign3, type: "image" },
  { id: "realestate-brochure", title: "Real Estate Corporate Brochure", category: "Graphic Design", subcategory: "brochure-design", image: brochureDesign3, hoverImage: brochureDesign1, type: "image" },

  // Flyer Design
  { id: "festival-flyer", title: "Music Festival Event Flyer", category: "Graphic Design", subcategory: "flyer-design", image: flyerDesign1, hoverImage: flyerDesign2, type: "image" },
  { id: "summer-party-flyer", title: "Summer Party Flyer", category: "Graphic Design", subcategory: "flyer-design", image: flyerDesign2, hoverImage: flyerDesign1, type: "image" },

  // Poster Design
  { id: "art-exhibition-poster", title: "Art Exhibition Poster", category: "Graphic Design", subcategory: "poster-design", image: posterDesign1, hoverImage: posterDesign2, type: "image" },
  { id: "retro-concert-poster", title: "Retro Concert Poster", category: "Graphic Design", subcategory: "poster-design", image: posterDesign2, hoverImage: posterDesign1, type: "image" },

  // Brand Identity
  { id: "luxe-print", title: "Brand Identity — Luxe Print Co.", category: "Graphic Design", subcategory: "brand-identity", image: brandIdentity, hoverImage: brandIdentity2, type: "image" },
  { id: "microsat-brand", title: "Corporate Identity — Microsat", category: "Graphic Design", subcategory: "brand-identity", image: brandIdentity2, hoverImage: brandIdentity, type: "image" },

  // Business Card
  { id: "gold-foil-cards", title: "Gold Foil Premium Business Cards", category: "Graphic Design", subcategory: "business-card", image: businessCard1, hoverImage: businessCard2, type: "image" },
  { id: "matte-black-cards", title: "Matte Black Luxury Cards", category: "Graphic Design", subcategory: "business-card", image: businessCard2, hoverImage: businessCard1, type: "image" },

  // Banner Design
  { id: "ecommerce-banner", title: "E-Commerce Promotional Banner", category: "Graphic Design", subcategory: "banner-design", image: bannerDesign1, hoverImage: bannerDesign2, type: "image" },
  { id: "black-friday-banner", title: "Black Friday Sale Banner", category: "Graphic Design", subcategory: "banner-design", image: bannerDesign2, hoverImage: bannerDesign1, type: "image" },

  // Social Media Post
  { id: "stylehub-social", title: "Social Media Campaign — StyleHub", category: "Graphic Design", subcategory: "social-media-post", image: socialMediaPost1, hoverImage: socialMediaPost2, type: "image" },
  { id: "fitness-social", title: "Fitness Brand Social Post", category: "Graphic Design", subcategory: "social-media-post", image: socialMediaPost2, hoverImage: socialCampaign, type: "image" },
  { id: "stylehub-social-2", title: "Fashion Brand Social Grid", category: "Graphic Design", subcategory: "social-media-post", image: socialCampaign, hoverImage: socialMediaPost1, type: "image" },

  // Social Media Ads
  { id: "fitness-ads", title: "Fitness Brand Ad Creatives", category: "Graphic Design", subcategory: "social-media-ads", image: socialMediaAds1, hoverImage: socialMediaAds2, type: "image" },
  { id: "travel-ads", title: "Travel Agency Ad Campaign", category: "Graphic Design", subcategory: "social-media-ads", image: socialMediaAds2, hoverImage: socialMediaAds1, type: "image" },

  // Packaging Design
  { id: "freshroots-pkg", title: "Packaging Design — FreshRoots", category: "Graphic Design", subcategory: "packaging-design", image: packagingDesign, hoverImage: packagingDesign2, type: "image" },
  { id: "skincare-pkg", title: "Premium Skincare Packaging", category: "Graphic Design", subcategory: "packaging-design", image: packagingDesign2, hoverImage: packagingDesign, type: "image" },

  // Label Design
  { id: "coffee-label", title: "Artisan Coffee Label Design", category: "Graphic Design", subcategory: "label-design", image: labelDesign1, hoverImage: labelDesign2, type: "image" },
  { id: "wine-label", title: "Vineyard Wine Label Design", category: "Graphic Design", subcategory: "label-design", image: labelDesign2, hoverImage: labelDesign1, type: "image" },

  // Catalog Design
  { id: "fashion-catalog", title: "Fashion Lookbook Catalog", category: "Graphic Design", subcategory: "catalog-design", image: catalogDesign1, hoverImage: catalogDesign2, type: "image" },
  { id: "furniture-catalog", title: "Modern Furniture Catalog", category: "Graphic Design", subcategory: "catalog-design", image: catalogDesign2, hoverImage: catalogDesign1, type: "image" },

  // Infographic Design
  { id: "business-infographic", title: "Business Statistics Infographic", category: "Graphic Design", subcategory: "infographic-design", image: infographicDesign1, hoverImage: infographicDesign2, type: "image" },
  { id: "healthcare-infographic", title: "Healthcare Data Infographic", category: "Graphic Design", subcategory: "infographic-design", image: infographicDesign2, hoverImage: infographicDesign1, type: "image" },

  // Menu Design
  { id: "fine-dining-menu", title: "Fine Dining Restaurant Menu", category: "Graphic Design", subcategory: "menu-design", image: menuDesign1, hoverImage: menuDesign2, type: "image" },
  { id: "sushi-menu", title: "Japanese Sushi Bar Menu", category: "Graphic Design", subcategory: "menu-design", image: menuDesign2, hoverImage: menuDesign1, type: "image" },

  // Company Profile
  { id: "corporate-profile", title: "Corporate Company Profile", category: "Graphic Design", subcategory: "company-profile", image: companyProfile1, hoverImage: companyProfile2, type: "image" },
  { id: "tech-startup-profile", title: "Tech Startup Company Profile", category: "Graphic Design", subcategory: "company-profile", image: companyProfile2, hoverImage: companyProfile1, type: "image" },

  // ===== MOTION GRAPHICS (type: "video") =====
  // Logo Animation
  { id: "techvista-logo", title: "Logo Animation — TechVista", category: "Motion Graphics", subcategory: "logo-animation", image: ytThumb(SAMPLE_VIDEOS.logoAnim1), type: "video", videoUrl: SAMPLE_VIDEOS.logoAnim1 },
  { id: "neon-logo-reveal", title: "Neon Logo Reveal Animation", category: "Motion Graphics", subcategory: "logo-animation", image: ytThumb(SAMPLE_VIDEOS.logoAnim2), type: "video", videoUrl: SAMPLE_VIDEOS.logoAnim2 },

  // Intro & Outro
  { id: "cinematic-intro", title: "Cinematic Logo Reveal Intro", category: "Motion Graphics", subcategory: "intro-outro", image: ytThumb(SAMPLE_VIDEOS.introOutro1), type: "video", videoUrl: SAMPLE_VIDEOS.introOutro1 },
  { id: "minimal-outro", title: "Minimal Clean Outro", category: "Motion Graphics", subcategory: "intro-outro", image: ytThumb(SAMPLE_VIDEOS.introOutro2), type: "video", videoUrl: SAMPLE_VIDEOS.introOutro2 },

  // Explainer Animation
  { id: "finflow-explainer", title: "Explainer Video — FinFlow App", category: "Motion Graphics", subcategory: "explainer-animation", image: ytThumb(SAMPLE_VIDEOS.explainer1), type: "video", videoUrl: SAMPLE_VIDEOS.explainer1 },
  { id: "saas-explainer", title: "SaaS Product Explainer", category: "Motion Graphics", subcategory: "explainer-animation", image: ytThumb(SAMPLE_VIDEOS.explainer2), type: "video", videoUrl: SAMPLE_VIDEOS.explainer2 },

  // Social Media Animation
  { id: "social-animation-story", title: "Animated Instagram Story", category: "Motion Graphics", subcategory: "social-media-animation", image: ytThumb(SAMPLE_VIDEOS.socialAnim1), type: "video", videoUrl: SAMPLE_VIDEOS.socialAnim1 },
  { id: "social-promo-animation", title: "Social Media Promo Animation", category: "Motion Graphics", subcategory: "social-media-animation", image: ytThumb(SAMPLE_VIDEOS.socialAnim2), type: "video", videoUrl: SAMPLE_VIDEOS.socialAnim2 },

  // Title Animation
  { id: "movie-titles", title: "Cinematic Title Sequence", category: "Motion Graphics", subcategory: "title-animation", image: ytThumb(SAMPLE_VIDEOS.titleAnim1), type: "video", videoUrl: SAMPLE_VIDEOS.titleAnim1 },
  { id: "broadcast-titles", title: "Broadcast Title Graphics", category: "Motion Graphics", subcategory: "title-animation", image: ytThumb(SAMPLE_VIDEOS.titleAnim2), type: "video", videoUrl: SAMPLE_VIDEOS.titleAnim2 },

  // Product Animation
  { id: "phone-showcase", title: "3D Smartphone Product Showcase", category: "Motion Graphics", subcategory: "product-animation", image: ytThumb(SAMPLE_VIDEOS.productAnim1), type: "video", videoUrl: SAMPLE_VIDEOS.productAnim1 },
  { id: "watch-showcase", title: "Luxury Watch 3D Animation", category: "Motion Graphics", subcategory: "product-animation", image: ytThumb(SAMPLE_VIDEOS.productAnim2), type: "video", videoUrl: SAMPLE_VIDEOS.productAnim2 },

  // Kinetic Typography
  { id: "kinetic-text", title: "Dynamic Kinetic Typography", category: "Motion Graphics", subcategory: "kinetic-typography", image: ytThumb(SAMPLE_VIDEOS.kinetic1), type: "video", videoUrl: SAMPLE_VIDEOS.kinetic1 },
  { id: "lyric-typography", title: "Lyric Video Typography", category: "Motion Graphics", subcategory: "kinetic-typography", image: ytThumb(SAMPLE_VIDEOS.kinetic2), type: "video", videoUrl: SAMPLE_VIDEOS.kinetic2 },

  // Character Animation
  { id: "mascot-animation", title: "Brand Mascot Character Animation", category: "Motion Graphics", subcategory: "character-animation", image: ytThumb(SAMPLE_VIDEOS.character1), type: "video", videoUrl: SAMPLE_VIDEOS.character1 },
  { id: "storybook-animation", title: "Storybook Character Scenes", category: "Motion Graphics", subcategory: "character-animation", image: ytThumb(SAMPLE_VIDEOS.character2), type: "video", videoUrl: SAMPLE_VIDEOS.character2 },

  // UI/UX Animation
  { id: "app-ui-motion", title: "Mobile App UI Micro-interactions", category: "Motion Graphics", subcategory: "ui-ux-animation", image: ytThumb(SAMPLE_VIDEOS.uiux1), type: "video", videoUrl: SAMPLE_VIDEOS.uiux1 },
  { id: "dashboard-motion", title: "Dashboard Transition Animation", category: "Motion Graphics", subcategory: "ui-ux-animation", image: ytThumb(SAMPLE_VIDEOS.uiux2), type: "video", videoUrl: SAMPLE_VIDEOS.uiux2 },

  // ===== VIDEO EDITING (type: "video") =====
  // Corporate Video
  { id: "summit-2024", title: "Corporate Video — Summit 2024", category: "Video Editing", subcategory: "corporate-video", image: ytThumb(SAMPLE_VIDEOS.corporate1), type: "video", videoUrl: SAMPLE_VIDEOS.corporate1 },
  { id: "annual-report-video", title: "Annual Report Video Presentation", category: "Video Editing", subcategory: "corporate-video", image: ytThumb(SAMPLE_VIDEOS.corporate2), type: "video", videoUrl: SAMPLE_VIDEOS.corporate2 },

  // YouTube
  { id: "youtube-vlog", title: "YouTube Vlog Editing", category: "Video Editing", subcategory: "youtube-editing", image: ytThumb(SAMPLE_VIDEOS.youtube1), type: "video", videoUrl: SAMPLE_VIDEOS.youtube1 },
  { id: "youtube-tutorial", title: "Tutorial Video Editing", category: "Video Editing", subcategory: "youtube-editing", image: ytThumb(SAMPLE_VIDEOS.youtube2), type: "video", videoUrl: SAMPLE_VIDEOS.youtube2 },

  // Social Reels
  { id: "lifestyle-reels", title: "Lifestyle Instagram Reels", category: "Video Editing", subcategory: "social-reels", image: ytThumb(SAMPLE_VIDEOS.reels1), type: "video", videoUrl: SAMPLE_VIDEOS.reels1 },
  { id: "fashion-reels", title: "Fashion Brand TikTok Reels", category: "Video Editing", subcategory: "social-reels", image: ytThumb(SAMPLE_VIDEOS.reels2), type: "video", videoUrl: SAMPLE_VIDEOS.reels2 },

  // Product Video
  { id: "cosmetic-product", title: "Cosmetics Product Showcase", category: "Video Editing", subcategory: "product-video", image: ytThumb(SAMPLE_VIDEOS.productVid1), type: "video", videoUrl: SAMPLE_VIDEOS.productVid1 },
  { id: "tech-unboxing", title: "Tech Product Unboxing", category: "Video Editing", subcategory: "product-video", image: ytThumb(SAMPLE_VIDEOS.productVid2), type: "video", videoUrl: SAMPLE_VIDEOS.productVid2 },

  // Event Highlight
  { id: "tech-conference", title: "Tech Conference Highlight Reel", category: "Video Editing", subcategory: "event-highlight", image: ytThumb(SAMPLE_VIDEOS.event1), type: "video", videoUrl: SAMPLE_VIDEOS.event1 },
  { id: "gala-event", title: "Corporate Gala Event Video", category: "Video Editing", subcategory: "event-highlight", image: ytThumb(SAMPLE_VIDEOS.event2), type: "video", videoUrl: SAMPLE_VIDEOS.event2 },

  // Documentary
  { id: "short-doc", title: "Short Documentary Film", category: "Video Editing", subcategory: "documentary", image: ytThumb(SAMPLE_VIDEOS.doc1), type: "video", videoUrl: SAMPLE_VIDEOS.doc1 },
  { id: "nature-doc", title: "Nature Documentary Edit", category: "Video Editing", subcategory: "documentary", image: ytThumb(SAMPLE_VIDEOS.doc2), type: "video", videoUrl: SAMPLE_VIDEOS.doc2 },

  // Music Video
  { id: "concert-music-vid", title: "Live Concert Music Video", category: "Video Editing", subcategory: "music-video", image: ytThumb(SAMPLE_VIDEOS.music1), type: "video", videoUrl: SAMPLE_VIDEOS.music1 },
  { id: "indie-music-vid", title: "Indie Artist Music Video", category: "Video Editing", subcategory: "music-video", image: ytThumb(SAMPLE_VIDEOS.music2), type: "video", videoUrl: SAMPLE_VIDEOS.music2 },

  // Wedding Video
  { id: "golden-hour-wedding", title: "Golden Hour Wedding Film", category: "Video Editing", subcategory: "wedding-video", image: ytThumb(SAMPLE_VIDEOS.wedding1), type: "video", videoUrl: SAMPLE_VIDEOS.wedding1 },
  { id: "destination-wedding", title: "Destination Wedding Highlight", category: "Video Editing", subcategory: "wedding-video", image: ytThumb(SAMPLE_VIDEOS.wedding2), type: "video", videoUrl: SAMPLE_VIDEOS.wedding2 },

  // Testimonial Video
  { id: "client-testimonial", title: "Client Testimonial Production", category: "Video Editing", subcategory: "testimonial-video", image: ytThumb(SAMPLE_VIDEOS.testimonial1), type: "video", videoUrl: SAMPLE_VIDEOS.testimonial1 },
  { id: "employee-testimonial", title: "Employee Spotlight Video", category: "Video Editing", subcategory: "testimonial-video", image: ytThumb(SAMPLE_VIDEOS.testimonial2), type: "video", videoUrl: SAMPLE_VIDEOS.testimonial2 },
];

export const getSubcategoriesByCategory = (category: string) =>
  subcategories.filter((s) => s.category === category);

export const getWorkBySubcategory = (subcategoryId: string) =>
  portfolioItems.filter((w) => w.subcategory === subcategoryId);

export const getSubcategoryById = (id: string) =>
  subcategories.find((s) => s.id === id);
