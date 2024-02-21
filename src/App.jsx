import './App.css'
import { FloatingLabel,Form } from 'react-bootstrap'
import './bootstrap.min.css'
import { useState } from 'react'

function App() {
  const [update,setupdate]=useState('')

  const handleclick = (content)=>{
    setupdate(prevInputValue=>prevInputValue+ content)
  }
  const handleclear = ()=>{
    setupdate('')
  }
  const hanleclearone = ()=>{
    setupdate(prevInputValue=>prevInputValue.slice(0,-1))
  }
  const handleCalculate = () => {
     {
      setupdate(eval(update));
    } 
  }
  return (
    <>
    <div className=' p-5 bg-dark'>
      <div style={{height:'500px',marginTop:'50px'}} className='container w-25 mt-5 mb-5 '>
        <div style={{backgroundColor:'grey'}} className='p-3 border rounded mt-2 mb-2'>
          <FloatingLabel
        controlId="floatingInput"
        label=""
        className="mb-3"
      >
        <Form.Control type="text" value={update} onChange={(e)=>setupdate(e.target.value)} placeholder="0" />
      </FloatingLabel>
      <hr />
      <div className="row mb-2">
        <div className="col-lg-3 "><button onClick={hanleclearone}  className='rounded-circle fs-1 align-item-center'>c</button></div>
        <div className="col-lg-3"><button onClick={()=>handleclick("(")} className='rounded-circle fs-1'>(</button></div>
        <div className="col-lg-3"><button onClick={()=>handleclick(")")} className='rounded-circle fs-1'>)</button></div>
        <div className="col-lg-3"><button onClick={()=>handleclick("/")} className='rounded-circle fs-1'>/</button></div>
      </div>
      <div className="row mb-2">
        <div className="col-lg-3 "><button onClick={()=>handleclick("7")} className='rounded-circle fs-1 align-item-center'>7</button></div>
        <div className="col-lg-3"><button onClick={()=>handleclick("8")} className='rounded-circle fs-1'>8</button></div>
        <div className="col-lg-3"><button onClick={()=>handleclick("9")} className='rounded-circle fs-1'>9</button></div>
        <div className="col-lg-3"><button onClick={()=>handleclick("*")} className='rounded-circle fs-1'>*</button></div>
      </div>
      <div className="row mb-2">
        <div className="col-lg-3 "><button onClick={()=>handleclick("4")} className='rounded-circle fs-1 align-item-center'>4</button></div>
        <div className="col-lg-3"><button onClick={()=>handleclick("5")} className='rounded-circle fs-1'>5</button></div>
        <div className="col-lg-3"><button onClick={()=>handleclick("6")} className='rounded-circle fs-1'>6</button></div>
        <div className="col-lg-3"><button onClick={()=>handleclick("-")} className='rounded-circle fs-1'>-</button></div>
      </div>
      <div className="row mb-2">
        <div className="col-lg-3 "><button onClick={()=>handleclick("1")} onClick={()=>handleclick("1")} className='rounded-circle fs-1 align-item-center'>1</button></div>
        <div className="col-lg-3"><button onClick={()=>handleclick("2")} className='rounded-circle fs-1'>2</button></div>
        <div className="col-lg-3"><button onClick={()=>handleclick("3")} className='rounded-circle fs-1'>3</button></div>
        <div className="col-lg-3"><button onClick={()=>handleclick("+")} className='rounded-circle fs-1'>+</button></div>
      </div>
      <div className="row mb-2">
        <div className="col-lg-3 "><button onClick={handleclear}  className='rounded-circle fs-1 align-item-center'>AC</button></div>
        <div className="col-lg-3"><button onClick={()=>handleclick("0")} className='rounded-circle fs-1'>0</button></div>
        <div className="col-lg-3"><button onClick={()=>handleclick(".")} className='rounded-circle fs-1'>.</button></div>
        <div className="col-lg-3"><button onClick={handleCalculate}  className='rounded-circle fs-1'>=</button></div>
      </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
