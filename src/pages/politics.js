export function createPoliticsPage() {
  return `
    <div class="category-page">
      <div class="container py-5">
        <h1 class="section-title mb-4">Política</h1>
        <div class="row g-4">
          ${createPoliticsNews()}
        </div>
      </div>
    </div>
  `;
}

function createPoliticsNews() {
  const politicsNews = [
    {
      title: "Assembleia aprova projeto importante",
      description: "Deputados votam lei que beneficia setor produtivo do estado.",
      image: "https://picsum.photos/300/200?random=19",
      date: "Há 2 horas"
    },
    {
      title: "Governador anuncia pacote de obras",
      description: "Investimentos em infraestrutura devem superar R$ 2 bilhões.",
      image: "https://picsum.photos/300/200?random=20",
      date: "Há 4 horas"
    },
    {
      title: "Prefeituras discutem consórcio metropolitano",
      description: "Municípios buscam soluções conjuntas para região metropolitana.",
      image: "https://picsum.photos/300/200?random=21",
      date: "Há 6 horas"
    }
  ];

  return politicsNews.map(news => `
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