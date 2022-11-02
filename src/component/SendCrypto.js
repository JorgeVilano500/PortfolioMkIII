import React,{useContext} from 'react'
import { TransactionContext } from '../context/TransactionContext'


const Input = ({placeholder, name, type, value, handleChange}) => (
    <input 
        placeholder={placeholder}
        type={type}
        step='0.0001'
        value={value}
        onChange={(e) => {handleChange(e, name)}}
        className='my-2 p-2 bg-transparent text-white rounded'
    />
)


function SendCrypto() {
    const {connectWallet, currentAccount, formData, handleChange, sendTransaction, isLoading} = useContext(TransactionContext)

    const handleSubmit =(e) => {
        const { addressTo, amount, keyword, message } = formData;

        console.log('submitted')
        e.preventDefault(); // when we submit we prevent reload

        if( !amount || !keyword || !message) return;
    
        sendTransaction();
    }
  return (
    <div>
        <div className='card bg-dark text-white p-2'>
                Send some Crypto for support <br />
                <p>For now press edit to adjust the amount you want to send to my account</p>
                {!currentAccount ? (
                    <button type='button' onClick={connectWallet}>
                        Connect Your wallet first
                    </button> 
                ) : (
                    <div className='p-2 mb-3'>
                        {/* <Input placeholder='Send Some Crypto' name='addressTo' type='text' handleChange={handleChange} /><br /> */}
                        <Input placeholder='Amount' name='amount' type='number' handleChange={handleChange} /><br />
                        <Input placeholder='Message for gif' name='keyword' type='text' handleChange={handleChange} /> <br />
                        <Input placeholder='Send a message with the crypto' name='message' type='text' handleChange={handleChange} /> <br/>
                        {isLoading ? (
                            <div>
                                Loading
                            </div>
                        ) : (
                            <div>
                                <button
                                    type='button'
                                    onClick={handleSubmit}
                                    className='btn-primary'
                                >
                                    Send Crypto
                                </button>
                            </div>
                        )}
                    </div>
                )}
                </div>
    </div>
  )
}

export default SendCrypto
