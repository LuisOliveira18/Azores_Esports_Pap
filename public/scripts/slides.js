function initForm(){
    getSlides();
}

function getSlides(){
    const nbar = document.getElementById('slides')
    fetch('http://localhost:3001/html/')
    .then(res => res.text())
    .then((html)=>{
        nbar.innerHTML += html
    })
    .catch(function(err){
        alert('Ocorreu um problema...')
    })
}