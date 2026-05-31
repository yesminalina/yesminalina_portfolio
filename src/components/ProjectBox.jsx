import { useEffect, useRef, useState } from 'react'

const ProjectBox = ({ children, reverse = false }) => {
  const ArticleRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting)
    }, { threshold: 0.2 })

    if (ArticleRef.current) { observer.observe(ArticleRef.current) }
    return () => observer.disconnect()
  }, [])

  const slideClass = reverse ? '-translate-x-40' : 'translate-x-40'

  return (
    <article
      ref={ArticleRef}
      className={`transition-all duration-500 ease-in ${visible ? 'opacity-100 translate-x-0' : `opacity-0 ${slideClass}`} flex flex-col ${reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'} gap-6 sm:gap-8 w-full`}
    >
      {children}
    </article>
  )
}

export default ProjectBox
