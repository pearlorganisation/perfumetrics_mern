import { useState } from "react";
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export default function Pagination({ totalPages }) {

    // Total number of pages
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter(); // For client-side navigation
    const currentPage = Number(searchParams.get('page')) || 1;

    const createPageURL = (pageNumber) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            router.push(createPageURL(currentPage - 1));
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            router.push(createPageURL(currentPage + 1));
        }
    };

    return (
        <div className="max-w-screen-xl mx-auto mt-12  text-gray-600 md:px-8">
            <div className="flex items-center justify-between text-sm text-gray-600 font-medium">
                {/* Previous Button */}
                <button
                    onClick={handlePrevious}
                    className={`md:px-4 px-2 py-1 md:py-2 border border-pink-500 rounded-lg duration-150 hover:bg-pink-50 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                {/* Page indicator */}
                <div className="text-xs md:text-base">
                    Page {currentPage} of {totalPages}
                </div>

                {/* Next Button */}
                <button
                    onClick={handleNext}
                    className={`md:px-4 px-2 py-1 md:py-2 border border-pink-500 rounded-lg duration-150 hover:bg-pink-50 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>



        </div>
    );
}
