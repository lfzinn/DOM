function mudarBG(cor) {
    
    document.body.style.backgroundColor = cor;
  
    
    const titulo = document.querySelector('#titulo');
  
    
    if (cor.toLowerCase() === 'black' || cor === '#000000') {
      titulo.style.color = 'white'; 
    } else if (cor.toLowerCase() === 'white' || cor === '#ffffff') {
      titulo.style.color = 'black'; 
    } else {
      titulo.style.color = ''; 
    }
  }
  
  
  const corEscolhida = prompt('Digite a cor ou o código hexadecimal para o fundo:');
  mudarBG(corEscolhida);
  