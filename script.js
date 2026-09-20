// ==========================================
// 1. BASE DE DADOS DOS PRODUTOS
// ==========================================

// Secção: Linha Especial
const produtosEspecial = [
    {
        id: 1,
        titulo: "Douce Vanille — Hidratante Corporal",
        categoria: ["Hidratante", "Corpo", "Especial"],
        preco: 18.00,
        precoAntigo: 20.00,
        desconto: "3% OFF",
        imagem: "https://i.postimg.cc/nV44VJj8/ddd.jpg",
        descricao: "Hidratante corporal com fragrância delicada de baunilha, desenvolvido para proporcionar hidratação e deixar a pele macia, suave e perfumada. Ideal para o uso diário, trazendo uma sensação aconchegante e agradável."
    },
    {
        id: 2,
        titulo: "Brume de Vanille — Hidratante e Perfume Capilar",
        categoria: ["Hidratante", "Corpo", "Rosto", "Cabelo"], // CORRIGIDO: Vírgula adicionada e limpa no final
        preco: 15.00,
        precoAntigo: 68.00,
        desconto: "60% OFF",
        imagem: "https://i.postimg.cc/9QYXzLPT/Whats-App-Image-2026-09-19-at-21-49-18.jpg",
        descricao: "Cuidado capilar com fragrância de baunilha, desenvolvido para deixar os cabelos perfumados e com uma sensação de maciez. Pode ser utilizado na rotina diária para proporcionar um toque perfumado aos fios."
    },
    {
        id: 3,
        titulo: "Lait de Vanille — Sabonete Líquido",
        categoria: ["Sabonete"],
        preco: 12.00,
        precoAntigo: 53.00,
        desconto: "70% OFF",
        imagem: "https://i.postimg.cc/4NzsFW0g/Whats-App-Image-2026-09-1e9-at-21-49-18.jpg",
        descricao: "Sabonete líquido com fragrância suave e cremosa de baunilha, desenvolvido para a limpeza diária da pele. Proporciona uma sensação agradável de frescor e deixa a pele delicadamente perfumada."
    },
    {
        id: 4,
        titulo: "Sucre de Vanille — Esfoliante Corporal",
        categoria: ["Esfoliante", "Corpo"],
        preco: 15.00,
        precoAntigo: 42.00,
        desconto: "47% OFF",
        imagem: "https://i.postimg.cc/MGrSjNnW/Whats-App-Image-2026-09-19-eat-21-49-18.jpg",
        descricao: "Esfoliante corporal com fragrância de baunilha, desenvolvido para realizar uma esfoliação suave e auxiliar na remoção de células mortas. Deixa a pele com uma sensação de maciez, limpeza e renovação."
    },
    {
        id: 5,
        titulo: "Fleur de Vanille — Sabonete em Barra",
        categoria: ["Sabonete"],
        preco: 7.00,
        precoAntigo: 10.00,
        desconto: "34% OFF",
        imagem: "https://i.postimg.cc/v8nscPMp/Whats-App-Image-2026-09-1e9-at-21-49-19.jpg",
        descricao: "Sabonete em barra com fragrância delicada de baunilha, desenvolvido para a limpeza diária da pele. Une cuidado, suavidade e uma fragrância doce e aconchegante."
    },
    {
        id: 6,
        titulo: "Éclat de Vanille — Body Splash",
        categoria: ["Body", "Corpo"],
        preco: 20.00,
        precoAntigo: 42.00,
        desconto: "51% OFF",
        imagem: "https://i.postimg.cc/XYsMTmcs/Whats-App-Image-2026-09-19-at-2e1-49-19.jpg",
        descricao: "Body splash com fragrância de baunilha, desenvolvido para perfumar o corpo de maneira leve e agradável. Sua fragrância doce e delicada é ideal para complementar a rotina de cuidados pessoais."
    },
    {
        id: 7,
        titulo: "Baiser de Vanille — Bálsamo Labial",
        categoria: ["Labios", "Hidratante"],
        preco: 8.00,
        precoAntigo: 12.00,
        desconto: "43% OFF",
        imagem: "https://i.postimg.cc/85rqf58L/Whats-App-Image-e2026-09-19-at-21-49-19.jpg",
        descricao: "Bálsamo labial com fragrância de baunilha, desenvolvido para auxiliar na hidratação dos lábios e ajudar a evitar a sensação de ressecamento. Possui aroma suave e agradável."
    }
];

// Secção: Para Você (IDs alterados para evitar duplicidade com a lista anterior)
const produtosParaVoce = [
    {
        id: 8, // CORRIGIDO: ID 8
        titulo: "Maracujá Fresh — Esfoliante de Maracujá",
        categoria: ["Esfoliante", "Corpo", "Rosto"], // CORRIGIDO: Espaço removido de "Esfoliante" e vírgula adicionada após o array
        preco: 12.00,
        precoAntigo: 30.00,
        desconto: "34% OFF",
        imagem: "https://via.placeholder.com/300?text=Maracuja+Fresh",
        descricao: "Esfoliante corporal com fragrância de maracujá, desenvolvido para promover uma esfoliação suave e auxiliar na remoção de células mortas. Deixa a pele com sensação de maciez, limpeza e um perfume agradável e refrescante. Cor: Amarelo suave"
    },
    {
        id: 9, // CORRIGIDO: ID 9
        titulo: "Lavanda Serenity — Sabonete de Lavanda",
        categoria: ["Sabonete"],
        preco: 8.00,
        precoAntigo: 42.00,
        desconto: "51% OFF",
        imagem: "https://via.placeholder.com/300?text=Lavanda+Serenity",
        descricao: "Sabonete corporal com fragrância de lavanda, desenvolvido para limpar suavemente a pele, proporcionando uma sensação agradável de frescor e cuidado. Sua fragrância delicada deixa um perfume suave após o banho. Cor: Azul"
    },
    {
        id: 10, // CORRIGIDO: ID 10
        titulo: "Clear Bloom — Sabonete para uniformização da aparência da pele",
        categoria: ["Corpo", "Rosto"],
        preco: 9.00,
        precoAntigo: 12.00,
        desconto: "23% OFF",
        imagem: "https://via.placeholder.com/300?text=Clear+Bloom",
        descricao: "Sabonete desenvolvido para a limpeza e cuidado diário da pele, com proposta de auxiliar na aparência mais uniforme e iluminada. Possui fragrância suave e proporciona uma sensação de pele limpa e renovada. Cor: Branco"
    }
];

// União de todos os produtos para buscas globais
const todosProdutos = [...produtosEspecial, ...produtosParaVoce];

let produtoSelecionado = null;
let quantidadeCarrinho = 0;
let categoriaAtual = 'todas';

// ==========================================
// 2. INICIALIZAÇÃO DA PÁGINA
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    renderizarProdutos(produtosEspecial, "products-container");
    renderizarProdutos(produtosParaVoce, "products-container-para-voce");
});

// ==========================================
// 3. RENDERIZAÇÃO DOS CARDS
// ==========================================
function renderizarProdutos(lista, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";

    if (lista.length === 0) {
        container.innerHTML = "<p style='grid-column: 1/-1; color: #666;'>Nenhum produto encontrado nesta secção.</p>";
        return;
    }

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
                        <span class="old-price">R$ ${prod.precoAntigo.toFixed(2).replace('.', ',')}</span>
                        <div class="current-price">R$ ${prod.preco.toFixed(2).replace('.', ',')} <small>${prod.desconto}</small></div>
                    </div>
                    <p class="free-shipping">Frete grátis ⚡</p>
                </div>
            </div>
            <button class="btn-direct-buy" onclick="iniciarFluxoPagamento(${prod.id})">Comprar agora</button>
        `;

        container.appendChild(card);
    });
}

// ==========================================
// 4. FILTROS E PESQUISA
// ==========================================
function filtrarCategoria(categoria, elemento) {
    categoriaAtual = categoria;
    
    document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.remove("active"));
    if (elemento) elemento.classList.add("active");

    const filtradosEspecial = categoria === 'todas' 
        ? produtosEspecial 
        : produtosEspecial.filter(p => p.categoria.includes(categoria));

    const filtradosParaVoce = categoria === 'todas' 
        ? produtosParaVoce 
        : produtosParaVoce.filter(p => p.categoria.includes(categoria));

    renderizarProdutos(filtradosEspecial, "products-container");
    renderizarProdutos(filtradosParaVoce, "products-container-para-voce");
}

function filtrarPorBusca() {
    const termo = document.getElementById("search-input").value.toLowerCase();

    const filtradosEspecial = produtosEspecial.filter(p => {
        const atendeCategoria = (categoriaAtual === 'todas' || p.categoria.includes(categoriaAtual));
        const atendeBusca = p.titulo.toLowerCase().includes(termo);
        return atendeCategoria && atendeBusca;
    });

    const filtradosParaVoce = produtosParaVoce.filter(p => {
        const atendeCategoria = (categoriaAtual === 'todas' || p.categoria.includes(categoriaAtual));
        const atendeBusca = p.titulo.toLowerCase().includes(termo);
        return atendeCategoria && atendeBusca;
    });

    renderizarProdutos(filtradosEspecial, "products-container");
    renderizarProdutos(filtradosParaVoce, "products-container-para-voce");
}

// ==========================================
// 5. FLUXO DE PAGAMENTO E RASTREIO
// ==========================================
function iniciarFluxoPagamento(id) {
    produtoSelecionado = todosProdutos.find(p => p.id === id);

    document.getElementById("pay-product-title").innerText = produtoSelecionado.titulo;
    document.getElementById("pay-product-price").innerText = `R$ ${produtoSelecionado.preco.toFixed(2).replace('.', ',')}`;
    
    document.getElementById("modal-pagamento").classList.remove("hidden");
}

function fecharModalPagamento() {
    document.getElementById("modal-pagamento").classList.add("hidden");
}

function processarPagamento(metodo) {
    fecharModalPagamento();
    document.getElementById("modal-processando").classList.remove("hidden");

    setTimeout(() => {
        document.getElementById("modal-processando").classList.add("hidden");
        abrirTelaRastreio(metodo);
    }, 2500);
}

function abrirTelaRastreio(metodo) {
    document.getElementById("home-view").classList.add("hidden");
    
    const homeParaVoce = document.getElementById("home-para-voce-view");
    if (homeParaVoce) homeParaVoce.classList.add("hidden");

    document.getElementById("product-detail-view").classList.add("hidden");
    document.getElementById("tracking-view").classList.remove("hidden");

    document.getElementById("track-title").innerText = produtoSelecionado.titulo;
    document.getElementById("track-img").src = produtoSelecionado.imagem;
    document.getElementById("track-payment-method").innerText = metodo;
    document.getElementById("track-code").innerText = `#ML-${Math.floor(10000000 + Math.random() * 90000000)}`;

    simularProgressoEnvio();
    window.scrollTo(0, 0);
}

function simularProgressoEnvio() {
    document.getElementById("step-prep").classList.remove("active");
    document.getElementById("step-transit").classList.remove("active");
    document.getElementById("step-delivered").classList.remove("active");

    setTimeout(() => {
        document.getElementById("step-prep").classList.add("active");
    }, 3000);

    setTimeout(() => {
        document.getElementById("step-transit").classList.add("active");
    }, 7000);
}

function fecharRastreio() {
    document.getElementById("tracking-view").classList.add("hidden");
    document.getElementById("home-view").classList.remove("hidden");

    const homeParaVoce = document.getElementById("home-para-voce-view");
    if (homeParaVoce) homeParaVoce.classList.remove("hidden");
}

// ==========================================
// 6. PAINEL DE DETALHES DO PRODUTO
// ==========================================
function abrirDetalhes(id) {
    produtoSelecionado = todosProdutos.find(p => p.id === id);

    document.getElementById("home-view").classList.add("hidden");

    const homeParaVoce = document.getElementById("home-para-voce-view");
    if (homeParaVoce) homeParaVoce.classList.add("hidden");

    document.getElementById("product-detail-view").classList.remove("hidden");

    document.getElementById("detail-title").innerText = produtoSelecionado.titulo;
    document.getElementById("detail-img").src = produtoSelecionado.imagem;
    document.getElementById("detail-price").innerText = `R$ ${produtoSelecionado.preco.toFixed(2).replace('.', ',')}`;
    document.getElementById("detail-old-price").innerText = `R$ ${produtoSelecionado.precoAntigo.toFixed(2).replace('.', ',')}`;
    document.getElementById("detail-discount").innerText = produtoSelecionado.desconto;
    document.getElementById("detail-description").innerText = produtoSelecionado.descricao;
    document.getElementById("detail-installment-val").innerText = `R$ ${(produtoSelecionado.preco / 10).toFixed(2).replace('.', ',')}`;

    document.getElementById("btn-detail-direct").onclick = () => iniciarFluxoPagamento(produtoSelecionado.id);

    window.scrollTo(0, 0);
}

function fecharDetalhes() {
    document.getElementById("product-detail-view").classList.add("hidden");
    document.getElementById("home-view").classList.remove("hidden");

    const homeParaVoce = document.getElementById("home-para-voce-view");
    if (homeParaVoce) homeParaVoce.classList.remove("hidden");
}

// ==========================================
// 7. UTILITÁRIOS
// ==========================================
function adicionarAoCarrinho() {
    quantidadeCarrinho++;
    document.getElementById("cart-count").innerText = quantidadeCarrinho;
    alert("Adicionado ao carrinho!");
}

function resetarFiltros() {
    document.getElementById("search-input").value = "";
    filtrarCategoria("todas", document.querySelector(".nav-btn"));
    fecharDetalhes();
    fecharRastreio();
}