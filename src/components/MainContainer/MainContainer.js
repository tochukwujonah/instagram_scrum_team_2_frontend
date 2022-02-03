// import Form from '../FormContainer/Form';
import LoginForm from '../LoginContainer/LoginForm'
import MomentImage from '../../assets/images/moment.png';
import './MainContainer.css';

function MainContainer() {
  
  return (
    <div>
      
      <section className='container grid'>
        <div className='image-column'>
          <img src={MomentImage} className='image-column--img' />
        </div>

        <div className='form-column'>
          <div className='form-heading'>
            <h2 className='heading-primary'> Create an account with us</h2>
            <p className='heading-description'> This would only take a few minute </p>
          </div>
          <LoginForm />

          <p className='bottom-note'> Already have an account? <span className='login-link'> <a href=''> Login </a> </span></p>
        </div>
      </section>
      
    </div>
  )
}

export default MainContainer;