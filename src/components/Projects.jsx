import { BsGithub } from 'react-icons/bs'
import webs from '../webs.json'
import { TfiWorld } from 'react-icons/tfi'
import { IntersectionObserver } from '../context/IntersectionObserver'
import { useContext } from 'react'

const Projects = () => {
  const { ref3 } = useContext(IntersectionObserver)
  return (
    <section id='projects' ref={ref3} className='flex items-center min-h-screen justify-center flex-col sm:max-w-[610px] md:max-w-[720px] min-[990px]:max-w-[960px] mx-auto min-[1400px]:max-w-[1340px]'>
      <h2 className='text-3xl font-bold my-12'>Proyectos</h2>
      <div className='grid grid-cols-16 gap-4 place-content-center mx-[calc(2rem*.5)]'>
        {webs.map(({ name, img, id, tecnologies, repository, web }) => (
          <div className='rounded-3xl overflow-hidden relative container-before hover:opacity-100 min-[625px]:h-[192px] min-[767px]:h-[215px]' key={id}>
            <img className='h-auto w-full align-middle rounded-3xl object-cover' src={img} alt={name} />
            <div className='absolute flex flex-col justify-center items-center text-center top-[12%] w-full opacity-0 h-full duration-500 transition-all translate-[-50%,-50%]'>
              <h3 className='text-2xl md:text-[20px] min-[990px]:text-2xl min-[1400px]:text-4xl font-bold'>{name}</h3>
              <p className='text-base md:text-[13px] min-[990px]:text-base min-[1400px]:text-lg'>{tecnologies}</p>
              <div className='flex justify-center items-center min-[1400px]:text-2xl gap-2 min-[400px]:text-xl text-[23px] mt-2'>
                <a className='transition ease-in-out delay-150 hover:scale-110 duration-300' href={repository} target='_blank' rel='noreferrer'> <BsGithub /></a>
                <a className='transition ease-in-out delay-150 hover:scale-110 duration-300' href={web} target='_blank' rel='noreferrer'> <TfiWorld /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
