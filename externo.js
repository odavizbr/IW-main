window.onload = function () {

    
    let i = 0
    /*
    while( i <= 10){
        console.log( i + "\n");
        document.write( i + "\n");

        i++;
    }
    */


    /*
    let nome = prompt ("digite seu nome ou FIM para sair");

    while( nome.toUpperCase() != "FIM"){
        document.write("nome :" + nome)
        nome = prompt ("digite seu nome ou FIM para sair")
    }
    */

    let nomes = ['Jair', 'Thais', 'Patricia', 'Davi']

    document.write("<ul>")
    /*
    for(let i = 0; i <= nomes.length-1; i++){
        document.write(` <li> ${nomes[i]} </li> `);
    }
    */

    nomes.forEach((element) =>{
        document.write(`<li> ${i +1} : ${element} </li> `);
    });

    document.write("<ul>");
}
