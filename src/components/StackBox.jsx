import { useEffect, useRef, useState } from 'react'

const StackBox = ({children}) => {
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
    <article ref={ArticleRef} className={`transition-all duration-500 ease-in ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-40'} flex`}>
      {children}
    </article>
  )
}

export default StackBox
