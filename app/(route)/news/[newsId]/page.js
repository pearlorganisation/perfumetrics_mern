import dynamic from "next/dynamic";

const News = dynamic(() => import("../News"), {
  ssr: false,
  loading: () => (
    <div className="container mx-auto grid lg:grid-cols-[auto_20rem] gap-4 p-6">
      <div class="animate-pulse grid grid-cols-1 gap-6 py-6 pt-0">
        <div class="space-y-4 w-full">
          <div class="w-full h-[30rem] bg-gray-200"></div>
          <div class="h-6 bg-gray-200 w-3/5"></div>
          <div class="h-4 bg-gray-200 w-1/2"></div>
          <div class="h-16 bg-gray-200"></div>
        </div>
      </div>
      <div className="space-y-3">
        {Array.from({ length: 5 }).map((item) => {
          return (
            <div class="animate-pulse bg-gray-200 flex justify-start items-center gap-3 cursor-pointer p-3 rounded-md">
              <div class="h-20 w-20 rounded-md bg-gray-300"></div>
              <div class="flex flex-col w-60 ml-3 space-y-2">
                <div class="h-5 bg-gray-300 rounded w-3/4"></div>
                <div class="h-4 bg-gray-300 rounded w-full"></div>
                <div class="h-4 bg-gray-300 rounded w-1/2"></div>
                <div class="flex items-center justify-end mt-2">
                  <div class="h-5 w-16 bg-gray-300 rounded"></div>
                  <div class="h-10 w-10 bg-gray-300 rounded-full ml-2"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ),
});
export default function Page({ params }) {
  return (
    <div>
      <News />
    </div>
  );
}
