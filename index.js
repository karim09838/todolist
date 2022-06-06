function modal() {
    let modal=document.getElementsByClassName("modal")


    if (modal[0].style.display=="none" || modal[0].style.display=="") {
        modal[0].style.display="block"
       
    }
    else {
        modal[0].style.display="none"
        
    }
}