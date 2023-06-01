//back to top button
var toTopBtn = document.getElementById('toTopBtn');
window.onscroll = function(){
    if(document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30){
            toTopBtn.style.display = 'block';
             }
             else {
                toTopBtn.style.display = "none";
             }
}
function jumpToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
