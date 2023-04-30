import formcl from './Form.module.css'
import {useRef} from 'react'


function NewForm(props){

    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const subjectInputRef = useRef();
    const msgInputRef = useRef();

    function submitHandler(event){
        event.preventDefault();
        
        const enteredName = nameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredSubject = subjectInputRef.current.value;
        const enteredMessage = msgInputRef.current.value;

        const contactData = {
            name: enteredName,
            email: enteredEmail,
            subject: enteredSubject,
            message: enteredMessage,
        };

        props.onNewMsg(contactData);

    }

    return <div>
        <div className={formcl.formLayout}>
            <form className={formcl.forms} onSubmit={submitHandler}>
                <div>
                    <label htmlFor='name' >Your Name (required)</label>
                    <input type="text" required id="name" ref={nameInputRef}  />  
                </div> 
                <div>
                    <label htmlFor='email' >Your Email (required)</label>
                    <input type="email" required id="email" ref={emailInputRef} />  {/* Change default email message*/}
                </div> 
                <div>
                    <label htmlFor='subject' >Subject</label>
                    <input type="text" id="subject" ref={subjectInputRef} />  
                </div> 
                <div>
                    <label htmlFor='message' >Your Message (required)</label>
                    <textarea required id='message'ref={msgInputRef} ></textarea>  
                </div> 
                <div>
                    <button>Send</button>
                </div>
            </form>
        </div>
    </div>;
}


export default NewForm;