import { useEffect, useRef, useState } from 'react'
import { Element } from 'react-scroll'

const ProjectBox = ({ children }) => {
  const ArticleRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      entry.isIntersecting ? setVisible(true) : setVisible(false)
    }, { threshold: 0.4 })

    if (ArticleRef.current) { observer.observe(ArticleRef.current) }
    return () => observer.disconnect()
  }, [])

  return (
    <article ref={ArticleRef} className={`transition-all duration-1000 ease-in-out ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-40'} grid grid-cols-12 w-11/12 m-auto`}>
      {children}
    </article>
  )
}

export default ProjectBox
