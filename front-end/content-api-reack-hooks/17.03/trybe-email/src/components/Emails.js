import email from '../images/email.jpg';
import images from '../images/images.png';
function Emails() {
    return (
        <div>
         <div>
          Olá, tenho uma super promoção para você! Apenas 29,99 e você ganha...
          <span>
            <img src={email} alt="email" className="email-logo"/>
            <img src={images} alt="email-aberta" className="email-logo"/>
          </span>
         </div>
        </div>
    );
  }
  
  export default Emails;