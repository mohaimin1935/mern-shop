const NewsLetter = () => {
  return (
    <div className="bg-purple-50">
      <div className="container">
        <div className="py-24 flex flex-col items-center justify-center">
          <h3 className="font-bold text-3xl md:text-4xl">Newsletter</h3>
          <p className="my-6">
            Get timely updates for yout favourite products.
          </p>
          <div className="flex max-w-md items-center">
            <input
              type="text"
              className="py-2 w-full px-4 focus:outline-none shadow-md"
              placeholder="Your Email"
            />
            <div className="dark-bg px-6 py-2 shadow-md cursos-pointer">
              Send
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
