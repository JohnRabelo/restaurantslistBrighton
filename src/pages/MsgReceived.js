import msgcl from './MsgReceived.module.css'
import keepCalm from '../assets/KeepCalm.png'


function MsgPg(){
    return <div className={msgcl.msgRec}>
        <p>Your messsage has been successfully submitted. You will hear from us soon!</p>
        <img src={keepCalm} alt='' />
    </div>
}

export default MsgPg;