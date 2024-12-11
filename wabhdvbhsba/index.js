const inputCep = document.querySelector('input')
const conteudo = document.querySelector('.conteudo')
const btn = document.querySelector('button')

/*btn.addEventListener('submit', (e)=>{
    e.preventDefault()
    conteudo.innerHTML = inputCep.value
})*/

const buscaCep = async (cep) =>{
    const busca = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`)

    const res = await busca.json()

    const p = document.createElement('p')
    p.innerHTML = res.address
    conteudo.appendChild(p)
    if(res.address === undefined){
        p.innerText = 'CEP não encontrado'
        conteudo.appendChild(p)
    }else{
        p.innerHTML = `${res.address}, ${res.district}, ${res.city} - ${res.state}`
        conteudo.appendChild(p)
    }
    /*console.log(res)*/
}

const cepEncontrado = (e) => {
    e.preventDefault()
    conteudo.innerHTML = ''
    if(inputCep.value === ''){
        const p = document.createElement('p')
        p.innerHTML = 'Preencha o CEP corretamente.'
        conteudo.appendChild('p')
    } else {
        const cep = inputCep.value.replace('.','').replace('-','')
        buscaCep(cep)
    }
    const cep = inputCep.value
    buscaCep(cep)
}

btn.addEventListener('click', cepEncontrado)

buscaCep()