import React from 'react'

const RSNotes: React.FC = () => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <div className='bg-blue-200 m-2 rounded-md'>
        <div className='text-2xl text-center text-blue-500'><strong>Biology</strong></div>
        <div className='text-md text-left text-blue-500 mx-5'>
          <ul>
            <li>hi</li>
            <li>hi</li>
          </ul>
        </div>
      </div>
      <div className='bg-blue-200 m-2 rounded-md'>
        <div className='text-2xl text-center text-blue-500'><strong>Chemistry</strong></div>
        <div className='text-md text-left text-blue-500 mx-5'>
          <ul>
            <li>hi</li>
            <li>hi</li>
          </ul>
        </div>
      </div>
      <div className='bg-blue-200 m-2 rounded-md'>
        <div className='text-2xl text-center text-blue-500'><strong>Organic Chemistry</strong></div>
        <div className='text-md text-left text-blue-500 mx-5'>
          <ul>
            <li>hi</li>
            <li>hi</li>
          </ul>
        </div>
      </div>
      <div className='bg-blue-200 m-2 rounded-md'>
        <div className='text-2xl text-center text-blue-500'><strong>Physics</strong></div>
        <div className='text-md text-left text-blue-500 mx-5'>
          <ul>
            <li>hi</li>
            <li>hi</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RSNotes