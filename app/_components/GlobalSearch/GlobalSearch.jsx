import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

const GlobalSearch = () => {
    const [globalSearchData, setGlobalSearchData] = useState([]);
    const inputRef = useRef();
    const boxRef = useRef();
    const router = useRouter();
    const [toggleGlobalSearch, setToggleGlobalSearch] = useState(false);

    const handleSearch = useDebouncedCallback((query) => {
        if (query !== "") {
            axios
                .get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/global-search?query=${query}`)
                .then((res) => {
                    setGlobalSearchData(res?.data?.globalData || []);
                    setToggleGlobalSearch(res?.data?.globalData?.length > 0 ? true : false);
                })
                .catch((err) => {
                    console.error(err);
                });
        } else {
            setGlobalSearchData([]); // clear on empty
        }
    }, 500);

    useEffect(() => {

        function handleClickOutside(event) {
            if (boxRef.current && !boxRef.current.contains(event.target)) {
                setToggleGlobalSearch(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [])



    return (
        <div className="relative">
            <div className="max-w-sm flex justify-start items-center">
                <input
                    type="text"
                    placeholder="Global Search..."
                    ref={inputRef}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full pl-4 py-2 text-gray-500 bg-transparent outline-none border focus:border-pink-500 shadow-sm rounded-lg"
                />
            </div>
            {globalSearchData && toggleGlobalSearch && globalSearchData.length > 0 && (
                <div ref={boxRef} className="absolute rounded-b-md size-56 overflow-y-scroll  z-10 w-full bg-white border-2 ">
                    {globalSearchData.map((perfumeData, idx) => (
                        <div onClick={() => { router.push(`product/${perfumeData.slug}`) }} key={idx} className='grid grid-cols-[30%_auto] mt-1  p-2 hover:text-pink-500 gap-2 border-b-2 border-slate-400'>
                            <div className='h-12 w-12  flex justify-center items-center '>
                                <img src={perfumeData.banner} alt={perfumeData.perfume} className='w-full h-full' />

                            </div>

                            <p className='text-sm line-clamp-3 '>{perfumeData.perfume || "Unnamed Perfume"}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default GlobalSearch;