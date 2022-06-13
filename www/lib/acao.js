window.onload = function(){
    var url = 'https://profrodolfo.com.br/projeto/';
    var d = document.querySelector('.dados');

    function ExibirProdutos(){
        fetch(url)
        .then(resposta => {
            return resposta.json();
        })
        .then((json)=>{        
            for(i = 0; i < json.length; i++){
            		d.innerHTML+= `
                    <div class="container">
                        <center>
                        <div class="row-2">
                            <img class="img-fluid" src="https://profrodolfo.com.br/projeto/${json[i].foto}" style="border-radius:5px">
                        </div>
                        <div class="col-7">
                            <h1 style="font-family: 'Mulish', sans-serif; color:white">${json[i].nome}</h1>
                            <h3 style="font-family: 'Mulish', sans-serif; color:white">R$: ${json[i].valor}</h3>
                            <hr>
                        </div>
                        </center>
                    </div>
                	`;
            }
        }).catch();
    }
    ExibirProdutos();
 function ExibirPorNome(nome){
    	fetch(url)
        .then(resposta => {
            return resposta.json();
        })
        .then((json)=>{
        	nome = nome.toUpperCase();      
            for(i = 0; i < json.length; i++){
            	if(json[i].nome.toUpperCase().includes(nome)){
            		d.innerHTML+= `
                    <div class="container">
                        <center>
                        <div class="row-2">
                            <img class="img-fluid" src="https://profrodolfo.com.br/projeto/${json[i].foto}" style="border-radius:5px">
                        </div>
                        <div class="col-7">
                            <h1 style="font-family: 'Mulish', sans-serif; color:white">${json[i].nome}</h1>
                            <h3 style="font-family: 'Mulish', sans-serif; color:white">R$: ${json[i].valor}</h3>
                            <hr>
                        </div>
                        </center>
                    </div>
                	`;
            	}
            }
        }).catch();
    }

    function ExibirPorPreco(preco){
    	fetch(url)
        .then(resposta => {
            return resposta.json();
        })
        .then((json)=>{        
            for(i = 0; i < json.length; i++){
            	if(json[i].valor<=preco){
            		d.innerHTML+= `
                    <div class="container">
                        <center>
                        <div class="row-2">
                            <img class="img-fluid" src="https://profrodolfo.com.br/projeto/${json[i].foto}" style="border-radius:5px">
                        </div>
                        <div class="col-7">
                            <h1 style="font-family: 'Mulish', sans-serif; color:white">${json[i].nome}</h1>
                            <h3 style="font-family: 'Mulish', sans-serif; color:white">R$: ${json[i].valor}</h3>
                            <hr>
                        </div>
                        </center>
                    </div>
                	`;
            	}
            }
        }).catch();
    }

    function ExibirPorPrecoENome(nome, preco){
    	fetch(url)
        .then(resposta => {
            return resposta.json();
        })
        .then((json)=>{        
        	nome = nome.toUpperCase();
            for(i = 0; i < json.length; i++){
            	if(json[i].valor<=preco && json[i].nome.toUpperCase().includes(nome)){
            		d.innerHTML+= `
                    <div class="container">
                        <center>
                        <div class="row-2">
                            <img class="img-fluid" src="https://profrodolfo.com.br/projeto/${json[i].foto}" style="border-radius:5px">
                        </div>
                        <div class="col-7">
                            <h1 style="font-family: 'Mulish', sans-serif; color:white">${json[i].nome}</h1>
                            <h3 style="font-family: 'Mulish', sans-serif; color:white">R$: ${json[i].valor}</h3>
                            <hr>
                        </div>
                        </center>
                    </div>
                	`;
            	}
            }
        }).catch();
    }
    
    document.querySelector('#button').addEventListener('click', ()=>{
    	d.innerHTML = '';
    	let nome = document.querySelector('#pesquisarNome').value;
    	let preco = Number(document.querySelector('#pesquisarPreco').value);
    	if(!nome){
    		ExibirPorPreco(preco);
    	}else if(!preco){
    		ExibirPorNome(nome);
    	}else if(nome && preco){
    		ExibirPorPrecoENome(nome, preco);
    	}
    })
}