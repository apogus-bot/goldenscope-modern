export type Language = 'en' | 'zh' | 'es';

export const languages: Array<{ code: Language; label: string; shortLabel: string }> = [
  { code: 'en', label: 'English', shortLabel: 'EN' },
  { code: 'zh', label: 'Chinese', shortLabel: '中文' },
  { code: 'es', label: 'Spanish', shortLabel: 'ES' },
];

export function normalizeLanguage(value: unknown): Language {
  const raw = Array.isArray(value) ? value[0] : value;
  return raw === 'zh' || raw === 'es' ? raw : 'en';
}

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function assetPath(path: string) {
  return `${basePath}${path}`;
}

export function withLanguage(href: string, language: Language) {
  const prefixBasePath = (path: string) => (path.startsWith('/') ? `${basePath}${path}` : path);

  if (language === 'en') return prefixBasePath(href);
  const separator = href.includes('?') ? '&' : '?';
  const hashIndex = href.indexOf('#');

  if (hashIndex >= 0) {
    const base = href.slice(0, hashIndex) || '/';
    const hash = href.slice(hashIndex);
    return prefixBasePath(`${base}${separator}lang=${language}${hash}`);
  }

  return prefixBasePath(`${href}${separator}lang=${language}`);
}

export const schedulerUrl =
  'https://inspectionsupport.com/goldenscopeinspection/online-scheduler/34e96c67-a7d8-11eb-8e29-0a4ef934752f';

export const companyLogo = assetPath('/assets/goldenscope-logo.svg');

export const copy = {
  en: {
    nav: { about: 'About', video: 'Video', process: 'Process', services: 'Services', contact: 'Contact', menu: 'Menu', call: 'Call now', languageLabel: 'Language' },
    hero: {
      eyebrow: 'Houston, Texas home inspections',
      title: 'Confidence before you close.',
      lede: 'Golden Scope gives Houston homebuyers clear, calm, and thorough inspection insight — so the biggest purchase of your life feels less like a gamble.',
      book: 'Book an inspection',
      speak: 'We speak',
      languages: ['Vietnamese', 'Cantonese', 'Spanish'],
      licensed: 'Licensed TREC inspectors',
      reports: '24-hour digital reports',
    },
    marquee: 'Training, tools, and associations from trusted inspection organizations',
    trust: [
      ['24 Hour', 'report delivery'],
      ['6:00 AM–7:00 PM', 'Mon–Sun availability'],
      ['Houston+', 'entire metro served'],
      ['TREC', 'licensed inspection team'],
    ],
    about: {
      kicker: 'About us',
      title: 'The inspection team that makes the unknown feel manageable.',
      p1: 'Golden Scope combines construction knowledge with hospitality-level service for Houston homebuyers, sellers, and agents. The goal is simple: raise the inspection standard, document what matters, and make sure every client understands the story of the home.',
      p2: 'Whether you need a full buyer inspection, a new construction phase inspection, an 11th month warranty inspection, or a second set of eyes on a remodel, the team is built to help you move forward with peace of mind.',
    },
    values: [
      ['Reports within 24 hours', 'Photo-rich digital reports with clear repair summaries, delivered fast enough for option-period decisions.'],
      ['Houston-area expertise', 'Focused on the systems Houston buyers care about: slabs, roofs, HVAC performance, drainage, moisture, and storm exposure.'],
      ['Straight answers after the inspection', 'Your inspector walks you through the findings and stays available for questions — no rushed handoff.'],
    ],
    team: { kicker: 'Why choose us', title: 'A licensed team with local context.', intro: 'Four inspectors, multilingual support, and a service model designed for real estate timelines.', learnMore: 'Learn more →' },
    video: { kicker: 'Watch video', title: 'Let our experience work for you.', text: 'Meet Golden Scope and see the inspection mindset behind the report — careful, practical, and focused on helping buyers understand the home before they close.', open: 'Open on Vimeo' },
    process: { kicker: 'The process', title: 'Simple, transparent, and built around your deadline.', steps: [
      ['01', 'Schedule', 'Book online, call, or coordinate through your agent. We confirm the basics and send an easy agreement.'],
      ['02', 'Inspect', 'We arrive early and inspect the major visible systems, typically taking 2.5–3 hours on site.'],
      ['03', 'Report', 'You receive a clean digital report with photos, deficiency notes, recommendations, and a repair summary.'],
      ['04', 'Decide', 'You get the context to negotiate, budget repairs, or move forward with confidence.'],
    ] },
    services: { kicker: 'The Golden Scope difference', title: 'What we inspect', intro: 'Major visible systems, safety concerns, defects, and Houston-specific inspection priorities — documented clearly.', items: [
      ['Foundation', 'High-precision elevation readings paired with visual structural review.'],
      ['Roof', 'Shingles, flashing, penetrations, drainage, visible leaks, workmanship, and warranty concerns.'],
      ['Electrical', 'Panels, receptacles, fixtures, grounding, visible wiring, safety hazards, and deficiencies.'],
      ['Mechanical / HVAC', 'Cooling, heating, ductwork, plenums, condensers, furnaces, and performance indicators.'],
      ['Plumbing', 'Fixtures, drains, vents, valves, visible pipes, leaks, water flow, and drainage behavior.'],
      ['New construction phases', 'Pre-pour, rough-in, final, and 11th month warranty inspections for new builds.'],
      ['Mold inspections', 'Additional testing and documentation when moisture or air-quality concerns need clarity.'],
      ['Remodel consultations', 'A practical second set of eyes before, during, or after major renovations.'],
    ] },
    comfort: { kicker: 'The details', title: 'Consumers deserve to know the story of a home.', text: 'Get the information you need before negotiations, repairs, closing, or warranty deadlines — with a team that explains what matters in plain English.', cta: 'Make an appointment' },
    contact: { kicker: 'Contact', title: 'Got questions? We’ve got answers.', text: 'Call, email, or book online. Serving the entire Houston area and beyond.', hours: 'Mon–Sun, 06:00 AM – 07:00 PM', location: 'Houston, Texas' },
    footer: { license: 'TREC License #24192 · WDI under Pest Inspection Network TPCL #783068', trec: 'TREC Consumer Protection Notice' },
    profile: { inspector: 'Golden Scope inspector', back: 'Back to team', details: 'The details', detailsTitle: 'Consumers deserve to know the story of a home.', detailsText: 'Golden Scope pairs licensed inspection experience with clear communication, modern report writing, and Houston-area context so clients can make confident decisions.', otherKicker: 'Meet the rest of the team', otherTitle: 'More licensed Golden Scope inspectors' },
  },
  zh: {
    nav: { about: '关于', video: '视频', process: '流程', services: '服务', contact: '联系', menu: '菜单', call: '立即致电', languageLabel: '语言' },
    hero: { eyebrow: '德州休斯顿房屋检查', title: '成交前，先安心。', lede: 'Golden Scope 为休斯顿购房者提供清楚、冷静、细致的房屋检查说明，让人生中最大的一笔购买不再像碰运气。', book: '预约检查', speak: '我们会说', languages: ['越南语', '粤语', '西班牙语'], licensed: 'TREC 持牌检查员', reports: '24 小时内电子报告' },
    marquee: '来自可靠房屋检查机构的培训、工具与专业协会认证',
    trust: [['24小时', '报告交付'], ['上午 6:00–晚上 7:00', '周一至周日可预约'], ['休斯顿+', '服务整个都会区'], ['TREC', '持牌检查团队']],
    about: { kicker: '关于我们', title: '让未知变得可理解的房屋检查团队。', p1: 'Golden Scope 将建筑知识与贴心服务结合，服务休斯顿买家、卖家与房地产经纪。我们的目标很简单：提高检查标准，记录真正重要的问题，并确保每位客户了解房屋的真实状况。', p2: '无论您需要买方房屋检查、新房分阶段检查、第 11 个月保修检查，或装修前后的专业意见，我们的团队都会帮助您安心向前。' },
    values: [['24 小时内出报告', '照片丰富的电子报告，附清晰维修摘要，足够快速支持 option period 内的决策。'], ['熟悉休斯顿房屋', '重点关注休斯顿买家在意的系统：地基、屋顶、空调、排水、湿气与风暴影响。'], ['检查后直接讲清楚', '检查员会带您理解发现的问题，并继续回答后续问题，不会匆忙交接。']],
    team: { kicker: '为什么选择我们', title: '拥有本地经验的持牌团队。', intro: '四位检查员、多语言支持，以及专为房地产时间线设计的服务流程。', learnMore: '了解更多 →' },
    video: { kicker: '观看视频', title: '让我们的经验为您服务。', text: '认识 Golden Scope，了解报告背后的检查方式：细心、务实，并专注帮助买家在成交前真正理解房屋。', open: '在 Vimeo 打开' },
    process: { kicker: '检查流程', title: '简单、透明，并围绕您的期限安排。', steps: [['01', '预约', '在线预约、致电或通过经纪协调。我们确认基本信息并发送简明协议。'], ['02', '检查', '我们提前到达并检查主要可见系统，现场通常需要 2.5–3 小时。'], ['03', '报告', '您会收到含照片、缺陷说明、建议和维修摘要的清晰电子报告。'], ['04', '决定', '您获得谈判、预算维修或安心继续交易所需的背景信息。']] },
    services: { kicker: 'Golden Scope 的不同', title: '我们检查什么', intro: '主要可见系统、安全隐患、缺陷，以及休斯顿地区特别需要注意的检查重点——全部清楚记录。', items: [['地基', '高精度标高读数结合可见结构检查。'], ['屋顶', '瓦片、泛水、穿透处、排水、可见渗漏、施工质量和保修问题。'], ['电气', '电箱、插座、灯具、接地、可见线路、安全隐患和缺陷。'], ['机械 / 空调 HVAC', '制冷、制热、风管、静压箱、室外机、炉体和性能指标。'], ['管道', '洁具、排水、通气、阀门、可见管线、漏水、水流与排水情况。'], ['新房分阶段检查', '新建房的浇筑前、粗装、最终检查和第 11 个月保修检查。'], ['霉菌检查', '当存在潮湿或空气质量疑虑时，提供额外检测和记录。'], ['装修咨询', '重大装修前、中、后提供务实的第二专业意见。']] },
    comfort: { kicker: '细节', title: '消费者应该了解一栋房子的真实故事。', text: '在谈判、维修、成交或保修期限前获得所需信息；我们的团队会用简单易懂的语言解释重点。', cta: '预约时间' },
    contact: { kicker: '联系', title: '有问题？我们来解答。', text: '欢迎致电、发邮件或在线预约。服务整个休斯顿地区及周边。', hours: '周一至周日，06:00 AM – 07:00 PM', location: '德州休斯顿' },
    footer: { license: 'TREC 许可证 #24192 · WDI 由 Pest Inspection Network TPCL #783068 提供', trec: 'TREC 消费者保护通知' },
    profile: { inspector: 'Golden Scope 检查员', back: '返回团队', details: '细节', detailsTitle: '消费者应该了解一栋房子的真实故事。', detailsText: 'Golden Scope 将持牌检查经验、清晰沟通、现代报告和休斯顿本地知识结合，帮助客户自信做决定。', otherKicker: '认识团队其他成员', otherTitle: '更多 Golden Scope 持牌检查员' },
  },
  es: {
    nav: { about: 'Sobre nosotros', video: 'Video', process: 'Proceso', services: 'Servicios', contact: 'Contacto', menu: 'Menú', call: 'Llamar ahora', languageLabel: 'Idioma' },
    hero: { eyebrow: 'Inspecciones de viviendas en Houston, Texas', title: 'Confianza antes de cerrar.', lede: 'Golden Scope ofrece a compradores de Houston una inspección clara, tranquila y completa para que la compra más grande de su vida se sienta menos como una apuesta.', book: 'Programar inspección', speak: 'Hablamos', languages: ['Vietnamita', 'Cantonés', 'Español'], licensed: 'Inspectores con licencia TREC', reports: 'Informes digitales en 24 horas' },
    marquee: 'Capacitación, herramientas y asociaciones de organizaciones confiables de inspección',
    trust: [['24 horas', 'entrega de informe'], ['6:00 a. m.–7:00 p. m.', 'disponibilidad lun–dom'], ['Houston+', 'servicio en toda el área metropolitana'], ['TREC', 'equipo de inspección con licencia']],
    about: { kicker: 'Sobre nosotros', title: 'El equipo de inspección que hace manejable lo desconocido.', p1: 'Golden Scope combina conocimiento de construcción con servicio atento para compradores, vendedores y agentes de Houston. El objetivo es simple: elevar el estándar de inspección, documentar lo importante y asegurar que cada cliente entienda la historia de la casa.', p2: 'Ya sea que necesite una inspección de comprador, una inspección por fases de nueva construcción, una inspección de garantía del mes 11 o una segunda opinión en una remodelación, el equipo está preparado para ayudarle a avanzar con tranquilidad.' },
    values: [['Informes en 24 horas', 'Informes digitales con fotos y resúmenes claros de reparación, entregados rápido para decisiones durante el periodo de opción.'], ['Experiencia en el área de Houston', 'Enfocados en los sistemas que importan a compradores de Houston: losa, techo, HVAC, drenaje, humedad y exposición a tormentas.'], ['Respuestas claras después de la inspección', 'Su inspector le explica los hallazgos y queda disponible para preguntas; nada de entregas apresuradas.']],
    team: { kicker: 'Por qué elegirnos', title: 'Un equipo con licencia y contexto local.', intro: 'Cuatro inspectores, apoyo multilingüe y un modelo de servicio diseñado para los tiempos de bienes raíces.', learnMore: 'Conocer más →' },
    video: { kicker: 'Ver video', title: 'Deje que nuestra experiencia trabaje para usted.', text: 'Conozca Golden Scope y vea la mentalidad detrás del informe: cuidadosa, práctica y enfocada en ayudar a los compradores a entender la casa antes del cierre.', open: 'Abrir en Vimeo' },
    process: { kicker: 'El proceso', title: 'Simple, transparente y diseñado alrededor de su fecha límite.', steps: [['01', 'Programar', 'Reserve en línea, llame o coordine con su agente. Confirmamos lo básico y enviamos un acuerdo sencillo.'], ['02', 'Inspeccionar', 'Llegamos temprano e inspeccionamos los principales sistemas visibles, normalmente 2.5–3 horas en sitio.'], ['03', 'Informe', 'Recibe un informe digital claro con fotos, notas de deficiencias, recomendaciones y resumen de reparaciones.'], ['04', 'Decidir', 'Obtiene el contexto para negociar, presupuestar reparaciones o avanzar con confianza.']] },
    services: { kicker: 'La diferencia Golden Scope', title: 'Qué inspeccionamos', intro: 'Sistemas visibles principales, riesgos de seguridad, defectos y prioridades específicas de Houston — todo documentado con claridad.', items: [['Cimentación', 'Lecturas de elevación de alta precisión junto con revisión estructural visible.'], ['Techo', 'Tejas, tapajuntas, penetraciones, drenaje, fugas visibles, calidad de trabajo y temas de garantía.'], ['Eléctrico', 'Paneles, contactos, luminarias, conexión a tierra, cableado visible, riesgos de seguridad y deficiencias.'], ['Mecánico / HVAC', 'Enfriamiento, calefacción, ductos, plenums, condensadoras, hornos e indicadores de rendimiento.'], ['Plomería', 'Accesorios, desagües, ventilaciones, válvulas, tuberías visibles, fugas, flujo de agua y drenaje.'], ['Fases de construcción nueva', 'Inspecciones antes del colado, rough-in, final y garantía del mes 11 para casas nuevas.'], ['Inspecciones de moho', 'Pruebas y documentación adicionales cuando hay preocupaciones de humedad o calidad del aire.'], ['Consultas de remodelación', 'Una segunda opinión práctica antes, durante o después de renovaciones importantes.']] },
    comfort: { kicker: 'Los detalles', title: 'Los consumidores merecen conocer la historia de una casa.', text: 'Obtenga la información que necesita antes de negociar, reparar, cerrar o cumplir fechas de garantía, con un equipo que explica lo importante en lenguaje claro.', cta: 'Hacer una cita' },
    contact: { kicker: 'Contacto', title: '¿Tiene preguntas? Tenemos respuestas.', text: 'Llame, envíe un correo o reserve en línea. Servimos toda el área de Houston y más allá.', hours: 'Lun–dom, 06:00 AM – 07:00 PM', location: 'Houston, Texas' },
    footer: { license: 'Licencia TREC #24192 · WDI bajo Pest Inspection Network TPCL #783068', trec: 'Aviso de Protección al Consumidor de TREC' },
    profile: { inspector: 'Inspector de Golden Scope', back: 'Volver al equipo', details: 'Los detalles', detailsTitle: 'Los consumidores merecen conocer la historia de una casa.', detailsText: 'Golden Scope combina experiencia de inspección con licencia, comunicación clara, informes modernos y contexto del área de Houston para que los clientes tomen decisiones con confianza.', otherKicker: 'Conozca al resto del equipo', otherTitle: 'Más inspectores con licencia de Golden Scope' },
  },
} as const;

export const teamBioTranslations: Record<Language, Record<string, string>> = {
  en: {},
  zh: {
    'tony-ngo': '我叫 Tony，是德州持牌房地产专业房屋检查员，TREC #22826。我们是一家从 2017 年开始经营的小型家族房屋检查公司。我已经检查过 800 多处房产。1987 年，我毕业于休斯顿大学，获得制造系统技术理学学士学位，并拥有 30 多年的认证质量工程师经验，曾在石油、汽车零部件制造和半导体设备行业工作。凭借质量控制经验，我能够快速发现缺陷和瑕疵。我们的目标很直接：客户优先。我们接受专业训练，设备齐全，并专注于高效服务。',
    'rikki-neel': '我叫 Rikki Neel，自 2017 年以来一直是 TREC 持牌房屋检查员，并在大休斯顿地区检查了近 2,000 栋房屋。作为 InterNACHI 国际认证的 Certified Master Inspector，我既是一线检查员，也是德州认可的教育者。我最喜欢这份工作的部分，是遇到许多优秀客户。我把每位客户都当作家人，并像自己的父母要搬进这栋房子一样去检查。随着每一年过去，我对检查和建筑行业的热情也持续增长。',
    'jason-dixon': '作为 TREC 持牌房屋检查员，我非常重视这项服务。这个行业让我有机会与客户互动，并向他们提供关于房屋的重要信息。最有成就感的是，每一天都会带来新的学习机会。',
    'vi-tran': '我叫 Vi Tran，是一名拥有 5 年以上检查行业经验的 TREC 持牌房屋检查员。房屋检查让我有机会服务社区，并认识来自世界各地的人。我相信每栋房子都有自己的故事，而检查员的责任，就是用清楚、易懂的方式讲出这个故事。这份工作也带有一定的探索感，我享受每栋房子和每种情况带来的新挑战。',
  },
  es: {
    'tony-ngo': 'Mi nombre es Tony y soy Inspector Profesional de Viviendas con licencia de Texas, TREC #22826. Somos una pequeña empresa familiar de inspección de viviendas que comenzó en 2017. He inspeccionado más de 800 propiedades. Me gradué en 1987 con una Licenciatura en Tecnología de Sistemas de Manufactura de la Universidad de Houston. He sido Ingeniero de Calidad Certificado por más de 30 años y he trabajado en las industrias petrolera, de autopartes y de equipos semiconductores. Gracias a mi experiencia en control de calidad, mis clientes obtienen un inspector con ojo rápido para encontrar defectos e imperfecciones. Nuestro objetivo es directo: el cliente primero. Estamos capacitados para ser profesionales, bien equipados y eficientes.',
    'rikki-neel': 'Mi nombre es Rikki Neel. Tengo licencia TREC como inspector de viviendas desde 2017 y he inspeccionado casi 2,000 casas en el área metropolitana de Houston. Como Certified Master Inspector de InterNACHI, me enorgullece ser inspector activo y educador reconocido en el estado de Texas. Los clientes maravillosos que tengo el placer de conocer son la mejor parte del trabajo. Trato a cada cliente como familia e inspecciono sus casas como si mis propios padres fueran a mudarse allí. Mi pasión por la inspección y la construcción sigue creciendo cada año.',
    'jason-dixon': 'Como inspector de viviendas con licencia TREC, siento mucho orgullo por este servicio. En esta industria tengo el placer de interactuar con clientes y brindarles información clave sobre su hogar. La parte más gratificante es que cada día ofrece algo nuevo que aprender.',
    'vi-tran': 'Mi nombre es Vi Tran. Soy inspector de viviendas con licencia TREC y más de 5 años de experiencia en la industria de inspección. Inspeccionar viviendas me da la oportunidad de servir a mi comunidad y conocer personas de todo el mundo. Creo que cada casa cuenta una historia, y es responsabilidad del inspector contar esa historia de una manera informativa y fácil de entender. El trabajo trae cierto nivel de aventura, y disfruto los nuevos desafíos que presenta cada casa y cada situación.',
  },
};
