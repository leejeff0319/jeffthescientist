import React from 'react'
  {/* <div className=" grid grid-cols-12 gap-4 mt-10">
                <div className="col-start-4 col-end-11"></div> */}
const DSNotes: React.FC = () => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <div style= {{background: '#3E4143'}}
      className=' m-2 rounded-md p-2'>
        <div className='text-xs sm:text-md md:text-xl lg:text-xl 2xl:text-2xl text-center text-gray-200'><strong>Statistics</strong></div>
        <div className='text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl text-left text-gray-200 mx-3'>
          <ul>
          <li><a href="https://github.com/leejeff0319/Notes/blob/main/Statistics/ANOVA_posthoc/ANOVA%20%26%20post%20hoc%20test.ipynb" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:underline">ANOVA & post hoc Test</a></li>
          </ul>
        </div>
      </div>
      <div style= {{background: '#3E4143'}}
      className='bg- m-2 rounded-md p-2'>
        <div className='text-xs sm:text-md md:text-xl lg:text-xl 2xl:text-2xl text-center text-gray-200'><strong>Machine Learning Models</strong></div>
        <div className='text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl text-left text-gray-200 mx-3'>
          <ul>
            <li><a href="https://github.com/leejeff0319/Notes/blob/main/Machine%20Learning%20Models/Decision%20Tree/Decision%20Tree%20%26%20Confusion%20Matrix.ipynb" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:underline">Decision Trees & Confusion Matrix</a></li>
            <li><a href="https://github.com/leejeff0319/Notes/blob/main/Machine%20Learning%20Models/K-means/K-means.ipynb" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:underline">K-means</a></li>
            <li><a href="https://github.com/leejeff0319/Notes/blob/main/Machine%20Learning%20Models/Random%20Forests/Random_Forests.ipynb" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:underline">Random Forests & Pickle</a></li>
            <li><a href="https://github.com/leejeff0319/Notes/blob/main/Machine%20Learning%20Models/Regressions/Linear_Regression.ipynb" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:underline">Linear Regression</a></li>
            <li><a href="https://github.com/leejeff0319/Notes/blob/main/Machine%20Learning%20Models/Regressions/Logistic_Regression.ipynb" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:underline">Logistic Regression</a></li>
            <li><a href="https://github.com/leejeff0319/Notes/blob/main/Machine%20Learning%20Models/Regressions/Multiple_Linear_Regression.ipynb" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:underline">Multiple Linear Regression</a></li>
          </ul>
        </div>
      </div>
      <div style= {{background: '#3E4143'}}
      className='bg- m-2 rounded-md p-2'>
        <div className='text-xs sm:text-md md:text-xl lg:text-xl 2xl:text-2xl text-center text-gray-200'><strong>Pytorch</strong></div>
        <div className='text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl text-left text-gray-200 mx-3'>
          <ul>
            <li><a href="https://github.com/leejeff0319/Notes/blob/main/PyTorch/Activation%20Functions.ipynb" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:underline">Activation Functions</a></li>
            <li><a href="https://github.com/leejeff0319/Notes/blob/main/PyTorch/Binary%20vs.%20Multi%20class.ipynb" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:underline">Binary vs. Multi class</a></li>
            <li><a href="https://github.com/leejeff0319/Notes/blob/main/PyTorch/CNN.ipynb" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:underline">Convolutional Neural Networks</a></li>
            <li><a href="https://github.com/leejeff0319/Notes/blob/main/PyTorch/Dataset%20%26%20DataLoader.ipynb" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:underline">Dataset & DataLoader</a></li>
            <li><a href="https://github.com/leejeff0319/Notes/blob/main/PyTorch/Feed%20Forward.ipynb" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:underline">Feed Forward</a></li>
            <li><a href="https://github.com/leejeff0319/Notes/blob/main/PyTorch/Gradient%20Descent%20.ipynb" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:underline">Gradient Descent</a></li>
            <li><a href="https://github.com/leejeff0319/Notes/blob/main/PyTorch/PyTorch.ipynb" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:underline">PyTorch</a></li>       
            <li><a href="https://github.com/leejeff0319/Notes/blob/main/PyTorch/Save_Load.ipynb" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:underline">Save & Load</a></li> 
            <li><a href="https://github.com/leejeff0319/Notes/blob/main/PyTorch/Softmax%20and%20Cross-Entropy.ipynb" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:underline">Softmax and Cross-Entropy</a></li> 
            <li><a href="https://github.com/leejeff0319/Notes/blob/main/PyTorch/TensorBoard.ipynb" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:underline">Tensor Board</a></li> 
            <li><a href="https://github.com/leejeff0319/Notes/blob/main/PyTorch/Transfer%20Learning.ipynb" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:underline">Transfer Learning</a></li>    
          </ul>
        </div>
      </div>
      <div style= {{background: '#3E4143'}}
      className='bg- m-2 rounded-md p-2'>
        <div className='text-xs sm:text-md md:text-xl lg:text-xl 2xl:text-2xl text-center text-gray-200'><strong>TensorFlow</strong></div>
        <div className='text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl text-left text-gray-200 mx-3'>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DSNotes