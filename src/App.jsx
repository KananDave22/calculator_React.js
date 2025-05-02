import React, { useState } from 'react'
import './App.css'

const App = () => {

const [value, setValue] = useState('')

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-800'>
        <div className="bg-white p-6 rounded-md shadow-md">
          <form action="">
            <div className='border-amber-500 border-2 rounded-md flex justify-end mb-5'>
             <input type="text" value={value} className='border-none outline-0 w-15 h-16 text-xl text-right bg-amber-100 flex-1' />
            </div>
            
            <div>
              <input type="button" value="AC" className='p-1 bg-yellow-200 rounded-b-sm border-none outline-0 w-15 h-15 text-md m-0.5 font-extrabold hover:bg-amber-600' onClick={(e) => setValue('')}/>
              <input type="button" value="DE" className='p-1 bg-yellow-200 rounded-b-sm border-none outline-0 w-15 h-15 text-md m-0.5 font-extrabold hover:bg-amber-600' onClick={(e) => setValue(value.slice(0,-1))}/>
              <input type="button" value="." className='p-1 bg-yellow-200 rounded-b-sm border-none outline-0 w-15 h-15 text-md m-0.5 font-extrabold hover:bg-amber-600' onClick={(e) => setValue(value + e.target.value)}/>
              <input type="button" value="/" className='p-1 bg-yellow-200 rounded-b-sm border-none outline-0 w-15 h-15 text-md m-0.5 font-extrabold hover:bg-amber-600' onClick={(e) => setValue(value + e.target.value)}/>
            </div>
            <div>
              <input type="button" value="7"  className='p-1 bg-yellow-200 rounded-b-sm border-none outline-0 w-15 h-15 text-md m-0.5 font-extrabold hover:bg-amber-600' onClick={(e) => setValue(value + e.target.value)}/>
              <input type="button" value="8"   className='p-1 bg-yellow-200 rounded-b-sm border-none outline-0 w-15 h-15 text-md m-0.5 font-extrabold hover:bg-amber-600' onClick={(e) => setValue(value + e.target.value)}/>
              <input type="button" value="9"  className='p-1 bg-yellow-200 rounded-b-sm border-none outline-0 w-15 h-15 text-md m-0.5 font-extrabold hover:bg-amber-600' onClick={(e) => setValue(value + e.target.value)}/>
              <input type="button" value="*"  className='p-1 bg-yellow-200 rounded-b-sm border-none outline-0 w-15 h-15 text-md m-0.5 font-extrabold hover:bg-amber-600' onClick={(e) => setValue(value + e.target.value)}/>
            </div>


            <div>
              <input type="button" value="4"  className='p-1 bg-yellow-200 rounded-b-sm border-none outline-0 w-15 h-15 text-md m-0.5 font-extrabold hover:bg-amber-600 cursor-pointer' onClick={(e) => setValue(value + e.target.value)}/>
              <input type="button" value="5"  className='p-1 bg-yellow-200 rounded-b-sm border-none outline-0 w-15 h-15 text-md m-0.5 font-extrabold hover:bg-amber-600 cursor-pointer' onClick={(e) => setValue(value + e.target.value)}/>
              <input type="button" value="6"  className='p-1 bg-yellow-200 rounded-b-sm border-none outline-0 w-15 h-15 text-md m-0.5 font-extrabold hover:bg-amber-600 cursor-pointer' onClick={(e) => setValue(value + e.target.value)}/>
              <input type="button" value="+"  className='p-1 bg-yellow-200 rounded-b-sm border-none outline-0 w-15 h-15 text-md m-0.5 font-extrabold hover:bg-amber-600 cursor-pointer' onClick={(e) => setValue(value + e.target.value)}/>
            </div>
            <div>
              <input type="button" value="1"  className='p-1 bg-yellow-200 rounded-b-sm border-none outline-0 w-15 h-15 text-md m-0.5 font-extrabold hover:bg-amber-600 cursor-pointer' onClick={(e) => setValue(value + e.target.value)}/>
              <input type="button" value="2"  className='p-1 bg-yellow-200 rounded-b-sm border-none outline-0 w-15 h-15 text-md m-0.5 font-extrabold hover:bg-amber-600 cursor-pointer' onClick={(e) => setValue(value + e.target.value)}/>
              <input type="button" value="3"  className='p-1 bg-yellow-200 rounded-b-sm border-none outline-0 w-15 h-15 text-md m-0.5 font-extrabold hover:bg-amber-600 cursor-pointer' onClick={(e) => setValue(value + e.target.value)}/>
              <input type="button" value="-"  className='p-1 bg-yellow-200 rounded-b-sm border-none outline-0 w-15 h-15 text-md m-0.5 font-extrabold hover:bg-amber-600 cursor-pointer' onClick={(e) => setValue(value + e.target.value)}/>
            </div>

            <div>
              <input type="button" value="00"  className='p-1 bg-yellow-200 rounded-b-sm border-none outline-0 w-15 h-15 text-md m-0.5 font-extrabold hover:bg-amber-600 cursor-pointer' onClick={(e) => setValue(value + e.target.value)}/>
              <input type="button" value="0"  className='p-1 bg-yellow-200 rounded-b-sm border-none outline-0 w-15 h-15 text-md m-0.5 font-extrabold hover:bg-amber-600 cursor-pointer' onClick={(e) => setValue(value + e.target.value)}/>
              <input type="button" value="="  className='p-1 bg-yellow-200 rounded-b-sm border-none outline-0 w-30 h-15 text-md m-0.5 font-extrabold hover:bg-amber-600 cursor-pointer' onClick={(e) => setValue(eval(value))}/>
            </div>
          </form>
        </div>
    </div>
  )
}

export default App
