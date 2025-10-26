
const name = 'Anonymous';
const inp = document.getElementById('name-input');
const outp = document.getElementById('name-output');
inp.addEventListener('input', event => {
    const clr = event.currentTarget.value.trim();
    outp.textContent = clr ? clr : name;
});