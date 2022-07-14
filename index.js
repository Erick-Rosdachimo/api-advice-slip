const api = 'https://api.adviceslip.com/advice'

useApi()

function useApi() {
  fetch(api)
    .then(resposta => resposta.json())
    .then(res => {
      document.getElementById('cite').innerHTML = `“${res.slip.advice}”`
      document.getElementById('id').innerHTML = `ADVICE #${res.slip.id}`
      console.log(res.slip.advice)
    })
}
