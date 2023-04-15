
import { FiMail } from 'react-icons/fi'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'
import { CiFolderOn } from 'react-icons/ci'
import 'animate.css'
import photOfMe from '../assets/photoOfMe.png'
import Nav from './Nav'
import { useContext } from 'react'
import { IntersectionObserver } from '../context/IntersectionObserver'

const Header = () => {
  const { ref1 } = useContext(IntersectionObserver)
  return (
    <header>
      <Nav />
      <section id='home' ref={ref1} className='min-h-screen flex justify-center items-center'>
        <div className='flex flex-col items-center min-[1400px]:gap-32 gap-5 mx-auto h-full w-fit sm:max-w-[610px] md:max-w-[720px] md:flex-row min-[990px]:max-w-[960px] min-[1200px]:max-w-[1160px] min-[1400px]:max-w-[1340px]'>
          <div className='flex flex-col items-center min-[990px]:gap-7 min-[400px]:mb-16 md:mb-0'>
            <p className='text-2xl'>¡Hola!</p>
            <h1 className='text-5xl font-bold text-center mb-3'> Soy Andres Pulupa</h1>
            <p className='text-3xl font-medium text-center'>Desarrolador Frontend</p>
            <ul className='flex gap-4 mt-3 flex-wrap justify-center'>
              <li><a className='flex gap-1 items-center transition ease-in-out delay-150 hover:scale-110 duration-300' href='https://github.com/andresdeveloper01' target='_blank' rel='noreferrer'>GitHub <BsGithub /></a></li>
              <li><a className='flex gap-1 items-center transition ease-in-out delay-150 hover:scale-110 duration-300' href='https://www.linkedin.com/in/andres-pulupa/' target='_blank' rel='noreferrer'>Linkedin <AiFillLinkedin /></a></li>
              <li><a className='flex gap-1 items-center transition ease-in-out delay-150 hover:scale-110 duration-300' href='https://drive.google.com/file/d/1cuAvvbQPAs58FqiaJk6qogZDeyNpRh6B/view' target='_blank' rel='noreferrer'>CV <CiFolderOn /></a></li>
              <li><a className='flex gap-1 items-center transition ease-in-out delay-150 hover:scale-110 duration-300' href='mailto:andrespulupa18@gmail.com' target='_blank' rel='noreferrer'>Contactame <FiMail /></a></li>
            </ul>
          </div>
          <div className='sm:ml-9'>
            <img className='w-36 min-[400px]:w-44 min-[400px]:h-44  md:w-40 md:h-40 sm:w-40 sm:h-40 rounded-[500px] h-36 object-cover min-[990px]:w-80 min-[990px]:h-80 min-[1200px]:w-[500px] min-[1200px]:h-[500px]' src={photOfMe} alt='foto de perfil' />
          </div>
        </div>
      </section>
    </header>
  )
}
export default Header
