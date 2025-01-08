import Image from "next/image";
import parse from "html-react-parser";
import Link from "next/link";

export default async function Page({ params }) {
  const posts = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/celebrityPerfumes`,
    { cache: "no-store" }
  ).then((res) => res?.json());
  // console.log(posts, "posts");

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
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center py-3">
        Celebrity Perfume Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts?.data?.map((blog, index) => {
          return (
            <Link href={`/celebrityPerfumeBlog/${blog?._id}`}>
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={blog.banner}
                  alt={blog.title}
                  className="w-full h-48 object-contain"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-gray-800">
                    {blog.title}
                  </h3>
                  {/* <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {blog.content}
                  </p> */}
                  <button className="w-full text-black py-2 px-4 rounded  transition duration-300">
                    Read More
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
