const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
    
   if (email.value === "" || password.value === "") {
        alert ("Всі поля повинні бути заповнені!");
       return;
   }
    
     const formData = {
    email: email.value,
    password: password.value,
  };
    console.log(formData);
    // console.log(`Email: ${email.value},   Password: ${password.value}`);
    form.reset()
    

    
});
 

