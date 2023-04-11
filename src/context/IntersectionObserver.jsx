import { createContext, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export const IntersectionObserver = createContext()
export function IntersectionObserverProvider ({ children }) {
  const [toggleActive, setToggleActive] = useState('home')

  const [ref1, inView1] = useInView({
    rootMargin: '-150px'
  })
  const [ref2, inView2] = useInView({
    rootMargin: '-150px'
  })
  const [ref3, inView3] = useInView({
    rootMargin: '-150px'
  })

  useEffect(() => {
    if (inView1) {
      setToggleActive('home')
    }
    if (inView2) {
      setToggleActive('about')
    }
    if (inView3) {
      setToggleActive('projects')
    }
  }, [inView1, inView2, inView3, setToggleActive])

  const data = { toggleActive, setToggleActive, ref1, ref2, ref3, inView1, inView2, inView3 }

  return (
    <IntersectionObserver.Provider value={data}>
      {children}
    </IntersectionObserver.Provider>
  )
}
