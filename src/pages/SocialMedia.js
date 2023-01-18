import React, {useContext} from 'react'
import CircularGrid from '../component/CircularGrid'
import SendCrypto from '../component/SendCrypto'
import { TransactionContext } from '../context/TransactionContext'


function SocialMedia() {

  return (
    <div className='container'>
        <div className='row'>
            <div className='col mt-3'>
                <SendCrypto />
                
            </div>
            <div className='col'>
                Click to open Websites
                <CircularGrid />
            </div>
            {/* <div className='col'>
                Placement for gifs when transactions are made
            </div> */}
        </div>
    </div>
  )
}

export default SocialMedia
