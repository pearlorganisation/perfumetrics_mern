import React from "react";

export default function page({ params }) {
  console.log(params, "params");
  return (
    <div className="min-h-screen  mx-auto container pt-10">
      <div className="grid place-items-center relative mb-4">
        <h1 className="text-3xl font-medium px-8 py-3 bg-white z-40 relative lg:left-[-11rem] w-[20rem] text-center bottom-[.1rem]">
          {params?.saleName?.split("%20")?.join(" ")}
        </h1>
        <div className="absolute w-full h-[2px] bg-slate-500"></div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {Array(10)
          .fill(true)
          .map((item) => {
            return (
              <div className=" flex bg-white shadow-lg rounded-lg overflow-hidden p-2">
                <div className="grid place-items-center">
                  <img
                    className="size-28 object-cover"
                    src="https://images.unsplash.com/photo-1588514912908-8f5891714f8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D"
                    alt="Euphoria Eau De Parful"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-gray-800 text-sm lg:text-lg font-semibold">
                    Euphoria Eau De Parful Ns 100ml
                  </h2>
                  <div className="flex items-center mt-2">
                    <svg
                      className="w-4 h-4 fill-current text-blue-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849L19.336 24 12 20.201 4.664 24 6 15.272 0 9.423l8.332-1.268z" />
                    </svg>
                    <svg
                      className="w-4 h-4 fill-current text-blue-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849L19.336 24 12 20.201 4.664 24 6 15.272 0 9.423l8.332-1.268z" />
                    </svg>
                    <svg
                      className="w-4 h-4 fill-current text-blue-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849L19.336 24 12 20.201 4.664 24 6 15.272 0 9.423l8.332-1.268z" />
                    </svg>
                    <svg
                      className="w-4 h-4 fill-current text-blue-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849L19.336 24 12 20.201 4.664 24 6 15.272 0 9.423l8.332-1.268z" />
                    </svg>
                    <svg
                      className="w-4 h-4 fill-current text-blue-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849L19.336 24 12 20.201 4.664 24 6 15.272 0 9.423l8.332-1.268z" />
                    </svg>
                  </div>
                  <div className="mt-3">
                    <span className="text-gray-800 text-xl font-semibold">
                      £105.00
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
