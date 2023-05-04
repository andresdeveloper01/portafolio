import { useContext } from 'react'
import logoCss from '../assets/css.png'
import logoGit from '../assets/git.png'
import logoGitHub from '../assets/github.png'
import logoHtml from '../assets/html.png'
import logoJavaScript from '../assets/javascript.png'
import logoReact from '../assets/react.png'
import logoSass from '../assets/sass.png'
import logoTailwind from '../assets/tailwind.png'
import { IntersectionObserver } from '../context/IntersectionObserver'

const logos = [
  {
    name: 'HTML',
    logo: logoHtml
  },
  {
    name: 'CSS',
    logo: logoCss
  },
  {
    name: 'JavaScript',
    logo: logoJavaScript
  },
  {
    name: 'React',
    logo: logoReact
  },
  {
    name: 'SASS',
    logo: logoSass
  },
  {
    name: 'Tailwind',
    logo: logoTailwind
  },
  {
    name: 'Git',
    logo: logoGit
  },
  {
    name: 'GitHub',
    logo: logoGitHub
  }

]

const AboutMe = () => {
  const { ref2 } = useContext(IntersectionObserver)

  return (
    <section id='about' ref={ref2} className='min-h-[76vh] flex flex-col items-center justify-center sm:px-5 sm:max-w-[610px] md:max-w-[720px] mx-auto'>
      <h2 className='text-3xl font-semibold py-7 my-3'>Sobre mi</h2>
      <p className='px-5 text-center sm:text-lg'>He realizado proyectos creando soluciones y transformando diseño en código. Disfruto el trabajo en equipo, aprender de mis compañeros, adquirir nuevo conocimiento y habilidades.</p>
      <h3 className='mt-3 w-full pl-6 text-lg sm:text-2xl font-medium'>Mis habilidades:</h3>
      <div className='flex px-5 mt-3'>
        <ul className='grid grid-cols-2 gap-3 place-items-center text-xs sm:text-base md:text-lg font-bold min-[400px]:grid-cols-3 min-[500px]:grid-cols-4'>
          {logos.map(({ name, logo }) => (
            <li key={name}>
              <article className='box'>
                <p>{name}</p><img className='max-h-5 w-full h-full' src={logo} alt='HTML logo' />
              </article>
            </li>
          ))}

        </ul>
      </div>
    </section>
  )
}

export default AboutMe
