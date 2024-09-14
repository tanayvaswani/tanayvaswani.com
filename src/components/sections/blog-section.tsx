import Link from "next/link";

const blogsInfo = [
  {
    title: "Blog Title",
    description: "Blog Description",
    date: "24th September 2024",
    link: "https://www.google.com",
  },
  {
    title: "Blog Title",
    description: "Blog Description",
    date: "24th September 2024",
    link: "https://www.google.com",
  },
  {
    title: "Blog Title",
    description: "Blog Description",
    date: "24th September 2024",
    link: "https://www.google.com",
  },
  {
    title: "Blog Title",
    description: "Blog Description",
    date: "24th September 2024",
    link: "https://www.google.com",
  },
  {
    title: "Blog Title",
    description: "Blog Description",
    date: "24th September 2024",
    link: "https://www.google.com",
  },
  {
    title: "Blog Title",
    description: "Blog Description",
    date: "24th September 2024",
    link: "https://www.google.com",
  },
  {
    title: "Blog Title",
    description: "Blog Description",
    date: "24th September 2024",
    link: "https://www.google.com",
  },
];

const BlogSection = () => {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-3">
      {blogsInfo.map((blogInfo, index) => (
        <Link
          href={blogInfo.link}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
          className="w-full flex flex-col items-start justify-start hover:text-blue-600"
        >
          <h1 className="text-xl font-semibold">{blogInfo.title}</h1>
          <p className="text-xs text-neutral-500">{blogInfo.date}</p>

          <p className="mt-2 text-neutral-600">{blogInfo.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default BlogSection;
