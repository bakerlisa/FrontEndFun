// remove Item: in onclick=removeItem('class of item to target')
function removeItem(element){
    document.querySelector(`.${element}`).classList.add('inactive');
    // I didn't know if JS have to remove the element or just trigger its removal. So I put this line in just in case
    setTimeout(function(){
        document.querySelector(`.${element}`).remove();
    },1000);
}

// Cart popup
function triggerCart(){
    alert("Your Cart is Empty!");
}

// toggles 'active' on and off: right now just mobile menu
function toggleActive(element){
    var item = document.querySelector(`.${element}`);
    if(item.classList.contains('active')){
       item.classList.remove('active'); 
    }else{
        item.classList.add('active');
    }
}

// toggles sign in / sign out text
function login(event){
    var text = event.target;
    if(text.innerText === "Sign In"){
        text.innerText = "Sign Out";
    }else if(text.innerText == "Sign Out"){
        text.innerText = "Sign In";
    };
}

