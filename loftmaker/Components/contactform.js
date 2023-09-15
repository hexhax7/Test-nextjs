import styles from '@/styles/Contact.module.css'
import ReCAPTCHA from "react-google-recaptcha";


export default function Contactform() {
    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", process.env.API_URL);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            alert("Enquiry sent. A member of our team will respond as soon as possible. ")
        }
        else{
          alert("Enquiry was not sent please contact us direct.")
        }
   
        
    }
  
  return (
    <>
    <form id="form_container" onSubmit={handleSubmit}>
        <h1 className={styles.formh1} >Contact Us</h1>
        <p>
          <label >Your Name: <input type="text" name="name" required /></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" required /></label>
        </p>
    
        <p>
          <label >Message: <textarea name="message" required></textarea></label>
        </p>
        <div ></div>
        <ReCAPTCHA
        className='recaptcha'
        sitekey="${process.env.Site_key}"

          
        />
        <p>
        
        <button type="submit"
        >Submit</button>
        </p>
      </form>


     
    </>
  );
}
