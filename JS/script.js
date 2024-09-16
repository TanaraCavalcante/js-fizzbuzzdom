//Escrever em HTML 
// Recuperar os elementos do DOM
//Criar um lista con "for" em JS
//definir os multiplo de 3
//definir os multiplos de 5
//definir os multiplos de 3 e 5 coincidentes

//TODO  Recuperare gli elementi del DOM
const list = document.getElementById('numbers-list');


//TODO Creare una lista
let items = ''; //variavel de apoio para montar resultado final

for( let i = 1; i <= 100; i++){
   let content = i;  //variavel de apoio do if
   
    if( i % 3 === 0 && i % 15 === 0){
       content = 'fizzbuzz'
       console.log(content)
    }else if (i % 5 === 0){
       content = 'buzz' 
       console.log(content)
    }else if ( i % 3 === 0){
       content = 'fizz'
       console.log(content)
    }

    items += `<li class="${content}">${content}</li> ` //o resultado tem que ser montado dentro do for
}

//TODO Mostrare in pagina
   list.innerHTML = items;