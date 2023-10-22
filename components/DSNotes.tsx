import React from 'react'

const DSNotes: React.FC = () => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <div style= {{background: '#3E4143'}}
      className=' m-2 rounded-md'>
        <div className='text-2xl text-center text-gray-200'><strong>Statistics</strong></div>
        <div className='text-md text-left text-gray-200 mx-5'>
          <ul>
            <li>hi</li>
            <li>hi</li>
          </ul>
        </div>
      </div>
      <div style= {{background: '#3E4143'}}
      className='bg- m-2 rounded-md'>
        <div className='text-2xl text-center text-gray-200'><strong>Machine Learning Models</strong></div>
        <div className='text-md text-left text-gray-200 mx-5'>
          <ul>
            <li>hi</li>
            <li>hi</li>
          </ul>
        </div>
      </div>
      <div style= {{background: '#3E4143'}}
      className='bg- m-2 rounded-md'>
        <div className='text-2xl text-center text-gray-200'><strong>Pytorch</strong></div>
        <div className='text-md text-left text-gray-200 mx-5'>
          <ul>
            <li>hi</li>
            <li>hi</li>
          </ul>
        </div>
      </div>
      <div style= {{background: '#3E4143'}}
      className='bg- m-2 rounded-md'>
        <div className='text-2xl text-center text-gray-200'><strong>TensorFlow</strong></div>
        <div className='text-md text-left text-gray-200 mx-5'>
          <ul>
            <li>hi</li>
            <li>hi</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DSNotes