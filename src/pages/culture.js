export function createCulturePage() {
  return `
    <div class="category-page">
      <div class="container py-5">
        <h1 class="section-title mb-4">Cultura</h1>
        <div class="row g-4">
          ${createCultureNews()}
        </div>
      </div>
    </div>
  `;
}

function createCultureNews() {
  const cultureNews = [
    {
      title: "Festival de Cinema de Goiás anuncia programação",
      description: "Evento traz produções nacionais e internacionais para capital.",
      image: "https://picsum.photos/300/200?random=13",
      date: "Há 2 horas"
    },
    {
      title: "Exposição celebra artistas goianos",
      description: "Mostra reúne obras de grandes nomes das artes plásticas do estado.",
      image: "https://picsum.photos/300/200?random=14",
      date: "Há 4 horas"
    },
    {
      title: "Teatro Goiânia recebe espetáculo premiado",
      description: "Peça chega à capital após sucesso de público em São Paulo.",
      image: "https://picsum.photos/300/200?random=15",
      date: "Há 6 horas"
    }
  ];

  return cultureNews.map(news => `
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