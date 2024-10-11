const receitas = [
    {
        titulo: "Estrogonofe",
        imagem: "https://www.unileverfoodsolutions.com.br/dam/global-ufs/mcos/SLA/calcmenu/recipes/BR-recipes/chicken-&-other-poultry-dishes/strogonoff-de-frango/main-header.jpg",
        preparo: "Em uma frigideira com óleo adicione o peito de frango cortado em cubos, adicione o sal e a pimenta do reino e deixe dourar. Após isso, adicione a maionese, a mostarda e o ketchup e misture bem, depois de um breve cozimento desligue o fogo e adicione o creme de leite. Por fim, sirva com arroz e batata palha a vontade.",
        ingredientes: ["2 peitos de frango sem osso", "1 lata de creme de leite", "1 colher de mostarda", "1 colher de ketchup", "2 colheres de maionese", "1 colher de chá de sal", "1 pitada de pimenta do reino", "batata palha a gosto"]
    },
    {
        titulo: "Bolo de Cenoura",
        imagem: "https://www.adrianalauffer.com.br/wp-content/uploads/2020/03/Receita-de-bolo-de-cenoura-com-especiarias-1024x683.png", 
        preparo: "Primeiro, descasque e corte três cenouras médias em pedaços. Em um liquidificador, bata as cenouras com três ovos e uma xícara de óleo até obter uma mistura homogênea. Em uma tigela, misture duas xícaras de açúcar, duas e meia xícaras de farinha de trigo e uma colher de sopa de fermento em pó. Adicione a mistura do liquidificador aos ingredientes secos e mexa bem. Despeje a massa em uma forma untada e enfarinhada e leve ao forno pré-aquecido a 180°C por cerca de 40 minutos",
        ingredientes: ["3 cenouras", "2 xícaras de açúcar", "3 ovos", "1 xícara de óleo", "2 xícaras de farinha de trigo", "1 colher de fermento"]
    },
    {
        titulo: "Pão de Queijo",
        imagem: "https://static.itdg.com.br/images/1200-630/dfc5a3f918dc30f32747b44cd3a18712/pao-de-queijo-facil-e-delicioso-3-.jpg",
        preparo: "Para o pão de queijo, comece fervendo uma xícara de leite com meia xícara de óleo e uma colher de chá de sal. Em uma tigela, coloque duas xícaras de polvilho doce e despeje a mistura quente sobre ele, mexendo bem. Deixe esfriar um pouco e adicione dois ovos e uma xícara de queijo parmesão ralado. Misture até obter uma massa homogênea. Faça pequenas bolinhas com a massa e coloque-as em uma assadeira untada. Asse em forno pré-aquecido a 180°C por cerca de 25 minutos.",
        ingredientes: ["1 xícara de leite", "1/2 xícara de óleo", "1 colher de chá de sal", "2 xícaras de polvilho doce", "1 1/2 xícara de queijo minas ralado", "2 ovos"]
    }
];

function getListaIngredientes(receita) {
    return `<ul>${receita.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('')}</ul>`;
}

function getCard(receita) {
    return `
        <div class="card">
            <img src="${receita.imagem}" class="card-img-top" alt="${receita.titulo}">
            <div class="card-body">
                <h5 class="card-title">${receita.titulo}</h5>
                <div class="card-text">
                    ${getListaIngredientes(receita)}
                    <hr>
                    <p>${receita.preparo}</p>
                </div>
            </div>
        </div>
    `;
}

function preencheCatalogo() {
    const pnlCatalogo = document.getElementById('pnlCatalogo');
    receitas.forEach(receita => {
        pnlCatalogo.innerHTML += getCard(receita);
    });
}
