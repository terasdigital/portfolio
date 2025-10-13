import Image from "next/image";
import { Linkedin, GitHub } from "react-feather";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-2 min-h-screen p-25 md:p-35 gap-16 max-sm:p-15">
      <main>
        <div className="max-md:text-center flex justify-around items-center w-full flex-wrap-reverse">
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
          <h1 className="font-bold text-center text-4xl p-25">Services</h1>
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
