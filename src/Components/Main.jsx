import React, { useEffect, useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';


function Main() {
    const[sec,setSec]=useState(0)
    const[min,setMin]=useState(0)
    var timer;
    useEffect(()=>{
        // eslint-disable-next-line react-hooks/exhaustive-deps
        timer=setInterval(()=>{
      setSec(sec+1);
      
      if(sec===59){
        setMin(min+1);
        setSec(0);
      }
      },500);
      
      return()=>clearInterval(timer);
       })
      
      function stop(){
        clearInterval(timer);
      };
      function reset(){
        setSec(0);
        setMin(0);
      }
      
      
  
  return (
    <div className='container' style={{height:"50vh", width:"350px"}}>
        <center><br /><br />
        <div>
        <p style={{color:"white"}}><b>Nivia &nbsp;&nbsp;</b>JS&nbsp;307</p>
</div>
 <div className='text'>
            <h1 style={{color:"black"}}>{min<10?"0"+min:min+1} : {sec<10?"0"+sec:sec+1}</h1>
        </div>
</center> <br /><br /><br />
<div className="btn">
 <center>
<MDBBtn rounded  color='dark' onClick={reset}>
    Reset
      </MDBBtn>
      <MDBBtn rounded color='danger' onClick={stop} >
        Stop
      </MDBBtn>

</center>
    </div>
    </div>
  )
}

export default Main