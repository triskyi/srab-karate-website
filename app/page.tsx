import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>

        {/* About Section */}
        <section className="px-6 py-12 bg-white md:px-12 md:py-24">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-black md:text-4xl">
                About Srab Karate Art Academy
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                At Srab Karate Art Academy, we believe in empowering individuals
                through the art of karate. Our experienced instructors are dedicated
                to helping students of all ages and skill levels achieve their
                goals.
              </p>
            </div>
            <div className="relative w-full h-64 md:h-96">
              <Image
                src="/path-to-instructor-or-class-image.jpg"
                alt="Instructors or Class"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Classes Section */}
        <section className="px-6 py-12 bg-gray-100 md:px-12 md:py-24">
          <h2 className="text-3xl font-bold text-center text-black md:text-4xl">Our Classes</h2>
          <div className="grid gap-8 mt-8 md:grid-cols-3">
            {[
              { name: 'Beginner Karate', age: '5-10', description: 'Learn the basics of karate in a fun and engaging environment.' },
              { name: 'Intermediate Karate', age: '11-15', description: 'Build on your skills and learn advanced techniques.' },
              { name: 'Advanced Karate', age: '16+', description: 'Master the art of karate with our expert instructors.' },
            ].map((cls, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-xl font-semibold text-red-500">{cls.name}</h3>
                <p className="mt-2 text-sm text-gray-600">Age Group: {cls.age}</p>
                <p className="mt-4 text-gray-700">{cls.description}</p>
                <button className="px-4 py-2 mt-4 text-white bg-red-500 rounded hover:bg-red-600">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
