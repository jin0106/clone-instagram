const $loginBtn = document.querySelector('.login-btn')
const $idValue = document.querySelector('.login-id')
const $passwordValue = document.querySelector('.login-pw')
const loginBtn = function () {
    $idValue.value.length> 0 && $passwordValue.value.length >= 5 ?
    $loginBtn.style.backgroundColor = '#0095F6' : $loginBtn.style.backgroundColor = '#C4E1FB';
    
}
$idValue.addEventListener('keyup', loginBtn)
$passwordValue.addEventListener('keyup', loginBtn)
