import { useState } from 'react';
 function App(){
  const inputStyle = {padding: '10px',borderRadius: '10px',width: '300px',margin: '20px'}

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [message, setMessage] = useState('');
  const [bmi, setBMI] = useState('');
  const [show,setShow] = useState(false)

  function calculateBMI() {
    const h = height / 100;
    const bmi = weight / (h * h);

    if (bmi < 16) {
      setMessage('Severe Thinness. ')
      setBMI('Your BMI is ' + bmi.toFixed(2));
    } else

    if (bmi >= 16 && bmi < 17) {
      setMessage('Moderate Thinness. ')
      setBMI('Your BMI is ' + bmi.toFixed(2));
    } else
    
    if (bmi >= 17 && bmi < 18.5) {
      setMessage('Mild Thinness. ')
      setBMI('Your BMI is ' + bmi.toFixed(2));
    } else

    if (bmi >= 18.5 && bmi < 25) {
      setMessage('Healthy weight. ')
      setBMI('Your BMI is ' + bmi.toFixed(2));
    } else
    
    if (bmi >= 25 && bmi < 30) {
      setMessage('Overweight. ')
      setBMI('Your BMI is ' + bmi.toFixed(2));
    } else
    
    if (bmi >= 30 && bmi < 35) {
      setMessage('Obese Class I. ')
      setBMI('Your BMI is ' + bmi.toFixed(2));
    } else

    if (bmi >= 35 && bmi < 40) {
      setMessage('Obese Class II. ')
      setBMI('Your BMI is ' + bmi.toFixed(2));
    } else

    if (bmi >= 40) {
      setMessage('Obese Class III. ')
      setBMI('Your BMI is ' + bmi.toFixed(2));
    }
    setShow(true)
  }

  const resetAll = ()=>{
    setHeight('')
    setWeight('')
  }

  return(
    <div className="app">
<div className="row">
<div className="col-lg-4"></div>
<div className="col-lg-4">
<div className='card w-100 mt-5 d-flex justify-content-center align-items-center flex-column shadow'>
          <h1 className='text-success'>BMI Calculator</h1>
          <span className='text-center text-secondary'>Let's calculate your Body Mass Index. <br></br> Type the values below</span>
          
          <div className="area-input mt-3 d-flex justify-content-center align-items-center flex-column mb-3">
            <input type="text"placeholder="Weight (in kg)"
              value={weight}
              className='form-control'
              
              onChange={ (e) => setWeight(e.target.value)}
              style={inputStyle} 
            />
    
            <input type="text"      
              placeholder="Height (in cm)"
              value={height}
              className='form-control'
              onChange={ (e) => setHeight(e.target.value)}
              style={inputStyle} 
            />
<div className='d-flex justify-content-center align-items-center'>
              <button className='btn btn-success me-3' onClick={calculateBMI}>
                Calculate
              </button>
              <button className='btn btn-primary' onClick={resetAll}>
                Reset
              </button>
  
</div>
    
  </div>
  
</div></div>
<div className="col-lg-4"></div>
      </div>
<div className='row mt-5 mb-5'>
  <div className="col-lg-4"></div>
  <div className="col-lg-4">
    
{
  show &&
  <div className='card d-flex justify-content-center align-items-center shadow mb-5 result'>
  {/* <h2 className='text-warning'>Your BMI is :</h2> */}
          <h2 className='text-primary text-center mb-5 mt-5'> {message} {bmi} </h2>
  
</div>     
}   </div>
        <div className="col-lg-4"></div>

  
</div>    </div>

//     <div>
//            <div className="row">
//         <div className="col-lg-4"></div>
//         <div className="col-lg-4 ">
// <div className='card w-100 mt-5 d-flex justify-content-center align-items-center flex-column shadow'>
//   <div>
//               <h1 className='mt-3 text-success d-flex justify-content-center align-items-center flex-column'>BMI Calculator</h1>
//               <span className='text-center text-secondary'>Let's calculate your Body Mass Index. <br></br> Type the values below</span>
    
//   </div>   
        
    
//   <div>  
//             <form   className='mt-3 d-flex justify-content-center align-items-center flex-column mb-3'>
//                 <input type="text" placeholder='Weight(in kg)' id='name' name='name'   style={inputStyle}    className="form-control" value={weight}
//      onChange={ (e) => setWeight(e.target.value)}/>
//                 {/* <p style={{color:"red"}}>{formErrors.name}</p> */}

//                 <input type="text" placeholder='Height(cm)' id='number' name='number'   style={inputStyle}  className="form-control" value={height} onChange={ (e) => setHeight(e.target.value)}/>
//                 {/* <p style={{color:"red"}}>{formErrors.number}</p> */}

// <div className="d-flex justify-content-around align-items-center flex-row">
//                   <button onClick={calculateBMI}  className='btn btn-success rounded text-light w-75 me-2'>Calculate</button>
//                   <button type='reset'   className='btn btn-success rounded text-light w-75'>Reset</button>
  
// </div>
  
//               </form>
//   </div>          </div>
  
// </div>
// <div className="col-lg-4"></div>


//         </div>
        

// <div>
//         <h2> {message} {bmi} </h2>
//       </div>
  
// </div>    
  )
}
export default App;