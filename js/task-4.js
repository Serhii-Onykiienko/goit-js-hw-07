const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const userEmail = event.currentTarget.elements.email.value.trim();
  const userPassword = event.currentTarget.elements.password.value.trim();

  if (userEmail === '' || userPassword === '') {
    alert('All form fields must be filled in');

    return;
  }

  const data = {
    email: userEmail,
    password: userPassword,
  };

  console.log(data);

  event.currentTarget.reset();
});
