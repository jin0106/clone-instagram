const $postBtn = document.querySelector('.post-btn')
const $commentsValue = document.querySelector('.input-comments')
const postBtn = function () {
    $commentsValue.value.length>0 ?
    $postBtn.style.Color = "#0095F6" : $postBtn.style.Color = "#C4E1FB";
}
$commentsValue.addEventListener('keyup', postBtn)

