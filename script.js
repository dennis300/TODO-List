const input = document.querySelector('input'); //select input element
const bT = document.querySelector('button'); // select button element
const divlist = document.querySelector('ul'); // select ul element

// click button to add and remove list
bT.addEventListener('click' , function(){
    let list = document.createElement('li');
    list.className = '';
    list.textContent = input.value;
    let delButton = document.createElement('button');
    delButton.textContent = 'x';
    delButton.className = 'del'
    list.append(delButton);
    divlist.appendChild(list);
    
    if(input.value == ""){
        alert('Please what do you have in mind?');
        list.style.display = 'none';
        divlist.appendChild(list);
    }
  
    delButton.addEventListener('click' , function(){
        list.remove();
    });

    list.addEventListener('click' , function(){
        this.classList.toggle('checked');
      });
    
    input.value = '';
});

