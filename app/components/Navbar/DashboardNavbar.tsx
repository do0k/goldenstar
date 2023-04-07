"use client"
import Link from "next/link"
import Image from "next/image"
import { BiHomeCircle, BiMenu, BiChart } from "react-icons/bi"
import { BsXLg, BsPower } from 'react-icons/bs'
import { useState, useEffect } from "react"
import { Container } from "../UI/Container"

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const DashboardNavbar = ({ children }: { children: React.ReactNode }) => {
  const size = useWindowSize()
  const [isOpen, setOpen] = useState(true)

  const [isDropOpen, setDropOpen] = useState(false)

  addEventListener("resize", () => {
    if (size.width < 768) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  })

  const toggleNavOpen = () => {
    setOpen(!isOpen)
  }

  const toggleDropOpen = () => {
    setDropOpen(!isDropOpen)
  }

  const closeNav = () => {
    setOpen(false)
  }

  return (
    <>
      <main className="bg-[#f5f5f9]">
        <aside className={`${isOpen ? "right-0" : "-right-full"} transition-all duration-500 ease-in-out fixed h-screen w-[16rem] bg-white`}>
          <div className="shadow-lg shadow-[#a1acb826] p-3 h-full">
            <div className="mb-12 flex items-center justify-between">
              <span className="md:hidden absolute left-2 top-2 rounded-full hover:bg-slate-200 p-1 cursor-pointer" onClick={closeNav}>
                <BsXLg />
              </span>
              <Image src="/logo.svg" alt="هتل ستاره طلایی" width={50} height={50} className="rounded-full p-2  box-content border-indigo-200 border-2" />
              <h1 className={`block font-extrabold text-xl pl-2 `}>هتل ستاره طلایی</h1>
            </div>
            <ul>
              <li className="mb-4">
                <Link className="flex relative before:-left-3 before:top-0 items-stretch bg-indigo-100 text-indigo-500 p-2 transition-all rounded-lg before:content-[''] before:rounded-lg before:h-full before:absolute before:bg-indigo-600 before:w-1" href="/">
                  <BiHomeCircle size="1.5em" />
                  <span className="align-middle mr-2 font-bold leading-relaxed">پیشخوان</span>
                </Link>
              </li>
              <li>
                <Link className="flex items-stretch hover:bg-indigo-100 hover:text-indigo-500 p-2 transition-all rounded-lg" href="/">
                  <BiChart size="1.5em" />
                  <span className="align-middle mr-3 leading-relaxed">گزارشات</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        <section className={`${isOpen ? " md:w-[calc(100%_-_16rem)] md:mr-[16rem] w-full mr-0" : "w-full"} duration-500 ease-in-out transition-all h-screen p-3`}>
          <Container>
            <nav className="flex w-full">
              <div className="flex justify-between w-full bg-white shadow-lg shadow-[#a1acb826] rounded-lg font-extrabold text-xl p-2 mb-3">
                <span className="cursor-pointer rounded-full hover:bg-slate-200 p-2 inline-block transition-all" onClick={toggleNavOpen}>
                  <BiMenu size="1.5rem" />
                </span>
                <div className="flex relative items-center text-indigo-400 cursor-pointer" onClick={toggleDropOpen} >
                  <span className="text-sm font-bold ml-4">مدیریت هتل</span>
                  <Image src='/avatar.png' alt="" width={40} height={40} className="rounded-full border-indigo-200 border-[1px]" />
                  <div className={`${isDropOpen ? '' : 'hidden'} absolute font-bold text-base top-[calc(100%+0.7rem)] bg-white shadow-lg shadow-[#a1acb826] rounded-lg overflow-hidden block min-w-[12rem] -left-2`}>
                    <ul>
                      <li>
                        <div className="flex items-center px-2 py-4 border-b-[1px]">
                          <Image src='/avatar.png' alt="" height={40} width={40} className="rounded-full border-indigo-200 border-[1px] ml-3" />
                          <div className="flex flex-col font-normal">
                            <h4 className="font-bold text-[0.8rem] text-slate-500">محمدمهدی ایرانمنش</h4>
                            <span className="font-normal text-sm text-slate-400">پذیرش هتل</span>
                          </div>
                        </div>
                      </li>
                      <li className="text-slate-500 text-base"><Link href="#" className="py-2 hover:bg-slate-50 px-4 text-base font-normal flex items-center">
                        <BsPower size="1.2rem" className="ml-2" />
                        <span className="leading-relaxed">خروج</span>
                      </Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
            <section>
              {children}
            </section>
          </Container>

        </section>
      </main>
    </>
  )
}

export default DashboardNavbar