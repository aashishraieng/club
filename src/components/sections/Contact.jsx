import { motion } from "framer-motion";
import {useState} from 'react';
import { useToast } from "@/components/ui/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [otherChoiceForJoin, setOtherChoice] = useState(false);
  const handleContactSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    });
  };
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    }
  };
  function handleOtherService() {
    setOtherChoice(!otherChoiceForJoin);
  }
  const JoinAsOptions = ["Volenteer", "Social Media", "Event Team", "Content Creator", "technical"];
  return (
    <section className="py-24 contact-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-2xl mx-auto text-center" initial="hidden" whileInView="visible" 
	  viewport={{ once: true, margin: "-100px" }} variants={formVariants}>
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <form onSubmit={handleContactSubmit} className="space-y-4" style={{transition: '2.5s ease-in'}}>
            <div className="row g-3">
	      <div className="col-md-6" style={{textAlign: 'left'}}>
	       <label htmlFor="formGroupExampleInput" className="form-label" 
	  	style={{fontWeight: 'bold'}}>first name</label>
	       <input type="text" className="form-control" id="formGroupExampleInput" required={true}
	  	placeholder="enter first name..."/>
	      </div>
	      <div className="col-md-6" style={{textAlign: 'left'}}>
	       <label htmlFor="lastNameFormInp" className="form-label" 
	  	style={{fontWeight: 'bold'}}>last name</label>
	       <input type="text" className="form-control" id="lastNameFormInp" required={true} 
	  	placeholder="enter last name..." />
	      </div>
	      <div className="col-md-12" style={{textAlign: 'left'}}>
		<label htmlFor="inputEmail" className="form-label" style={{fontWeight: 'bold'}}>email</label>
    	        <input type="text" className="form-control" id="inputEmail" required={true} 
	  	placeholder="your@gmail.com" />
	      </div>
	      <div className="col-md-12" style={{textAlign: 'left'}}>
		<label htmlFor="phoneNumberInp" className="form-label" 
	  	style={{fontWeight: 'bold'}}>Phone Number</label>
	  	<input type="text" className="form-control" id="phoneNumberInp" 
	  	placeholder="+91 xxx-xxx-xxxx" required={true}/>
	      </div>
	      <div className="col-md-12" style={{textAlign: 'left'}}>
	        <label htmlFor="textMessage" className="form-label" style={{fontWeight: 'bold'}}>Message</label>
	        <textarea className="form-control" placeholder="Leave us a message..." id="textMessage"
	  	style={{height: '180px'}} required={true}></textarea>
	      </div>
	      <div className="col-md-12" style={{textAlign: 'left'}}>
		<label className="form-label" style={{fontWeight: 'bold'}}>Services</label>
	        <div className="d-grid" style={{gridTemplateColumns: 'repeat(2,1fr)'}}>
	  	{JoinAsOptions.map((item, k) => {
	  	   return ( 
		    <div key={k} className="form-check form-check-inline">
  		     <input className="form-check-input" type="checkbox" id={`inlineCheckbox${k+1}`} value={item}/>
  		     <label className="form-check-label" htmlFor={`inlineCheckbox${k+1}`}>{item}</label>
		    </div>
		   );
		 })}
	         <div className="form-check form-check-inline">
		   <input className="form-check-input" type="checkbox" id="otherOption" 
	  	    value="other" checked={otherChoiceForJoin} onChange={handleOtherService} />
	  	   <label className="form-check-label" htmlFor="otherOption">other</label>
	         </div>
	        </div>
	        {(otherChoiceForJoin)?(<div className="col-md-12" style={{textAlign: 'left'}}>
		  <label className="form-label" style={{fontWeight: 'bold'}}>enter other choice</label>
	  	  <input type="text" placeholder="Enter your choice" className="form-control" 
	  	   required={true} />
	  	</div>)
		:(<></>)}
	      </div>
	      <button type="submit" className="btn btn-dark">Send Message</button>
	    </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
