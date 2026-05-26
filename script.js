// ============================================================
// QUIZ DATA (Completado para 10 questões)
// ============================================================
const quizQuestions = [
    {
        id: 1,
        category: "Sistemas Integrados",
        question: "O que é o sistema de Integração Lavoura-Pecuária-Floresta (ILPF)?",
        options: [
            "Uma técnica que separa as áreas de plantio, criação de gado e floresta para evitar contaminação.",
            "Uma estratégia que integra diferentes sistemas produtivos na mesma área, otimizando o uso da terra e aumentando a renda.",
            "Um método de desmatamento controlado para dar espaço à pecuária extensiva.",
            "O uso exclusivo de áreas florestais para a criação de gado."
        ],
        answer: 1,
        explanation: "O ILPF integra componentes agrícolas, pecuários e florestais em uma mesma área, gerando benefícios mútuos e conservação ambiental."
    },
    {
        id: 2,
        category: "Manejo do Solo",
        question: "Qual a principal vantagem do Sistema de Plantio Direto (SPD)?",
        options: [
            "Exige a queima da palhada anterior para limpar o terreno.",
            "Revolve profundamente o solo antes de cada plantio para melhor aeração.",
            "Mantém a cobertura do solo com palhada, protegendo contra erosão e conservando a umidade.",
            "Aumenta a necessidade de uso de fertilizantes químicos devido à falta de revolvimento do solo."
        ],
        answer: 2,
        explanation: "O Plantio Direto protege o solo contra a erosão, mantém a umidade, aumenta a matéria orgânica e reduz a emissão de CO₂ para a atmosfera."
    },
    {
        id: 3,
        category: "Tecnologia Agrícola",
        question: "Como a agricultura de precisão contribui para a sustentabilidade?",
        options: [
            "Utilizando tecnologias para aplicar insumos na medida e no local exatos, reduzindo desperdícios e impactos ambientais.",
            "Padronizando a aplicação de insumos em toda a lavoura, independentemente das necessidades específicas de cada área.",
            "Substituindo completamente o trabalho humano por robôs em todas as etapas da produção.",
            "Aumentando o uso de defensivos agrícolas para garantir que nenhuma praga sobreviva."
        ],
        answer: 0,
        explanation: "A agricultura de precisão utiliza GPS, sensores, drones e análise de dados para otimizar o uso de recursos."
    },
    {
        id: 4,
        category: "Controle Biológico",
        question: "O que são defensivos biológicos (biodefensivos)?",
        options: [
            "Produtos químicos sintéticos de alta toxicidade usados para controle de pragas.",
            "Produtos desenvolvidos a partir de organismos vivos, como fungos, bactérias e vírus, para controle de pragas e doenças.",
            "Sementes geneticamente modificadas para resistir a insetos.",
            "Equipamentos de proteção individual (EPI) usados pelos agricultores."
        ],
        answer: 1,
        explanation: "Biodefensivos são alternativas sustentáveis aos defensivos químicos, utilizando inimigos naturais para controlar pragas."
    },
    {
        id: 5,
        category: "Manejo do Solo",
        question: "Qual é o papel da rotação de culturas na agricultura sustentável?",
        options: [
            "Plantar a mesma cultura ano após ano para especializar a produção.",
            "Deixar a terra em pousio (descanso) por vários anos consecutivos.",
            "Alternar diferentes espécies vegetais na mesma área em estações diferentes, melhorando a saúde do solo e quebrando ciclos de pragas.",
            "Trocar as sementes de uma mesma cultura a cada safra para evitar resistência."
        ],
        answer: 2,
        explanation: "A rotação de culturas ajuda a repor nutrientes no solo, reduz a incidência de pragas e doenças específicas."
    },
    {
        id: 6,
        category: "Legislação Ambiental",
        question: "O que é a Reserva Legal prevista no Código Florestal Brasileiro (Lei 12.651/2012)?",
        options: [
            "Uma área de floresta nativa que pode ser desmatada mediante compensação financeira.",
            "Uma área dentro da propriedade rural que deve ser mantida com vegetação nativa, variando de 20% a 80% dependendo do bioma.",
            "Uma reserva de sementes nativas mantida pelo governo federal.",
            "Uma área exclusiva para criação de animais silvestres."
        ],
        answer: 1,
        explanation: "A Reserva Legal é uma obrigação legal para propriedades rurais, garantindo a conservação da biodiversidade."
    },
    {
        id: 7,
        category: "Recursos Hídricos",
        question: "O que são Áreas de Preservação Permanente (APPs) e qual sua importância?",
        options: [
            "Áreas destinadas à produção de culturas permanentes como café e laranja.",
            "Áreas protegidas por lei às margens de rios, topos de morros e encostas, essenciais para proteger recursos hídricos e prevenir erosão.",
            "Zonas industriais próximas a áreas rurais que não podem ser alteradas.",
            "Reservas de terra para expansão futura da produção agrícola."
        ],
        answer: 1,
        explanation: "As APPs são fundamentais para a proteção dos recursos hídricos, estabilidade geológica e biodiversidade."
    },
    {
        id: 8,
        category: "Gestão de Resíduos",
        question: "O que deve ser feito com as embalagens vazias de defensivos agrícolas?",
        options: [
            "Queimá-las na propriedade rural para eliminar os resíduos.",
            "Enterrá-las próximas a fontes de água para evitar evaporação.",
            "Realizar a tríplice lavagem e devolvê-las nos postos de recebimento licenciados para reciclagem.",
            "Reutilizá-las para armazenar água de consumo dos animais."
        ],
        answer: 2,
        explanation: "A logística reversa de embalagens de defensivos é obrigatória por lei e garante o descarte correto e seguro do material."
    },
    {
        id: 9,
        category: "Mudanças Climáticas",
        question: "Como o setor agropecuário pode atuar na redução de Gases de Efeito Estufa (GEE)?",
        options: [
            "Expandindo as áreas de pastagens degradadas.",
            "Adotando práticas como o tratamento de dejetos animais, recuperação de pastagens e sistemas agroflorestais.",
            "Aumentando o uso de combustíveis fósseis em tratores e maquinários.",
            "Abandonando o uso de sistemas integrados de produção."
        ],
        answer: 1,
        explanation: "Práticas de agricultura de baixo carbono ajudam a mitigar as emissões de metano e a sequestrar CO₂ no solo."
    },
    {
        id: 10,
        category: "Recursos Hídricos",
        question: "Qual método de irrigação é considerado mais eficiente em termos de economia de água?",
        options: [
            "Irrigação por gotejamento, que aplica a água diretamente na raiz da planta reduzindo a evaporação.",
            "Irrigação por sulcos de infiltração inundando toda a área.",
            "Aspersão convencional de alta pressão em horários de pico solar.",
            "Uso de pivô central sem sensores de umidade no solo."
        ],
        answer: 0,
        explanation: "O gotejamento minimiza perdas por vento e evaporação, entregando água de forma localizada e controlada."
    }
];

// ============================================================
// GAME STATE & LOGIC
// ============================================================
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = []; // Guarda histórico para o resumo final

function startQuiz() {
    document.getElementById('intro-screen').classList.remove('active');
    document.getElementById('intro-screen').style.display = 'none';
    
    const playingScreen = document.getElementById('playing-screen');
    playingScreen.classList.add('active');
    
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    
    updateHeader();
    loadQuestion();
}

function updateHeader() {
    const progressFill = document.getElementById('progress-fill');
    const scoreDisplay = document.getElementById('score-display');
    
    const pct = (currentQuestionIndex / quizQuestions.length) * 100;
    progressFill.style.width = `${pct}%`;
    scoreDisplay.textContent = `${score} pts`;
}

function loadQuestion() {
    const container = document.getElementById('question-container');
    const currentQ = quizQuestions[currentQuestionIndex];
    
    // Atualiza barra de progresso no topo antes
    updateHeader();
    
    let optionsHtml = '';
    currentQ.options.forEach((opt, idx) => {
        const letter = String.fromCharCode(65 + idx); // A, B, C, D
        optionsHtml += `
            <button class="option-btn" onclick="selectOption(${idx})" id="opt-${idx}">
                <div class="option-letter">${letter}</div>
                <div class="option-text">${opt}</div>
            </button>
        `;
    });

    container.innerHTML = `
        <div class="question-card animate-slide-in-up">
            <div class="meta-row">
                <span class="category-badge">🌱 ${currentQ.category}</span>
                <span class="question-number">Questão ${currentQuestionIndex + 1} de ${quizQuestions.length}</span>
            </div>
            <h2 class="question-text">${currentQ.question}</h2>
            <div class="options-list">
                ${optionsHtml}
            </div>
            <div id="feedback-area"></div>
        </div>
    `;
}

function selectOption(selectedIndex) {
    const currentQ = quizQuestions[currentQuestionIndex];
    const isCorrect = selectedIndex === currentQ.answer;
    
    if (isCorrect) {
        score += 10;
    }
    
    userAnswers.push({
        question: currentQ.question,
        category: currentQ.category,
        correct: isCorrect
    });
    
    // Desabilitar todos os botões e destacar o correto/incorreto
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === currentQ.answer) {
            btn.classList.add('correct');
        } else if (idx === selectedIndex && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });
    
    // Exibir explicação dinamicamente
    const feedbackArea = document.getElementById('feedback-area');
    const feedbackClass = isCorrect ? 'correct' : 'incorrect';
    const feedbackTitle = isCorrect ? '🎉 Resposta Correta!' : '❌ Resposta Incorreta!';
    
    feedbackArea.innerHTML = `
        <div class="explanation ${feedbackClass}">
            <div class="explanation-text">
                <strong>${feedbackTitle}</strong> ${currentQ.explanation}
            </div>
        </div>
        <button class="btn-next" onclick="nextQuestion()">Próxima Questão ➡️</button>
    `;
    
    // Atualiza pontos imediatamente no topo
    document.getElementById('score-display').textContent = `${score} pts`;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('playing-screen').classList.remove('active');
    const resultScreen = document.getElementById('result-screen');
    resultScreen.classList.add('active');
    
    const finalScoreNum = score / 10; // converte pts de volta para quantidade de acertos
    const totalQ = quizQuestions.length;
    const percentage = (finalScoreNum / totalQ) * 100;
    
    document.getElementById('final-score').textContent = finalScoreNum;
    document.getElementById('final-total').textContent = `de ${totalQ}`;
    document.getElementById('score-percentage').textContent = `${percentage}%`;
    
    // Definir feedbacks textuais customizados baseado no aproveitamento
    const titleEl = document.getElementById('result-title');
    const messageEl = document.getElementById('result-message');
    
    if (percentage >= 80) {
        titleEl.textContent = "Excelente!";
        messageEl.textContent = "Você demonstrou um conhecimento admirável sobre as diretrizes e inovações da agricultura sustentável.";
    } else if (percentage >= 50) {
        titleEl.textContent = "Muito Bem!";
        messageEl.textContent = "Você tem uma base sólida de conhecimento, mas ainda há espaço para aprender mais sobre o agronegócio verde.";
    } else {
        titleEl.textContent = "Continue Estudando!";
        messageEl.textContent = "A sustentabilidade no campo é cheia de detalhes. Vale a pena rever os conceitos para aprimorar seu conhecimento.";
    }
    
    // Ajustar animação circular no gráfico dinâmico CSS
    const root = document.documentElement;
    root.style.setProperty('--score-pct', `${percentage}%`);
    root.style.setProperty('--score-color', percentage >= 70 ? '#1b4332' : percentage >= 50 ? '#d4a017' : '#c83232');
    
    // Renderizar a lista resumida (breakdown)
    const breakdownList = document.getElementById('breakdown-list');
    breakdownList.innerHTML = '';
    
    userAnswers.forEach((ans) => {
        const itemClass = ans.correct ? 'correct' : 'incorrect';
        const icon = ans.correct ? '✅' : '❌';
        
        breakdownList.innerHTML += `
            <div class="breakdown-item ${itemClass}">
                <div class="breakdown-icon">${icon}</div>
                <div>
                    <div class="breakdown-category">${ans.category}</div>
                    <div class="breakdown-question">${ans.question}</div>
                </div>
            </div>
        `;
    });
}

function restartQuiz() {
    document.getElementById('result-screen').classList.remove('active');
    startQuiz();
}

// Atalhos de teclado
window.addEventListener('keydown', (e) => {
    const playingScreen = document.getElementById('playing-screen');
    if (!playingScreen.classList.contains('active')) return;
    
    // Se as teclas forem 1, 2, 3 ou 4
    if (['1', '2', '3', '4'].includes(e.key)) {
        const index = parseInt(e.key) - 1;
        const targetBtn = document.getElementById(`opt-${index}`);
        if (targetBtn && !targetBtn.disabled) {
            targetBtn.click();
        }
    }
    
    // Se apertar Enter para avançar quando o botão de próxima estiver na tela
    if (e.key === 'Enter') {
        const nextBtn = document.querySelector('.btn-next');
        if (nextBtn) {
            nextBtn.click();
        }
    }
});