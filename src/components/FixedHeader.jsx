import { useEffect, useState } from "react"

export default function FixedHeader({ logo, title }) {
  const [isIntersecting, setIsIntersecting] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.intersectionRatio > 0.2)
      },
      { threshold: [0.2] }
    )
    observer.observe(document.getElementById("header"))
  }, [])

  return (
    <>
      <div
        id='header-fixed'
        className={`fixed top-0 left-0 h-auto w-full bg-gray-200 z-10 p-1 shadow-md ${
          isIntersecting ? "-translate-y-full" : "translate-y-0"
        } transition-transform duration-300 ease-in-out`}
      >
        <a href='/'>
          <img className='mx-auto h-7' src={logo.src} alt={title} height={30} />
        </a>
      </div>
    </>
  )
}
