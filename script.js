const inputText = document.querySelectorAll('.input-form')
const inputBorder = document.querySelectorAll('.input-border')
const errorImg = document.querySelectorAll('.error')
const errorText = document.querySelectorAll('.error-text')
const btn = document.querySelector('.btn-claim')



function inputBlank() {
    for (let i = 0; i < inputText.length; i++) {
        if (inputText[i].value === "") {
            errorImg[i].style.visibility = 'visible';
            errorText[i].style.visibility = 'visible';
            inputBorder[i].style.border = '1px solid var(--Pink)';
            inputText[i].placeholder = ''

        } else {
            errorImg[i].style.visibility = 'hidden';
            errorText[i].style.visibility = 'hidden';
            inputBorder[i].style.border = '1px solid black';
            inputText[i].style.color = 'var(--VeryDarkBlue)'
        }

        if (!inputText[2].value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
            inputText[2].style.color = 'var(--Pink)';
            inputBorder[2].style.border = '1px solid var(--Pink)';
            errorImg[2].style.visibility = 'visible';
            errorText[2].style.visibility = 'visible';
        } else {
            inputText[2].style.color = 'var(--VeryDarkBlue)'
            errorImg[2].style.visibility = 'hidden';
            errorText[2].style.visibility = 'hidden';
        }

    }
    return
}

btn.addEventListener('click', inputBlank)




