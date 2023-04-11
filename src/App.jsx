import AboutMe from './components/AboutMe'
import Header from './components/Header'
import Projects from './components/Projects'
import { IntersectionObserverProvider } from './context/IntersectionObserver'

function App () {
  return (
    <>
      <IntersectionObserverProvider>
        <Header />
        <main>
          <AboutMe />
          <Projects />
        </main>
      </IntersectionObserverProvider>
    </>
  )
}

export default App
