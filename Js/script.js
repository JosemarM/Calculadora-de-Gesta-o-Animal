function calcular() {
    // Obtém os dados do formulário
    const especie = document.getElementById('especie').value; // Espécie do animal
    const dataInicio = new Date(document.getElementById('dataInicio').value); // Data de início da gestação
    const resultado = document.getElementById('resultado-data'); // Elemento onde o resultado será exibido
    const nome = document.getElementById("nome").value; // Nome do animal
  
    // Objetos com dados de referência sobre a gestação
    const periodosGestacao = {
        cabra: 150,
        egua: 336,
        porca: 114,
        ovelha: 154,
        vaca: 283,
      // Duração média da gestação em dias para cada espécie
    };
    const links = {
        cabra: "https://www.vetprofissional.com.br/artigos/saiba-quais-sao-os-cuidados-necessarios-no-manejo-da-cabra-prenha-a-fim-de-evitar-o-estresse-e-a-ocorrencia-de-abortos#:~:text=%C3%89%20muito%20importante%20atentar%20para,em%20torno%20de%20150%20dias.",
        egua: "https://www.royal-horse.com/pt-br/conselhos/data-egua-encenacao/#:~:text=A%20partir%20dos%2010%20meses,protege%20do%20risco%20de%20infec%C3%A7%C3%A3o.",
        porca: "https://www.embrapa.br/agencia-de-informacao-tecnologica/criacoes/suinos/producao/manejo-da-producao/gestacao",
        ovelha: "https://www.caprilvirtual.com.br/noticias.php?recordID=8008",
        vaca: "https://rehagro.com.br/blog/cuidados-com-a-vaca-e-a-cria-antes-do-parto/#:~:text=O%20tempo%20de%20gesta%C3%A7%C3%A3o%20em,30%20dias%20antes%20do%20parto.",
      // Links para mais informações sobre a gestação de cada espécie
    };
  
    // Calcula a data prevista para o parto
    const dataFinal = new Date(dataInicio);
    dataFinal.setDate(dataInicio.getDate() + periodosGestacao[especie]);
  
    // Obtém o link específico para a espécie
    const animalLink = links[especie];
  
    // Formata a data para o português do Brasil
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
  
    // Cria a estrutura HTML com o resultado e insere no DOM
    resultado.innerHTML= `
    <div class="item-resultado">
            <h2>
                ${especie}(${nome})
            </h2>
            <h5>Data prevista para o parto: ${dataFinal.toLocaleDateString('pt-BR', options)}</h5>
            <p>ATENÇÃO! Esta data é apenas uma estimativa!</p>
            <p>Varios fatores fazem o tempo de gestação variar</p> 
            <p>para mais ou para menos dias!</p>
            <a href=${animalLink} target="_blank">Saiba Mais!</a>
    </div>
    `;
}