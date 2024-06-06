import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#F4F4F4] flex items-center h-[50px] w-full px-[40px] mt-[50px] lg:flex-col lg:h-[120px] lg:gap-y-5 lg:bg-white lg:px-0">
      <div className="flex items-center h-full gap-6 w-full lg:h-[50px] max-w-[500px] lg:max-w-[unset] lg:justify-between lg:bg-[#F4F4F4] lg:px-[40px]">
        <div className="flex gap-x-6 sm:gap-x-0 items-center">
        <span className="sm:text-[14px]">LOVE, POWER, AND TREASURE</span>
        <span className="text-[#4CA1E4] alata sm:text-[14px] font-semibold">
          COMING<br></br> SOON
        </span>
        </div>
        {/* <div className="flex mt-auto w-[50px] mr-4 ml-8 text-blue-400 font-bold">
        </div> */}

        <div className="flex relative h-[50px] w-[105px]">
          <Image
            className="absolute bottom-0 h-[70px] w-[80px] left-[30px]"
            src={"/Book_Cover_horizontal.png"}
            width={80}
            height={60}
            alt=""
          />
          <Image
            className="z-10 h-[90px] w-[120px] absolute bottom-0"
            src={"/Book_Cover_straight.png"}
            width={120}
            height={100}
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-between w-full lg:h-[50px] lg:bg-[#F4F4F4] lg:px-[40px] items-center">
        <p className="alata text-[#535353] sm:text-[14px]">About the Author</p>
        <div className="flex items-center gap-7">
        <div className="flex items-center gap-2">
          <Image
            className="w-[21px] h-[17px] sm:w-[16px] sm:h-[11px]"
            src={"/subscribe.png"}
            width={64}
            height={64}
            alt=""
          />
          <p className="text-[#535353] alata sm:text-[14px]">Subscribe</p>
        </div>
        <div className="flex gap-7">
          <Image
            className="w-[20px] h-[20px] sm:w-[16px] sm:h-[16px]"
            src={"/youtube.png"}
            width={64}
            height={64}
            alt=""
          />
          <Image
            className="w-[20px] h-[20px] sm:w-[16px] sm:h-[16px]"
            src={"/tiktok.png"}
            width={64}
            height={64}
            alt=""
          />
          <Image
            className="w-[20px] h-[20px] sm:w-[16px] sm:h-[16px]"
            src={"/twitter.png"}
            width={64}
            height={64}
            alt=""
          />
          <Image
            className="w-[20px] h-[20px] sm:w-[16px] sm:h-[16px]"
            src={"/instagram.png"}
            width={64}
            height={64}
            alt=""
          />
        </div>
        </div>
      </div>
    </div>
  );
}
