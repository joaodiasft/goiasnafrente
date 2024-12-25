export function createEconomyPage() {
  return `
    <div class="category-page">
      <div class="container py-5">
        <h1 class="section-title mb-4">Economia</h1>
        <div class="row g-4">
          ${createEconomyNews()}
        </div>
      </div>
    </div>
  `;
}

function createEconomyNews() {
  const economyNews = [
    {
      title: "PIB de Goiás cresce acima da média nacional",
      description: "Estado registra expansão econômica significativa no último trimestre.",
      image: "https://picsum.photos/300/200?random=16",
      date: "Há 1 hora"
    },
    {
      title: "Setor industrial atrai novos investimentos",
      description: "Empresas anunciam instalação de fábricas no estado.",
      image: "https://picsum.photos/300/200?random=17",
      date: "Há 3 horas"
    },
    {
      title: "Agronegócio bate recorde de exportações",
      description: "Commodities impulsionam balança comercial do estado.",
      image: "https://picsum.photos/300/200?random=18",
      date: "Há 5 horas"
    }
  ];

  return economyNews.map(news => `
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