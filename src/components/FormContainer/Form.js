import UserIcon from '../../assets/icons/user.png';
import MailIcon from '../../assets/icons/mail.png';
import LockIcon from '../../assets/icons/lock.png';
import HideIcon from '../../assets/icons/hide.png';
import './Form.css';


function Form() {
  return (
    <div>
      <form className="form">
        <div className="input-fields">
          <img src={UserIcon} alt='user icon' className='form-icons'/>
          <input type="text" placeholder="Full Name" className="input" required/>
        </div>

        <div className="input-fields">
          <img src={UserIcon} alt='user icon' className='form-icons'/>
          <input type="text" placeholder="Username" className="input" required/>
        </div>
        
        <div className="input-fields">
          <img src={MailIcon} alt='user icon' className='form-icons'/>
          <input type="email" placeholder="Email" className="input" required/>
        </div>

        <div className="input-fields">
          <img src={LockIcon} alt='user icon' className='form-icons'/>
          <input type="password" placeholder="Password" className="input" required/>
        </div>

        <div className="input-fields">
          <img src={LockIcon} alt='user icon' className='form-icons'/>
          <input type="password" placeholder="Confirm Password" className="input" required />
          
        </div>

        <div className="input-fields">
          <input type="submit" value="Create Account" className="input submit-input" required />
        </div>

      </form>
    </div>
  )
}

export default Form;