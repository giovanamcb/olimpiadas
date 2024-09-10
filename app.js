function pesquisar() {
    // Função para realizar uma pesquisa e exibir os resultados na página.

    // Seleciona a seção onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if(!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>"
          return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa);

    // Inicializa uma string vazia para armazenar os resultados formatados.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados.
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLocaleLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
              // Busca sensível a maiúsculas/minúsculas
            // Cria um novo elemento div para cada resultado.
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

    if(!resultados){
    resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui os resultados formatados ao conteúdo da seção.
    section.innerHTML = resultados;
}
