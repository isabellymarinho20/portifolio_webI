const configuracaoPython = {
    codigo: `from flask import Flask, redirect, url_for

@app.route('/')
def home():
    return redirect(url_for('auth.portfolio'))

if __name__ == '__main__':
    app.run(debug=True)`
};

const projetos = [
    { titulo: "Análise de Documentação",               tech: "N8N | Gemini",          desc: "Treinamento de IA via API.",                                             link: "https://github.com/isabellymarinho20/analise_documentacao.git",              img: "img/documen.jpg" },
    { titulo: "Censo IBGE SJC",                        tech: "HTML | CSS | Python",   desc: "Visualização de dados para transparência.",                              link: "https://github.com/FATCK06/ProjectAPI_FirstSemester.git",                    img: "img/sjc.png"     },
    { titulo: "Controle do almoxarifado de eletrônica",tech: "HTML | CSS | JS",       desc: "Aplicação web para controlar o almoxarifado de eletronica.",             link: "https://github.com/isabellymarinho20/Eletronics-Warehouse-Inventory-System-.git", img: "img/ele.jpg" },
    { titulo: "API para FastFood",                     tech: "Java",                  desc: "API em java para pedidos.",                                              link: "https://github.com/isabellymarinho20/garagem.git",                           img: "img/fas.png"     },
    { titulo: "IA para identificação de fogo e fumaça",tech: "Python | YOLO",         desc: "IA para identificar fogo e fumaça.",                                     link: "#",                                                                          img: "img/fogo.jpg"    },
    {
    "titulo": "Plataforma de conteudo técnico de normas aeronauticas",
    "tech": "JavaScript | Node.js | TypeScript | React",
    "desc": "Centralização de normas aeronauticas",
    "link": "https://github.com/FATCK06/ProjectAPI_SecondSemester",
    "img": "img/akaer.png"
  }
];

const certificados = [
    { titulo: "Desafio de Ideias ON",    instituicao: "SENAI",     categoria: "Tecnologia"     },
    { titulo: "Fundamentos FlutterFlow", instituicao: "NoCode",    categoria: "Especialização" },
    { titulo: "Escola de Inovadores",    instituicao: "INOVA CPS", categoria: "Especialização" },
    { titulo: "Introdução ao SCRUM",     instituicao: "FGV",       categoria: "Especialização" },
];

const formacoes = [
    { ano: "2025 — Cursando",  curso: "Desenvolvimento de Software Multiplataforma", instituicao: "FATEC SJC" },
    { ano: "2024 — 2026",  curso: "Técnico em Desenvolvimento de Sistemas",      instituicao: "SENAI SJC" },
    { ano: "2022 — 2024",      curso: "Ensino Médio Técnico em Informática",         instituicao: "UNIVAP"    },
];

const experiencias = [
    { empresa: "Petrobras",   periodo: "2024 — 2026", cargo: "Jovem Aprendiz",                  desc: "Curso de desenvolvimento de sistemas" },
    { empresa: "SanjaWorks",  periodo: "2024 — 2025",       cargo: "Estágio Técnico de Informática",  desc: "Automações com N8N e IA"              },
];

function carregarJanelaCodigo() {
    const container = document.getElementById('container-python');
    if (!container) return;
    container.innerHTML = `
        <div class="code-window">
            <div class="code-header">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
            </div>
            <div class="code-content">
                <pre><code>${configuracaoPython.codigo}</code></pre>
            </div>
        </div>
    `;
}

function renderProjetos() {
    const grid = document.querySelector('.projects-grid');
    if (!grid) return;
    grid.innerHTML = projetos.map(p => `
        <div class="project-card">
            <div class="project-image">
                <img src="${p.img}" alt="${p.titulo}">
            </div>
            <div class="project-info">
                <span class="tech-tag">${p.tech}</span>
                <h3>${p.titulo}</h3>
                <p>${p.desc}</p>
                <a href="${p.link}" target="_blank" class="btn-view">Ver Projeto</a>
            </div>
        </div>
    `).join('');
}

function renderCertificados() {
    const grid = document.querySelector('.cert_grid');
    if (!grid) return;
    grid.innerHTML = certificados.map(c => `
        <div class="cert_card">
            <span class="cert_badge">${c.categoria}</span>
            <h3>${c.titulo}</h3>
            <p class="instituicao">${c.instituicao}</p>
        </div>
    `).join('');
}

function renderFormacoes() {
    const container = document.querySelector('.timeline');
    if (!container) return;
    container.innerHTML = formacoes.map(f => `
        <div class="timeline-card">
            <div class="card-content">
                <span class="ano">${f.ano}</span>
                <h3 class="curso">${f.curso}</h3>
                <p class="instituicao">${f.instituicao}</p>
            </div>
        </div>
    `).join('');
}

function renderExperiencias() {
    const container = document.querySelector('.exp-container');
    if (!container) return;
    container.innerHTML = experiencias.map(e => `
        <div class="exp-card">
            <div class="exp-header">
                <h3 class="exp-company">${e.empresa}</h3>
                <span class="exp-date">${e.periodo}</span>
            </div>
            <p class="exp-role">${e.cargo}</p>
            <p>${e.desc}</p>
        </div>
    `).join('');
}

window.onload = function () {
    carregarJanelaCodigo();
    renderProjetos();
    renderCertificados();
    renderFormacoes();
    renderExperiencias();
};
