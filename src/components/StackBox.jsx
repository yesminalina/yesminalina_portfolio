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
    <article ref={ArticleRef} className={`transition-all transform-3d duration-1000 ease-in-out ${visible ? 'opacity-100 [transform:rotateY(180deg)]' : 'opacity-0'} sm:w-1/4 mb-4 sm:me-4 p-4 rounded-lg shadow-xl bg-olive/20 backdrop-blur-xl border-olive/30 border`}>
      <div className='[transform:rotateY(180deg)] flex flex-col justify-center'>
        {children}
      </div>
    </article>
  )
}

export default StackBox
