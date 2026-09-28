/* =========================================================
   EPRM MATCH
   SCRIPT PRINCIPAL
========================================================= */


/* =========================================================
   CONFIGURAÇÃO — GOOGLE SHEETS
========================================================= */

const GOOGLE_SHEETS_URL =
    "https://script.google.com/macros/s/AKfycbzk6j_zOXcxWTsz2IYPQs3eJUYrgg4Bf_jyA5dtqDjhx8Ewt6STGvgEhyyILpgprF_Q/exec";


/* =========================================================
   ELEMENTOS
========================================================= */

const inicio = document.getElementById("inicio");
const quiz = document.getElementById("quiz");
const loading = document.getElementById("loading");
const resultado = document.getElementById("resultado");
const curso = document.getElementById("curso");

const startBtn = document.getElementById("start-btn");

const numeroPergunta = document.getElementById("numeroPergunta");
const totalPerguntas = document.getElementById("totalPerguntas");
const progressBar = document.getElementById("progressBar");

const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answersContainer");

const resultTitle = document.getElementById("resultTitle");
const resultCourses = document.getElementById("resultCourses");
const resultDescription = document.getElementById("resultDescription");
const resultTags = document.getElementById("resultTags");

const courseBtn = document.getElementById("courseBtn");
const restartBtn = document.getElementById("restartBtn");

const courseIcon = document.getElementById("courseIcon");
const courseTitle = document.getElementById("courseTitle");
const courseDescription = document.getElementById("courseDescription");
const courseProfile = document.getElementById("courseProfile");
const courseAreas = document.getElementById("courseAreas");
const courseEprm = document.getElementById("courseEprm");

const courseRestartBtn = document.getElementById("courseRestartBtn");


/* =========================================================
   CURSOS
========================================================= */

const cursos = {

    comunicacao: {
        titulo: "Comunicação, Marketing, Relações Públicas e Publicidade",
        icone: "✦",
        descricao:
            "Tens facilidade em comunicar, criar ideias e pensar em formas de captar a atenção das pessoas. Gostas de transformar conceitos em mensagens, campanhas e experiências.",
        tags: [
            "Criatividade",
            "Comunicação",
            "Marketing",
            "Publicidade",
            "Pessoas"
        ],
        razao:
            "As tuas respostas mostram uma forte ligação à criatividade, comunicação e contacto com pessoas. Podes sentir-te especialmente motivado quando tens liberdade para criar, apresentar ideias e desenvolver projetos.",
        perfil:
            "Criativo, comunicativo e estratégico.",
        areas:
            "Comunicação · Marketing · Publicidade · Relações Públicas · Conteúdos",
        eprm:
            "Na EPRM, esta área permite explorar diferentes formas de comunicar, promover ideias, criar conteúdos e trabalhar com marcas e públicos."
    },

    farmacia: {
        titulo: "Farmácia",
        icone: "✚",
        descricao:
            "Tens interesse por saúde, ciência, organização e pelo contacto responsável com pessoas.",
        tags: [
            "Ciência",
            "Saúde",
            "Precisão",
            "Organização",
            "Responsabilidade"
        ],
        razao:
            "As tuas respostas mostram interesse por áreas onde o rigor, a responsabilidade e a atenção ao detalhe têm um papel importante.",
        perfil:
            "Responsável, cuidadoso e atento ao detalhe.",
        areas:
            "Saúde · Medicamentos · Atendimento · Organização · Ciência",
        eprm:
            "Na EPRM, esta área permite desenvolver conhecimentos relacionados com a farmácia, saúde, produtos e atendimento ao público."
    },

    acao: {
        titulo: "Ação Educativa",
        icone: "★",
        descricao:
            "Gostas de ajudar, acompanhar e trabalhar diretamente com pessoas. Tens interesse por atividades educativas, sociais e pelo desenvolvimento dos outros.",
        tags: [
            "Pessoas",
            "Educação",
            "Empatia",
            "Criatividade",
            "Acompanhamento"
        ],
        razao:
            "As tuas respostas mostram que valorizas o contacto humano e que gostas da ideia de contribuir para o desenvolvimento e bem-estar de outras pessoas.",
        perfil:
            "Empático, atento, criativo e orientado para as pessoas.",
        areas:
            "Educação · Crianças · Jovens · Atividades · Acompanhamento",
        eprm:
            "Na EPRM, esta área permite desenvolver competências para apoiar atividades educativas, acompanhar grupos e trabalhar em diferentes contextos sociais."
    },

    manutencao: {
        titulo: "Manutenção Industrial",
        icone: "⚙",
        descricao:
            "Gostas de perceber como as coisas funcionam, identificar problemas e encontrar soluções práticas relacionadas com máquinas e equipamentos.",
        tags: [
            "Indústria",
            "Máquinas",
            "Manutenção",
            "Técnica",
            "Soluções"
        ],
        razao:
            "As tuas respostas revelam uma preferência por desafios práticos, resolução de problemas e ambientes onde podes trabalhar diretamente com equipamentos e sistemas.",
        perfil:
            "Prático, técnico e orientado para soluções.",
        areas:
            "Máquinas · Equipamentos · Manutenção · Indústria · Sistemas",
        eprm:
            "Na EPRM, esta área permite desenvolver conhecimentos técnicos ligados à manutenção, equipamentos e funcionamento de sistemas industriais."
    },

    mecatronica: {
        titulo: "Mecatrónica",
        icone: "⌘",
        descricao:
            "Tens curiosidade por tecnologia, eletrónica, automação e máquinas. Gostas de perceber como diferentes sistemas podem funcionar em conjunto.",
        tags: [
            "Tecnologia",
            "Eletrónica",
            "Automação",
            "Robótica",
            "Inovação"
        ],
        razao:
            "As tuas respostas apontam para curiosidade tecnológica e gosto por compreender sistemas, experimentar soluções e perceber como diferentes componentes trabalham em conjunto.",
        perfil:
            "Curioso, tecnológico e solucionador.",
        areas:
            "Eletrónica · Automação · Robótica · Tecnologia · Máquinas",
        eprm:
            "Na EPRM, esta área permite explorar a ligação entre mecânica, eletrónica, informática, automação e tecnologia."
    },

    desporto: {
        titulo: "Desporto",
        icone: "●",
        descricao:
            "Gostas de movimento, atividade física, desafios e ambientes dinâmicos. Valorizas a energia, a cooperação e o espírito de equipa.",
        tags: [
            "Movimento",
            "Desporto",
            "Equipa",
            "Energia",
            "Desafio"
        ],
        razao:
            "As tuas respostas mostram uma ligação forte ao movimento, à atividade física e a situações onde podes estar ativo, colaborar com outras pessoas e superar desafios.",
        perfil:
            "Dinâmico, ativo, cooperativo e motivado.",
        areas:
            "Atividade Física · Desporto · Exercício · Equipas · Bem-estar",
        eprm:
            "Na EPRM, esta área permite desenvolver competências relacionadas com atividade física, desporto, organização de atividades e trabalho com grupos."
    },

    auxiliar_saude: {
        titulo: "Auxiliar de Saúde",
        icone: "♥",
        descricao:
            "Tens interesse em cuidar, apoiar e estar próximo de pessoas. Valorizas a responsabilidade, a atenção e o lado humano do trabalho.",
        tags: [
            "Saúde",
            "Cuidado",
            "Pessoas",
            "Responsabilidade",
            "Apoio"
        ],
        razao:
            "As tuas respostas mostram uma preferência por situações em que podes ajudar, acompanhar e apoiar outras pessoas, valorizando o contacto humano.",
        perfil:
            "Cuidadoso, responsável, atento e humano.",
        areas:
            "Saúde · Cuidados · Apoio · Pessoas · Bem-estar",
        eprm:
            "Na EPRM, esta área permite desenvolver competências relacionadas com apoio e cuidados de saúde, contacto com pessoas e trabalho em contexto de saúde."
    }

};


/* =========================================================
   PERGUNTAS
========================================================= */

const perguntas = [

    {
        pergunta:
            "Se tivesses de participar num projeto da escola, o que gostarias mais de fazer?",
        respostas: [
            {
                texto: "Criar uma campanha, vídeo ou ideia para divulgar o projeto.",
                pontos: { comunicacao: 3 }
            },
            {
                texto: "Ajudar a organizar uma atividade para outras pessoas.",
                pontos: { acao: 3, desporto: 1 }
            },
            {
                texto: "Montar, reparar ou perceber o funcionamento de equipamentos.",
                pontos: { manutencao: 2, mecatronica: 2 }
            },
            {
                texto: "Organizar uma atividade física ou desafio.",
                pontos: { desporto: 3 }
            }
        ]
    },

    {
        pergunta:
            "Qual destas coisas te desperta mais curiosidade?",
        respostas: [
            {
                texto: "Perceber como funcionam medicamentos e produtos de saúde.",
                pontos: { farmacia: 3 }
            },
            {
                texto: "Perceber como máquinas e sistemas tecnológicos funcionam.",
                pontos: { mecatronica: 3, manutencao: 1 }
            },
            {
                texto: "Descobrir como posso cuidar e apoiar alguém.",
                pontos: { auxiliar_saude: 3, acao: 1 }
            },
            {
                texto: "Perceber como uma ideia consegue chamar a atenção de muitas pessoas.",
                pontos: { comunicacao: 3 }
            }
        ]
    },

    {
        pergunta:
            "Quando aparece um problema, qual é a tua reação mais natural?",
        respostas: [
            {
                texto: "Tento perceber o problema e encontrar uma solução prática.",
                pontos: { manutencao: 3 }
            },
            {
                texto: "Começo logo a pensar em várias ideias diferentes.",
                pontos: { comunicacao: 3 }
            },
            {
                texto: "Penso primeiro em como posso ajudar quem está envolvido.",
                pontos: { auxiliar_saude: 2, acao: 2 }
            },
            {
                texto: "Tenho curiosidade em perceber tecnicamente o que aconteceu.",
                pontos: { mecatronica: 3 }
            }
        ]
    },

    {
        pergunta:
            "Que ambiente de trabalho te parece mais interessante?",
        respostas: [
            {
                texto: "Um ambiente criativo, com projetos, comunicação e pessoas.",
                pontos: { comunicacao: 3 }
            },
            {
                texto: "Um ambiente ligado à saúde, ciência e atendimento.",
                pontos: { farmacia: 3 }
            },
            {
                texto: "Um ambiente técnico, industrial e com máquinas.",
                pontos: { manutencao: 3 }
            },
            {
                texto: "Um ambiente dinâmico ligado ao movimento e ao desporto.",
                pontos: { desporto: 3 }
            }
        ]
    },

    {
        pergunta:
            "Qual destas atividades escolherias espontaneamente?",
        respostas: [
            {
                texto: "Criar um vídeo, publicação, campanha ou conceito.",
                pontos: { comunicacao: 3 }
            },
            {
                texto: "Montar ou experimentar um sistema tecnológico.",
                pontos: { mecatronica: 3 }
            },
            {
                texto: "Preparar uma atividade para crianças ou jovens.",
                pontos: { acao: 3 }
            },
            {
                texto: "Participar num treino, competição ou desafio físico.",
                pontos: { desporto: 3 }
            }
        ]
    },

    {
        pergunta:
            "O que valorizas mais num trabalho?",
        respostas: [
            {
                texto: "Criatividade e liberdade para ter ideias.",
                pontos: { comunicacao: 3 }
            },
            {
                texto: "Precisão, organização e responsabilidade.",
                pontos: { farmacia: 3 }
            },
            {
                texto: "Resolver problemas e perceber como as coisas funcionam.",
                pontos: { manutencao: 2, mecatronica: 1 }
            },
            {
                texto: "Poder ajudar diretamente outras pessoas.",
                pontos: { auxiliar_saude: 2, acao: 1 }
            }
        ]
    },

    {
        pergunta:
            "Como te imaginas a trabalhar no futuro?",
        respostas: [
            {
                texto: "A criar projetos, campanhas, conteúdos ou marcas.",
                pontos: { comunicacao: 3 }
            },
            {
                texto: "A trabalhar com máquinas, tecnologia ou automação.",
                pontos: { mecatronica: 3 }
            },
            {
                texto: "A acompanhar e apoiar pessoas.",
                pontos: { auxiliar_saude: 2, acao: 1 }
            },
            {
                texto: "A trabalhar numa área ligada à saúde e à ciência.",
                pontos: { farmacia: 3 }
            }
        ]
    },

    {
        pergunta:
            "Qual destas frases combina mais contigo?",
        respostas: [
            {
                texto: "Tenho sempre ideias e gosto de imaginar coisas novas.",
                pontos: { comunicacao: 3 }
            },
            {
                texto: "Gosto de perceber como as coisas funcionam.",
                pontos: { mecatronica: 2, manutencao: 1 }
            },
            {
                texto: "Gosto de estar ativo e em movimento.",
                pontos: { desporto: 3 }
            },
            {
                texto: "Gosto de cuidar e estar disponível para os outros.",
                pontos: { auxiliar_saude: 3 }
            }
        ]
    },

    {
        pergunta:
            "Que tipo de desafio escolherias?",
        respostas: [
            {
                texto: "Criar uma campanha capaz de chamar a atenção de toda a escola.",
                pontos: { comunicacao: 3 }
            },
            {
                texto: "Descobrir porque é que uma máquina deixou de funcionar.",
                pontos: { manutencao: 3 }
            },
            {
                texto: "Criar uma atividade educativa para um grupo.",
                pontos: { acao: 3 }
            },
            {
                texto: "Organizar um desafio desportivo.",
                pontos: { desporto: 3 }
            }
        ]
    },

    {
        pergunta:
            "Qual destas áreas gostarias mais de explorar?",
        respostas: [
            {
                texto: "Comunicação, Marketing, Publicidade e Relações Públicas.",
                pontos: { comunicacao: 3 }
            },
            {
                texto: "Farmácia e áreas ligadas à saúde e ciência.",
                pontos: { farmacia: 3 }
            },
            {
                texto: "Manutenção, máquinas e indústria.",
                pontos: { manutencao: 3 }
            },
            {
                texto: "Tecnologia, eletrónica, automação e robótica.",
                pontos: { mecatronica: 3 }
            }
        ]
    }

];


/* =========================================================
   ESTADO DO QUIZ
========================================================= */

let perguntaAtual = 0;

let pontuacao = {};

let resultadoFinal = null;


/* NOVO:
   Guarda a resposta escolhida em cada pergunta.
*/

let respostasDadas = [];


/* =========================================================
   INICIALIZAR PONTUAÇÃO
========================================================= */

function criarPontuacaoInicial() {

    return {
        comunicacao: 0,
        farmacia: 0,
        acao: 0,
        manutencao: 0,
        mecatronica: 0,
        desporto: 0,
        auxiliar_saude: 0
    };

}


/* =========================================================
   MOSTRAR ECRÃ
========================================================= */

function mostrarScreen(screen) {

    document.querySelectorAll(".screen").forEach(function(item) {

        item.classList.remove("active");

    });

    screen.classList.add("active");

}


/* =========================================================
   COMEÇAR
========================================================= */

startBtn.addEventListener("click", iniciarQuiz);


function iniciarQuiz() {

    perguntaAtual = 0;

    pontuacao = criarPontuacaoInicial();

    resultadoFinal = null;

    respostasDadas = [];

    mostrarScreen(quiz);

    mostrarPergunta();

}


/* =========================================================
   MOSTRAR PERGUNTA
========================================================= */

function mostrarPergunta() {

    const pergunta = perguntas[perguntaAtual];

    const numero = perguntaAtual + 1;

    const total = perguntas.length;

    const percentagem = Math.round((numero / total) * 100);


    numeroPergunta.textContent =
        String(numero).padStart(2, "0");


    totalPerguntas.textContent =
        `/ ${String(total).padStart(2, "0")}`;


    progressBar.style.width =
        `${percentagem}%`;


    questionText.textContent =
        pergunta.pergunta;


    answersContainer.innerHTML = "";


    pergunta.respostas.forEach(function(resposta, indiceResposta) {

        const button = document.createElement("button");

        button.className = "answer-button";

        button.textContent = resposta.texto;


        button.addEventListener("click", function() {

            escolherResposta(
                resposta.pontos,
                button,
                resposta.texto
            );

        });


        answersContainer.appendChild(button);

    });

}


/* =========================================================
   ESCOLHER RESPOSTA
========================================================= */

function escolherResposta(pontos, button, textoResposta) {

    /* Impede cliques repetidos */

    const botoes =
        answersContainer.querySelectorAll(".answer-button");

    botoes.forEach(function(btn) {

        btn.disabled = true;

        btn.style.pointerEvents = "none";

    });


    /* Guarda a resposta */

    respostasDadas.push(textoResposta);


    /* Adiciona os pontos */

    Object.keys(pontos).forEach(function(perfil) {

        pontuacao[perfil] += pontos[perfil];

    });


    /* Pequena pausa para a transição */

    setTimeout(function() {

        perguntaAtual++;


        if (perguntaAtual < perguntas.length) {

            mostrarPergunta();

        } else {

            terminarQuiz();

        }

    }, 250);

}


/* =========================================================
   TERMINAR
========================================================= */

function terminarQuiz() {

    mostrarScreen(loading);


    setTimeout(function() {

        calcularResultado();

    }, 1800);

}


/* =========================================================
   CALCULAR RESULTADO
========================================================= */

function calcularResultado() {

    let maiorPontuacao = -1;

    let vencedores = [];


    Object.keys(pontuacao).forEach(function(perfil) {

        if (pontuacao[perfil] > maiorPontuacao) {

            maiorPontuacao = pontuacao[perfil];

            vencedores = [perfil];

        }

        else if (pontuacao[perfil] === maiorPontuacao) {

            vencedores.push(perfil);

        }

    });


    /*
       Se houver empate, escolhemos aleatoriamente
       entre os perfis empatados.
    */

    if (vencedores.length === 1) {

        resultadoFinal = vencedores[0];

    } else {

        const indice =
            Math.floor(Math.random() * vencedores.length);

        resultadoFinal =
            vencedores[indice];

    }


    /* NOVO:
       Envia os dados para o Google Sheets.
    */

    enviarDados();


    mostrarResultado(resultadoFinal);

}


/* =========================================================
   ENVIAR DADOS PARA GOOGLE SHEETS
========================================================= */

function enviarDados() {

    const dados = {

        resultado: cursos[resultadoFinal].titulo,

        pergunta1: respostasDadas[0] || "",
        pergunta2: respostasDadas[1] || "",
        pergunta3: respostasDadas[2] || "",
        pergunta4: respostasDadas[3] || "",
        pergunta5: respostasDadas[4] || "",
        pergunta6: respostasDadas[5] || "",
        pergunta7: respostasDadas[6] || "",
        pergunta8: respostasDadas[7] || "",
        pergunta9: respostasDadas[8] || "",
        pergunta10: respostasDadas[9] || ""

    };


    fetch(GOOGLE_SHEETS_URL, {

        method: "POST",

        mode: "no-cors",

        headers: {
            "Content-Type": "text/plain;charset=utf-8"
        },

        body: JSON.stringify(dados)

    })

    .then(function() {

        console.log("Dados enviados para o Google Sheets.");

    })

    .catch(function(error) {

        console.error(
            "Não foi possível enviar os dados:",
            error
        );

    });

}


/* =========================================================
   MOSTRAR RESULTADO
========================================================= */

function mostrarResultado(perfil) {

    const dados = cursos[perfil];


    resultTitle.textContent =
        dados.titulo;


    resultCourses.textContent =
        "O teu perfil combina especialmente com esta área.";


    resultDescription.textContent =
        dados.descricao;


    resultTags.innerHTML = "";


    dados.tags.forEach(function(tag) {

        const elemento = document.createElement("span");

        elemento.className = "tag";

        elemento.textContent = tag;

        resultTags.appendChild(elemento);

    });


    mostrarScreen(resultado);

}


/* =========================================================
   CONHECER O MATCH
========================================================= */

courseBtn.addEventListener("click", function() {

    mostrarCurso(resultadoFinal);

});


function mostrarCurso(perfil) {

    const dados = cursos[perfil];


    courseIcon.textContent =
        dados.icone;


    courseTitle.textContent =
        dados.titulo;


    courseDescription.textContent =
        dados.descricao;


    courseProfile.textContent =
        dados.perfil;


    courseAreas.textContent =
        dados.areas;


    courseEprm.textContent =
        dados.eprm;


    mostrarScreen(curso);

}


/* =========================================================
   RECOMEÇAR
========================================================= */

restartBtn.addEventListener("click", function() {

    iniciarQuiz();

});


courseRestartBtn.addEventListener("click", function() {

    iniciarQuiz();

});
