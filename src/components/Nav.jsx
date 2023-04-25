import { useState, useContext } from 'react'
import { RxCross2 } from 'react-icons/rx/'
import { HiMenu } from 'react-icons/hi/'
import logo from '../assets/logo.png'
import { IntersectionObserver } from '../context/IntersectionObserver'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { toggleActive } = useContext(IntersectionObserver)
  return (
    <section className='sm:h-auto'>
      <nav className='sm:fixed w-full navbar z-10 '>
        <div className='mx-auto px-2 sm:px-6 lg:px-8 sm:max-w-[610px] md:max-w-[720px] min-[990px]:max-w-[960px] min-[1200px]:max-w-[1160px] ease-in-out duration-500 min-[1400px]:max-w-[1340px]'>
          <div className='relative flex items-center justify-between h-16'>
            <div className=' inset-y-0 left-0 flex items-center'>
              <a href='/' className='inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none'>
                <img className='w-10' src={logo} alt='logo' />
              </a>
            </div>
            <div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
              <button
                className='inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none'
                aria-expanded='false'
                onClick={() => setIsOpen(!isOpen)}
              >

                {isOpen
                  ? (
                    <RxCross2 className='block h-6 w-6' aria-hidden='true' />
                    )
                  : (
                    <HiMenu className='block h-6 w-6' aria-hidden='true' />
                    )}
              </button>
            </div>
            <div className=' flex items-center justify-center'>
              <div className='hidden sm:block sm:ml-6'>
                <nav>
                  <ul className='flex space-x-4 relative gap-7 border-bottom-anim'>
                    <li className={`${toggleActive === 'home' ? 'active' : ''} opacity-60`}>
                      <a
                        href='#home'
                        className=' py-2 rounded-md text-sm font-medium'
                      >
                        Inicio
                      </a>
                    </li>
                    <li className={`${toggleActive === 'about' ? 'active' : ''} opacity-60`}>
                      <a
                        href='#about'
                        className=' py-2 rounded-md text-sm font-medium'
                      >
                        Sobre mi
                      </a>
                    </li>
                    <li className={`${toggleActive === 'projects' ? 'active' : ''} opacity-60`}>
                      <a
                        href='#projects'
                        className=' py-2 rounded-md text-sm font-medium '
                      >
                        Proyectos
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className='sm:hidden animate__animated animate__fadeIn'>
            <div className='px-2 pb-3 space-y-1 text-center'>
              <a
                href='#home'
                className='block px-3 py-2 rounded-md text-base font-medium text-white'
              >
                Inicio
              </a>
              <a
                href='#about'
                className='block px-3 py-2 rounded-md text-base font-medium text-white'
              >
                Sobre mi
              </a>
              <a
                href='#projects'
                className='block px-3 py-2 rounded-md text-base font-medium text-white'
              >
                Proyectos
              </a>
            </div>
          </div>
        )}
      </nav>
    </section>
  )
}

export default Nav
