import React from 'react';
import './SubmitAnsForm.css'
const SubmitAnsForm = () => {
	return (
		<div>
			<p className='f3'>
        		{'Submit your answer here.'}
      		</p>
      		<div className='center'>
        		<div className='form center pa4 br3 shadow-5'>
          			<input className='f4 pa2 w-70 center' type='tex'/>
          			<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Submit</button>
        		</div>
      		</div>
		</div>
	);
}

export default SubmitAnsForm;