import mylogo from '../assets/mylogo.png';

const Upper = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full  pt-5">
        {<img src={mylogo} alt="Smart_Summarizer_logo" className='w-2/5 mx-auto'/>}        
      </nav>
      <h2 className='head_text blue_gradient'> Summarize Articles 
    </h2>
      <h3 className='desc'>Refine your reading journey with Smart Summarizer – a cutting-edge article summarizer crafted to distill extensive articles into seamlessly concise summaries, offering a refined and efficient way to absorb information
      </h3>
    </header>
  )
}

export default Upper