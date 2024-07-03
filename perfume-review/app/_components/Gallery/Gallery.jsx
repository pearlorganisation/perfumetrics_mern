import React from "react";

const galleryData = [
  {
    src: "https://s3-alpha-sig.figma.com/img/ff86/47d6/08ccd2dae872b41b27fe7edac3579123?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZYB5S1aLQpQBShotsfhNN9NVCLmc6BVXlSHsCjfP24TY~kxX9egRsjNz1pw6rbIylWA~AFc85xC0b~4JRFzLy23igaEyXR0mTzwLGZr0RJ13omi3NyVpoXYelwf42UgAVnrVREkWDoXy4BbkuDADCwB2gz0T3xZWKIqN2jzm8OaCZhL4EU9kBDjTeK9rhHp1WvZEUzNkte38DoiVz0Is2oJdCbmKRirCaSe4VzBRqv~oVe3tZpfIeb4hDW4EvgAra2m9Td3VUUku07QpTO-GzORGSU6tLmcGPE0b9~WQyu1~sfDreX7RfGvGPgBi0N-3mPDg~EBVqCP8KZhjviHBXg__",
    alt: "Image 1",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/b6bd/04db/51b7d45d2461ad8c79f5f09ca5e608d5?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JnM6RmX2j9RLNXD9I2h0lzC8eeA~kG0LWD0GoifqC9J~RMbNJZs9mtb6fEbj~Twh7RNZf5c4J40zPwQYvNcUq-avwZnR0UeEO566XbR4~5I2iZwPqYNAseSQEnHPRbu3MBCSib89geMxWPiSU8vDR6pqwvDVKxrT-DYfWAfsSsCOXJkPMMRLTLl~w8FJKNSrmS6h6JyC8cZxYQLU6x3pAQIIB9JNTdRWGijiP0X2gNcjTtPURxkyQmd9RZnb-qXutTOXFgGwTEJn~YJUIYVTAjSGWg70hagVr6RkSzfQe0RFcVv4k6YkrTI-Js0wRLGMsmew7X3lTSAcKGl9pB6DHA__",
    alt: "Image 2",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/db30/d82e/dbd7c3f934bb55b4c6c9a206297c1ba8?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OEAKxN0iI9DqMI0zyIvKuEIDUx4FOnn1ut1HAxXLtA-ZlXWgAmJHWkqJD26JRecoYOCN5CwBKSQljbHllfRiwd44r~IHVs4IITIpS59eXPjqNliL5AufkGb0GZpV8kASH3htIu1iI2XpGrcWQGpMwHawFndxjdxORvu9jqbZrwdRuZv8sU2CfvztAG5e4zB9SNb0TXHRepupls4kZlqWLDaM68C9POCFgOsywLZkvpCbKoHpCONO~sa3vOHu2ejjhEWd6CYrvpq1wbB0h-Am4B-87l0d1pxg18g4iyfDww20dlDVh5pmPAN88LbBwqm-HVbpth~iR70OOxoaNIPOOQ__",
    alt: "Image 3",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/f8f1/29b6/59a2e0f7983ccddeabe76d7e4e02c4d9?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oQNzsHeymRVNw4pYyKSRHERmUJzRiSv3CUfyNGtEYAt6OnIqwrzB0zGo3n-LzcWWb~ldskA0I-fIo2KrlpD-E8urXcnOqaC8b-PbmMzQ3qf6BmarbxdyBZsNc28kuiEMeMFC7asAn1JKZGpqxvF7EyeCYzldQ93txlIBFbZBHU7BOiBQK~PwjKgjD1lYuTAA6AwcGRFEZqtGmBl5S0iAdwePnrU7ZhNw3~6PG7RGnsVKvb4fL-VoX4H8rgTxNFEweKu3XtlXj2FPWGBSRIgiB1LktBAjMGhm8vMhtTp03HRE23~scPkDrBTGBUKgfASkigvjmeFVq34owieBWHk4YQ__",
    alt: "Image 4",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/be7a/9412/98a72690cac484bc385e95d7fa7ec484?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mlt1zN6VlQR8ETbOOaefJWT4lfH14SW0iGuGt0yfhq1kDy4GBKPb~TZ8Yn0jtnhX1Yqu7J7vogW2RH6MG-IcSpCZ5xqmfheTHh8Q05GF8ge7zfbSz7ExSMQT6kPwy64kckWXfrQnaRHICuOZZm22kaurGDLgyVKaO6xs5A8XqluXmAXPRSzVu-mkfyRQR6u3TFZkexq2DBhjL0pVkA687aOzUV4LA99n7q~sor~g8OnuyvnKvIBK9TF~BiLIrbWCtZSunzX0cwyXl42su9BW0mlgr52B39sjXJg0-fsOOmhD4GLtJqEpiABhotddp74qdcrHdNedV9ytdxC9BEtbhw__",
    alt: "Image 5",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/3318/eadf/ce8967fae6c814f0a42f10fcedce792e?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T667275sSwTXdbRiMHek9AP6PrMHDiCWLlInH4Ss2Fr-5lExe4Y0Tg2OpJ9TUYcKoNJKaiAjmToEsxl63kHS9G-8bx8sHccqnsnu2PPU8VriS03S9DxgHB05cO2qsJYJAOLMWv83hJQxbmXpjWI1WvJbJujmDF2GVWTag-QQEBrAzTf7YNPZA1vZ5c9TzQNYctMFg~-SGZdWMlMfch0yfLY1MqIpoF1jEapk7Bwewd7g3D-QWLHJ0pIy21onQulSq0ptEE8CZW7vFkT2LqIEYlc8r5~zviUeO8U1vN5leQqjxPep4nMY2PXIKf~KaoHOe8hZYdxOVCbpPSBOWlewMw__",
    alt: "Image 6",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/1da3/5472/b90446355d430ddcec2d257430f1b96f?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iymed0B~kkzevOayhCLfNmBxfCVyKe-tucq5n07kxu62RQtrlNwFJJ7aGv~G3XCWgvQ7jiCY4htMMyuPL7kR5EYvkQAry4iZnzaG~jAkfjb~aDmWYh7zEzqaoSm7SPws2EKH4JkJyIcmMP-rfhCsnTDiesg5lSlXFROGrvYUIHpwcKVzqDiKmqDhas3k-x8nDiUqLafsqTJhPzwEpZ13Zri~fl0qcnorzEhGmeczIRMIE8~XwU-PQdJB34HCRdtRFc7vFmYShByAXb4SKid2sus2HT643clH1ysJy7uKhj-n8PvdMwiMkPGgUtIio1qkUMvLKuSkp-vnX8VjAVQwJg__",
    alt: "Image 7",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/8a54/34d8/2589e320146b65f1ca55055a4c46ac26?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZEhr0asSnAWJKxXfs4kRVGQzCRPi-7PKlgsGgDmy6XO35Wz4t5QHzlQ1PnsszvNlqMYQP9WohRDasotGIL67e2NiwM4aHosWMCeTo5rvVvyoNapNh7N-lPzGBfK0bWwknkhvRBFSiefbQCyv8qQTIb1MxjZ8dwhxbuTH2gI3ApQdvcH-WoQRXyISwmc1U2G7tgVtduPHM6~XQPAlXMuVpwSteK5reCYO9fN6OPDWWof~vlc5uVpI6zEZJGInqvmPzaUl9XMNNhQJb23sYnqFXD0LhFA58~55FPqrTxVO2CAS8hpL~BL0l7h6a5wPHSiU-9C4zBknj3p4AABvpZ7gZw__",
    alt: "Image 8",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/55ec/d838/d8afbf6a23a3f68a126df3eb09e175c4?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aDd52g8BeWd1~NfbFQkBbHfKDRWEsWDHfD~E9q9ORZMKspPYBjZsg-jJYwfTosbwVIKllQSVTyZhmaGigtQ6rRreYRFSiZEe0NlQPuAabPFfmHNJKlAqCLMqTUGJuQ4uxyZ6JAgQ6jAi30hOmEenNP19lO5aNYmfBwMzaPyyfhQpvSlu21WX8Kx7dddyOPaM5CbEaiWRGChZI01DgJplmJOVjbNkNm9kV9ePU7h~EIHe~Y7doFgObR5JAXRzyX195vIpphpcVlKb~E9baBr0EVUXjn9ZtEladLJ2UFDtY7F9O9~4Nz7FGgUemhZaOTAScxvy77iBv81UFtDKXvCmSw__",
    alt: "Image 9",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/db30/d82e/dbd7c3f934bb55b4c6c9a206297c1ba8?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OEAKxN0iI9DqMI0zyIvKuEIDUx4FOnn1ut1HAxXLtA-ZlXWgAmJHWkqJD26JRecoYOCN5CwBKSQljbHllfRiwd44r~IHVs4IITIpS59eXPjqNliL5AufkGb0GZpV8kASH3htIu1iI2XpGrcWQGpMwHawFndxjdxORvu9jqbZrwdRuZv8sU2CfvztAG5e4zB9SNb0TXHRepupls4kZlqWLDaM68C9POCFgOsywLZkvpCbKoHpCONO~sa3vOHu2ejjhEWd6CYrvpq1wbB0h-Am4B-87l0d1pxg18g4iyfDww20dlDVh5pmPAN88LbBwqm-HVbpth~iR70OOxoaNIPOOQ__",
    alt: "Image 10",
  },
];

const Gallery = () => {
  return (
    <>
      <div className="px-20 ">
        <div className="p-5">
          <div>
            <h1 className="text-[#F8306C] text-center text-3xl font-medium">
              Gallery
            </h1>
          </div>

          <div className="text-center">
            <div className="inline-block relative">
              <h1 className="text-3xl font-medium pb-5">Perfumetrics Photo</h1>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-[#F8306C] "></div>
            </div>
          </div>
        </div>

        <ul className="flex flex-wrap">
          {galleryData.map((image, index) => (
            <li
              key={index}
              className=" h-[100px] sm:h-[25vh] xl:h-[200px]  flex-grow portrait-height short-screen-height"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="max-h-full min-w-full object-cover align-bottom img-small-screen"
                loading="lazy"
              />
            </li>
          ))}
          <li className="flex-grow-[0]"></li>
        </ul>
      </div>
    </>
  );
};

export default Gallery;
