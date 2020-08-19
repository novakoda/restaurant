export const tabContact = () => {
  let content = document.getElementById('content');

  let head = document.createElement('h1');
  head.id = "contact-title";
  head.innerHTML = "Contact Us";

  let text = document.createElement('p');
  text.id = "contact-text";
  text.innerHTML = "Questions? Comments? Concerns?<br>We would love to hear from you!";

  content.append(head, text);

  let form = document.createElement('form');
  form.id = "contact-form";

  let name = document.createElement('input');
  name.id = "contact-name";
  name.className = "form-control";
  name.type = "text";
  name.placeholder = "name";

  let email = document.createElement('input');
  email.id = "contact-email";
  email.className = "form-control";
  email.type = "email";
  email.placeholder = "email";

  let message = document.createElement('textarea');
  message.id = "contact-message";
  message.className = "form-control";
  message.placeholder = "message";

  addToForm(name);
  addToForm(email);
  addToForm(message);

  content.append(form);

  function addToForm(item) {
    let group = document.createElement('div');
    group.className = "form-group";
    group.append(item);
    form.append(group);
  }
}
