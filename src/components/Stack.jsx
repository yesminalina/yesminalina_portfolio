import { Element } from 'react-scroll'
import Html from './Icons/Html'
import Css from './Icons/Css'
import Bootstrap from './Icons/Bootstrap'
import TailwindCSS from './Icons/TailwindCSS'
import Javascript from './Icons/Javascript'
import ReactJS from './Icons/ReactJS'
import Vite from './Icons/Vite'
import NodeJs from './Icons/NodeJs'
import stack from '../assets/json/stack.json'
import Express from './Icons/Express'
import Flask from './Icons/Flask'
import PostgreSQL from './Icons/PostgreSQL'
import MySQL from './Icons/MySQL'
import Swagger from './Icons/Swagger'
import Git from './Icons/Git'
import GitHub from './Icons/GitHub'
import VSCode from './Icons/VSCode'
import Postman from './Icons/Postman'
import Python from './Icons/Python'
import Numpy from './Icons/Numpy'
import Pandas from './Icons/Pandas'
import Matplotlib from './Icons/Matplotlib'
import Seaborn from './Icons/Seaborn'
import ScikitLearn from './Icons/Scikitlearn'

const Stack = () => {
  const myStack = Object.freeze(stack)
  const { frontend, backend, tools, 'data-analysis': dataAnalysis } = myStack.stack
  const ICON_COMPONENTS = {
    Html,
    CSS: Css,
    Bootstrap,
    TailwindCSS,
    Javascript,
    ReactJS,
    Vite,
    'Node.js': NodeJs,
    'Express.js': Express,
    Flask,
    PostgreSQL,
    MySQL,
    Swagger,
    Git,
    GitHub,
    VSCode,
    Postman,
    Python,
    Numpy,
    Pandas,
    Matplotlib,
    Seaborn,
    'Scikit-Learn': ScikitLearn
  }

  const renderStack = (techtype) => {
    return techtype.map(lang => {
      const IconComponent = ICON_COMPONENTS[lang]
      return (
        <div className='flex flex-col justify-center align-middle me-2 mb-2' key={lang}>
          <i className='self-center'><IconComponent width={56} height={56} /></i>
          <p className='self-center text-xs'>{lang}</p>
        </div>
      )
    })
  }

  return (
    <Element name='stack' className='py-28 bg-yellow_pale min-h-svh'>
      <div className='flex flex-col justify-around align-middle md:max-w-[1100px] mx-auto'>
        <h2 className='self-center text-4xl text-olive uppercase font-bold mb-16'>My Stack <span className='text-pink text-4xl'>.</span></h2>
        <div className='flex justify-around'>
          <article className='flex flex-col w-1/4 me-4 p-4 rounded-lg shadow-xl hover:shadow-inner bg-gradient-to-br from-mint'>
            <h3 className='uppercase text-slate-500 font-semibold self-center mb-4'>Frontend</h3>
            <div className='flex flex-wrap justify-center'>
              {renderStack(frontend)}
            </div>
          </article>
          <article className='flex flex-col w-1/4 me-4 p-4 rounded-lg shadow-xl hover:shadow-inner bg-gradient-to-br from-mint'>
            <h3 className='uppercase text-slate-500 font-semibold self-center mb-4'>Backend</h3>
            <div className='flex flex-wrap justify-center'>
              {renderStack(backend)}
            </div>
          </article>
          <article className='flex flex-col w-1/4 me-4 p-4 rounded-lg shadow-xl hover:shadow-inner bg-gradient-to-br from-mint'>
            <h3 className='uppercase text-slate-500 font-semibold self-center mb-4'>Tools</h3>
            <div className='flex flex-wrap justify-center'>
              {renderStack(tools)}
            </div>
          </article>
          <article className='flex flex-col w-1/4 me-4 p-4 rounded-lg shadow-xl hover:shadow-inner bg-gradient-to-br from-mint'>
            <h3 className='uppercase text-slate-500 font-semibold self-center mb-4'>Data Analysis</h3>
            <div className='flex flex-wrap justify-center'>
              {renderStack(dataAnalysis)}
            </div>
          </article>
        </div>
      </div>
    </Element>
  )
}

export default Stack
