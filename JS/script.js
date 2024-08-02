//Escrever em HTML 
// Recuperar os elementos do DOM
//Criar um lista con "for" em JS
//definir os multiplo de 3
//definir os multiplos de 5
//definir os multiplos de 3 e 5 coincidentes

//TODO  Recuperare gli elementi del DOM
const setField = document.getElementById('set');


//TODO Creare una lista
const list = document.createElement('ul');

for( let i = 1; i <= 100; i++){
    const listItem = document.createElement('li');
    listItem.append(i);
    list.appendChild(listItem);

    if(i % 3 == 0){
        listItem.append('Fizz')
        listItem.classList.add('fizz')
    }else if (i % 5 == 0){
        listItem.append('Buzz')
        listItem.classList.add('buzz')
    }
}
  setField.appendChild(list);