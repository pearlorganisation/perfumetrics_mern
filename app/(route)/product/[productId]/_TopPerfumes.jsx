import React from 'react'

const TopPerfumes = () => {
    return (
        <div className="space-y-8 py-4">
            <p className="text-4xl font-medium">Top Perfumes</p>
            <div className="grid md:grid-cols-3 gap -y-6 gap-x-4">
                {[
                    `https://s3-alpha-sig.figma.com/img/5882/19bb/8e9028504e49b8db8b3f7633b6982321?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VzSr~f1UpJ8i0diXAfxCFC0ga42fg2qeRYV-GCKWOcNxb~2R16131RLqxDYIdoIrd9wYdojRp4XbYZNpipuRewbrPLMG28AEqqXkW3v7miWRdX8aBp8~I4KlZbADQWJXyqvY2eHc~zJoJD9pyS2VC5fXcWGrz8BSYCmSBa6Yh9eEE44WfQ2ZbNMUKz1eoAVyz9fcshRuHg9syazi28GnObgOykJKqs6vTzk~ieAgbtuMfsEnpk2suD5Q0w3xP3WQ3BTDzP5YM4ovJkyorV7GfiykJUovMcEnzjyV64WravjVrHNYEB24k0ZLt~lEAKCgyrQYj~78AUqosjdeIyFRkg__`,
                    `https://s3-alpha-sig.figma.com/img/07f0/e054/a6a5a9efdd7a0d21df27661192799b66?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lbewvUU2-0LGtSWXQOU3Ll-6x2OEAyu6K5U6uk~WvgStgKjm6qCIBc7zrHadNqCofyvcqb-SqD435REnx8hvGD-W6owLoWwe3AEm8EhL9YwpyuwCKIBXqp9aU8vrTkJuKLjY0D3fn7QMAPYw1pJiwmdIGFI30jQcJxZ54kDGSP0rne7TXCjj5~KTgB3~Xyjquev024GXQdauH9jRtoXOyyy0gN61h4RZ4vsslSywqJ~hQhqd45SKeX6a3HTblJnct-pfbaYMkfSbXGlvRV8CtfzBPxp32FataSODnJUZoIWjdJRS-GNMe8I19Nt~g7U-vgMHD87gTt7H0OMM5DXp2g__`,
                    `https://s3-alpha-sig.figma.com/img/94a7/5ff4/33baf269481586deb947c3d02cda1880?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TXPV5eA7dohzpY3sbGLiiz0F22oWSOM2OYro7Lff9XTs4O7scVrqCWqTfmKApNb6aiZlt7n1zhpVmBT9ncGS3PurDxg9E6kvsrmRBZz3PyK5lfNx2SEDbJraZAAXpaXsz~ShuRCvC9o5QktKsIpeOAPsckSQdWyFzMTxkhcQwO4uvwWxiMsMLEzHWuvMndqJ0gr0Jah0SmF23sMaBaWi86twp3YzKlE7UfDkULGSi8nKHLj5QN1o8WMTxPEe-rr6pa4x8KwwP-wNjuk94Vzd5KnOM8eh-ZyNnQhMQDFuP6uGZ5MZTltx2IhG35k0-aOgdox2ZWJvPlFUznqRjyxBIQ__`,
                    `https://s3-alpha-sig.figma.com/img/8432/4764/8487715070fa0f5574bb73a463d76a0d?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mO5c8twtXJo8r~EouRTa12kamSX7QznFv7vESkP6bnVlpjtrAx-noI76KJ26VRX62RywhhFqtoZ8-YIwIIeDUfJaMcrLo7nCgXuP~yQR-qYd4msus4J1o1J1TzJ34MVCe~g5MaARqG5~1~mLkxWuYgSXicZ2KuiSyor9nVnvFK4jNcLhkI-1iz1zWoMePmvjXDbtugTJXC7ybyJReT2yo9M7ozIKeGeTQcdvxGVp3OuxpvkNwLKt~t46eoMh5VzsxfEXZ8W98TC70XjO8gr0k7Y4l44kDsC7ZZMJOuzwoGBDG5OJxdt2OIX6kZk~oDpsS52JgIpCxQK3V9yWm57yvg__`,
                    `https://s3-alpha-sig.figma.com/img/70cd/218e/9988c1991f805c8b9738a31f15ada265?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mAFhjARjQtw5qX84g27S1a7cU4TB1YNwCjmkpUuQHzki1205uwtTFPltuKitIkyAKVVCjrRZDZNEKLgUBHyAhLSxRR-J4fFoPg4zIsWf0ROTMwqZMe~iaWuvwa9DWF5VodhIEv6Jr2~PBJKCpbO9QNIbSMbIcPgP491KEuSHViqO2ttyqpPh2oym00~~D3T5tbRHuy-OwqxvWvJ3W6ya4SBjJOAfe0AJ5fjaOVHY73XL01KynQ3GCyE4L2p2Mbu9vBftF8Mks~FWWtWBxEsLKwf5mZocvIFfUiB3xC6Ptdr8n2GMk1gSiwH5fGjy3CWyFolV-kR85aTiPhYyWvd7Wg__`,
                    `https://s3-alpha-sig.figma.com/img/dd8e/cfa7/10ea7829d38d72287b660eae3058fb1f?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C0w6gEjbEt~sVCdasWnUoi2tsJjHh5lPvHuYt2eScFzDKqbxhkCKbAjB5IVZSUHVmWZfX6jl7swxnTH4CRsyfM1zxVf0nLy9hhUGOKO2ROFFFGp1k9ZIQ6J6MaiaCEYt0Xcze9-z8Gh9s5CYclrY8TAIahWJ7RU5WhaOkGRVVfYmhiMtvCEliMy0RndtWkmLvwulRLq3rIvJAVmpsLr0ZqcGzrgNEcnjzRb~fbh2i3HbUW3Zvsn~gNrpoVw2Ad8NrjUPon5SVtep8oEFaoakgQHYbc3kPtZecbX4eX0Go8fQxK2QhteeAE3tJWENAK2S1fqxpex6TTgNp6PIlFNB3g__`,
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

export default TopPerfumes