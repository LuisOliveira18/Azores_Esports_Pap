function initForm(){
    getNavbar();
    getFooter();
}

function getNavbar(){
    const nbar = document.getElementById('nbar')
    fetch('http://localhost:3001/html/navbar')
    .then(res => res.text())
    .then((html)=>{
        nbar.innerHTML += html
    })
    .catch(function(err){
        alert('Ocorreu um problema...')
    })
}

function getFooter(){
    const foot = document.getElementById('foot')
    fetch('http://localhost:3001/html/footer')
    .then (res => res.text())
    .then((html)=>{
        foot.innerHTML += html  
    })
    .catch(function(err){
        alert('Ocurreu um problema...')
    })
}

//script contactos

function enviarContactos(){
    const pn = document.getElementById('contact-PrimNome').value
    const email = document.getElementById('contact-email').value
    const telem= document.getElementById('contact-telem').value
    const msg = document.getElementById('contact-mensagem').value
  
          if(telem.length >=10 && telem.lenght <9 ){
            alert('insira um número válido')
          }
          else {
            let i = 0
            for(i; i<telem.length; i++){
                let c = telem.charAt(i)
                console.log(c)
                if(isNaN(c)){
                    alert('número inválido')
                    break
                }       
            }
            console.log(i)
            if(i == telem.length){
                const telemInt = parseInt(telem)
                console.log(telemInt)
            }
            
          }
  
  
          if(pn == ''||email==''|| msg=='' || telem==''){
                alert('Preencha todos os Campos!')
          }else{
    
                  const data = {
                    PrimNome: pn,
                    Email: email,
                    Telem: telem,
                    Mensagem: msg
                  }
                  var d = JSON.stringify(data)
                  console.log(d)
                  var options = {
                    method:'POST',
                    headers: {
                        'Content-type' : 'application/json'
                    },
                    body: d
                  }
                  fetch('http://localhost:3001/contactos',options)
                  .then(res => res.json())
                  .then(data => alert(data.text))
                  .catch((err) => {
                    console.log('Pedido falhado', err.Mensagem)
                  });
  
            }  
    
  }