import React from "react";

const News = () => {
  return (
    <div className="space-y-4">
      <div class="grid place-items-center relative mb-6">
        <h1 class="text-3xl font-medium px-8 py-3 bg-white z-40">News </h1>
        <div class="absolute w-full h-[2px] bg-slate-500"></div>
      </div>
      <div className="flex justify-between items-center text-lg md:text-4xl font-medium"></div>
      <div className="grid grid-cols-1 gap-6 py-6 pt-0">
        {Array(1)
          .fill(true)
          .map((item) => {
            return (
              <div className="space-y-4 w-full">
                <img
                  className="w-full h-[30rem] object-cover"
                  src="https://plus.unsplash.com/premium_photo-1661490025820-ce090e391627?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkzfHxwZXJmdW1lfGVufDB8fDB8fHww"
                  alt=""
                />

                <div className="font-medium text-3xl text-black">
                  Is your perfume sustainble?
                </div>
                <div className="font-medium">By Rahul Rawat:</div>
                <p className="line-clamp-4">
                  Let’s get the bad news over with first. The moment a brand
                  exists, sustainability no longer exists. Even at its most
                  responsible, a brand creates waste in some form. And if anyone
                  harps about your carbon footprint—just a friendly reminder
                  that it’s a term coined by the marketing division of British
                  Petroleum, placing the blame of environmental damage on
                  consumers and not the companies drilling for fossil fuel. And
                  if anyone harps about your carbon footprint—just a friendly
                  reminder that it’s a term coined by the marketing division of
                  British Petroleum, placing the blame of environmental damage
                  on consumers and not the companies drilling for fossil
                  fuel. blame of environmental damage on consumers and not the
                  companies drilling for fossil fuel.
                </p>
              </div>
            );
          })}
      </div>
      <div className="grid gap-6 md:grid-cols-[18rem_auto] py-6 ">
        <div>
          <div className="mb-8">
            <img
              className="rounded-md"
              src="https://images.unsplash.com/photo-1624613533305-28d421d70875?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
            <div className="font-semibold mt-4">A Perfume</div>
            <p className="font-medium">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
              qui quis animi id nisi doloribus, quibusdam tenetur maiores sit
              nihil assumenda sed{" "}
            </p>
          </div>
          <div className="mb-8">
            <img
              className="rounded-md"
              src="https://images.unsplash.com/photo-1624613533305-28d421d70875?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
            <div className="font-semibold mt-4">A Perfume</div>
            <p className="font-medium">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
              qui quis animi id nisi doloribus, quibusdam tenetur maiores sit
              nihil assumenda sed{" "}
            </p>
          </div>
        </div>
        <div className=" space-y-3">
          <img
            className="w-full rounded-md"
            src="https://plus.unsplash.com/premium_photo-1667161521640-bba57df66f29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <p className="font-bold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            qui quis animi id nisi doloribus, quibusdam tenetur maiores sit
            nihil assumenda sed{" "}
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-[40%_auto] gap-3 border-y-2 py-8 border-gray-400">
        <div>
          <span className="font-semibold text-lg">This is Perfume News.</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
            voluptate blanditiis quasi illo numquam. Maiores libero quos
            consequatur amet accusamus voluptatum vel, minus magni voluptatibus
            deserunt facere repellat ipsa ullam?
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1702165642103-454c1b251c9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUyfHxwZXJmdW1lfGVufDB8fDB8fHww"
          alt=""
        />
      </div>

      {/* News */}
      <div className="grid grid-cols-1 gap-6 py-6">
        {Array(1)
          .fill(true)
          .map((item) => {
            return (
              <div className="space-y-4 w-full">
                <img
                  className="w-full h-[30rem] object-cover"
                  src="https://plus.unsplash.com/premium_photo-1661490025820-ce090e391627?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkzfHxwZXJmdW1lfGVufDB8fDB8fHww"
                  alt=""
                />

                <div className="font-medium text-3xl text-black">
                  Is your perfume sustainble?
                </div>
                <div className="font-medium">By Rahul Rawat:</div>
                <p className="line-clamp-4">
                  Let’s get the bad news over with first. The moment a brand
                  exists, sustainability no longer exists. Even at its most
                  responsible, a brand creates waste in some form. And if anyone
                  harps about your carbon footprint—just a friendly reminder
                  that it’s a term coined by the marketing division of British
                  Petroleum, placing the blame of environmental damage on
                  consumers and not the companies drilling for fossil fuel. And
                  if anyone harps about your carbon footprint—just a friendly
                  reminder that it’s a term coined by the marketing division of
                  British Petroleum, placing the blame of environmental damage
                  on consumers and not the companies drilling for fossil
                  fuel. blame of environmental damage on consumers and not the
                  companies drilling for fossil fuel.
                </p>
              </div>
            );
          })}
      </div>
      <div className="grid grid-cols-1 gap-6 py-6">
        {Array(1)
          .fill(true)
          .map((item) => {
            return (
              <div className="space-y-4 w-full">
                <img
                  className="w-full h-[30rem] object-cover"
                  src="https://plus.unsplash.com/premium_photo-1661490025820-ce090e391627?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkzfHxwZXJmdW1lfGVufDB8fDB8fHww"
                  alt=""
                />

                <div className="font-medium text-3xl text-black">
                  Is your perfume sustainble?
                </div>
                <div className="font-medium">By Rahul Rawat:</div>
                <p className="line-clamp-4">
                  Let’s get the bad news over with first. The moment a brand
                  exists, sustainability no longer exists. Even at its most
                  responsible, a brand creates waste in some form. And if anyone
                  harps about your carbon footprint—just a friendly reminder
                  that it’s a term coined by the marketing division of British
                  Petroleum, placing the blame of environmental damage on
                  consumers and not the companies drilling for fossil fuel. And
                  if anyone harps about your carbon footprint—just a friendly
                  reminder that it’s a term coined by the marketing division of
                  British Petroleum, placing the blame of environmental damage
                  on consumers and not the companies drilling for fossil
                  fuel. blame of environmental damage on consumers and not the
                  companies drilling for fossil fuel.
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default News;
