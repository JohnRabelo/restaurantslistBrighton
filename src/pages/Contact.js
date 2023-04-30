import contactcl from './Contact.module.css'
import NewForm from '../Forms/Form';
import {useNavigate} from 'react-router-dom'

function ContactPg() {

  const history = useNavigate();

  function newMsgHandler(contactData) {
    fetch('https://mexbrighton-default-rtdb.firebaseio.com/newMsgs.json',
    {
      method: 'POST',
      body: JSON.stringify(contactData),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    ).then(()=>{
      history('/newmsg')
    }); 
  }

  return (  
    <div className={contactcl.formContainer}>
      <p className={contactcl.formsAlternative}>Get in touch with us!</p>
      <NewForm onNewMsg={newMsgHandler} />
    </div>
  );
  }
  
  export default ContactPg;