import React from 'react'
import { useBlogStateContext } from '../context/BlogContext'
import InputField from './InputField';
import SubmitButton from './SubmitButton';

function AddQuote() {
  const {
    addQuote, 
    quoteHeader, setQuoteHeader, 
    quoteBody, setQuoteBody   
  } = useBlogStateContext();
  return (
    <div className='card bg-dark text-white w-100 p-3 '>
      <h2>Add a Quote Today?</h2>
      <InputField
        type='text'
        placeholder='Quote Header'
        value={quoteHeader ? quoteHeader : ''}
        onChange={e => setQuoteHeader(e.target.value)}
      />
      <br/>
      <InputField
        type='text'
        placeholder='Quote Body'
        value={quoteBody ? quoteBody : ''}
        onChange={e => setQuoteBody(e.target.value)}
      /> <br />
      <SubmitButton
        text={'Add Quote'}
        disabled={false}
        onClick={() => addQuote()}
      />
    </div>
  )
}

export default AddQuote