/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fZ9i6MMIMOQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
const FragramRatings = () => {
    return (
        <div>
            <div className="flex flex-col items-center space-y-8">
                <div className="grid place-items-center relative w-full">
                    <h1 className="text-3xl font-medium px-8 py-3 bg-white z-40">
                        Fragram Ratings
                    </h1>
                    <div className="absolute w-full h-[2px] bg-slate-500"></div>
                </div>
                <div className="grid grid-cols-3 gap-8">
                    <div className="flex flex-col items-center">
                        <div className="relative">
                            <svg className="w-32 h-32">
                                <circle
                                    className="text-gray-300"
                                    strokeWidth="12"
                                    stroke="currentColor"
                                    fill="transparent"
                                    r="48"
                                    cx="64"
                                    cy="64"
                                />
                                <circle
                                    className="text-green-500"
                                    strokeWidth="12"
                                    strokeDasharray="301.6"
                                    strokeDashoffset="75.4"
                                    strokeLinecap="round"
                                    stroke="currentColor"
                                    fill="transparent"
                                    r="48"
                                    cx="64"
                                    cy="64"
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">7.5/10</div>
                        </div>
                        <span className="mt-2 font-semibold">Longevity</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="relative">
                            <svg className="w-32 h-32">
                                <circle
                                    className="text-gray-300"
                                    strokeWidth="12"
                                    stroke="currentColor"
                                    fill="transparent"
                                    r="48"
                                    cx="64"
                                    cy="64"
                                />
                                <circle
                                    className="text-orange-500"
                                    strokeWidth="12"
                                    strokeDasharray="301.6"
                                    strokeDashoffset="60.3"
                                    strokeLinecap="round"
                                    stroke="currentColor"
                                    fill="transparent"
                                    r="48"
                                    cx="64"
                                    cy="64"
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">8/10</div>
                        </div>
                        <span className="mt-2 font-semibold">Sillage</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="relative">
                            <svg className="w-32 h-32">
                                <circle
                                    className="text-gray-300"
                                    strokeWidth="12"
                                    stroke="currentColor"
                                    fill="transparent"
                                    r="48"
                                    cx="64"
                                    cy="64"
                                />
                                <circle
                                    className="text-pink-500"
                                    strokeWidth="12"
                                    strokeDasharray="301.6"
                                    strokeDashoffset="120.6"
                                    strokeLinecap="round"
                                    stroke="currentColor"
                                    fill="transparent"
                                    r="48"
                                    cx="64"
                                    cy="64"
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">6/10</div>
                        </div>
                        <span className="mt-2 font-semibold">Pricing</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="relative">
                            <svg className="w-32 h-32">
                                <circle
                                    className="text-gray-300"
                                    strokeWidth="12"
                                    stroke="currentColor"
                                    fill="transparent"
                                    r="48"
                                    cx="64"
                                    cy="64"
                                />
                                <circle
                                    className="text-red-500"
                                    strokeWidth="12"
                                    strokeDasharray="301.6"
                                    strokeDashoffset="0"
                                    strokeLinecap="round"
                                    stroke="currentColor"
                                    fill="transparent"
                                    r="48"
                                    cx="64"
                                    cy="64"
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                                <UserIcon className="w-8 h-8" />
                            </div>
                        </div>
                        <span className="mt-2 font-semibold">Gender</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="relative">
                            <svg className="w-32 h-32">
                                <circle
                                    className="text-gray-300"
                                    strokeWidth="12"
                                    stroke="currentColor"
                                    fill="transparent"
                                    r="48"
                                    cx="64"
                                    cy="64"
                                />
                                <circle
                                    className="text-yellow-500"
                                    strokeWidth="12"
                                    strokeDasharray="301.6"
                                    strokeDashoffset="45.2"
                                    strokeLinecap="round"
                                    stroke="currentColor"
                                    fill="transparent"
                                    r="48"
                                    cx="64"
                                    cy="64"
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">8.5/10</div>
                        </div>
                        <span className="mt-2 font-semibold">Compliment</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="relative">
                            <svg className="w-32 h-32">
                                <circle
                                    className="text-gray-300"
                                    strokeWidth="12"
                                    stroke="currentColor"
                                    fill="transparent"
                                    r="48"
                                    cx="64"
                                    cy="64"
                                />
                                <circle
                                    className="text-blue-500"
                                    strokeWidth="12"
                                    strokeDasharray="301.6"
                                    strokeDashoffset="30.2"
                                    strokeLinecap="round"
                                    stroke="currentColor"
                                    fill="transparent"
                                    r="48"
                                    cx="64"
                                    cy="64"
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">9/10</div>
                        </div>
                        <span className="mt-2 font-semibold">Overall</span>
                    </div>
                </div>
                <button className="px-6 py-2 mt-8 text-lg font-semibold text-white bg-pink-500 rounded-md">Rate Fragram</button>
            </div>
            <div className="space-y-4">
                <div className="grid place-items-center relative w-full">
                    <h1 className="text-3xl font-medium px-8 py-3 bg-white z-40">
                        Fragrams
                    </h1>
                    <div className="absolute w-full h-[2px] bg-slate-500"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {
                        Array.from({ length: 6 }).map(item => {
                            return <div class="w-full bg-white shadowE cursor-pointer rounded-lg  overflow-hidden">
                                <div class="flex">
                                    <div class="w-1/4">
                                        <img src="https://m.media-amazon.com/images/I/815PK4QNjlL._AC_UF1000,1000_QL80_.jpg" alt="Image" class="object-cover w-full h-full" />
                                    </div>
                                    <div class="w-3/4 p-4">
                                        <div class="flex justify-between items-center">
                                            <div className="flex gap-3">
                                                <h3 class="text-lg font-semibold text-gray-900">Why Are Blue Perfumes so... Blue?</h3>
                                                <div className="size-5 rounded-full bg-green-500 text-xs grid place-items-center">10</div>
                                            </div>

                                        </div>
                                        <p class="text-sm text-gray-600">by <span class="text-gray-800">Elena Vosnaki</span></p>
                                        <p class="text-xs text-gray-500 mt-2">08/02/21 16:29</p>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

function UserIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    )
}


function XIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}

export default FragramRatings