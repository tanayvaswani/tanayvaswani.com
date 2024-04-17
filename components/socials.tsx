import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const socialsArray = [
  {
    icon: FaGithub,
    name: "GitHub",
    href: "https://github.com/tanayvaswani",
  },
  {
    icon: FaLinkedin,
    name: "Linkedin",
    href: "https://linkedin.com/in/tanayvaswani",
  },
  {
    icon: FaTwitter,
    name: "Twitter",
    href: "https://twitter.com/iTanayVaswani",
  },
  {
    icon: MdEmail,
    name: "Email",
    href: "mailto:vaswani.tanay9@gmail.com",
  },
  {
    icon: FaYoutube,
    name: "YouTube",
    href: "https://youtube.com/tanayvaswani",
  },
];

const Socials = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      {socialsArray.map((social, index) => (
        <Link
          key={index}
          href={social.href}
          className="text-zinc-400 hover:text-blue-600 transition-all"
          target="_blank"
        >
          <social.icon className="h-6 w-6" />
        </Link>
      ))}
    </div>
  );
};

export default Socials;
