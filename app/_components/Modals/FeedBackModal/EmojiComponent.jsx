import React, { useState } from 'react';

const EmojiComponent = ({ res }) => {
  const [emoji, setEmoji] = useState(1); // Initialize emoji state with a default value

  return (
    <div className='flex  flex-col justify-between '>
      <div className='flex gap-6 mx-2 '>
        {res.map((item, idx) => (
          <div key={idx} className="cursor-pointer grid place-items-center font-medium text-[#105955] relative">
            <div
              className={`absolute w-full h-full bg-transparent ${idx + 1 === Number(emoji) ? "backdrop-grayscale-0" : "backdrop-grayscale"
                }`}
            ></div>
            <div className="text-2xl text-center">{item.icons}</div>
            <div className='text-sm text-center'>{item.name}</div>
          </div>
        ))}
      </div>
      <div className='w-[340px] mx-2 text-green-400'>
        <input
          className="w-full  "
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
