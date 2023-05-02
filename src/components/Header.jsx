
import { FiMail } from 'react-icons/fi'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'
import { CiFolderOn } from 'react-icons/ci'
import 'animate.css'
import photOfMe from '../assets/photoOfMe.png'
import Nav from './Nav'
import { useContext } from 'react'
import { IntersectionObserver } from '../context/IntersectionObserver'

const links = [
  { url: 'https://github.com/andresdeveloper01', title: 'GitHub', icon: <BsGithub /> },
  { url: 'https://www.linkedin.com/in/andres-pulupa/', title: 'Linkedin', icon: <AiFillLinkedin /> },
  { url: 'https://docs.google.com/document/d/1Qsyjep9YkoGkFQ3uIk8Q4TVFFLoSgSIgRzOXRrTQXio/edit', title: 'CV', icon: <CiFolderOn /> },
  { url: 'mailto:andrespulupa18@gmail.com', title: 'Contactame', icon: <FiMail /> }
]

const Header = () => {
  const { ref1 } = useContext(IntersectionObserver)
  return (
    <header>
      <Nav />
      <section id='home' ref={ref1} className='min-h-[77vh] flex justify-center items-center mt-14'>
        <div className='flex flex-col items-center min-[1400px]:gap-32 gap-5 mx-auto h-full w-fit sm:max-w-[610px] md:max-w-[720px] md:flex-row min-[990px]:max-w-[960px] min-[1200px]:max-w-[1160px] min-[1400px]:max-w-[1340px]'>
          <div className='flex flex-col items-center min-[990px]:gap-7 min-[400px]:mb-16 md:mb-0'>
            <p className='text-2xl'>¡Hola!</p>
            <h1 className='text-5xl font-bold text-center mb-3'> Soy Andres Pulupa</h1>
            <p className='text-3xl font-medium text-center'>Desarrollador Frontend</p>
            <ul className='flex gap-4 mt-3 flex-wrap justify-center'>
              {links.map(({ url, title, icon }) => (
                <li key={url}>
                  <a className='flex gap-1 items-center transition ease-in-out delay-150 hover:scale-110 duration-300' href={url} target='_blank' rel='noreferrer' aria-label='Link to my social networks'>
                    {title}
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='sm:ml-9'>
            <img className='w-36 min-[400px]:w-44 min-[400px]:h-44  md:w-52 md:h-52 sm:w-48 sm:h-48 rounded-[500px] h-36 object-cover min-[990px]:w-80 min-[990px]:h-80 min-[1200px]:w-[500px] min-[1200px]:h-[500px]' src={photOfMe} alt='foto de perfil' />
          </div>
        </div>
      </section>
    </header>
  )
}
export default Header
