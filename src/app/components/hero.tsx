import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex w-full justify-center  max-h-[1200px]">
    <div className="flex items-center w-full min-h-[900px] overflow-hidden relative max-w-[1600px] max-h-[1000px]">
      <Image
        className="absolute w-full z-[-1] object-cover h-full md:object-left md:hidden  max-h-[1200px]"
        src="/background2.png"
        alt="hero image"
        width={1440}
        height={960}
      />
      <Image
        className="absolute z-[5] girl right-0 object-contain bottom-16
        md:hidden"
        src="/girl-min2.png"
        alt="girl image"
        width={1240}
        height={960}
      />
            <Image
        className="absolute w-full z-[-1] object-cover h-full md:object-right md:block hidden"
        src="/landing.webp"
        alt="landing image"
        width={1240}
        height={960}
      />
      <div className="flex flex-col ml-[100px] mb-[200px] z-10 w-full max-w-[400px] items-center gap-5 mx-[40px] md:ml-auto md:mb-[375px] md:w-[270px]">
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
        <p className="text-white text-opacity-70 text-3xl text-center md:text-xl md:text-opacity-100 min-w-[300px] playfair-display">
          In every moment there is a secret world waiting for you.
        </p>
        <button className="bg-white rounded-3xl w-[200px] h-[50px] z-10 md:hidden text-black border-[1px] alata backdrop-blur-sm cursor-pointer">
          <Link href={"https://www.amazon.com/Love-Power-Treasure-Nahid-Azami-ebook/dp/B0D4K3HXQV/ref=sr_1_1?crid=3B2PDRDC24GTZ&dib=eyJ2IjoiMSJ9.LtfDxVMkzQBBmY5IFMyov_HGJ1cDpaRolNN_8Ze25OIVXQ0GhDTgxEhK4qp3fuuSw0L3zV9kKKVvL8fRMp1Pl7GQkzA6GRUbSsG66J1056ZWw3tlO6OeHWz3sWh3x2c7xS0ZFxie3MA7HvphG6exvXI0MTAGE_7jpl9LgV5Jo5qmNnoDgc3nCDi9hQd75_R9acNRkQtWfxhPFG7FVLw9CnGXtqKJS-OiHO2AXyK6PNc.A3pxJpH9stBl6cABz4fpp9_Gwnn0AeIYI9CX4v3yjdI&dib_tag=se&keywords=love+power+treasure&qid=1718036435&sprefix=love+power+treasure%2Caps%2C195&sr=8-1"} target="_blank">Read Now</Link>
        </button>
        {/* <button className="btn-gradient">
          Coming Soon
        </button> */}

        {/* <div className="relative flex justify-center items-center">
          <div className="btn-gradient w-[200px] h-[50px] absolute z-[-1] rounded-md"></div>
        <button className="bg-white bg-opacity-40 w-[198px] h-[48px] rounded-md       z-10">Coming Soon</button>
       </div> */}
      </div>
      <div className="flex w-full justify-center absolute bottom-[50px]">
      <button className="bg-white rounded-3xl w-[200px] h-[50px] z-10 text-black border-[1px] alata backdrop-blur-sm hidden md:block cursor-pointer">
      <Link href={"https://www.amazon.com/Love-Power-Treasure-Nahid-Azami-ebook/dp/B0D4K3HXQV/ref=sr_1_1?crid=3B2PDRDC24GTZ&dib=eyJ2IjoiMSJ9.LtfDxVMkzQBBmY5IFMyov_HGJ1cDpaRolNN_8Ze25OIVXQ0GhDTgxEhK4qp3fuuSw0L3zV9kKKVvL8fRMp1Pl7GQkzA6GRUbSsG66J1056ZWw3tlO6OeHWz3sWh3x2c7xS0ZFxie3MA7HvphG6exvXI0MTAGE_7jpl9LgV5Jo5qmNnoDgc3nCDi9hQd75_R9acNRkQtWfxhPFG7FVLw9CnGXtqKJS-OiHO2AXyK6PNc.A3pxJpH9stBl6cABz4fpp9_Gwnn0AeIYI9CX4v3yjdI&dib_tag=se&keywords=love+power+treasure&qid=1718036435&sprefix=love+power+treasure%2Caps%2C195&sr=8-1"} target="_blank">Read Now</Link>
      </button>
      </div>
    </div>
    </div>
  );
}
