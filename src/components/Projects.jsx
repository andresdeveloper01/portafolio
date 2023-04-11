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
      <div className='w-full mx-[calc(1.5rem*-.5)] flex flex-wrap '>
        {webs.map(({ name, img, id, tecnologies, repository, web }) => (
          <div className='px-[calc(1.5rem*.5)]  min-[576px]:w-2/4 md:w-1/3' key={id}>
            <div className='rounded-3xl overflow-hidden mb-6 relative container-before hover:opacity-100'>
              <img className='h-auto w-full align-middle rounded-3xl' src={img} alt={name} />
              <div className='absolute text-center top-[50%] w-full opacity-0 h-full duration-500 transition-all translate-[-50%,-50%]'>
                <h3 className='text-2xl min-[1400px]:text-4xl font-bold'>{name}</h3>
                <p className='text-[15px] min-[1400px]:text-lg'>{tecnologies}</p>
                <div className='flex justify-center items-center min-[1400px]:text-2xl gap-2 min-[400px]:text-xl text-[15px] mt-2'>
                  <a className='transition ease-in-out delay-150 hover:scale-110 duration-300' href={repository} target='_blank' rel='noreferrer'> <BsGithub /></a>
                  <a className='transition ease-in-out delay-150 hover:scale-110 duration-300' href={web} target='_blank' rel='noreferrer'> <TfiWorld /></a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
