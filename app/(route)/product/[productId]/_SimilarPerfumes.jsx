import React from 'react'

const SimilarPerfumes = () => {
    return (
        <div className="space-y-8 py-4">
            <p className="text-4xl font-medium">Similar Perfumes</p>
            <div className="grid md:grid-cols-3 gap -y-6 gap-x-4 ">
                {[
                    `https://s3-alpha-sig.figma.com/img/8ef0/74d9/4afe0d6e8ba95cb7ba8558ee0cbce045?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gw1j2DYqvyvN83pTaunDMVSQp5nMZmuTKP-Ta3yF5YG-HFP9CTFYXAkuTrmyHpY15fZu0v2vAyHpLhSt9S62BiJpav4gATeomPu~jRuovvmiINpNaDjXJGD-8RvccQcZLp9WybNHuNbFN7rhP4tfJkPQ8db~PioezS0cSmz8OoRDbrhuz1PstqSlA~dLInmKknjpeLIHFax2WN7gcy7~HEsLMN9rG8bwKONQ3YJPdS8GPrR7StHWmGDCo2~SAbf~29an6cOVSO24qaYj7LzDZwgDLlipP-AlJNQtpf3yYKZFMm4SxmIYY3D4CNOKpQunUSMDDtVQARkJkVoCAslgjg__`,
                    `https://s3-alpha-sig.figma.com/img/0265/7dcf/2f6a3e2164524c1553a3168ca91bd205?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=klC7leClHwlDuhpiKy~STmhf3OqtiCqh6GGjPEI2bKvfxZ8oM6GpZkb4EXKDFMLeeR8KzfAiDE3TTM1rjEydCFEjmxPz~fBSgFOLUTKIN4705g5Ryc21nsTjlV2L4kLzjIdL6ozvlSlKk~FAU-aYsolg9zdv5ZO5N2Wid35lXqVz1C0Ka3mHQbZTx~k~wz2JvoA4osj4oIXaexID2Cme6JIpZsXZRUEX4djXZT-pJH2SFYqI-H3smGMF8xI2bbfjv5DlFtPIQnoDDJbEDrgu7Mxu964FzoKk0nzBZeWXwbQR4pK4OqcUalmAlpIM9rPxcBEkaMJH5z4lkX6KaZKcfw__`,
                    `https://s3-alpha-sig.figma.com/img/c1c7/136e/70fc5ae7943eb82ac75af7ed4acd2761?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DBOCL9hnIw5~c4sld516IdvaH8ulOiUhy8CbwkBZDdU87bxJdOJdHJioQOiWtFWj91nE8hKnNvFQ7WCwsA85NyU~20VXKozDw3VTp3~PXbrRrK0fdckxIduRdUvXgrynuvw~h0AUwjES7GBqr605NHKvpHOhFXJ6R7fqKdz-oTUtc-ZKP~vqc7YaWmV03oN41zpMsRlOpXqDFPjsI4xbYGTt-yfTENXanbgQkS3O8UZBTcSPJpf933bKKEFArrhqSWdVAWjOkaCZEXCgC7LaMJgew1I7~7VKPesaDdiPglRLzplCTmgzJdnONtoA2zt6CFllAIDZOJIWIBL55lm0qA__`,
                    `https://s3-alpha-sig.figma.com/img/6886/d215/1dac7fa238426ef77befbd86b2a33b0e?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hvRfXLMPTOHX~R2TOypiUfltBE-CXfotBfRFZTm9uoyo0lt2arBN1w-3b7ezdd6BYnQ0a8i7WounEkvsMfYkVeEbnixiv9bIknkv~KhY7cxCpRsrajnsz-4dhAsHqX0gqEwPBosAQ-Idtg6OyJdVIRuHa78xc-PC~SimX0n3cjXdheFucFniekCBYiEJlAseY7hNuW8g3UAxgbIg5AByZVdh0SsIyv6S3qNGbX2ddeUNZwXVLSx-lxLFItJ4f6Alwgqkc7oKtBPSa-WcUO1XmYfKdhb1r6nALpfioz1~KO4cNmGpUNMw9uFrW90uV-s5dpIki3nRfZ7b24w2Mdx4cg__`,
                    `https://s3-alpha-sig.figma.com/img/1f7f/b724/948b044e16e6cae7ea7ca7f193ae33c1?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ffTiFZpCxo~7sXu5cWzzfZaZsTuHH1D3kqW8zqz9Do-VmN9pPDbnQi9DbewNGzxgTG1wA7C0UBETmfmWvuutQT6b~OxeZ6T9Jl99TCT8t2pX4Ijr5Pcj~-mRJ5oWuoj7MVpEAirMWks70aL14aka2jXiq9unUUzzWgycjcDVpQtCi3cUE7clxEOvDTEE7LXJrTJz6l1S~517Fhn7loyQi0wZiVO5em3KNnQZ5cf5BQt3CSsq7CbWr9wF-QpwZc0Ozic3G26a6aOayNHNK0nRevmKKFVgJOaDaTzpIJv7iWM9iaKnLIcPvP0Vor0gyv82WZgSpFyXFPvxaECZwp1avw__`,
                    `https://s3-alpha-sig.figma.com/img/9bc8/06b6/3efb054f334fb5f151c692fb907c19cc?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=apfZssbvPRgXuxnAuxZhxBWRMSspX4L7MuDoRKOwsKzrs0tHjTrjBrhV5Kf1bAqOpf9xBqkqJbhzLlzfLM~w8Vt9RU85nygE6vwYZ5iwRc~B~VfoGEg7AYh8xz3HavXs06RvicgRmldYh9SNbeq7QhBJbPU7EI6S-loRA6rbZwGg4ivIaD~fjj4zyIe29Na7gnYO81--o8uiqhWUBQaL7h~ACoo1yjs4OeWvsm4qaGKcLd4oDaRHdeR6Eo42bQylKyHB7UG1I56kfv2Reej~hxUFk02PsRdjcI7v2h3Vr3J1sn-B68ZidxgoLOj7sQgUkInIc52I1ZPND8padMcYkA__`,
                ].map((item) => {
                    return (
                        <div className="space-y-1 p-2  hover:cursor-pointer ">
                            <img
                                className="h-[22rem] w-full mb-2 cardShadow p-4"
                                src={item}
                                alt=""
                            />
                            <span className="font-medium text-xl">
                                Giorgio Armani{" "}
                            </span>
                            <div className="text-yellow-500 flex justify-start items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 inline-block"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.691h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.958c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.838-.197-1.54-1.118l1.287-3.958a1 1 0 00-.364-1.118L2.535 9.386c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.691l1.286-3.958z" />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 inline-block"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.691h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.958c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.838-.197-1.54-1.118l1.287-3.958a1 1 0 00-.364-1.118L2.535 9.386c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.691l1.286-3.958z" />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 inline-block"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.691h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.958c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.838-.197-1.54-1.118l1.287-3.958a1 1 0 00-.364-1.118L2.535 9.386c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.691l1.286-3.958z" />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 inline-block"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.691h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.958c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.838-.197-1.54-1.118l1.287-3.958a1 1 0 00-.364-1.118L2.535 9.386c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.691l1.286-3.958z" />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 inline-block"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.691h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.958c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.838-.197-1.54-1.118l1.287-3.958a1 1 0 00-.364-1.118L2.535 9.386c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.691l1.286-3.958z" />
                                </svg>
                                <span className="text-black translate-y-[0.10rem]">
                                    4.7
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="grid place-items-center">
                <button className="px-8 py-2 font-medium border rounded-md">
                    SHOP MORE
                </button>
            </div>
        </div>
    )
}

export default SimilarPerfumes