function initForm(){
    getNavbar();
    getFooter();
}
function getNavbar(){
    const nbar = document.getElementById('nbar')
    fetch('')
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
    fetch('')
    .then (res => res.text())
    .then((html)=>{
        foot.innerHTML += html
    })
    .catch(function(err){
        alert('')
    })
}
