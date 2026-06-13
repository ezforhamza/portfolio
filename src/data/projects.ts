import type { Project } from "@/components/ProjectShowcase";

const HEY = "/projects/heyinterests";
const ALU = "/projects/alumni";

export const heyInterests: Project = {
  number: "01",
  name: "HeyInterests",
  accent: "#f5a623", // amber — its real brand
  logo: { src: `${HEY}/logo-white.svg`, width: 220, height: 52 },
  tech: ["Flutter", "React", "Next.js", "Node.js", "Supabase", "AI / LLMs"],
  platforms: ["Web", "iOS", "Android"],
  links: [
    { label: "Visit website", href: "https://heyinterests.com/", primary: true },
    { label: "Instagram", href: "https://www.instagram.com/heyinterests/" },
  ],
  scenes: [
    {
      tag: "The product",
      title: "Make friends through shared interests",
      body: "A social platform connecting adults over 140+ shared interests — small groups, real conversations, across mobile and web.",
      image: `${HEY}/cover.webp`,
      alt: "HeyInterests landing page on laptop and phone",
    },
    {
      tag: "Mobile · Flutter",
      title: "One codebase, iOS + Android",
      body: "Interest groups, profiles and discovery — built in Flutter for native performance on both platforms from a single codebase.",
      image: `${HEY}/mockup-trio.webp`,
      alt: "HeyInterests Flutter app screens on three phones",
    },
    {
      tag: "Messaging",
      title: "Real-time group & 1-on-1 chat",
      body: "WebSocket-powered messaging with group threads, reactions, media and video — the social core that brings people back.",
      image: `${HEY}/shot-6.webp`,
      alt: "HeyInterests web messaging interface",
    },
    {
      tag: "Smart matching",
      title: "Find your people, worldwide",
      body: "An interactive globe and a matching algorithm that learns from interests and activity to surface the right groups and people.",
      image: `${HEY}/web-globe.webp`,
      alt: "HeyInterests global matching screen",
    },
    {
      tag: "AI & analytics",
      title: "Insights that close the loop",
      body: "Profile analytics, engagement heatmaps and AI-assisted recommendations — the product gets smarter the more it's used.",
      image: `${HEY}/shot-7.webp`,
      alt: "HeyInterests analytics dashboard",
    },
  ],
};

export const alumni: Project = {
  number: "02",
  name: "AIumni Network",
  accent: "#1090cf", // cool blue — AIumni's real brand
  logo: {
    src: `${ALU}/logo-mark.png`,
    width: 40,
    height: 40,
    className: "h-8 w-8 sm:h-9 sm:w-9",
  },
  tech: ["React", "Next.js", "Node.js", "Firebase", "REST API", "AI / LLMs"],
  platforms: ["Web", "iOS", "Android"],
  links: [
    { label: "Visit website", href: "https://aiumni.co/", primary: true },
    {
      label: "App Store",
      href: "https://apps.apple.com/us/app/aiumni/id6752709635",
      icon: "apple",
    },
    {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=com.design.aIumni&hl=en",
      icon: "play",
    },
  ],
  scenes: [
    {
      tag: "The product",
      title: "It's all about the hands you shake",
      body: "A professional networking platform for alumni — connect with classmates, find opportunities and build your network, across web and mobile.",
      image: `${ALU}/shot-1.webp`,
      alt: "AIumni landing page on laptop and phone",
    },
    {
      tag: "Mobile",
      title: "Discover alumni near you",
      body: "A map-based discovery experience, rich profiles and a personalized feed — built for iOS and Android.",
      image: `${ALU}/shot-2.webp`,
      alt: "AIumni mobile app screens with map discovery and profile",
    },
    {
      tag: "Social feed",
      title: "A feed that keeps the community close",
      body: "Posts, engagement and recommendations bring graduates back together — sharing wins, moments and opportunities.",
      image: `${ALU}/shot-3.webp`,
      alt: "AIumni web social feed",
    },
    {
      tag: "Opportunities",
      title: "Jobs, surfaced through your network",
      body: "An integrated jobs board connects alumni to roles posted within the community — career growth through real connections.",
      image: `${ALU}/shot-4.webp`,
      alt: "AIumni jobs board",
    },
    {
      tag: "AI · For You",
      title: "Personalized for every member",
      body: "Messaging, profiles and a 'For You' feed powered by recommendations that learn what each member cares about.",
      image: `${ALU}/shot-5.webp`,
      alt: "AIumni messages, profile and personalized screens",
    },
  ],
};

export const projects: Project[] = [heyInterests, alumni];
