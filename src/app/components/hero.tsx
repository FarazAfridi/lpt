import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex items-center w-full min-h-[120vh] overflow-hidden relative">
      <Image
        className="absolute w-full z-[-1] object-cover h-full md:object-right"
        src="/landing.webp"
        alt="hero image"
        width={1440}
        height={960}
      />
      <div className="flex flex-col ml-[100px] mb-[150px] z-10 w-full max-w-[400px] items-center gap-5 mx-[40px] md:ml-auto md:mb-[350px] md:w-[270px]">
        <p className="text-white text-opacity-70 text-3xl text-center md:text-xl md:text-opacity-100 playfair-display">
          Azami&apos;s
        </p>
        <Image
          className="w-[150px] h-[150px]"
          src="/logo.png"
          alt="hero image"
          width={250}
          height={250}
        />
        <p className="text-white text-opacity-70 text-3xl text-center md:text-xl md:text-opacity-100 w-[270px] playfair-display">
          In every moment there is a secret world waiting for you.
        </p>
        <button className="bg-white bg-opacity-40 w-[200px] h-[50px] rounded-md z-10 md:hidden text-[#FFD15A] border-[#A47701] border-[1px] alata backdrop-blur-sm">
          Coming Soon
        </button>
        {/* <div className="relative flex justify-center items-center">
          <div className="btn-gradient w-[200px] h-[50px] absolute z-[-1] rounded-md"></div>
        <button className="bg-white bg-opacity-40 w-[198px] h-[48px] rounded-md       z-10">Coming Soon</button>
       </div> */}
      </div>
      <div className="flex w-full justify-center absolute bottom-[50px]">
      <button className="bg-white bg-opacity-40 w-[200px] h-[50px] rounded-md z-10 text-[#FFD15A] border-[#A47701] border-[1px] alata backdrop-blur-sm hidden md:block">
        Coming Soon
      </button>
      </div>
    </div>
  );
}
