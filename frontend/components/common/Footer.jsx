import { GrGithub, GrFacebookOption } from 'react-icons/gr'
import { FaLinkedinIn } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <div className="dark-bg p-12 text-center">
        <div className="container">

          <div className="w-full flex justify-center">
            <div className="flex gap-4 text-gray-300 justify-center mb-8">
              <a href='https://github.com/mohaimin1935' target='blank' className={linkIcon}>
                <GrGithub size='24px' />
              </a>
              <a href='https://www.linkedin.com/in/mohaiminul-islam-682a0a19b/' target='blank' className={linkIcon}>
                <FaLinkedinIn size='24px' />
              </a>
              <a href='https://www.facebook.com/mohaimin1935' target='blank' className={linkIcon}>
                <GrFacebookOption size='24px' />
              </a>
              <a href='https://www.instagram.com/mohaimin_35/' target='blank' className={linkIcon}>
                <FiInstagram size='24px' />
              </a>
            </div>
          </div>

          <p className='text-sm text-gray-400'>
            Copyright © 2021 Mohaiminul Islam. All Rights Reserved. <br />
            Made by <a href="https://mohaimin1935.vercel.app/" className='hover:text-gray-100 duration-300 cursor-pointer'>Mohaiminul Islam</a>.
          </p>

        </div>
      </div>
    </footer>
  )
}

const linkIcon = "flex justify-center items-center transform hover:text-white hover:-translate-y-1 duration-300 cursor-pointer"

export default Footer