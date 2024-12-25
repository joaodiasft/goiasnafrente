import { createCard } from './common/Card.js';

export function createNewsSection() {
  return `
    <div class="container my-5">
      <!-- Featured and Trending Section -->
      <div class="row g-4 mb-5">
        <div class="col-lg-8">
          ${createFeaturedNews()}
        </div>
        <div class="col-lg-4">
          ${createTrendingNews()}
        </div>
      </div>

      <!-- Latest News Section -->
      <div class="latest-news-section mb-5">
        <h2 class="section-title mb-4">
          <i class="bi bi-newspaper text-success me-2"></i>
          Últimas Notícias
        </h2>
        <div class="row g-4">
          <div class="col-lg-8">
            <div class="row g-4">
              ${createMainNews()}
            </div>
          </div>
          <div class="col-lg-4">
            ${createSideNews()}
          </div>
        </div>
      </div>
      
      <!-- Categories Section -->
      <div class="categories-section">
        <h3 class="section-title mb-4">
          <i class="bi bi-grid-3x3-gap-fill text-success me-2"></i>
          Explore por Categoria
        </h3>
        <div class="row g-4">
          ${createCategoryCards()}
        </div>
      </div>

      <!-- View More Button -->
      <div class="text-center mt-5">
        <a href="/noticias" class="btn btn-success btn-lg px-5" data-route="/noticias">
          <i class="bi bi-arrow-right-circle me-2"></i>
          Ver Todas as Notícias
        </a>
      </div>
    </div>
  `;
}

function createFeaturedNews() {
  return `
    <div class="featured-news position-relative rounded-4 overflow-hidden shadow-lg h-100">
      <img src="https://picsum.photos/800/400?random=1" class="w-100 h-100 object-fit-cover" alt="Notícia em Destaque">
      <div class="featured-content position-absolute bottom-0 start-0 w-100 p-4 text-white" 
           style="background: linear-gradient(transparent, rgba(0,0,0,0.9));">
        <span class="badge bg-success mb-2">Destaque</span>
        <h3 class="mb-2">Goiás Lidera Ranking de Desenvolvimento Sustentável</h3>
        <p class="mb-3">Estado se destaca em práticas ambientais e crescimento econômico sustentável.</p>
        <div class="d-flex align-items-center gap-3">
          <span><i class="bi bi-clock"></i> Há 1 hora</span>
          <span><i class="bi bi-eye"></i> 1.2k visualizações</span>
          <a href="#" class="btn btn-sm btn-light">Ler mais</a>
        </div>
      </div>
    </div>
  `;
}

function createTrendingNews() {
  const trendingNews = [
    {
      title: "Nova linha do BRT começa a operar em Goiânia",
      views: "2.5k",
      time: "2 horas"
    },
    {
      title: "Festival gastronômico reúne chefs renomados",
      views: "1.8k",
      time: "3 horas"
    },
    {
      title: "Goiás bate recorde em exportações agrícolas",
      views: "1.5k",
      time: "4 horas"
    }
  ];

  return `
    <div class="trending-news bg-white rounded-4 shadow-lg p-4 h-100">
      <h4 class="mb-4">
        <i class="bi bi-graph-up-arrow text-success me-2"></i>
        Em Alta
      </h4>
      ${trendingNews.map((news, index) => `
        <div class="trending-item ${index < trendingNews.length - 1 ? 'border-bottom' : ''} py-3">
          <div class="d-flex align-items-start gap-3">
            <span class="trending-number fw-bold text-success">#${index + 1}</span>
            <div>
              <h6 class="mb-2">${news.title}</h6>
              <div class="d-flex align-items-center gap-3 text-muted small">
                <span><i class="bi bi-eye"></i> ${news.views}</span>
                <span><i class="bi bi-clock"></i> Há ${news.time}</span>
              </div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function createMainNews() {
  const mainNews = [
    {
      title: "Novo Polo Industrial em Anápolis",
      description: "Investimentos devem ultrapassar R$ 1 bilhão nos próximos anos.",
      category: "Economia",
      date: "Há 2 horas",
      image: "https://picsum.photos/300/200?random=2"
    },
    {
      title: "Vila Cultural Recebe Exposição Internacional",
      description: "Mostra traz obras de artistas de diversos países para Goiânia.",
      category: "Cultura",
      date: "Há 3 horas",
      image: "https://picsum.photos/300/200?random=3"
    }
  ];

  return mainNews.map(item => `
    <div class="col-md-6">
      ${createCard(item)}
    </div>
  `).join('');
}

function createSideNews() {
  const sideNews = [
    {
      title: "Goiás FC Anuncia Novo Treinador",
      category: "Esportes",
      date: "Há 4 horas"
    },
    {
      title: "Projeto de Lei Ambiental é Aprovado",
      category: "Política",
      date: "Há 5 horas"
    },
    {
      title: "Festival de Cinema Começa Amanhã",
      category: "Cultura",
      date: "Há 6 horas"
    }
  ];

  return `
    <div class="side-news bg-white rounded-4 shadow-lg p-4">
      <h5 class="mb-4">Outras Notícias</h5>
      ${sideNews.map((news, index) => `
        <div class="side-news-item ${index < sideNews.length - 1 ? 'border-bottom' : ''} py-3">
          <span class="badge bg-${getCategoryColor(news.category)} mb-2">${news.category}</span>
          <h6 class="mb-2">${news.title}</h6>
          <small class="text-muted">
            <i class="bi bi-clock"></i> ${news.date}
          </small>
        </div>
      `).join('')}
    </div>
  `;
}

function createCategoryCards() {
  const categories = [
    { name: "Política", icon: "bi-award", color: "primary", route: "/politica" },
    { name: "Economia", icon: "bi-graph-up", color: "success", route: "/economia" },
    { name: "Esportes", icon: "bi-trophy", color: "warning", route: "/esportes" },
    { name: "Cultura", icon: "bi-palette", color: "info", route: "/cultura" }
  ];

  return categories.map(category => `
    <div class="col-md-3 col-sm-6">
      <a href="${category.route}" 
         class="card category-card text-decoration-none h-100 border-0 shadow-sm" 
         data-route="${category.route}">
        <div class="card-body text-center">
          <i class="bi ${category.icon} display-4 text-${category.color} mb-3"></i>
          <h5 class="card-title text-dark mb-0">${category.name}</h5>
        </div>
      </a>
    </div>
  `).join('');
}

function getCategoryColor(category) {
  const colors = {
    'Política': 'primary',
    'Economia': 'success',
    'Esportes': 'warning',
    'Cultura': 'info'
  };
  return colors[category] || 'secondary';
}