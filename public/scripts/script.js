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
