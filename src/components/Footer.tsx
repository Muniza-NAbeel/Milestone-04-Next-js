export default function Footer() {
  return (
    <footer className="bg-pink-50 py-8">
      <div className="container mx-auto text-center px-4 sm:px-0">
        <div className="flex justify-center flex-wrap space-x-6 sm:space-x-8 mb-4">
          <a href="https://www.facebook.com/profile.php?id=61555562894584" aria-label="Facebook" target="_blank" className="text-gray-800 hover:text-red-400">
             <i className="bx bxl-facebook-square bx-sm"></i></a>
          <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" className="text-gray-900 hover:text-red-400">
              <i className="bx bxl-instagram bx-sm"></i></a>
          <a href="https://www.twitter.com" aria-label="Twitter" target="_blank"
            className="text-gray-900 hover:text-red-400">
               <i className="bx bxl-twitter bx-sm"></i></a>
          <a href="https://www.linkedin.com/in/muniza-malik-59826930a/" aria-label="LinkedIn" target="_blank"
            className="text-gray-900 hover:text-red-400">
               <i className="bx bxl-linkedin-square bx-sm"></i></a>
        </div>
       <p className="text-gray-900 font-semibold text-xs sm:text-sm md:text-base">Copyright &copy; 2020 All rights reserved
      </p>
  </div>
</footer>
  );
}
