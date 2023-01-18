import React, {useState} from 'react'
import pdf from '../assets/pdfs/Resume.pdf'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';


function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber+ offset)
  }

  function changePageBack() {
    changePage(-1)
  }
  function changePageForward() {
    changePage(+1)
  }
  return (
    <div className='container mb-5 mt-2' style={{height: '100vh'}}>
        <div className='row'>
          <div className='col'>
          {
              pageNumber > 1 && 
              <button style={{backgroundColor: '#121212', color: 'white', marginBottom: '10px'}} onClick={changePageBack}>Previous</button>
            }
          </div>
          <div className='col'>
          <div className='justify-content-center'>
                <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess} onLoadError={console.error}>
                <Page height='1000' pageNumber={pageNumber} />
              </Document>
            </div>
          
            
          </div>
          <div className='col'>
          {
              pageNumber < numPages && 
              <button style={{backgroundColor: '#121212', color: 'white', marginLeft: '10px', marginBottom: '10px'}} onClick={changePageForward}>Next Page</button>
            }

          </div>
        </div>
        </div>
  )
}

export default Resume