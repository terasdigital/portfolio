import Image from "next/image";
import {
  Linkedin,
  GitHub,
  Figma,
  Globe,
  Settings,
  Link,
  Copy,
} from "react-feather";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-2 min-h-screen p-25 md:p-35 gap-16 max-sm:p-20">
      <main>
        <div className="max-md:text-center max-md:mx-auto flex justify-around items-center w-full flex-wrap-reverse">
          <div>
            <h1 className="sm:text-lg">Hi, I am </h1>
            <p className="hidden md:block md:text-xl sm:mb-4 font-semibold text-[#C93F53]">
              Adhitya Ramadhan Putra
            </p>
            <p className="whitespace-pre text-3xl sm:text-5xl md:text-7xl font-bold">
              {"Frontend\n\tDeveloper"}
            </p>
            <p className="m-2 sm:text-md md:text-lg text-sm">
              passionate about building modern web apps <br />
              with Next.js & TypeScript.
            </p>
            <p className="mt-4">
              <a
                href=""
                className="bg-[#C93F53] text-[#f5f5f5] px-4 py-2 rounded-md hover:bg-[#7B1E22] font-bold"
              >
                Hire Me
              </a>
            </p>
          </div>
          <div className="text-center hidden md:block">
            <Image
              src="/photo-porto-4.png"
              alt="Profile Picture"
              width={300}
              height={300}
            />
            <a href="" className="hover:text-[#C93F53]">
              <Linkedin className="inline m-2" />
            </a>
            <a href="" className="hover:text-[#C93F53]">
              <GitHub className="inline m-2" />
            </a>
          </div>
        </div>
        <div id="services">
          <h1 className="font-bold text-center text-2xl sm:text-4xl pt-20 sm:pt-25 pb-5">
            Services
          </h1>
          <p className="text-center">
            Every websites has a story - and my goal is to turn that story into
            a beautiful and intuitive digital experience. I design and build
            modern, responsive web interface using <b>React</b> and{" "}
            <b>Next.js</b>, focusing on clean design, smooth interactions, and
            enjoyable user experiences across all devices.
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-6 pt-10">
            <div className="bg-[#D1EEF2] p-4 text-center rounded-3xl text-[#C93F53]">
              <Figma className="inline mb-2" />
              <h1 className="font-semibold my-2">UI/UX Design</h1>
              <p>
                I design clean and intuitive interfaces focused on usability,
                consistency, and user satisfaction
              </p>
            </div>
            <div className="bg-[#D1EEF2] p-4 text-center rounded-3xl text-[#C93F53]">
              <Globe className="inline mb-2" />
              <h1 className="font-semibold my-2">Web Development</h1>
              <p>
                I build responsive and high-performance website using{" "}
                <b>React</b>,<b>Next.js</b>, and <b>Tailwind CSS</b>
              </p>
            </div>
            <div className="bg-[#D1EEF2] p-4 text-center rounded-3xl text-[#C93F53]">
              <Link className="inline mb-2" />
              <h1 className="font-semibold my-2">Frontend Integration</h1>
              <p>
                I connect APIs and backend systems to create dynamic,
                data-driven, and interactive web experience
              </p>
            </div>
            <div className="bg-[#D1EEF2] p-4 text-center rounded-3xl text-[#C93F53]">
              <Settings className="inline mb-2" />
              <h1 className="font-semibold my-2">Website Optimization</h1>
              <p>
                I optimize loading speed, SEO, and accessibility for better
                performance and smoother user experience
              </p>
            </div>
            <div className="bg-[#D1EEF2] p-4 text-center rounded-3xl text-[#C93F53]">
              <Copy className="inline mb-2" />
              <h1 className="font-semibold my-2">Component Base Development</h1>
              <p>
                I create reusable, scalable UI components for efficient and
                maintainable web applications
              </p>
            </div>
          </div>
        </div>
        <div id="projects">
          <h1 className="font-bold text-center text-2xl sm:text-4xl pt-20 sm:pt-25 pb-5">
            My Projects
          </h1>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
