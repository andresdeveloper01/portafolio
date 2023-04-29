import AboutMe from './components/AboutMe'
import Header from './components/Header'
import Projects from './components/Projects'
import { IntersectionObserverProvider } from './context/IntersectionObserver'

function App () {
  return (
    <>
      <IntersectionObserverProvider>
        <Header />
        <AboutMe />
        <Projects />
      </IntersectionObserverProvider>
    </>
  )
}

export default App
