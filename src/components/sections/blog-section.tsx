import Link from "next/link";

const blogsInfo = [
  {
    title: "Machine Learning and Artificial Intelligence",
    description: "A brief introduction to ML and AI",
    date: "May 13, 2023",
    link: "https://tanayvaswani.hashnode.dev/machine-learning-and-artificial-intelligence-the-two-wheels-of-a-motorbike-part-1",
  },
  {
    title: "The World of Computer Networks",
    description: "A brief introduction to computer networks",
    date: "Mar 18, 2023",
    link: "https://tanayvaswani.hashnode.dev/computer-networks",
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
          className="w-full flex flex-col items-start justify-start hover:text-blue-600 transition-all rounded-md border p-3"
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
