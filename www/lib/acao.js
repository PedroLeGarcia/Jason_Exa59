window.onload = function(){

var url = "https://profrodolfo.com.br/projeto/";
fetch(url)
.then(resposta => {
	return resposta.json();
})
.then( function (json){
	var input = document.querySelector('#pesquisar');
    var texto = '';
    for(i= 0; i < json.length ; i++){
        texto += '<p>'+json[i].nome+'</p>';
        texto += '<p>'+json[i].valor+'</p>';
    }
     input.innerHTML += texto;
})
.catch();
}