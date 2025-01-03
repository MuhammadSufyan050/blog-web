const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 px-4 sm:px-6 lg:px-8">
        
        {/* Blog Info */}
        <div className="max-w-md text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-widest">The Blog</h2>
          <p className="mt-4 text-sm leading-6 text-justify md:text-left">
            Discover a hub for diverse topics and information conventions. From the latest trends to in-depth discussions, explore blogs that cover everything you need in one place.
          </p>
        </div>

        {/* Subscription Form */}
        <div className="w-full md:w-auto">
          <form className="flex flex-col sm:flex-row items-center sm:space-x-2 space-y-4 sm:space-y-0">
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email Address"
              className="w-full sm:w-auto px-4 py-2 text-black rounded-md outline-none border border-gray-300 focus:border-orange-600 focus:ring focus:ring-orange-200"
              required
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="px-6 py-2 bg-black text-white rounded-md hover:bg-orange-600 transition duration-300"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 text-center mt-10 pt-5 text-sm text-gray-600">
        &copy; {new Date().getFullYear()} The Blog. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
