import Image from "next/image";
import Hero from "./_components/Hero/Hero";
const HomePage: React.FC = () => {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      <section
        id="aboutme"
        className="h-[100vh] bg-lime-500 flex items-center justify-center"
      >
        <div className="container flex flex-col gap-10 items-center p-5">
          <h1 className="bg-white text-5xl p-1 font-semibold w-fit text-lime-500">
            About Me
          </h1>
          <div className="flex gap-10">
            <div className="w-1/3 hidden md:block">
              <Image src={"/me.jpg"} width={400} height={400} alt="person" />
            </div>
            <div className="w-3/3 md:w-2/3 text-xl font-semibold text-white flex flex-col gap-5 text-justify">
              <p>
                I like combining simple design with practical coding. I enjoy
                working where design meets development — making websites that
                look nice, run smoothly, and are easy for everyone to use.
              </p>
              <p>
                Currently, I’m a Consultant III at RCG Global Services, working
                extensively with Adobe Experience Manager (AEM) and React.js. I
                build reusable AEM React components and collaborate closely with
                UI/UX designers to turn creative designs into functional,
                accessible web pages that meet business goals.
              </p>
              <p>
                Previously, I’ve contributed to projects at Accenture and
                various government organizations, developing scalable frontend
                applications using Vue, React, and modern JavaScript
                technologies. I’ve also built internal systems and web apps that
                streamline workflows and enhance user experience.
              </p>
              <p>
                Outside of work, I enjoy hanging out with friends, playing
                chess, and mobile games.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
