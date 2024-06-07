import Image from "next/image";

export default function Quote() {
  return (
    <div className="w-full flex justify-center">
    <div className="w-[calc(100% - 80px)] h-[800px] sm:h-[300px] mx-[40px] relative mt-[50px] lg:h-[550px] flex justify-center max-w-[1600px]">
      <div className="flex flex-col mt-[30px] mx-[50px] items-center sm:mt-[10px]">
      <Image className="md:w-[75px] md:h-[75px] sm:w-[50px] sm:h-[50px]" src={"/logo.png"} alt="logo" width={100} height={100}/>
      <p className="z-10 text-[36px] text-center md:text-[20px] sm:text-[14px] playfair-display">“Listen with more than your ears; Listen with your eyes, nose and hands, and always listen with your heart.”</p>
      <p className="mt-[30px] text-[24px] md:text-[14px] sm:mt-[10px] playfair-display">Maloos the Cow</p>
      </div>
      <Image className="object-cover md:object-right z-[-1]" src={"/cowandgirl.webp"} alt="cow and girl" fill/>
    </div>
    </div>
  )
}