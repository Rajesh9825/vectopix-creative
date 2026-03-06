import brandIdentity from "@/assets/portfolio/brand-identity.jpg";
import logoAnimation from "@/assets/portfolio/logo-animation.jpg";
import corporateVideo from "@/assets/portfolio/corporate-video.jpg";
import packagingDesign from "@/assets/portfolio/packaging-design.jpg";
import explainerVideo from "@/assets/portfolio/explainer-video.jpg";
import socialCampaign from "@/assets/portfolio/social-campaign.jpg";

export interface Subcategory {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string; // emoji
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

// Sample work items mapped to subcategories (using existing images as placeholders)
export const portfolioItems: PortfolioWork[] = [
  { id: "luxe-print", title: "Brand Identity — Luxe Print Co.", category: "Graphic Design", subcategory: "brand-identity", image: brandIdentity },
  { id: "freshroots-pkg", title: "Packaging Design — FreshRoots", category: "Graphic Design", subcategory: "packaging-design", image: packagingDesign },
  { id: "stylehub-social", title: "Social Media Campaign — StyleHub", category: "Graphic Design", subcategory: "social-media-post", image: socialCampaign },
  { id: "techvista-logo", title: "Logo Animation — TechVista", category: "Motion Graphics", subcategory: "logo-animation", image: logoAnimation },
  { id: "finflow-explainer", title: "Explainer Video — FinFlow App", category: "Motion Graphics", subcategory: "explainer-animation", image: explainerVideo },
  { id: "summit-2024", title: "Corporate Video — Summit 2024", category: "Video Editing", subcategory: "corporate-video", image: corporateVideo },
];

export const getSubcategoriesByCategory = (category: string) =>
  subcategories.filter((s) => s.category === category);

export const getWorkBySubcategory = (subcategoryId: string) =>
  portfolioItems.filter((w) => w.subcategory === subcategoryId);

export const getSubcategoryById = (id: string) =>
  subcategories.find((s) => s.id === id);
