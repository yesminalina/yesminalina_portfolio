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
    <article ref={ArticleRef} className={`transition-all duration-500 ease-in ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-40'} flex flex-col sm:w-1/4 mb-4 sm:me-4 p-4 rounded-lg shadow-xl bg-pink/20 backdrop-blur-xl border-pink/30 border`}>
      {children}
    </article>
  )
}

export default StackBox
