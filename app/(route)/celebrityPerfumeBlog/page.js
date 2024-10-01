// Next.js will invalidate the cache when a

import Image from "next/image";
import parse from "html-react-parser";
import Link from "next/link";

export default async function Page({ params }) {
  const posts = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/celebrityPerfumes`
  ).then((res) => res?.json());
  console.log(posts, "posts");

  //function to format date
  function formatDate(isoDateString) {
    const date = new Date(isoDateString);

    // Add 1 day to the date
    date.setDate(date.getDate() + 1);

    // Define options for formatting
    const options = { year: "numeric", month: "long", day: "numeric" };

    // Format the date
    return date.toLocaleDateString("en-US", options);
  }
  return (
    <div className="max-w-6xl mx-auto p-4 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Celebrity Perfume Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts?.data?.map((post) => (
          <div
            key={post._id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={post.banner}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-2">
                {/* By <span className="font-semibold">{post.author}</span> on{" "} */}
                {formatDate(post.updatedAt)}
              </p>
              {/* <p className="text-gray-700 mb-4">{parse(post.content)}</p> */}
              <Link
                href={`/celebrityPerfumeBlog/${post._id}`}
                className="text-blue-600 hover:underline"
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
