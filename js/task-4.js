const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {

    event.preventDefault();

    const { email, password } = form.elements;
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (!emailValue || !passwordValue) {
        alert('All form fields must be filled in');
        return;
    }

    const data = {
        email: emailValue,
        password: passwordValue,
    };
    console.log(data);
    form.reset();
});/* 
цікавинка яка трохи бісить :) не те що прочитав в додатку гоайті не зберігається на сайті чи не завжди сам не розібрався толком */
