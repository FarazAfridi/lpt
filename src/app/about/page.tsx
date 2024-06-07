import Image from "next/image";
import AboutCard from "../components/aboutCard";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Page() {
  return (
    <>
      <main
       className="relative overflow-hidden isolate flex w-full flex-col items-center"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,50,80,1) 0%, rgba(0,111,124,1) 44%, rgba(181,148,126,1) 100%)",
        }}
      >
        <Header />
        <div className="w-full min-h-[100vh] px-10 pt-[50px] max-w-[1600px]">
          <Image className="object-cover w-[1500px] h-[500px] top-[-150px] right-[50px] absolute z-[-1]" src="/stars2.png" alt="stars" width={1300} height={730}/>
          <AboutCard
            reverse={false}
            text={
              <p className="text-[#DEDFDF] text-[20px]">
                Ana&apos;s world is forever changed when an owl gives her a
                golden heart, granting her the extraordinary ability to
                understand her best friend Maloos the Cow speak out loud for the
                very first time. As Ana explores this newfound ability, she
                discovers that she can hear other animals too, and also another
                voice, an old friend that reveals a hidden world that has always
                been around her.
                <br />
                <br />
                Set in a timeless countryside, Love, Power, and Treasure is a
                heartwarming tale of friendship and self-discovery, where Ana
                learns the power of empathy and the truth within that leads to
                understanding and connection.
                <br />
                <br />
                Illustrated with captivating artwork by acclaimed illustrator
                Antonio Javier Coparo, this narrative celebrates the beauty of
                listening and the treasures that are within us all.
              </p>
            }
            heading="Author"
          />
          <div className="relative">
          <Image className="object-cover w-[1500px] h-[500px] left-[50px] absolute z-[-1]" src="/stars.png" alt="stars" width={1300} height={730}/>
          <AboutCard
            reverse={true}
            text={
              <p className="text-[#DEDFDF] text-[20px]">
                Ana&apos;s world is forever changed when an owl gives her a
                golden heart, granting her the extraordinary ability to
                understand her best friend Maloos the Cow speak out loud for the
                very first time. As Ana explores this newfound ability, she
                discovers that she can hear other animals too, and also another
                voice, an old friend that reveals a hidden world that has always
                been around her.
                <br />
                <br />
                Set in a timeless countryside, Love, Power, and Treasure is a
                heartwarming tale of friendship and self-discovery, where Ana
                learns the power of empathy and the truth within that leads to
                understanding and connection.
                <br />
                <br />
                Illustrated with captivating artwork by acclaimed illustrator
                Antonio Javier Coparo, this narrative celebrates the beauty of
                listening and the treasures that are within us all.
              </p>
            }
            heading="Illustrator"
          />
</div>
<div className="relative">
<Image className="object-cover w-[1500px] h-[500px] top-[75px] absolute z-[-1]" src="/stars3.png" alt="stars" width={1300} height={730}/>
          <AboutCard
            reverse={false}
            text={
              <p className="text-[#DEDFDF] text-[20px]">
                Ana&apos;s world is forever changed when an owl gives her a
                golden heart, granting her the extraordinary ability to
                understand her best friend Maloos the Cow speak out loud for the
                very first time. As Ana explores this newfound ability, she
                discovers that she can hear other animals too, and also another
                voice, an old friend that reveals a hidden world that has always
                been around her.
                <br />
                <br />
                Set in a timeless countryside, Love, Power, and Treasure is a
                heartwarming tale of friendship and self-discovery, where Ana
                learns the power of empathy and the truth within that leads to
                understanding and connection.
                <br />
                <br />
                Illustrated with captivating artwork by acclaimed illustrator
                Antonio Javier Coparo, this narrative celebrates the beauty of
                listening and the treasures that are within us all.
              </p>
            }
            heading="Owl"
          />
          </div>
        </div>
          <Footer secondVariant={true} />
      </main>
    </>
  );
}
