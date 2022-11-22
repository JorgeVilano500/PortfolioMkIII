import React, {useEffect, useState} from 'react';
import {ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';


export const TransactionContext = React.createContext();


const { ethereum } = window;


const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();

    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer)
    
    console.log({
        provider, 
         });
    return transactionContract;
}


export const TransactionProvider = ({children}) => {
    const [transactionContract, setTransactionCount] = useState(localStorage.getItem('transactionCount'));
    const [isLoading, setIsLoading] = useState(false)
    const [transactions, setTransactions] = useState([])
    const [formData, setFormData] = useState({
        addressTo: '', amount: '', keyword: '', message: ''
    });
    const [currentAccount, setCurrentAccount] = useState('')

    const handleChange = (e, name) => {
        // dynamically updates form data 
        setFormData((prevState) => ({...prevState, [name]: e.target.value})) // this helps reuse the function for input data. 
    }

    const getAllTransactions = async () => {
        try {
            const transactionContract = getEthereumContract();
            if(!ethereum) return alert('Please Install Metamask')
            const availableTransactions = await transactionContract.getAllTransactions();

            const structuredTransactions = availableTransactions.map((transaction) => ({
                addressTo: transaction.receiver, 
                addressFrom: transaction.sender, 
                timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleDateString(),
                message: transaction.message, 
                keyword: transaction.keyword, 
                amount: parseInt(transaction.amount._hex) / (10 ** 18)

            }))
            setTransactions(structuredTransactions);
            console.log(structuredTransactions)
        } catch (error) {
            console.log(error)
        }
    }


    const checkIfWalletIsConnected = async () => {
        try{
            if(!ethereum) return alert('Please Install Metamask');

            const accounts = await ethereum.request({method: 'eth_accounts'});
    
            console.log(accounts);
    
            if(accounts.length) {
                setCurrentAccount(accounts[0]);
                // get All transactions here ()
                //  getAllTransactions();
    
    
            } else {
                console.log('No Accounts found');
            }
        } catch(e) {
            console.log(e);

            throw new Error("No ethereum object");

        }


    }

    const checkIfTransactionsExist = async () => {
        try{
            const transactionContract = getEthereumContract();
            const transactionCount = await transactionContract.getTransactionCount();

            window.localStorage.setItem('transactionCount', transactionCount);

        } catch(e) {
            console.log(e);

            throw new Error("No ethereum object");
        }
    }


    const connectWallet = async () => {
        try{
            if(!ethereum) return alert('Please Install Metamask');
            const accounts = await ethereum.request({method: 'eth_requestAccounts'});
            setCurrentAccount(accounts[0]);
            
        } catch(e) {
            console.log(e);

      throw new Error("No ethereum object");
        }
    }


    const sendTransaction = async () => { // first sent transaction through metamask, then add transaction to smart contract 
        try {
            if(!ethereum) return alert('Please Install Metamask');

            const { addressTo, amount, keyword, message } = formData;
            let tx = Number(amount) * 0.01
            let finalFee = Number(amount) - tx;
            const txFee = ethers.utils.parseEther(tx.toString());
            let parsedAmount = ethers.utils.parseEther(finalFee.toString());
            
            console.log( parsedAmount, txFee, finalFee);

            const transactionContract = getEthereumContract();

            await ethereum.request({
                method: 'eth_sendTransaction', 
                params: [{
                    from: currentAccount, 
                    to: '0xF3e0A636DD005c7869CC4209b9e0B0b54D13745A', 
                    gas: '0x5208', // 21000 gei 
                    value: amount._hex, // starts from 0.0001 also neeeds to be in hexadecamal            
                  }]
            });
         
            // , {value: txFee._hex}
//, {value: ethers.utils.parseEther(txFee)}
           

            const transactionCount = await transactionContract.getTransactionCount();


            setTransactionCount(transactionCount.toNumber());
            window.reload();
        }
        catch(error) {
            console.log(error);
            throw new Error('Cant Send Transaction')
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
        // checkIfTransactionsExist();
    }, [])




    return (
        <TransactionContext.Provider value={{connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction, transactions, isLoading }} >
            {children}
        </TransactionContext.Provider>
    )
}