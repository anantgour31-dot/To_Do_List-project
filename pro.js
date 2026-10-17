const add_btn= document.querySelector('#top_button');
const main_cont= document.querySelector('.cont2')

function create_box(initialTxt=''){
    const row= document.createElement('div');
    row.classList.add('hidden1');

    const txtDiv= document.createElement('input');
    txtDiv.type= 'text';
    txtDiv.classList.add('write1');
    txtDiv.style.fontSize='20px';
    txtDiv.spellcheck= false;
    txtDiv.setAttribute('aria-label', 'Task');
    txtDiv.style.color= 'rgb( 65, 63, 63)';
    txtDiv.style.paddingLeft='15px';
    txtDiv.value=initialTxt;

    const com_btn= document.createElement('button');
    com_btn.classList.add('complete1');
    com_btn.textContent='Complete';

    const del_btn= document.createElement('button');
    del_btn.classList.add('delete1');
    del_btn.textContent= 'Delete';



    row.appendChild(txtDiv);
    row.appendChild(com_btn);
    row.appendChild(del_btn);

    main_cont.appendChild(row);

    del_btn.addEventListener('click',()=>{
        main_cont.removeChild(row);
        SaveAllTheStuff();
    });

    com_btn.addEventListener('click',()=>{
        txtDiv.style.textDecoration= txtDiv.style.textDecoration=== 'line-through'? 'none': 'line-through';
        txtDiv.style.opacity= txtDiv.style.opacity=== '0.5'? '1':'0.5';
        SaveAllTheStuff();
    })

    const clas = document.querySelectorAll('.write1');
    clas.forEach(input => {
        input.addEventListener('input', () => {
            SaveAllTheStuff();
        });
    });

    
}




add_btn.addEventListener('click',()=>{
    create_box();
});
const savedData = JSON.parse(localStorage.getItem('Tasks') || '[]');
savedData.forEach(task => {
    create_box(task);
});

function SaveAllTheStuff(){
    const thali= document.querySelectorAll('.write1');
    const  packet=[];
    thali.forEach(input =>{
        packet.push(input.value);
    })

    localStorage.setItem('Tasks', JSON.stringify(packet));

};