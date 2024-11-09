async function getSiderbarReviews() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/reviewsSidebar`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  // console.log(data, "sidebar Review")
  return data?.data;
}

// Next.js will invalidate the cache when a

import Image from "next/image";
import parse from "html-react-parser";
import CardsList from "@/app/_components/CardsList/CardsList";
import { RiFacebookBoxFill } from "react-icons/ri";
import Link from "next/link";

// request comes in, at most once every 60 seconds.
export const revalidate = 60;

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true; // or false, to 404 on unknown paths

export async function generateStaticParams() {
  const posts = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/celebrityPerfumes`
  ).then((res) => res.json());

  return posts?.data?.map((post) => ({
    id: String(post._id),
  }));
}

export default async function Page({ params }) {
  const sidebarReview = await getSiderbarReviews();
  const post = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/celebrityPerfumes/${params.celebrityPerfumeId}`
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
    <div className="min-h-screen py-4">
      {/* Blog Post */}
      <div className="grid grid-cols-[auto_20rem] container mx-auto ">
        <div className="font-bold text-4xl col-span-2 leading-[4rem] pl-4 ">
          Celebrity Perfume Blog
        </div>
        <main className=" mx-auto p-4 bg-white rounded-lg ">
          <article>
            <Image
              src={post.data.banner}
              width={400}
              height={400}
              alt="Blog Post"
              className="max-w-4xl w-full h-[35rem] rounded-lg mb-6"
            />
            <h2 className="text-2xl font-bold mb-4">{post.data.title}</h2>
            <p className="text-gray-600 mb-2">
              By <span className="font-semibold">{post.data.user}</span> on{" "}
              <span className="text-gray-400">
                {formatDate(post.data.updatedAt)}
              </span>
            </p>
            <h1 className="text-gray-500">Description :</h1>
            <p className="mb-4 font-medium">{post.data.details}</p>
          </article>

          {/* text editor data */}
          <section className=" bg-gray-50 rounded-lg">
            <p>{parse(post.data.content || "")}</p>
          </section>
        </main>
        <div className="">
          <div className="max-w-xs mx-auto bg-white rounded-lg  p-4 text-center">
            <h2 className="text-lg font-semibold mb-2">Perfume Encyclopedia</h2>
            <div className="border-t border-b py-2 text-left">
              <p className="text-sm">
                Perfumes: <span className="font-bold">97,158</span>
              </p>
              <p className="text-sm">
                Fragrance Reviews: <span className="font-bold">1,901,166</span>
              </p>
              <p className="text-sm">
                Perfume lovers: <span className="font-bold">1,361,339</span>
              </p>
            </div>

            <div className="flex justify-around mt-4">
              <Link
                href="/login"
                className="px-4 grid place-items-center bg-teal-600 text-white rounded hover:bg-teal-700"
              >
                Log in
              </Link>
              <button className="border-2 p-1 rounded" type="button">
                <div className="bg-[#4267B2] rounded-sm text-base font-medium px-2 py-[0.15rem]  text-white flex justify-center items-center">
                  <RiFacebookBoxFill className="text-lg mr-1" /> Login
                </div>
              </button>
              <Link
                href="/signUp"
                className="px-4 grid place-items-center bg-teal-600 text-white rounded hover:bg-teal-700"
              >
                Register
              </Link>
            </div>
          </div>
          <div className="w-full  flex flex-col gap-5">
            <div className=" w-full text-center py-4  relative grid place-items-center">
              <hr className="border absolute w-full" />
              <div className="text-xl md:text-2xl  font-semibold  bg-white z-10 px-3">
                Perfume Reviews
              </div>
            </div>
            <CardsList reviewData={sidebarReview} length={14} bg="white" />
          </div>
        </div>
      </div>
    </div>
  );
}
