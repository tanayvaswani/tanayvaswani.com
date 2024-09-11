import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

const socialRoutes = [
  {
    icon: Github,
    title: "GitHub",
    url: "https://github.com/tanayvaswani",
  },
  {
    icon: Twitter,
    title: "Twitter",
    url: "htps://twitter.com/iTanayVaswani",
  },
  {
    icon: Mail,
    title: "Email",
    url: "mailto:vaswani.tanay9@gmail.com",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/tanayvaswani/",
  },
  {
    icon: Instagram,
    title: "Instagram",
    url: "https://www.instagram.com/tanayvaswani.tsx/",
  },
];

const Footer = () => {
  return (
    <div className="w-full border-t py-6 bottom-0">
      <div className="md:max-w-screen-md md:mx-auto px-4 md:px-0 flex flex-col items-center gap-6">
        <div className="flex flex-wrap text-sm items-center justify-center gap-6 text-neutral-500">
          {socialRoutes.map((route, index) => (
            <Link
              key={index}
              href={route.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-neutral-800"
            >
              <route.icon className="h-4 w-4" /> {route.title}
            </Link>
          ))}
        </div>

        <p className="text-sm text-neutral-500">
          © 2024 Tanay Vaswani. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
