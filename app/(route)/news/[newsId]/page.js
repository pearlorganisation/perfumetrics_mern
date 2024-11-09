// Next.js will invalidate the cache when a

import Image from "next/image";
import parse from "html-react-parser";

// request comes in, at most once every 60 seconds.
export const revalidate = 60;

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true; // or false, to 404 on unknown paths

export async function generateStaticParams() {
  const posts = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/news`
  ).then((res) => res.json());

  return posts?.data?.map((post) => ({
    id: String(post._id),
  }));
}

export default async function Page({ params }) {
  const post = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/news/${params.newsId}`
  ).then((res) => res?.json());

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
    <div className="bg-gray-100 min-h-screen py-4">
      <div className="text-center font-bold text-4xl">News Blog</div>
      {/* Blog Post */}
      <main className="container mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
        <article>
          <h2 className="text-2xl font-bold mb-4">{post.data.title}</h2>
          <p className="text-gray-600 mb-2">
            By <span className="font-semibold">{post.data.user}</span> on{" "}
            <span className="text-gray-400">
              {formatDate(post.data.updatedAt)}
            </span>
          </p>
          <Image
            src={post.data.image}
            width={400}
            height={400}
            alt="Blog Post"
            className="max-w-4xl w-full h-[35rem] rounded-lg mb-6"
          />
          <h1 className="text-gray-500">Description :</h1>
          <p className="mb-4 font-medium">{post.data.details}</p>
        </article>

        {/* text editor data */}
        <section className=" bg-gray-50 rounded-lg">
          <p>{parse(post.data.description)}</p>
        </section>

        {/* Comments Section
        <section className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Comments</h3>
          <div className="mb-4">
            <div className="flex items-start mb-4">
              <img
                src="https://via.placeholder.com/40"
                alt="User Avatar"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="font-semibold">Commenter Name</p>
                <p className="text-gray-600">
                  Great post! Really enjoyed reading it.
                </p>
              </div>
            </div>
          </div>
          <form className="mt-4">
            <textarea
              className="w-full p-2 border border-gray-300 rounded-lg"
              rows="3"
              placeholder="Add a comment..."
            />
            <button
              type="submit"
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Submit
            </button>
          </form>
        </section> */}
      </main>
    </div>
  );
}
