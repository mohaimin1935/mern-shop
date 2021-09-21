import Link from "next/link"

const Button = ({ children, href = "/", className = "" }) => {
  return (
    <Link href={href}>
      <a>
        <div className={'w-40 dark-bg py-2.5 text-center rounded ' + className}>
          {children}
        </div>
      </a>
    </Link>
  )
}

export default Button
