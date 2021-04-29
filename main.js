let sticky = document.getElementById('col1') ;
let button = document.getElementById('addup');

button.addEventListener('click', function() {
    
    var txt = document.createElement('p');
    var colors = [
        'yellow','yellowgreen', 'pink','skyblue','tan'
    ];
    var random_color = colors[Math.floor(
        Math.random() * colors.length)];
    txt.classList.add('note-stylin');
    var note = prompt("Please type your note");
    if(note== null || note == ""){
        return false;
    }
    else{
    txt.innerHTML=note;
    txt.style.backgroundColor=random_color;
    sticky.appendChild(txt);
    }
    txt.addEventListener('click',function(){
        var option = prompt("Type delete to delete");
        if (option=="delete")
        sticky.removeChild(txt);
        else{
            return false;
        }
    });

    
});
