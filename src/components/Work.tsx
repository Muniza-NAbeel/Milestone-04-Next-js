import Image from 'next/image';

export default function Work() {
  return (
    <section className="py-10 px-5 sm:px-20 bg-pink-50">
      <div className="flex justify-between items-center mb-5 mx-4 md:mx-20">
        <h3 className="font-semibold text-lg sm:text-2xl">Featured Works</h3>
      </div>

      <div className="relative flex flex-col md:flex-row items-start mb-10 mx-4 md:mx-20 py-5">
        <Image
          src="/01.png"
          alt="Work"
          width={250}
          height={150}
          className="object-cover shadow-lg md:mr-5 w-full h-auto md:w-64"
        />
        <div className="mt-3 md:mt-0 w-full">
          <h2 className="text-lg font-bold pb-4 sm:text-xl">Designing Dashboards</h2>
          <div className="flex items-center space-x-2">
            <span className="text-white bg-red-400 px-3 py-1 mr-1 rounded-2xl text-sm">2020</span>
            <span className="text-gray-700 text-sm">Dashboard</span>
          </div>
          <p className="mt-4 text-gray-700 text-sm sm:text-base">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit<br /> officia consequat duis enim velit mollit. Exercitation veniam consequat sunt<br /> nostrud amet.
          </p>
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row items-start mb-10 mx-4 md:mx-20 py-5">
        <Image
          src="/02.png"
          alt="Work"
          width={250}
          height={150}
          className="object-cover shadow-lg md:mr-5 w-full h-auto md:w-64"
        />
        <div className="mt-3 md:mt-0 w-full">
          <h2 className="text-lg font-bold pb-4 sm:text-xl">Designing Dashboards</h2>
          <div className="flex items-center space-x-2">
            <span className="text-white bg-red-400 px-3 py-1 mr-1 rounded-2xl text-sm">2020</span>
            <span className="text-gray-700 text-sm">Dashboard</span>
          </div>
          <p className="mt-4 text-gray-700 text-sm sm:text-base">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit<br /> officia consequat duis enim velit mollit. Exercitation veniam consequat sunt<br /> nostrud amet.
          </p>
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row items-start mb-10 mx-4 md:mx-20 py-5">
        <Image
          src="/03.png"
          alt="Work"
          width={250}
          height={150}
          className="object-cover shadow-lg md:mr-5 w-full h-auto md:w-64"
        />
        <div className="mt-3 md:mt-0 w-full">
          <h2 className="text-lg font-bold pb-4 sm:text-xl">Designing Dashboards</h2>
          <div className="flex items-center space-x-2">
            <span className="text-white bg-red-400 px-3 py-1 mr-1 rounded-2xl text-sm">2020</span>
            <span className="text-gray-700 text-sm">Dashboard</span>
          </div>
          <p className="mt-4 text-gray-700 text-sm sm:text-base">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit<br /> officia consequat duis enim velit mollit. Exercitation veniam consequat sunt<br /> nostrud amet.
          </p>
        </div>
      </div>
    </section>
  );
}
