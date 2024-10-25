import Image from 'next/image';
import Link from 'next/link';
import Blog from '@/components/Blog';
import Work from '@/components/Work';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className='w-full h-auto bg-pink-50'>
      <header className="flex justify-between items-center mx-5 sm:mx-20 pt-2">
        <div className="flex items-center">
          <Image
            src="/logoo.png"
            alt="Logo"
            width={60}
            height={30}
          />
        </div>
        <nav className='space-x-3 sm:space-x-5'>
          <Link href="#" className="text-gray-900 hover:text-red-400">Work</Link>
          <Link href="#" className="text-gray-900 hover:text-red-400">Blog</Link>
          <Link href="#" className="text-gray-900 hover:text-red-400">Contact</Link>
        </nav>
      </header>
      <main className="flex flex-col md:flex-row items-center justify-between mx-5 sm:mx-10 md:mx-40 mt-20">
        <div className="flex flex-col justify-center mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold">Hi, I am John,<br />Creative Technologist</h1>
          <p className="mt-4 sm:mt-6"> 
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet<br /> sint. Velit officia consequat duis enim velit mollit. Exercitation veniam<br /> consequat sunt nostrud amet.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-red-400 text-white font-bold py-2 rounded hover:bg-red-300 transition mt-6 w-32 sm:w-40">
              Download Resume
            </button>
          </div>
        </div>
        <div className="flex justify-center md:ml-10">
          <Image
            src="/hero-image.png"
            alt="profile"
            width={250}
            height={250}
            className="rounded-full"
          />
        </div>
      </main>
      <Blog />
      <Work />
      <Footer />
    </div>
  );
}




