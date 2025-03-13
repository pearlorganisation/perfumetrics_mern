import React, { useEffect, useState } from "react";

const EmojiComponent = ({ res, handleChanges }) => {
  const [emoji, setEmoji] = useState(1); // Initialize emoji state with a default value
  useEffect(() => {
    // console.log(res[emoji - 1], "res")
    handleChanges(res[emoji - 1]?.name);
  }, [emoji]);

  return (
    <div className='flex  flex-col justify-between '>
      <div className='flex flex-wrap justify-center text-left gap-2 md:gap-4 lg:gap-6 '>
        {res.map((item, idx) => (
          <div
            key={idx}
            className="cursor-pointer grid place-items-center font-medium text-[#105955] relative"
          >
            <div
              className={`absolute w-full h-full bg-transparent ${idx + 1 === Number(emoji)
                ? "backdrop-grayscale-0"
                : "backdrop-grayscale"
                }`}
            ></div>
            <div className="text-sm md:text-2xl text-center p-2">{item.icons}</div>
            <div className='text-xs md:text-sm text-center line-clamp-1'>{item.name}</div>
          </div>
        ))}
      </div>
      <div className='w-full mx-auto  text-green-400'>
        <input
          className="  "
          min={1}
          max={res.length}
          step={1}
          type="range"
          value={emoji} // Bind value of input to emoji state
          onChange={(e) => setEmoji(Number(e.target.value))}
          name="emoji-range" // Add a unique name
          id="emoji-range" // Add a unique id
        />
      </div>
    </div>
  );
};

export default EmojiComponent;
