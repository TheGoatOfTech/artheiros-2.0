/* ==========================================================================
   GALERIA CURATORIAL AMANDA COSTA — config.js
   Todos os dados editáveis da galeria vivem aqui: marca, cores, contatos,
   textos, categorias, artistas, obras e caminhos de imagem.

   IMAGENS: cada item aponta para um caminho local (./img/...). Se o arquivo
   não existir, o site troca automaticamente pelo `fallback` (Unsplash) e,
   se este também falhar, por um placeholder vetorial.

   ATENÇÃO: número de WhatsApp, e-mail e redes abaixo são PLACEHOLDERS.
   Troque antes de publicar.
   ========================================================================== */

window.GALERIA_CONFIG = {

  /* ---------- MARCA ---------- */
  marca: {
    nome: "Galeria Curatorial Amanda Costa",
    curta: "Amanda Costa",
    subtitulo: "Galeria Curatorial",
    ano: 2026,
    descricaoMeta: "Galeria curatorial de arte autoral e independente, com seleção de Amanda Costa: artes visuais, cerâmica, fotografia, artesanato autoral, arte e natureza e colecionáveis."
  },

  /* ---------- PALETA (aplicada como variáveis CSS) ---------- */
  cores: {
    verde:       "#14241E", // Verde Museu Profundo — sala de exposição
    papel:       "#F5F2EB", // Papel Algodão / Linho Cru — sala diurna
    carvao:      "#121312", // Carvão Aveludado — rodapé / lightbox
    ouro:        "#B8924A", // Ouro Envelhecido / Latão — assinatura, moldura
    terracota:   "#8C3B2B", // Terracota / Vinho — selo curatorial
    textoClaro:  "#F5F2EB",
    textoEscuro: "#181A18"
  },

  /* ---------- CONTATO ---------- */
  contato: {
    whatsapp: "5511999999999",                 // só dígitos, com DDI+DDD (PLACEHOLDER)
    whatsappExibicao: "+55 (11) 99999-9999",   // PLACEHOLDER
    email: "curadoria@galeriaamandacosta.com.br", // PLACEHOLDER
    instagram: "@galeriaamandacosta",          // PLACEHOLDER
    instagramUrl: "https://instagram.com/galeriaamandacosta",
    cidade: "São Paulo · Brasil"
  },

  /* ---------- MENSAGENS DE WHATSAPP ---------- */
  mensagens: {
    consulta: "Olá, Amanda! Vi no site da Galeria Curatorial e gostaria de consultar a obra \"{obra}\", de {artista}. Ela ainda está disponível?",
    submeter: "Olá, Amanda! Sou artista independente e gostaria de enviar meu portfólio para a seleção dos primeiros 10 artistas da galeria.",
    geral:    "Olá, Amanda! Gostaria de conversar com a curadoria da galeria."
  },

  /* ---------- NAVEGAÇÃO ---------- */
  nav: {
    links: [
      { texto: "A Galeria",          href: "#galeria" },
      { texto: "Obras em Destaque",  href: "#destaques" },
      { texto: "Acervo & Artistas",  href: "#acervo" },
      { texto: "Curadoria",          href: "#curadoria" }
    ],
    cta: { texto: "Submeter Obra", href: "#artistas" },
    gaveta: [
      { n: "01", texto: "A Galeria",         href: "#galeria" },
      { n: "02", texto: "Obras em Destaque", href: "#destaques" },
      { n: "03", texto: "Acervo & Artistas", href: "#acervo" },
      { n: "04", texto: "Curadoria",         href: "#curadoria" },
      { n: "05", texto: "Submeter Obra",     href: "#artistas" }
    ]
  },

  /* ---------- HERO ---------- */
  hero: {
    etiqueta: "EXPOSIÇÃO INAUGURAL · ARTE AUTORAL",
    tituloHtml: "Onde a <em>curadoria</em> aproxima <em>criadores</em> e pessoas",
    subtitulo: "Amanda Costa, jornalista e curadora, reuniu artistas independentes cujas obras contam histórias reais. Cada peça chega até você com narrativa, certificado de autenticidade e acompanhamento direto da curadoria.",
    ctaPrimario:   { texto: "Explorar Acervo",   href: "#acervo" },
    ctaSecundario: { texto: "Expor Minha Obra",  href: "#artistas" },
    obraId: "cartografia-do-silencio",
    selo: "CURADORIA AMANDA COSTA · ARTE INDEPENDENTE"
  },

  /* ---------- OBRAS EM DESTAQUE ---------- */
  destaques: {
    etiqueta: "SELEÇÃO CURATORIAL",
    tituloHtml: "Obras em <em>Destaque</em>",
    subtitulo: "Peças escolhidas pela curadora para a abertura da galeria. Clique em qualquer moldura para inspecionar texturas, ficha técnica e a história por trás da obra.",
    obraIds: ["mar-de-ocre", "quando-a-terra-respira", "neblina-serra-do-mar", "raiz-e-fio"]
  },

  /* ---------- PLAQUETAS DAS DIVISÓRIAS (salas da exposição) ---------- */
  salas: {
    curadoria: "SALA 01 · CURADORIA",
    acervo:    "SALA 02 · ACERVO & ARTISTAS",
    manifesto: "SALA 03 · MANIFESTO",
    chamada:   "SALA 04 · PUBLIQUE SUA OBRA",
    saida:     "SAÍDA · CERTIFICADO & ENVIO"
  },

  /* ---------- ACERVO ---------- */
  acervo: {
    etiqueta: "ACERVO COMPLETO",
    tituloHtml: "Acervo & <em>histórias dos artistas</em>",
    subtitulo: "Abra a gaveta de cada artista para conhecer sua trajetória, seu processo criativo e as obras disponíveis."
  },

  categorias: [
    "Todas",
    "Artes Visuais",
    "Cerâmica",
    "Fotografia",
    "Artesanato Autoral",
    "Arte e Natureza",
    "Colecionáveis"
  ],

  /* ---------- ARTISTAS (exemplos fictícios — substitua pelos reais) ---------- */
  artistas: [
    {
      id: "helena-vasconcelos",
      nome: "Helena Vasconcelos",
      disciplina: "Artes Visuais",
      cidade: "Belo Horizonte, MG",
      foto: "./img/artistas/helena-vasconcelos.jpg",
      fallback: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80",
      bio: "Pintora mineira com vinte anos de ateliê. Começou na gravura e chegou à tela grande depois de uma temporada no sertão de Minas, de onde trouxe a paleta de ocres, ferrugens e azuis de fim de tarde que atravessa toda a sua obra.",
      processo: "Trabalha em camadas: primeiro a cera e o carvão, depois pigmentos moídos no próprio ateliê, e só então o óleo. Cada tela leva de seis a oito semanas para secar entre as camadas, e ela nunca usa pincel na última — apenas espátula e as mãos."
    },
    {
      id: "tiago-marinho",
      nome: "Tiago Marinho",
      disciplina: "Cerâmica",
      cidade: "Paraty, RJ",
      foto: "./img/artistas/tiago-marinho.jpg",
      fallback: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      bio: "Ceramista formado na tradição dos fornos a lenha do litoral fluminense. Suas peças nascem de argilas coletadas em encostas da região e de esmaltes feitos com cinzas de madeira de demolição.",
      processo: "Modela à mão e no torno, queima em forno a lenha a 1.280 °C e aceita o acaso do fogo: cada peça sai com manchas e tons que ninguém controla. Por isso, não existem duas iguais, mesmo nas edições numeradas."
    },
    {
      id: "iara-beltrao",
      nome: "Iara Beltrão",
      disciplina: "Fotografia",
      cidade: "Curitiba, PR",
      foto: "./img/artistas/iara-beltrao.jpg",
      fallback: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
      bio: "Fotógrafa de paisagem e fotojornalista por mais de uma década. Hoje dedica-se a séries longas sobre a Mata Atlântica e suas neblinas, fotografadas sempre nas duas primeiras horas do dia.",
      processo: "Fotografa em filme médio formato e digitaliza com scanner de tambor. As impressões são feitas em papel de algodão com tintas pigmentadas, assinadas e numeradas à mão, com tiragem máxima de quinze cópias por imagem."
    },
    {
      id: "caio-albuquerque",
      nome: "Caio Albuquerque",
      disciplina: "Arte e Natureza",
      cidade: "Chapada Diamantina, BA",
      foto: "./img/artistas/caio-albuquerque.jpg",
      fallback: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      bio: "Artista e ex-botânico. Cria esculturas e composições com madeira de demolição, raízes caídas e folhas coletadas sem arrancar nada de árvores vivas. Sua obra pergunta o que sobra quando a floresta vira matéria.",
      processo: "Cada peça começa com uma caminhada de coleta. O material fica semanas em repouso no ateliê, é limpo, estabilizado com resinas naturais e só então montado. Pigmentos vêm de cascas, flores e terra da própria região."
    },
    {
      id: "marisol-teixeira",
      nome: "Marisol Teixeira",
      disciplina: "Artesanato Autoral",
      cidade: "Olinda, PE",
      foto: "./img/artistas/marisol-teixeira.jpg",
      fallback: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=600&q=80",
      bio: "Tecelã e tingidora natural, herdeira de uma linhagem de rendeiras. Leva o saber de família para o campo da arte contemporânea, com tapeçarias e cestarias que dialogam com o abstrato.",
      processo: "Tinge a lã com índigo, urucum, cebola e casca de jatobá. O desenho é improvisado no tear, e cada tapeçaria é pensada como uma pintura que se pode tocar. Peças maiores levam até dois meses."
    },
    {
      id: "dante-reis",
      nome: "Dante Reis",
      disciplina: "Colecionáveis",
      cidade: "Porto Alegre, RS",
      foto: "./img/artistas/dante-reis.jpg",
      fallback: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
      bio: "Escultor de pequenos formatos e designer de objetos. Cria miniaturas inspiradas em bestiários populares brasileiros, produzidas em séries numeradas para quem gosta de colecionar com memória.",
      processo: "Esculpe o original em cera, faz o molde e fundi em resina com acabamento manual e folha de ouro. Cada exemplar sai numerado, em caixa de madeira, com certificado e um pequeno cartão sobre a história do bicho."
    }
  ],

  /* ---------- OBRAS ----------
     ratio: proporção da área visível (CSS aspect-ratio)
     tag:   "OBRA ÚNICA" | "EDIÇÃO LIMITADA" | "DESTAQUE" | ""
  */
  obras: [
    {
      id: "mar-de-ocre",
      titulo: "Mar de Ocre ao Entardecer",
      artistaId: "helena-vasconcelos",
      categoria: "Artes Visuais",
      tag: "OBRA ÚNICA",
      tecnica: "Óleo e cera sobre tela",
      dimensoes: "120 × 90 cm",
      ano: "2025",
      valor: "R$ 8.400",
      ratio: "4 / 3",
      img: "./img/obras/mar-de-ocre.jpg",
      fallback: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1600&q=85",
      historia: "Pintada depois de uma viagem ao norte de Minas, a tela guarda a luz exata de um fim de tarde em que o cerrado parecia virar mar. Camadas de cera dão à superfície um brilho de pele; a espátula deixa cristas que mudam de cor conforme a hora do dia em que você a olha."
    },
    {
      id: "quando-a-terra-respira",
      titulo: "Quando a Terra Respira",
      artistaId: "tiago-marinho",
      categoria: "Cerâmica",
      tag: "EDIÇÃO LIMITADA",
      tecnica: "Grés queimado a lenha, esmalte de cinzas",
      dimensoes: "38 × 24 cm",
      ano: "2026",
      valor: "R$ 2.900",
      ratio: "4 / 5",
      img: "./img/obras/quando-a-terra-respira.jpg",
      fallback: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1400&q=85",
      historia: "Vaso escultórico da série em que Tiago deixa a chama desenhar a superfície. A abertura estreita e o ventre largo lembram um pulmão; o esmalte de cinzas de madeira de demolição escorreu durante a queima e formou veios que nenhum esmaltador planejaria. Edição de 12 exemplares, todos diferentes."
    },
    {
      id: "neblina-serra-do-mar",
      titulo: "Neblina, Serra do Mar",
      artistaId: "iara-beltrao",
      categoria: "Fotografia",
      tag: "EDIÇÃO LIMITADA",
      tecnica: "Impressão fine art em papel de algodão",
      dimensoes: "90 × 60 cm",
      ano: "2024",
      valor: "R$ 1.850",
      ratio: "3 / 2",
      img: "./img/obras/neblina-serra-do-mar.jpg",
      fallback: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=85",
      historia: "Feita às 6h12 de uma manhã de maio, depois de duas horas de espera numa trilha fechada. A neblina abriu por quatro minutos. Iara registrou em filme médio formato; a impressão em papel de algodão preserva a gradação delicada dos cinzas e verdes. Tiragem de 15, assinada e numerada."
    },
    {
      id: "raiz-e-fio",
      titulo: "Raiz e Fio",
      artistaId: "caio-albuquerque",
      categoria: "Arte e Natureza",
      tag: "DESTAQUE",
      tecnica: "Madeira de demolição, raiz caída e fibra natural",
      dimensoes: "70 × 40 × 40 cm",
      ano: "2025",
      valor: "R$ 5.200",
      ratio: "4 / 5",
      img: "./img/obras/raiz-e-fio.jpg",
      fallback: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=85",
      historia: "Uma raiz derrubada por uma tempestade na Chapada, atravessada por fios de fibra tingida que fazem a ponte entre o que cresceu e o que foi tecido. Caio passou três meses decidindo onde cada fio deveria entrar. Acompanha base de madeira e certificado de origem do material."
    },
    {
      id: "cartografia-do-silencio",
      titulo: "Cartografia do Silêncio",
      artistaId: "helena-vasconcelos",
      categoria: "Artes Visuais",
      tag: "DESTAQUE",
      tecnica: "Acrílica e carvão sobre tela",
      dimensoes: "80 × 80 cm",
      ano: "2026",
      valor: "R$ 4.600",
      ratio: "1 / 1",
      img: "./img/obras/cartografia-do-silencio.jpg",
      fallback: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=1400&q=85",
      historia: "Mapas que não levam a lugar nenhum: linhas de carvão sobrepostas a áreas de cor chapada, como se a artista tentasse desenhar o contorno de uma pausa. É a tela que abre a exposição inaugural por reunir, em um só quadrado, a delicadeza e a ousadia da curadoria."
    },
    {
      id: "jarra-mare-baixa",
      titulo: "Jarra Maré Baixa",
      artistaId: "tiago-marinho",
      categoria: "Cerâmica",
      tag: "OBRA ÚNICA",
      tecnica: "Grés torneado, engobe e esmalte de cinzas",
      dimensoes: "28 × 22 cm",
      ano: "2025",
      valor: "R$ 1.400",
      ratio: "1 / 1",
      img: "./img/obras/jarra-mare-baixa.jpg",
      fallback: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1200&q=85",
      historia: "Peça única do forno de inverno. O engobe branco lembra a espuma que o mar deixa na areia quando recua. Funciona como jarra de uso diário ou como objeto de mesa para quem prefere cerâmica viva a decoração."
    },
    {
      id: "hora-azul-paraty",
      titulo: "Hora Azul, Paraty",
      artistaId: "iara-beltrao",
      categoria: "Fotografia",
      tag: "EDIÇÃO LIMITADA",
      tecnica: "Impressão fine art em papel de algodão",
      dimensoes: "60 × 40 cm",
      ano: "2025",
      valor: "R$ 980",
      ratio: "3 / 2",
      img: "./img/obras/hora-azul-paraty.jpg",
      fallback: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=85",
      historia: "Os vinte minutos entre o fim do pôr do sol e a primeira luz acesa na vila. Iara fotografou do alto de um morro, sem filtros, aguardando o azul perfeito. Edição de 15."
    },
    {
      id: "herbario-de-vento",
      titulo: "Herbário de Vento",
      artistaId: "caio-albuquerque",
      categoria: "Arte e Natureza",
      tag: "OBRA ÚNICA",
      tecnica: "Folhas, pigmentos naturais e fibras em caixa de vidro",
      dimensoes: "45 × 35 × 8 cm",
      ano: "2026",
      valor: "R$ 2.100",
      ratio: "5 / 4",
      img: "./img/obras/herbario-de-vento.jpg",
      fallback: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?auto=format&fit=crop&w=1400&q=85",
      historia: "Um herbário às avessas: em vez de classificar, Caio deixa as folhas coletadas no chão da mata formarem uma composição própria, como se o vento tivesse escolhido a ordem. Montado em caixa de vidro, pronto para pendurar."
    },
    {
      id: "brasa-viva",
      titulo: "Tapeçaria Brasa Viva",
      artistaId: "marisol-teixeira",
      categoria: "Artesanato Autoral",
      tag: "OBRA ÚNICA",
      tecnica: "Lã tingida com urucum e cochonilha, tecida em tear vertical",
      dimensoes: "100 × 70 cm",
      ano: "2025",
      valor: "R$ 3.300",
      ratio: "10 / 7",
      img: "./img/obras/brasa-viva.jpg",
      fallback: "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=1400&q=85",
      historia: "Marisol tingiu a lã em banhos sucessivos até chegar ao vermelho de brasa que quase se apaga. O desenho foi improvisado no tear, sem esboço, e carrega a memória das rendas que a avó fazia na varanda."
    },
    {
      id: "cesto-ninho-4",
      titulo: "Cesto-Ninho nº 4",
      artistaId: "marisol-teixeira",
      categoria: "Artesanato Autoral",
      tag: "EDIÇÃO LIMITADA",
      tecnica: "Fibra de buriti e linho cru, trançado manual",
      dimensoes: "40 × 40 cm",
      ano: "2026",
      valor: "R$ 780",
      ratio: "1 / 1",
      img: "./img/obras/cesto-ninho-4.jpg",
      fallback: "https://images.unsplash.com/photo-1493106819501-66d381c466f1?auto=format&fit=crop&w=1200&q=85",
      historia: "Cesto escultórico que mistura a técnica tradicional de trançado com uma forma de ninho aberto. Serve de objeto de mesa, de porta-frutas ou simplesmente de presença na sala. Série de 20 exemplares."
    },
    {
      id: "oraculo-07",
      titulo: "Pequeno Oráculo nº 07 — A Onça",
      artistaId: "dante-reis",
      categoria: "Colecionáveis",
      tag: "EDIÇÃO LIMITADA",
      tecnica: "Resina, folha de ouro e caixa de madeira numerada",
      dimensoes: "12 × 8 × 8 cm",
      ano: "2026",
      valor: "R$ 620",
      ratio: "1 / 1",
      img: "./img/obras/oraculo-07.jpg",
      fallback: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=1200&q=85",
      historia: "Sétima peça do bestiário de bolso de Dante: uma onça de resina com detalhes em folha de ouro, guardada numa caixa de madeira com cartão sobre a lenda que a inspirou. Exemplar 7 de 50, com certificado."
    },
    {
      id: "oraculo-12",
      titulo: "Pequeno Oráculo nº 12 — O Boto",
      artistaId: "dante-reis",
      categoria: "Colecionáveis",
      tag: "EDIÇÃO LIMITADA",
      tecnica: "Resina, pátina azul e caixa de madeira numerada",
      dimensoes: "10 × 14 × 7 cm",
      ano: "2026",
      valor: "R$ 620",
      ratio: "1 / 1",
      img: "./img/obras/oraculo-12.jpg",
      fallback: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=85",
      historia: "O boto-cor-de-rosa traduzido em azul-noite com pátina manual. Cada exemplar tem variações sutis de cor, justamente porque a pátina é aplicada à mão. Exemplar 12 de 50, com certificado."
    }
  ],

  /* ---------- CURADORA & MANIFESTO ---------- */
  curadora: {
    etiqueta: "A CURADORIA",
    nome: "Amanda Costa",
    cargo: "Jornalista e curadora",
    foto: "./img/amanda-costa.jpg",
    fallback: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85",
    manifestoHtml: "Nem toda obra entra. Cada peça passa por <em>olhar jornalístico</em>, narrativa e <em>curadoria afetiva</em>.",
    paragrafos: [
      "Durante anos, Amanda contou a vida de outras pessoas em reportagens. Hoje conta a história de quem faz arte com as mãos, sem intermediários que apaguem o nome de quem criou.",
      "Cada artista da galeria é entrevistado, visitado em ateliê e apresentado com seu processo, suas referências e seus limites. O que chega até você não é um produto: é uma obra com biografia."
    ],
    pilares: [
      { n: "I",   titulo: "Curadoria",            texto: "Seleção rigorosa e pessoal. Poucas obras, escolhidas uma a uma, com critério editorial e sensibilidade estética." },
      { n: "II",  titulo: "Narrativa",            texto: "Toda peça traz a história de quem a criou: o processo, a matéria, o tempo e a intenção por trás de cada gesto." },
      { n: "III", titulo: "Experiência de Compra", texto: "Atendimento assistido pela própria curadora, do primeiro contato à entrega, com certificado e embalagem de museu." }
    ]
  },

  /* ---------- CHAMADA PARA ARTISTAS ---------- */
  chamada: {
    etiqueta: "CHAMADA ABERTA · 10 VAGAS",
    tituloHtml: "Publique <em>sua obra</em>",
    subtitulo: "Estamos selecionando os primeiros 10 artistas independentes da galeria. Se o seu trabalho tem autoria, processo e história, queremos conhecer.",
    passos: [
      { n: "01", titulo: "Envio do Portfólio",             texto: "Mande por WhatsApp um portfólio com 5 a 10 obras, uma breve biografia e seu processo criativo. Respondemos a todos." },
      { n: "02", titulo: "Curadoria & Termo de Parceria",  texto: "Amanda analisa o material, conversa com você e, se houver sintonia, formalizamos a parceria com um termo claro de percentuais, prazos e direitos." },
      { n: "03", titulo: "Exposição & Venda Assistida",    texto: "Sua obra entra no acervo com ficha técnica, texto curatorial e fotografias profissionais. A venda é acompanhada pela curadora." }
    ],
    cta: "Enviar portfólio no WhatsApp"
  },

  /* ---------- RODAPÉ ---------- */
  rodape: {
    assinatura: "Arte independente, com nome e história.",
    blocos: [
      { titulo: "Certificado de Autenticidade", texto: "Toda obra acompanha certificado assinado pelo artista e pela curadoria, com número, técnica, dimensões e data." },
      { titulo: "Envio & Embalagem",            texto: "Envio assegurado, com embalagem de museu. Prazo, frete e seguro combinados de forma transparente antes da compra." },
      { titulo: "Curadoria Transparente",       texto: "Os termos de parceria com cada artista são claros e públicos para ambos os lados. Sem letra miúda." }
    ],
    legal: "Os artistas e obras exibidos nesta V1 são exemplos de demonstração."
  }
};
