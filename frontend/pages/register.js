import Button from "../components/common/Button"
import Link from "next/link"

const Register = () => {
  return (
    <div className='container'>
      <div className="max-w-sm light-bg mx-auto p-12">
        <h3 className="text-2xl font-semibold mb-4">Register</h3>
        <div className="my-4 flex flex-col items-ceter justify-center">
          <input
            type="text"
            className={inputStyle}
            placeholder="Email"
          />
          <input
            type="text"
            className={inputStyle}
            placeholder="Username"
          />
          <input
            type="password"
            className={inputStyle}
            placeholder="Password"
          />
        </div>
        <Button>
          Register
        </Button>

        <p className="my-2">Already have an account? <Link href="/login"><a className="underline">Log in!</a></Link></p>
      </div>
    </div>
  )
}

const inputStyle = "border-2 border-gray-400 focus:outline-none px-2 py-1.5 my-2"

export default Register
