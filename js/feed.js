const $comments = document.querySelector('.input-comments');
const $postBtn = document.querySelector('.post-btn')

const postBtn=function(){
    $comments.value.length>0 ?
    $postBtn.style.color = '#0095F6' : $postBtn.style.color = '#C4E1FB';
    $postBtn.style.cur
    
}

$comments.addEventListener('keyup', postBtn)