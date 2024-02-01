import React from 'react'
import {
    MDBFooter}from 'mdb-react-ui-kit';
function Footer() {
  return (
    <div>
        <br /><br /><br /><br /><br /><br /><br /><br />
         <MDBFooter bgColor='light' className='text-center text-lg-left'>
          <div className='text-center p-3' style={{ backgroundColor: 'blue', color:"white" }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='/'>
          Stopwatch.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer