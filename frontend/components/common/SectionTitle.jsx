const SectionTitle = ({ children }) => {
  return (
    <div className='text-center font-bold text-3xl md:text-4xl xl:text-5xl mt-24 mb-16 flex flex-col items-center'>
      {children}
      <div className="w-12 h-1.5 mt-6 primary-bg" />
    </div>
  )
}

export default SectionTitle
