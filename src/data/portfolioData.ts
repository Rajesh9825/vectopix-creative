import brandIdentity from "@/assets/portfolio/brand-identity.jpg";
import logoAnimation from "@/assets/portfolio/logo-animation.jpg";
import corporateVideo from "@/assets/portfolio/corporate-video.jpg";
import packagingDesign from "@/assets/portfolio/packaging-design.jpg";
import explainerVideo from "@/assets/portfolio/explainer-video.jpg";
import socialCampaign from "@/assets/portfolio/social-campaign.jpg";

// New images
import brochureDesign1 from "@/assets/portfolio/brochure-design-1.jpg";
import flyerDesign1 from "@/assets/portfolio/flyer-design-1.jpg";
import posterDesign1 from "@/assets/portfolio/poster-design-1.jpg";
import businessCard1 from "@/assets/portfolio/business-card-1.jpg";
import bannerDesign1 from "@/assets/portfolio/banner-design-1.jpg";
import socialMediaPost1 from "@/assets/portfolio/social-media-post-1.jpg";
import socialMediaAds1 from "@/assets/portfolio/social-media-ads-1.jpg";
import labelDesign1 from "@/assets/portfolio/label-design-1.jpg";
import catalogDesign1 from "@/assets/portfolio/catalog-design-1.jpg";
import infographicDesign1 from "@/assets/portfolio/infographic-design-1.jpg";
import menuDesign1 from "@/assets/portfolio/menu-design-1.jpg";
import companyProfile1 from "@/assets/portfolio/company-profile-1.jpg";

// Motion Graphics
import introOutro1 from "@/assets/portfolio/intro-outro-1.jpg";
import socialMediaAnimation1 from "@/assets/portfolio/social-media-animation-1.jpg";
import titleAnimation1 from "@/assets/portfolio/title-animation-1.jpg";
import productAnimation1 from "@/assets/portfolio/product-animation-1.jpg";
import kineticTypography1 from "@/assets/portfolio/kinetic-typography-1.jpg";
import characterAnimation1 from "@/assets/portfolio/character-animation-1.jpg";
import uiUxAnimation1 from "@/assets/portfolio/ui-ux-animation-1.jpg";

// Video Editing
import youtubeEditing1 from "@/assets/portfolio/youtube-editing-1.jpg";
import socialReels1 from "@/assets/portfolio/social-reels-1.jpg";
import productVideo1 from "@/assets/portfolio/product-video-1.jpg";
import eventHighlight1 from "@/assets/portfolio/event-highlight-1.jpg";
import documentary1 from "@/assets/portfolio/documentary-1.jpg";
import musicVideo1 from "@/assets/portfolio/music-video-1.jpg";
import weddingVideo1 from "@/assets/portfolio/wedding-video-1.jpg";
import testimonialVideo1 from "@/assets/portfolio/testimonial-video-1.jpg";

export interface Subcategory {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  workCount: number;
}

export interface PortfolioWork {
  id: string;
  title: string;
  category: string;
  subcategory: string;
  image: string;
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

export const portfolioItems: PortfolioWork[] = [
  // Graphic Design — Brochure Design
  { id: "spa-brochure", title: "Luxury Spa Tri-fold Brochure", category: "Graphic Design", subcategory: "brochure-design", image: brochureDesign1 },

  // Graphic Design — Flyer Design
  { id: "festival-flyer", title: "Music Festival Event Flyer", category: "Graphic Design", subcategory: "flyer-design", image: flyerDesign1 },

  // Graphic Design — Poster Design
  { id: "art-exhibition-poster", title: "Art Exhibition Poster", category: "Graphic Design", subcategory: "poster-design", image: posterDesign1 },

  // Graphic Design — Brand Identity
  { id: "luxe-print", title: "Brand Identity — Luxe Print Co.", category: "Graphic Design", subcategory: "brand-identity", image: brandIdentity },

  // Graphic Design — Business Card
  { id: "gold-foil-cards", title: "Gold Foil Premium Business Cards", category: "Graphic Design", subcategory: "business-card", image: businessCard1 },

  // Graphic Design — Banner Design
  { id: "ecommerce-banner", title: "E-Commerce Promotional Banner", category: "Graphic Design", subcategory: "banner-design", image: bannerDesign1 },

  // Graphic Design — Social Media Post
  { id: "stylehub-social", title: "Social Media Campaign — StyleHub", category: "Graphic Design", subcategory: "social-media-post", image: socialMediaPost1 },
  { id: "stylehub-social-2", title: "Fashion Brand Social Grid", category: "Graphic Design", subcategory: "social-media-post", image: socialCampaign },

  // Graphic Design — Social Media Ads
  { id: "fitness-ads", title: "Fitness Brand Ad Creatives", category: "Graphic Design", subcategory: "social-media-ads", image: socialMediaAds1 },

  // Graphic Design — Packaging Design
  { id: "freshroots-pkg", title: "Packaging Design — FreshRoots", category: "Graphic Design", subcategory: "packaging-design", image: packagingDesign },

  // Graphic Design — Label Design
  { id: "coffee-label", title: "Artisan Coffee Label Design", category: "Graphic Design", subcategory: "label-design", image: labelDesign1 },

  // Graphic Design — Catalog Design
  { id: "fashion-catalog", title: "Fashion Lookbook Catalog", category: "Graphic Design", subcategory: "catalog-design", image: catalogDesign1 },

  // Graphic Design — Infographic Design
  { id: "business-infographic", title: "Business Statistics Infographic", category: "Graphic Design", subcategory: "infographic-design", image: infographicDesign1 },

  // Graphic Design — Menu Design
  { id: "fine-dining-menu", title: "Fine Dining Restaurant Menu", category: "Graphic Design", subcategory: "menu-design", image: menuDesign1 },

  // Graphic Design — Company Profile
  { id: "corporate-profile", title: "Corporate Company Profile", category: "Graphic Design", subcategory: "company-profile", image: companyProfile1 },

  // Motion Graphics — Logo Animation
  { id: "techvista-logo", title: "Logo Animation — TechVista", category: "Motion Graphics", subcategory: "logo-animation", image: logoAnimation },

  // Motion Graphics — Intro & Outro
  { id: "cinematic-intro", title: "Cinematic Logo Reveal Intro", category: "Motion Graphics", subcategory: "intro-outro", image: introOutro1 },

  // Motion Graphics — Explainer Animation
  { id: "finflow-explainer", title: "Explainer Video — FinFlow App", category: "Motion Graphics", subcategory: "explainer-animation", image: explainerVideo },

  // Motion Graphics — Social Media Animation
  { id: "social-animation-story", title: "Animated Instagram Story", category: "Motion Graphics", subcategory: "social-media-animation", image: socialMediaAnimation1 },

  // Motion Graphics — Title Animation
  { id: "movie-titles", title: "Cinematic Title Sequence", category: "Motion Graphics", subcategory: "title-animation", image: titleAnimation1 },

  // Motion Graphics — Product Animation
  { id: "phone-showcase", title: "3D Smartphone Product Showcase", category: "Motion Graphics", subcategory: "product-animation", image: productAnimation1 },

  // Motion Graphics — Kinetic Typography
  { id: "kinetic-text", title: "Dynamic Kinetic Typography", category: "Motion Graphics", subcategory: "kinetic-typography", image: kineticTypography1 },

  // Motion Graphics — Character Animation
  { id: "mascot-animation", title: "Brand Mascot Character Animation", category: "Motion Graphics", subcategory: "character-animation", image: characterAnimation1 },

  // Motion Graphics — UI/UX Animation
  { id: "app-ui-motion", title: "Mobile App UI Micro-interactions", category: "Motion Graphics", subcategory: "ui-ux-animation", image: uiUxAnimation1 },

  // Video Editing — Corporate Video
  { id: "summit-2024", title: "Corporate Video — Summit 2024", category: "Video Editing", subcategory: "corporate-video", image: corporateVideo },

  // Video Editing — YouTube
  { id: "youtube-vlog", title: "YouTube Vlog Editing", category: "Video Editing", subcategory: "youtube-editing", image: youtubeEditing1 },

  // Video Editing — Social Reels
  { id: "lifestyle-reels", title: "Lifestyle Instagram Reels", category: "Video Editing", subcategory: "social-reels", image: socialReels1 },

  // Video Editing — Product Video
  { id: "cosmetic-product", title: "Cosmetics Product Showcase", category: "Video Editing", subcategory: "product-video", image: productVideo1 },

  // Video Editing — Event Highlight
  { id: "tech-conference", title: "Tech Conference Highlight Reel", category: "Video Editing", subcategory: "event-highlight", image: eventHighlight1 },

  // Video Editing — Documentary
  { id: "short-doc", title: "Short Documentary Film", category: "Video Editing", subcategory: "documentary", image: documentary1 },

  // Video Editing — Music Video
  { id: "concert-music-vid", title: "Live Concert Music Video", category: "Video Editing", subcategory: "music-video", image: musicVideo1 },

  // Video Editing — Wedding Video
  { id: "golden-hour-wedding", title: "Golden Hour Wedding Film", category: "Video Editing", subcategory: "wedding-video", image: weddingVideo1 },

  // Video Editing — Testimonial Video
  { id: "client-testimonial", title: "Client Testimonial Production", category: "Video Editing", subcategory: "testimonial-video", image: testimonialVideo1 },
];

export const getSubcategoriesByCategory = (category: string) =>
  subcategories.filter((s) => s.category === category);

export const getWorkBySubcategory = (subcategoryId: string) =>
  portfolioItems.filter((w) => w.subcategory === subcategoryId);

export const getSubcategoryById = (id: string) =>
  subcategories.find((s) => s.id === id);
