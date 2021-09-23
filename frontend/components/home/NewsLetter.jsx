import Button from "../common/Button"

const NewsLetter = () => {
  return (
    <div className='container  light-bg'>
      <div className="py-24 flex flex-col items-center justify-center">
        <h3 className='font-bold text-2xl md:text-3xl'>Newsletter</h3>
        <p className="my-3">Get timely updates for yout favourite products.</p>
        <div className="flex items-center">
          <input type="text" className="py-2 px-4 focus:outline-none shadow-md" placeholder="Your Email" />
          <div className="dark-bg px-4 py-2 shadow-md cursos-pointer">Send</div>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
