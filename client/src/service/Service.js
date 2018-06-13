const servicos = {
    searchCoach: (name) =>
      fetch('/api/coach/coach_by_qualif/'+name)
        .then(r => analisaStatusCode(r))
        .then(r => r.json())
    ,
    searchCoachById: (id) =>
      fetch('/api/coach/'+id)
        .then(r => analisaStatusCode(r))
        .then(r => r.json())
    ,
    getCoach: (id) =>
    fetch('/api/coach/'+id)
      .then(r => analisaStatusCode(r))
      .then(r => r.json())
  ,
  searchCommentsByCoachId: (id) =>
      fetch('/api/comment/comment_of/'+id)
        .then(r => analisaStatusCode(r))
        .then(r => r.json())
    ,
    test: () =>
      fetch('/api')
        .then(r => analisaStatusCode(r))
        .then(r => r.json())
    ,
    cadastre: (dados) => {
      const promResposta =
        fetch('/salva', {
          method: 'post',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify(dados)
        })
  
      return promResposta
        .then(r => analisaStatusCode(r))
        .then(r => r.json())
    }

  }
  
  function analisaStatusCode(resposta) {
    if (resposta.status === 200)
      return Promise.resolve(resposta)
    else
      return Promise.reject(false)
  }
  
  export default servicos
  