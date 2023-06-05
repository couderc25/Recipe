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

function FormValidate(){
    if (document.forms[0].recipeName.value == ""){
        alert("Name Required");
        return false;
    }else if(document.forms[0].category.value == "category"){
        alert('Category required');
        return false;

    }else if(document.forms[0].recipe.value == ""){
        alert('Recipe Required');
        return false;
    }
}