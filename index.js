function modal() {
    let modal=document.getElementsByClassName("modal")
    

    if (modal[0].style.display=="none" || modal[0].style.display=="") {
        modal[0].style.display="block"
       
    }
    else {
        modal[0].style.display="none"
        
    }
   
}
let itemsContainer = document.getElementsByClassName("container");

let note = document.getElementsByClassName("note")[0];
note.style.display="none"

function save() {

    let newElement = document.createElement("div");
    newElement.classList.add("note");

    let title_name = note.getElementsByClassName("title_name");
    let title_name_p = title_name[0].getElementsByTagName("p");
    let modal_title = document.getElementById("modal_title");
    title_name_p[0].textContent=modal_title.value
    // console.log(modal_title.value)


    let title_text = note.getElementsByClassName("title_text");
    let title_text_p = title_text[0].getElementsByTagName("p");
    let modal_text = document.getElementById("modal_text");
    title_text_p[0].textContent=modal_text.value
    


    let date = new Date().toLocaleDateString();
    let title_info=note.getElementsByClassName("title_info");
    let title_info_p = title_info[0].getElementsByTagName("p")
    title_info_p[0].textContent=date
    
    if  (modal_title.value!=="" && modal_text.value!=="") {
        newElement.innerHTML = note.innerHTML;
        itemsContainer[1].prepend(newElement); 
    }
   
    modal_title.value=""
    modal_text.value=""

    
    modal();
    
}



    // let elements = document.getElementsByClassName('modal_text');
    // for (i=0; i<elements.length; i++) {
    //     (function(element) {
    //       let id = element.getAttribute('id');
    //       element.value = localStorage.getItem(id); // обязательно наличие у элементов id
    //       element.oninput = function() {
    //         localStorage.setItem(id, element.value);

    //       };
    //     })(elements[i]);
    //    }
