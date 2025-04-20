import { useEffect, useRef, useState } from 'react'

const ProjectBox = ({ children }) => {
  const ArticleRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
      }
    }, { threshold: 0.4 })

    if (ArticleRef.current) { observer.observe(ArticleRef.current) }
    return () => observer.disconnect()
  }, [])

  return (
    <article ref={ArticleRef} className={`transition-all duration-500 ease-in ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-40'} grid grid-cols-12 w-11/12 m-auto`}>
      {children}
    </article>
  )
}

export default ProjectBox
