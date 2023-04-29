import logoHtml from '../assets/html.png'
import logoCss from '../assets/css.png'
import logoJavaScript from '../assets/javascript.png'
import logoReact from '../assets/react.png'
import logoGit from '../assets/git.png'
import logoGitHub from '../assets/github.png'
import logoTailwind from '../assets/tailwind.png'
import logoSass from '../assets/sass.png'
import { useContext } from 'react'
import { IntersectionObserver } from '../context/IntersectionObserver'
const AboutMe = () => {
  const { ref2 } = useContext(IntersectionObserver)
  return (
    <section id='about' ref={ref2} className='min-h-[76vh] flex flex-col items-center justify-center sm:px-5 sm:max-w-[610px] md:max-w-[720px] mx-auto'>
      <h2 className='text-3xl font-semibold py-7 my-3'>Sobre mi</h2>
      <p className='px-5 text-center sm:text-lg'>He realizado proyectos creando soluciones y transformando diseño en código. Disfruto el trabajo en equipo, aprender de mis compañeros, adquirir nuevo conocimiento y habilidades.</p>
      <h3 className='mt-3 w-full pl-6 text-lg sm:text-2xl font-medium'>Mis habilidades:</h3>
      <div className='flex px-5 mt-3'>
        <ul className='grid grid-cols-2 gap-3 place-items-center text-xs sm:text-base md:text-lg font-bold min-[400px]:grid-cols-3 min-[500px]:grid-cols-4'>
          <li>
            <article className='box'>
              <p>HTML</p><img className='max-h-5' src={logoHtml} alt='HTML logo' />
            </article>
          </li>
          <li>
            <article className='box'>
              <p>CSS</p>
              <img className='max-h-5' src={logoCss} alt='CSS logo' />
            </article>
          </li>
          <li>
            <article className='box'>
              <p>JavaScript</p>
              <img className='max-h-5' src={logoJavaScript} alt='JavaScript logo' />
            </article>
          </li>
          <li>
            <article className='box'>
              <p>React</p>
              <img className='max-h-4' src={logoReact} alt='React logo' />
            </article>
          </li>
          <li>
            <article className='box'>
              <p>SASS</p>
              <img className='max-h-4' src={logoSass} alt='Sass logo' />
            </article>
          </li>
          <li>
            <article className='box'>
              <p>TailwindCSS</p>
              <img className='max-h-3' src={logoTailwind} alt='Tailwind logo' />
            </article>
          </li>
          <li>
            <article className='box'>
              <p>Git</p>
              <img className='max-h-5' src={logoGit} alt='Git logo' />
            </article>
          </li>
          <li>
            <article className='box'>
              <p>GitHub</p>
              <img className='max-h-5' src={logoGitHub} alt='GitHub logo' />
            </article>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default AboutMe
