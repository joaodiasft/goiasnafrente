import { createBackButton } from '../components/common/BackButton.js';
import { createCard } from '../components/common/Card.js';

export function createSportsPage() {
  return `
    <div class="category-page">
      <div class="container py-5">
        ${createBackButton()}
        <h1 class="section-title mb-4">
          <i class="bi bi-trophy-fill text-success me-2"></i>
          Esportes
        </h1>
        
        <!-- Featured Sports News -->
        <div class="row mb-5">
          <div class="col-lg-8">
            <div class="featured-news position-relative rounded-4 overflow-hidden shadow-lg">
              <img src="https://picsum.photos/800/400?random=10" class="w-100" alt="Notícia em Destaque">
              <div class="featured-content position-absolute bottom-0 start-0 w-100 p-4 text-white" 
                   style="background: linear-gradient(transparent, rgba(0,0,0,0.9));">
                <span class="badge bg-success mb-2">Destaque</span>
                <h3 class="mb-2">Goiás Vence Clássico em Jogo Emocionante</h3>
                <p class="mb-3">Partida decisiva define liderança do campeonato estadual.</p>
                <div class="d-flex align-items-center gap-3">
                  <span><i class="bi bi-clock"></i> Há 1 hora</span>
                  <span><i class="bi bi-eye"></i> 5.2k visualizações</span>
                  <a href="#" class="btn btn-sm btn-light">Ler mais</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="bg-white rounded-4 shadow-lg p-4 h-100">
              <h4 class="mb-4">
                <i class="bi bi-graph-up-arrow text-success me-2"></i>
                Mais Lidas
              </h4>
              ${createTopSportsNews()}
            </div>
          </div>
        </div>

        <!-- Latest Sports News -->
        <div class="row g-4">
          ${createSportsNews()}
        </div>

        <!-- Sports Categories -->
        <div class="mt-5">
          <h3 class="section-title mb-4">
            <i class="bi bi-grid-3x3-gap-fill text-success me-2"></i>
            Categorias Esportivas
          </h3>
          <div class="row g-4">
            ${createSportsCategories()}
          </div>
        </div>
      </div>
    </div>
  `;
}

function createTopSportsNews() {
  const topNews = [
    {
      title: "Vila Nova anuncia novo treinador",
      views: "3.2k",
      time: "2 horas"
    },
    {
      title: "Atlético-GO se prepara para decisão",
      views: "2.8k",
      time: "3 horas"
    },
    {
      title: "Goiânia EC renova com artilheiro",
      views: "2.5k",
      time: "4 horas"
    }
  ];

  return topNews.map((news, index) => `
    <div class="trending-item ${index < topNews.length - 1 ? 'border-bottom' : ''} py-3">
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
  `).join('');
}

function createSportsNews() {
  const sportsNews = [
    {
      title: "Goiás EC Intensifica Preparação",
      description: "Equipe se prepara para decisão do campeonato com treinos intensivos.",
      image: "https://picsum.photos/300/200?random=11",
      category: "Futebol",
      date: "Há 2 horas"
    },
    {
      title: "Atleta Goiano nas Olimpíadas",
      description: "Representante do estado garante vaga para Paris 2024.",
      image: "https://picsum.photos/300/200?random=12",
      category: "Olimpíadas",
      date: "Há 3 horas"
    },
    {
      title: "Vôlei Goiano em Destaque",
      description: "Equipe local avança às semifinais da Superliga.",
      image: "https://picsum.photos/300/200?random=13",
      category: "Vôlei",
      date: "Há 4 horas"
    }
  ];

  return sportsNews.map(news => `
    <div class="col-lg-4">
      ${createCard(news)}
    </div>
  `).join('');
}

function createSportsCategories() {
  const categories = [
    { name: "Futebol", icon: "dribbble", count: "158 notícias" },
    { name: "Vôlei", icon: "circle-fill", count: "64 notícias" },
    { name: "Basquete", icon: "circle-half", count: "42 notícias" },
    { name: "Atletismo", icon: "lightning-charge", count: "35 notícias" }
  ];

  return categories.map(category => `
    <div class="col-md-3 col-sm-6">
      <div class="category-card p-4 text-center h-100">
        <i class="bi bi-${category.icon} display-4 text-success mb-3"></i>
        <h5 class="mb-2">${category.name}</h5>
        <p class="text-muted mb-0">${category.count}</p>
      </div>
    </div>
  `).join('');
}