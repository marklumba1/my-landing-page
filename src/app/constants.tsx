import { CreditCard, Users, FileText, BarChart2, BookOpen, Activity,   } from "lucide-react";

export const cards = [
  {
    title: { text: "Goal management", className: "text-xl font-semibold" },
    description:
      "New! See all the steps you need to draft goals, gather input and drive innovation.",
    cta: { label: "Learn more", type: "primary" },
    image: { url: "/goals.jpg", size: 1000 },
  },
  {
    title: { text: "Real-time updates", className: "text-xl font-semibold" },
    description: "Drive focus and progress with real-time status updates.",
    cta: { label: "Learn more", type: "primary" },
    image: { url: "/target.jpg", size: 1000 },
  },
  {
    title: {
      text: "High-level customization",
      className: "text-xl font-semibold",
    },
    description:
      "Choose from pre-built pipeline templates, or create custom interview steps.",
    cta: { label: "Learn more", type: "primary" },
    image: { url: "/hi-level.jpg", size: 1000 },
  },
];

export const realtimeUpdates = {
  image: "/realtimeupdates.jpg",
  title: { text: "Real-time updates", className: "uppercase tracking-widest text-gray-500" },
  subtitle: { text: "Empowering your talent pipeline", className: "text-4xl font-medium max-w-[50%]" },
  features: [
    {
      title: { text: "Payroll efficiency", className: "text-lg font-medium" },
      description: "Automate and manage payroll processing with real-time updates.",
      icon: <CreditCard className="w-6 h-6" />,
    },
    {
      title: { text: "Talent management", className: "text-lg font-medium" },
      description: "Add, remove, or adjust team members’ roles and perks.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: { text: "Contract oversight", className: "text-lg font-medium" },
      description: "Track and oversee contract signings and revisions with ease.",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      title: { text: "Data-driven decisions", className: "text-lg font-medium" },
      description: "Monitor team actions to optimize decisions and workflows.",
      icon: <BarChart2 className="w-6 h-6" />,
    },
  ]
};

export const growthLevels = {
  image: "/growtheverylevel.jpg",
  title: { text: "Growth at Every Level", className: "uppercase tracking-widest text-gray-500" },
  subtitle: { text: "Empower your team to succeed with clear guidance and insights", className: "text-4xl font-medium max-w-[50%]" },
  features: [
    {
      title: { text: "Making yourself at home", className: "text-xl font-semibold" },
      description: "Foster collaboration with transparent role-based objectives.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: { text: "Skills development", className: "text-xl font-semibold" },
      description: "Empower your team with tailored learning pathways.",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: { text: "Progress tracking", className: "text-xl font-semibold" },
      description: "Monitor individual and team advancement effortlessly.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: { text: "Performance insights", className: "text-xl font-semibold" },
      description: "Gain actionable data to optimize team productivity.",
      icon: <BarChart2 className="w-6 h-6" />
    }
  ]
};
