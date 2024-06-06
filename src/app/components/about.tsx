import Image from "next/image";

export default function About() {
  return (
    <div className="flex justify-center mx-auto mt-[50px] flex-wrap max-w-[1600px] md:mx-[40px]">
      <div className="relative w-[500px] h-[580px] md:w-[300px] md:h-[300px]">
        <Image
          className="object-contain w-full h-full"
          src={"/Paperback_Book_Mockup.png"}
          fill
          alt="book"
        />
      </div>
      <div className="w-[60%] mt-16 md:w-full">
        <h3 className="alata font-bold text-4xl mb-5">
          Love, Power, and Treasure
        </h3>
        <p className="text-xl roboto font-semibold text-[#202021]">
          Ana&apos;s world is forever changed when an owl gives her a golden
          heart, granting her the extraordinary ability to understand her best
          friend Maloos the Cow speak out loud for the very first time. As Ana
          explores this newfound ability, she discovers that she can hear other
          animals too, and also another voice, an old friend that reveals a
          hidden world that has always been around her.
          <br />
          <br />
          Set in a timeless countryside, Love, Power, and Treasure is a
          heartwarming tale of friendship and self-discovery, where Ana learns
          the power of empathy and the truth within that leads to understanding
          and connection.
          <br />
          <br />
          Illustrated with captivating artwork by acclaimed illustrator Antonio
          Javier Coparo, this narrative celebrates the beauty of listening and
          the treasures that are within us all.
        </p>
        <div className="flex justify-between mt-14 flex-wrap w-full max-w-[300px]">
          <div className="flex flex-col">
            <span className="font-bold text-[#202021]">Author</span>{" "}
            <span className="roboto font-semibold text-[#202021]">
              Nahid Azami
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-[#202021]">Illustrated by</span>{" "}
            <span className="roboto font-semibold text-[#202021]">
              Antonio Javier Caparo
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
