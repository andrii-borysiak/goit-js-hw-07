const form = document.querySelector('.login-form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const email = e.currentTarget.querySelector('input[type="email"]');
  const password = e.currentTarget.querySelector('input[type="password"]');

  if (email.value.trim() === '' || password.value.trim() === '') {
    alert('All form fields must be filled in');
    return;
  }

  const formData = new FormData(e.currentTarget);

  const formDataObject = {};
  formData.forEach((value, key) => (formDataObject[key] = value.trim()));

  console.log(formDataObject);
  e.currentTarget.reset();
});
