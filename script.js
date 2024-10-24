JavaScript (script.js)

```
// PC on/off functionality
document.addEventListener('DOMContentLoaded', () => {
    const pc = document.querySelector('.pc');
    const screen = document.querySelector('.screen');
    const text = document.getElementById('text');
    let isOn = true;

    pc.addEventListener('click', () => {
        if (isOn) {
            screen.classList.remove('screen-on');
            screen.classList.add('screen-off');
            text.classList.remove('text-on');
            text.classList.add('text-off');
        } else {
            screen.classList.remove('screen-off');
            screen.classList.add('screen-on');
            text.classList.remove('text-off');
            text.classList.add('text-on');
        }
        isOn = !isOn;
    });
});
