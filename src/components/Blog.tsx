export default function Blog() {
  return (
    <section className="py-10 px-5 md:px-20 lg:px-40 bg-pink-100 mt-20">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-semibold">Recent Post</h3>
        <a href="#" className="text-pink-500 hover:underline">View all</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 shadow-md w-full md:w-[400px] h-[300px]">
          <h3 className="text-2xl font-bold mb-4">Making a design system from scratch</h3>
          <p className="text-gray-900 text-md mb-6">
            <span>12 Feb 2020</span>
            <span className="mx-4">|</span>
            <span>Design, Pattern</span>
          </p>
          <p className="text-gray-900">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className="bg-white p-6 shadow-md w-full md:w-[400px] h-[300px]">
          <h3 className="text-2xl font-bold mb-4">Making a design system from scratch</h3>
          <p className="text-gray-900 text-md mb-6">
            <span>12 Feb 2020</span>
            <span className="mx-4">|</span>
            <span>Design, Pattern</span>
          </p>
          <p className="text-gray-900">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
    </section>
  );
}


