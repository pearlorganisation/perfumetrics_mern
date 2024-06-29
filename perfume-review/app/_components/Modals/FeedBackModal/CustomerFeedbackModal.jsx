"use client";

import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { GiFrozenOrb } from "react-icons/gi";
import { BiLogoSpringBoot } from "react-icons/bi";
import EmojiComponent from './EmojiComponent';
import Image from 'next/image';

const CustomerFeedbackModal = forwardRef((props, ref) => {
  const modalRef = useRef();
  const [emoji, setEmoji] = useState(1);
  const [selected, setSelected] = useState(1)
  const [selectedIcon, setSelectedIcon] = useState(1)

  useImperativeHandle(ref, () => ({
    open: () => {
      modalRef.current.showModal();
    },
    close: () => {
      modalRef.current.close();
    }
  }));

  const emojiData = [
    {
      img: "😖",
      text: "Worst"
    },
    {
      img: "😐",
      text: "Not Good"
    },
    {
      img: "😊",
      text: "Fine"
    },
    {
      img: "😀",
      text: "Good"
    },
    ,
    {
      img: "😍",
      text: "Very Good"
    }
  ];

  return (
    <dialog ref={modalRef}>
      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="overflow-y-auto  flex overflow-x-hidden fixed top-0 right-0 left-0 z-80 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-4xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <div className="text-2xl text-center font-semibold ">
                Give Your FeedBack
              </div>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => ref.current.close()}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <form action="#" className='p-10  grid place-items-center'>
              <div className='w-89  flex items-center justify-center'>
                <div className='checkBoxes flex gap-8 p-4 justify-between '>

                  {
                    [`I have it`, `I had it`, `I want it`].map((item, ind) => {
                      return <div
                        onClick={() => {
                          setSelected(ind + 1)
                        }}
                        className='flex justify-start items-center gap-5 cursor-pointer'>
                        <div className={`size-4  ${ind + 1 === selected ? 'bg-[#105955]' : 'bg-[#7B7A7A]'}   rounded-full`}></div> <span>{item}</span>
                      </div>
                    })
                  }
                </div>
              </div>

              <div className='grid grid-cols-2'>
                <div>
                  <legend className='text-left text-[#2071B2] m-4 text-md font-bold'>Longitivity</legend>
                  <EmojiComponent res={emojiData} />
                </div>

                <div>
                  <legend className='text-left text-[#2071B2] m-4 text-md font-bold'>Sillage</legend>
                  <EmojiComponent res={emojiData} />
                </div>

              </div>


              <div className='grid grid-cols-2'>
                <div>
                  <legend className='text-left text-[#2071B2] m-4 text-md font-bold'>PRICE VALUE</legend>
                  <EmojiComponent res={emojiData} />
                </div>

                <div>
                  <legend className='text-left text-[#2071B2] m-4 text-md font-bold'>GENDER</legend>
                  <EmojiComponent res={emojiData} />
                </div>
              </div>



              <div className="grid grid-cols-6 gap-5">
                {[
                  {
                    name: "Winter",
                    icons: "/snow.svg",
                    indi: 30,
                  },
                  {
                    name: "Spring",
                    icons: "/spring.svg",
                    indi: 20,
                  },
                  {
                    name: "Summer",
                    icons: "/summer.svg",
                    indi: 60,
                  },
                  {
                    name: "Fall",
                    icons: "/fall.svg",
                    indi: 55,
                  },
                  {
                    name: "Day",
                    icons: "/day.svg",
                    indi: 45,
                  },
                  {
                    name: "Night",
                    icons: "/night.svg",
                    indi: 45,
                  },
                ]?.map((item, idx) => {
                  return (
                    <div
                      onClick={() => {
                        setSelectedIcon(idx + 1)
                      }}
                      className="cursor-pointer font-medium text-[#105955] relative grid place-items-center"
                    >
                      <div className={`absolute w-full h-full bg-transparent ${selectedIcon === idx + 1 ? 'backdrop-grayscale-0' : 'backdrop-grayscale'}  `}></div>
                      <Image
                        src={item?.icons}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "60%", height: "auto" }}
                        alt="img"
                      />
                      <div className="text-sm font-medium"> {item?.name}</div>

                    </div>
                  );
                })}
              </div>
            </form>

            <div className="flex items-center justify-center">
              <button
                data-modal-hide="default-modal"
                type="button"
                className="text-white  bg-blue-700 hover:bg-blue-800 my-4 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
});

export default CustomerFeedbackModal;
