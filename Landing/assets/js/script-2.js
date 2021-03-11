(() =>{

  const form = document.getElementById('form');
  const alert = document.querySelector('.alert');
  const inputName = form.name;
  const inputEmail = form.email;
  const inputArea = form.message;

  const rexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const rexEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/
  const rexMessage = /^.{1,255}$/

  const validar = (input, texto,expresion) =>{
    if (expresion.test(input.value)) {
      input.classList.remove('error')
      input.classList.add('success');
    }else{
      alert.classList.add('alertError')
      alert.textContent = texto;

      input.classList.remove('success')
      input.classList.add('error')

      setTimeout(() => {
        alert.classList.remove('alertError');
        alert.textContent = "";
    }, 5000);

    }
  }

  inputName.addEventListener('blur', () =>{
    validar(inputName,'this name is wrong!',rexName);
  })

  inputEmail.addEventListener('blur', () => {
    validar(inputEmail,'this email is wrong!',rexEmail);
  })

  inputArea.addEventListener('blur', () => {
    validar(inputArea,'This message is wrong!',rexMessage);
  })

  const send = () =>{
    fetch("https://formsubmit.co/ajax/spanuwey@gmail.com", {
      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({name:inputName.value,email:inputEmail.value,message:inputArea.value})
  })
      .then(response => response.json())
      .then(data => {
        inputName.classList.remove('success','error');
        inputEmail.classList.remove('success','error');
        inputArea.classList.remove('success','error');
        form.reset();
      })
      .catch(error => console.log(error)); 
  }

  form.addEventListener('submit',  e =>{
    e.preventDefault();
    if (rexName.test(inputName.value) && rexEmail.test(inputEmail.value) && rexMessage.test(inputArea.value)) {

      send();

      alert.classList.add('alertSuccess')
      alert.textContent = "Message sent!";

      setTimeout(() => {
        alert.classList.remove('alertSuccess');
        alert.textContent = "";
      }, 5000);

    }else{
      alert.classList.add('alertError')
      alert.textContent = "Fill out the form!";

      setTimeout(() => {
        alert.classList.remove('alertError');
        alert.textContent = "";
      }, 5000);
    }
  })
/* 
  fetch("https://formsubmit.co/ajax/nendytorres@gmail.com", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        name: "FormSubmit",
        message: "I'm from Devro LABS"
    })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error)); */
})();