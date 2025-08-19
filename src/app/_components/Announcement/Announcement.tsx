import { ArrowRight } from "lucide-react";
interface AnnouncementProps {
  label: string;
  text: string;
  link: string;
}
export default function Announcement({ label, text, link }: AnnouncementProps) {
  return (
    <a
      href={link}
      className="border relative flex items-center gap-2 group overflow-hidden  rounded-full pr-2"
    >
      <div className="bg-lime-300 -z-10 rounded-full absolute h-full w-96 -translate-x-80 group-hover:translate-x-0 group-hover:w-full"></div>
      <p className="p-1 bg-lime-300 group-hover:bg-black group-hover:text-white px-4 rounded-full">
        {label}
      </p>
      <p>{text}</p>
      <div className="relative overflow-hidden">
        <ArrowRight className="absolute group-hover:translate-x-5" />
        <ArrowRight className="absolute  group-hover:translate-x-0 -translate-x-5" />
        <ArrowRight className="opacity-0" />
      </div>
    </a>
  );
}
