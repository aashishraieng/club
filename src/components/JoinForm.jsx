import {useState,useEffect} from "react";

export default function JoiningForm()  {
   const [isValidPhoneNum, setIsValidPhoneNum] = useState(null);
   const [isValidRegNo, setIsValidRegNo] = useState(null);
   const [phoneNumText, setPhoneNum] = useState("");
   const [regnoText, setRegNo] = useState("");
   function handleRegInput(evt)  {
     setRegNo(evt.target.value.trimLeft().trimRight());
     if (regnoText === "") setIsValidRegNo(null);	
     else setIsValidRegNo((regnoText.match(/\d+$/) !== null));
   }
   function handlePhoneNumInp(evt)  {
     setPhoneNum(evt.target.value.trimLeft().trimRight());
     if (phoneNumText === "")  setIsValidPhoneNum(null);
     else setIsValidPhoneNum((phoneNumText.match(/\d+$/) !== null) && (phoneNumText.length === 10));
   }
   return (
     <section className="py-24 contact-bg">
	<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
	  <div style={{padding: "4em", display: "grid",placeItems: "center", width: "70%"}}>
	    <h2 className="text-3xl font-bold mb-8">Join MetaVerce and Discover your potential!</h2>
     	    <form style={{width: "100%"}}>
  	      <div className="form-group">
    	        <label htmlFor="exampleInputName1">full name</label>
    	        <input type="name" className="form-control" id="exampleInputName1"  
	        placeholder="Enter your fullname.." required={true}/>
              </div>
  	      <div className="form-group">
    	        <label>Reg no.</label>
    	        <input value={regnoText} type="text" className={(isValidRegNo === null)? "form-control":(isValidRegNo === true)?"form-control is-valid":"form-control is-invalid"} placeholder="enter your registration no." 
	         onChange={handleRegInput} required={true}/>
	         {(isValidRegNo === null)? (<></>):(isValidRegNo === true)?
		 (<div className="valid-feedback">Looks good!</div>)
		 :(<div className="invalid-feedback">Please provide valid registation no.</div>)}
  	      </div>
	      <div className="form-group">
	        <label htmlFor="phoneNumberInp">Enter your phone number</label>
	        <input type="text" value={phoneNumText} id="phoneNumberInp" className={(isValidPhoneNum === null)?"form-control":(isValidPhoneNum === true)?"form-control is-valid":"form-control is-invalid"} 
	   	placeholder="000-000-0000" onChange={handlePhoneNumInp} required={true}/>
	        {(isValidPhoneNum === null)?(<></>):(isValidPhoneNum === true)?
		(<div className="valid-feedback">Looks good!</div>)
		:(<div className="invalid-feedback">Please provide valid phone number</div>)}
	      </div>
	      <div className="form-group">
	        <label htmlFor="departmentField1">Enter department/stream you study</label>
	        <input type="text" className="form-control" id="departmentField1" 
	   	 placeholder="ex: CSE" required={true}/>
	      </div>
	       <br />
	      <div className="form-group">
  	      	<button type="submit" className="btn btn-success btn-lg btn-block">Submit</button>
              </div> 
	   </form>
	   </div>
       </div>
    </section>
   );
}

