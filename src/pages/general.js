export function createGeneralNewsPage() {
  return `
    <div class="category-page">
      <div class="container py-5">
        <h1 class="section-title mb-4">Notícias Gerais</h1>
        <div class="row g-4">
          ${createGeneralNews()}
        </div>
      </div>
    </div>
  `;
}

function createGeneralNews() {
  const generalNews = [
    {
      title: "Novo parque será inaugurado em Goiânia",
      description: "Área verde trará mais opções de lazer para população.",
      image: "https://picsum.photos/300/200?random=22",
      date: "Há 1 hora"
    },
    {
      title: "Hospital regional amplia atendimentos",
      description: "Unidade de saúde dobra capacidade de atendimento.",
      image: "https://picsum.photos/300/200?random=23",
      date: "Há 3 horas"
    },
    {
      title: "Concurso público oferece 500 vagas",
      description: "Oportunidades em diversos órgãos do estado.",
      image: "https://picsum.photos/300/200?random=24",
      date: "Há 5 horas"
    }
  ];

  return generalNews.map(news => `
    <div class="col-md-4">
      <div class="card news-card h-100">
        <img src="${news.image}" class="card-img-top" alt="${news.title}">
        <div class="card-body">
          <small class="text-muted">${news.date}</small>
          <h5 class="card-title mt-2">${news.title}</h5>
          <p class="card-text">${news.description}</p>
          <a href="#" class="btn btn-outline-success mt-auto">Ler mais</a>
        </div>
      </div>
    </div>
  `).join('');
}