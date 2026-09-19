// Base de Dados de Produtos
const produtos = [
    {
        id: 1,
        titulo: "Smartphone Dobrável 256GB 8GB RAM",
        categoria: "eletronicos",
        preco: 3499,
        precoAntigo: 4999,
        desconto: "30% OFF",
        imagem: "https://picsum.photos/300/300?random=1",
        descricao: "Smartphone dobrável de alta performance com tela AMOLED de 6.7 polegadas, câmera dupla de 12MP e bateria inteligente."
    },
    {
        id: 2,
        titulo: "Monitor Gamer 24' 144Hz 1ms Full HD",
        categoria: "informatica",
        preco: 850,
        precoAntigo: 1100,
        desconto: "22% OFF",
        imagem: "https://picsum.photos/300/300?random=2",
        descricao: "Painel IPS ultra-rápido com taxa de atualização de 144Hz, ajuste de altura e suporte a FreeSync."
    },
    {
        id: 3,
        titulo: "Fone Headset Gamer Surround 7.1 Sem Fio",
        categoria: "audio",
        preco: 450,
        precoAntigo: 530,
        desconto: "15% OFF",
        imagem: "https://picsum.photos/300/300?random=3",
        descricao: "Áudio tridimensional com microfone de cancelamento de ruído e autonomia de até 20 horas continuas."
    },
    {
        id: 4,
        titulo: "Console de Videogame 1TB com 2 Controles",
        categoria: "games",
        preco: 3800,
        precoAntigo: 4200,
        desconto: "10% OFF",
        imagem: "https://picsum.photos/300/300?random=4",
        descricao: "Processador gráfico de última geração, suporte a 4K e carregamento ultraveloce em SSD."
    }
];

let produtoSelecionado = null;
let quantidadeCarrinho = 0;
let categoriaAtual = 'todas';

document.addEventListener("DOMContentLoaded", () => {
    renderizarProdutos(produtos);
});

// Renderizar Produtos
function renderizarProdutos(lista) {
    const container = document.getElementById("products-container");
    container.innerHTML = "";

    lista.forEach(prod => {
        const card = document.createElement("article");
        card.className = "product-card";
        
        card.innerHTML = `
            <div class="card-clickable" onclick="abrirDetalhes(${prod.id})">
                <div class="product-img"><img src="${prod.imagem}" alt="${prod.titulo}"></div>
                <div class="product-info">
                    <span class="tag-promo">${prod.desconto}</span>
                    <h3 class="product-title">${prod.titulo}</h3>
                    <div class="price-container">
                        <span class="old-price">R$ ${prod.precoAntigo}</span>
                        <div class="current-price">R$ ${prod.preco} <small>${prod.desconto}</small></div>
                    </div>
                    <p class="free-shipping">Frete grátis ⚡</p>
                </div>
            </div>
            <button class="btn-direct-buy" onclick="iniciarFluxoPagamento(${prod.id})">Comprar agora</button>
        `;

        container.appendChild(card);
    });
}

// Filtros
function filtrarCategoria(categoria, elemento) {
    categoriaAtual = categoria;
    document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.remove("active"));
    elemento.classList.add("active");

    const filtrados = categoria === 'todas' ? produtos : produtos.filter(p => p.categoria === categoria);
    renderizarProdutos(filtrados);
}

function filtrarPorBusca() {
    const termo = document.getElementById("search-input").value.toLowerCase();
    const filtrados = produtos.filter(p => {
        const atendeCategoria = (categoriaAtual === 'todas' || p.categoria === categoriaAtual);
        const atendeBusca = p.titulo.toLowerCase().includes(termo);
        return atendeCategoria && atendeBusca;
    });
    renderizarProdutos(filtrados);
}

// FLUXO DE PAGAMENTO SIMULADO E RASTREIO
function iniciarFluxoPagamento(id) {
    produtoSelecionado = produtos.find(p => p.id === id);

    document.getElementById("pay-product-title").innerText = produtoSelecionado.titulo;
    document.getElementById("pay-product-price").innerText = `R$ ${produtoSelecionado.preco.toFixed(2)}`;
    
    document.getElementById("modal-pagamento").classList.remove("hidden");
}

function fecharModalPagamento() {
    document.getElementById("modal-pagamento").classList.add("hidden");
}

function processarPagamento(metodo) {
    fecharModalPagamento();
    
    // Abre modal de carregamento
    document.getElementById("modal-processando").classList.remove("hidden");

    // Simula tempo de resposta do banco (2.5 segundos)
    setTimeout(() => {
        document.getElementById("modal-processando").classList.add("hidden");
        abrirTelaRastreio(metodo);
    }, 2500);
}

function abrirTelaRastreio(metodo) {
    // Esconde visualizações anteriores
    document.getElementById("home-view").classList.add("hidden");
    document.getElementById("product-detail-view").classList.add("hidden");
    
    // Mostra tela de Rastreamento
    document.getElementById("tracking-view").classList.remove("hidden");

    // Preenche dados do pedido
    document.getElementById("track-title").innerText = produtoSelecionado.titulo;
    document.getElementById("track-img").src = produtoSelecionado.imagem;
    document.getElementById("track-payment-method").innerText = metodo;
    document.getElementById("track-code").innerText = `#ML-${Math.floor(10000000 + Math.random() * 90000000)}`;

    // Simula a progressão automática do rastreio
    simularProgressoEnvio();
    window.scrollTo(0, 0);
}

function simularProgressoEnvio() {
    // Reseta status
    document.getElementById("step-prep").classList.remove("active");
    document.getElementById("step-transit").classList.remove("active");
    document.getElementById("step-delivered").classList.remove("active");

    // Etapa 1: Preparação em 3s
    setTimeout(() => {
        document.getElementById("step-prep").classList.add("active");
    }, 3000);

    // Etapa 2: Em trânsito em 7s
    setTimeout(() => {
        document.getElementById("step-transit").classList.add("active");
    }, 7000);
}

function fecharRastreio() {
    document.getElementById("tracking-view").classList.add("hidden");
    document.getElementById("home-view").classList.remove("hidden");
}

// Detalhes do Produto
function abrirDetalhes(id) {
    produtoSelecionado = produtos.find(p => p.id === id);

    document.getElementById('home-view').classList.add('hidden');
    document.getElementById('product-detail-view').classList.remove('hidden');

    document.getElementById('detail-title').innerText = produtoSelecionado.titulo;
    document.getElementById('detail-img').src = produtoSelecionado.imagem;
    document.getElementById('detail-price').innerText = `R$ ${produtoSelecionado.preco.toFixed(2)}`;
    document.getElementById('detail-old-price').innerText = `R$ ${produtoSelecionado.precoAntigo.toFixed(2)}`;
    document.getElementById('detail-discount').innerText = produtoSelecionado.desconto;
    document.getElementById('detail-description').innerText = produtoSelecionado.descricao;
    document.getElementById('detail-installment-val').innerText = `R$ ${(produtoSelecionado.preco / 10).toFixed(2)}`;

    document.getElementById('btn-detail-direct').onclick = () => iniciarFluxoPagamento(produtoSelecionado.id);

    window.scrollTo(0, 0);
}

function fecharDetalhes() {
    document.getElementById('product-detail-view').classList.add('hidden');
    document.getElementById('home-view').classList.remove('hidden');
}

function adicionarAoCarrinho() {
    quantidadeCarrinho++;
    document.getElementById('cart-count').innerText = quantidadeCarrinho;
    alert("Adicionado ao carrinho!");
}

function resetarFiltros() {
    document.getElementById("search-input").value = "";
    filtrarCategoria('todas', document.querySelector('.nav-btn'));
    fecharDetalhes();
    fecharRastreio();
}