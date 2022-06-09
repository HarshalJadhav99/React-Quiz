import React,{useRef} from 'react'

const Start = ({setName,setTimeOut}) => {
    const inputRef=useRef();
    const handleClick=()=>{
        setTimeOut(false)
        inputRef.current.value&&setName(inputRef.current.value)
    }
  return (
    <div style={{margin:"auto",padding:"15px",maxWidth:"400px",alignContent:'center',marginTop:'300px'}}><input type="text" placeholder='Enter Your Name' ref={inputRef} className="form-control"/>
    <button className='btn w-100 mt-3' style={{background:"white" ,color:"#101427"}} onClick={handleClick}>Start</button></div>
  )
}

export default Start