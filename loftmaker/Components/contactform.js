import styles from '@/styles/Contact.module.css'


export default function Contactform() {
    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "5d5aee62-9514-42db-8dd9-abd434310f88");

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
            console.log(result);
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
        <p>
          <button type="submit">Enquire</button>
        </p>
      </form>


     
    </>
  );
}
