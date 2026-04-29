'use client';

import type { CSSProperties } from 'react';
import { useEffect, useState } from 'react';
import {
  BadgeCheck,
  CalendarCheck,
  ClipboardCheck,
  Clock3,
  Droplets,
  Flame,
  Gauge,
  HardHat,
  Home,
  Mail,
  MapPin,
  Menu,
  Phone,
  PlayCircle,
  Plug,
  ShieldCheck,
  Sprout,
  Star,
  Wrench,
} from 'lucide-react';
import { teamMembers } from '@/lib/team';
import { assetPath, companyLogo, copy, languages, normalizeLanguage, schedulerUrl, withLanguage } from '@/lib/i18n';

const heroImage = assetPath('/assets/hero-owner-kitchen.png');
const certificationLogos = Array.from({ length: 9 }, (_, index) => assetPath(`/assets/cert-logo-${index + 1}.png`));
const valueIcons = [Clock3, MapPin, ShieldCheck] as const;
const serviceIcons = [Gauge, Home, Plug, Flame, Droplets, HardHat, Sprout, Wrench] as const;

const originalSiteContent = {
  en: {
    heroLabel: "Houston's Best Home Inspection Company.",
    goldenChoice: {
      kicker: 'The golden choice',
      title: 'We Go Above & Beyond:',
      items: [
        'Reports Within 24 Hours',
        'Foundation Elevation Readings Included',
        '11th Month Warranty Inspections',
        'Phase Inspections for New Construction',
        'Free Sprinkler System Inspections',
        'We Service the Entire Houston Area & Beyond',
        'Mold Inspection',
        'Pre-listing inspection',
        'Remodeling Consultation',
      ],
    },
    processIntro: {
      kicker: 'The process',
      title: 'Peace of Mind is Priceless: Why Settle for Anything Less?',
      text: "From the moment we take your call, our focus is on providing you with quality, personalized service. You need a thorough home inspection, and we deliver them. We're never more than a phone call away to answer your questions or address your concerns. The team at Golden Scope is dedicated to making sure that you feel welcomed, respected, and listened to. We perform our inspections to a higher standard, each and every time.",
    },
    form: {
      title: 'Send us a message',
      name: 'Name*',
      email: 'Email*',
      phone: 'Phone Number',
      subject: 'Subject',
      message: 'Message',
      submit: 'Send message',
      note: 'This opens your email app with the message details so Golden Scope can reply directly.',
    },
    testimonials: {
      kicker: 'Google reviews',
      title: 'Real feedback from homeowners',
      items: [
        {
          quote: "Golden Scope Inspection truly sets the gold standard in their field. Their commitment to excellence is evident from start to finish. I've had the pleasure of using their services. I cannot thank enough to Mr. Vi Tran, who helped me inspect my house during Thanksgiving holiday. He went above and beyond by not only identifying issues but also taking the time to guide me through the whole inspection process. I highly recommend Golden Scope Inspection to anyone, especially Mr. Vi Tran. He's truly a cut above the rest.",
          name: 'Toan Song',
          meta: 'Google review · Nov 11, 2023',
        },
        {
          quote: 'Great service. Tony and his team did our house inspection and his attention to detail and report gave me the chance to contact the builder to fix some alarming issues before my warranty expired which previous inspectors failed to find. He also gave me great advice on how to maintain the home to reduce potential breakage and reduce costs. Very honest which is hard to come by in businesses these days. I would definitely look forward to hiring this company again.',
          name: 'Lavie',
          meta: 'Google review · Oct 26, 2023',
        },
        {
          quote: "These guys are the very best! I've never seen an inspection that was done so thoroughly. Well worth the money. I highly recommend these guys to do all your inspections.",
          name: 'Stacy Mcdonald',
          meta: 'Google review · Oct 9, 2023',
        },
      ],
    },
  },
  zh: {
    heroLabel: '休斯顿优秀房屋检查公司。',
    goldenChoice: {
      kicker: 'Golden Scope 之选',
      title: '我们做得更多：',
      items: ['24 小时内出报告', '包含地基标高读数', '第 11 个月保修检查', '新房施工分阶段检查', '免费灌溉系统检查', '服务整个休斯顿地区及周边', '霉菌检查', '上市前检查', '装修咨询'],
    },
    processIntro: {
      kicker: '检查流程',
      title: '安心无价：为什么要降低标准？',
      text: '从接到您电话的那一刻起，我们就专注于提供高质量、个性化的服务。您需要一次彻底的房屋检查，我们就交付一次彻底的检查。无论您有问题还是顾虑，我们都只是一通电话的距离。Golden Scope 团队致力于让每位客户感到受欢迎、被尊重、被倾听。每一次检查，我们都坚持更高标准。',
    },
    form: { title: '给我们留言', name: '姓名*', email: '邮箱*', phone: '电话号码', subject: '主题', message: '留言', submit: '发送留言', note: '表单会打开您的邮件应用并填入信息，方便 Golden Scope 直接回复您。' },
    testimonials: {
      kicker: 'Google 评价',
      title: '来自房主的真实反馈',
      items: [
        { quote: 'Golden Scope Inspection 真正树立了行业中的黄金标准。他们从开始到结束都体现出对卓越服务的坚持。Vi Tran 先生在感恩节假期期间帮我检查房屋，不仅指出问题，还耐心带我了解整个检查流程，服务远超预期。我强烈推荐 Golden Scope Inspection，尤其是 Vi Tran 先生。', name: 'Toan Song', meta: 'Google 评价 · 2023年11月11日' },
        { quote: '服务非常好。Tony 和他的团队为我们做房屋检查，他对细节的关注和报告让我有机会在保修到期前联系建商修复一些之前检查员没有发现的重要问题。他还给了我很多维护房屋、降低潜在损坏和成本的建议。非常诚实，这在现在的商业环境中很难得。我一定会再次聘请这家公司。', name: 'Lavie', meta: 'Google 评价 · 2023年10月26日' },
        { quote: '这些人是最棒的！我从没见过如此彻底的检查。非常值得。我强烈推荐他们来做您的所有检查。', name: 'Stacy Mcdonald', meta: 'Google 评价 · 2023年10月9日' },
      ],
    },
  },
  es: {
    heroLabel: 'La mejor compañía de inspección de viviendas de Houston.',
    goldenChoice: {
      kicker: 'La elección Golden Scope',
      title: 'Vamos más allá:',
      items: ['Informes en 24 horas', 'Lecturas de elevación de cimentación incluidas', 'Inspecciones de garantía del mes 11', 'Inspecciones por fases para construcción nueva', 'Inspecciones gratuitas del sistema de riego', 'Servimos toda el área de Houston y más allá', 'Inspección de moho', 'Inspección antes de publicar la propiedad', 'Consulta de remodelación'],
    },
    processIntro: {
      kicker: 'El proceso',
      title: 'La tranquilidad no tiene precio: ¿por qué conformarse con menos?',
      text: 'Desde el momento en que recibimos su llamada, nuestro enfoque es darle un servicio personalizado y de calidad. Usted necesita una inspección completa de la vivienda, y eso es lo que entregamos. Siempre estamos a una llamada para responder sus preguntas o atender sus inquietudes. El equipo de Golden Scope se dedica a que usted se sienta bienvenido, respetado y escuchado. Realizamos nuestras inspecciones con un estándar más alto, cada vez.',
    },
    form: { title: 'Envíenos un mensaje', name: 'Nombre*', email: 'Correo electrónico*', phone: 'Teléfono', subject: 'Asunto', message: 'Mensaje', submit: 'Enviar mensaje', note: 'Esto abre su aplicación de correo con los detalles para que Golden Scope pueda responderle directamente.' },
    testimonials: {
      kicker: 'Reseñas de Google',
      title: 'Comentarios reales de propietarios',
      items: [
        { quote: 'Golden Scope Inspection realmente establece el estándar de oro en su campo. Su compromiso con la excelencia se nota de principio a fin. El Sr. Vi Tran me ayudó a inspeccionar mi casa durante el feriado de Acción de Gracias. Fue más allá al identificar problemas y también tomarse el tiempo para guiarme por todo el proceso de inspección. Recomiendo mucho Golden Scope Inspection, especialmente al Sr. Vi Tran.', name: 'Toan Song', meta: 'Reseña de Google · 11 nov 2023' },
        { quote: 'Excelente servicio. Tony y su equipo hicieron la inspección de nuestra casa, y su atención al detalle y el informe me dieron la oportunidad de contactar al constructor para arreglar problemas importantes antes de que expirara mi garantía, problemas que inspectores anteriores no encontraron. También me dio excelentes consejos para mantener la casa, reducir posibles daños y bajar costos. Muy honestos; definitivamente volvería a contratar esta compañía.', name: 'Lavie', meta: 'Reseña de Google · 26 oct 2023' },
        { quote: '¡Estos muchachos son los mejores! Nunca había visto una inspección hecha tan a fondo. Vale totalmente la pena. Los recomiendo mucho para todas sus inspecciones.', name: 'Stacy Mcdonald', meta: 'Reseña de Google · 9 oct 2023' },
      ],
    },
  },
} as const;

export default function HomePage() {
  const [lang, setLang] = useState(() => normalizeLanguage(undefined));

  useEffect(() => {
    setLang(normalizeLanguage(new URLSearchParams(window.location.search).get('lang')));
  }, []);

  const t = copy[lang];
  const original = originalSiteContent[lang];
  const navHref = (hash: string) => withLanguage(`/${hash}`, lang);
  const teamHref = (slug: string) => withLanguage(`/team/${slug}`, lang);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href={withLanguage('/#top', lang)} aria-label="Golden Scope home">
          <img className="brand-logo" src={companyLogo} alt="Golden Scope Inspections" />
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href={navHref('#about')}>{t.nav.about}</a>
          <a href={navHref('#video')}>{t.nav.video}</a>
          <a href={navHref('#process')}>{t.nav.process}</a>
          <a href={navHref('#services')}>{t.nav.services}</a>
          <a href={navHref('#contact')}>{t.nav.contact}</a>
        </nav>
        <a className="header-cta" href="tel:+18329911911">
          <Phone size={16} /> {t.nav.call}
        </a>
        <nav className="language-toggle" aria-label={t.nav.languageLabel}>
          {languages.map((language) => (
            <a key={language.code} className={language.code === lang ? 'active' : undefined} href={withLanguage('/', language.code)} aria-current={language.code === lang ? 'page' : undefined}>
              <span className="language-full">{language.label}</span>
              <span className="language-short">{language.shortLabel}</span>
            </a>
          ))}
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation menu">
            <Menu size={18} /> {t.nav.menu}
          </summary>
          <div className="mobile-menu-panel">
            <a href={navHref('#about')}>{t.nav.about}</a>
            <a href={navHref('#video')}>{t.nav.video}</a>
            <a href={navHref('#process')}>{t.nav.process}</a>
            <a href={navHref('#services')}>{t.nav.services}</a>
            <a href={navHref('#contact')}>{t.nav.contact}</a>
          </div>
        </details>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-grid section-shell">
          <div className="hero-copy">
            <div className="eyebrow"><Star size={16} /> {t.hero.eyebrow}</div>
            <p className="hero-original-label">{original.heroLabel}</p>
            <h1>{t.hero.title}</h1>
            <p className="hero-lede">{t.hero.lede}</p>
            <div className="hero-actions">
              <a className="button primary" href={schedulerUrl} target="_blank" rel="noreferrer">
                {t.hero.book}
              </a>
              <a className="button secondary" href="tel:+18329911911">
                <Phone size={18} /> (832) 991-1911
              </a>
            </div>
            <div className="language-card" aria-label="Languages spoken">
              <span>{t.hero.speak}</span>
              {t.hero.languages.map((language) => <strong key={language}>{language}</strong>)}
            </div>
          </div>

          <div className="hero-panel" aria-label="Inspection trust highlights">
            <div className="hero-photo-card">
              <img src={heroImage} alt="Beautiful Houston-area home ready for inspection" />
            </div>
            <div className="hero-house" aria-hidden="true">
              <div className="roof" />
              <div className="home-body"><div className="window" /><div className="window" /><div className="door" /></div>
            </div>
            <div className="floating-card top"><BadgeCheck /><span>{t.hero.licensed}</span></div>
            <div className="floating-card bottom"><ClipboardCheck /><span>{t.hero.reports}</span></div>
          </div>
        </div>
      </section>

      <section className="logo-marquee-section" aria-label="Professional certifications and associations">
        <p>{t.marquee}</p>
        <div className="logo-marquee">
          <div className="logo-track">
            {[...certificationLogos, ...certificationLogos].map((logo, index) => (
              <div className="cert-logo" key={`${logo}-${index}`}><img src={logo} alt="Home inspection certification logo" /></div>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Reasons to trust Golden Scope">
        <div className="section-shell trust-grid">
          {t.trust.map(([stat, label]) => <div key={label}><strong>{stat}</strong><span>{label}</span></div>)}
        </div>
      </section>

      <section id="about" className="section-shell split-section">
        <div><p className="section-kicker">{t.about.kicker}</p><h2>{t.about.title}</h2></div>
        <div className="body-copy"><p>{t.about.p1}</p><p>{t.about.p2}</p></div>
      </section>

      <section className="values-section">
        <div className="section-shell card-grid three">
          {t.values.map(([title, text], index) => {
            const Icon = valueIcons[index];
            return <article className="value-card" key={title}><Icon className="card-icon" /><h3>{title}</h3><p>{text}</p></article>;
          })}
        </div>
      </section>

      <section className="section-shell golden-choice-section">
        <div className="golden-choice-card">
          <div>
            <p className="section-kicker">{original.goldenChoice.kicker}</p>
            <h2>{original.goldenChoice.title}</h2>
          </div>
          <ul className="choice-list">
            {original.goldenChoice.items.map((item) => <li key={item}><BadgeCheck size={18} /> {item}</li>)}
          </ul>
        </div>
      </section>

      <section id="team" className="section-shell team-section">
        <div className="section-heading centered">
          <p className="section-kicker">{t.team.kicker}</p>
          <h2>{t.team.title}</h2>
          <p>{t.team.intro}</p>
        </div>
        <div className="team-grid">
          {teamMembers.map(({ name, license, image, slug }) => (
            <article className="team-card" key={name}>
              <a className="team-photo-link" href={teamHref(slug)} aria-label={`Learn more about ${name}`}>
                <div className="avatar photo-avatar"><img src={image} alt={`${name}, Golden Scope inspector`} /></div>
              </a>
              <strong>{name}</strong>
              <span>{license}</span>
              <a className="team-link" href={teamHref(slug)}>{t.team.learnMore}</a>
            </article>
          ))}
        </div>
      </section>

      <section id="video" className="video-section">
        <div className="section-shell video-grid">
          <div className="video-copy">
            <p className="section-kicker">{t.video.kicker}</p>
            <h2>{t.video.title}</h2>
            <p>{t.video.text}</p>
            <a className="button secondary" href="https://vimeo.com/509546030" target="_blank" rel="noreferrer"><PlayCircle size={18} /> {t.video.open}</a>
          </div>
          <div className="video-frame"><iframe src="https://player.vimeo.com/video/509546030?h=0b16283f8b&title=0&byline=0&portrait=0" title="Golden Scope Inspection video" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen /></div>
        </div>
      </section>

      <section id="process" className="process-section">
        <div className="section-shell">
          <div className="process-intro-card">
            <p className="section-kicker">{original.processIntro.kicker}</p>
            <h2>{original.processIntro.title}</h2>
            <p>{original.processIntro.text}</p>
          </div>
          <div className="section-heading"><p className="section-kicker">{t.process.kicker}</p><h2>{t.process.title}</h2></div>
          <div className="process-grid">
            {t.process.steps.map(([num, title, text]) => <article className="process-card" key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section id="services" className="section-shell services-section">
        <div className="section-heading centered"><p className="section-kicker">{t.services.kicker}</p><h2>{t.services.title}</h2><p>{t.services.intro}</p></div>
        <div className="service-grid">
          {t.services.items.map(([title, text], index) => {
            const Icon = serviceIcons[index];
            return <article className="service-card" key={title}><Icon /><div><h3>{title}</h3><p>{text}</p></div></article>;
          })}
        </div>
      </section>

      <section className="comfort-section">
        <div className="section-shell comfort-card">
          <div><p className="section-kicker">{t.comfort.kicker}</p><h2>{t.comfort.title}</h2><p>{t.comfort.text}</p></div>
          <a className="button primary" href={schedulerUrl} target="_blank" rel="noreferrer">{t.comfort.cta} <CalendarCheck size={18} /></a>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="section-shell contact-grid">
          <div>
            <p className="section-kicker">{t.contact.kicker}</p>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.text}</p>
            <div className="contact-card contact-info-card">
              <a href="tel:+18329911911"><Phone /> (832) 991-1911</a>
              <a href="mailto:GoldenScopeInspection@gmail.com"><Mail /> Goldenscopeinspection@gmail.com</a>
              <span><Clock3 /> {t.contact.hours}</span>
              <span><MapPin /> {t.contact.location}</span>
            </div>
          </div>
          <form className="contact-form" action="mailto:GoldenScopeInspection@gmail.com" method="post" encType="text/plain">
            <h3>{original.form.title}</h3>
            <div className="form-row">
              <label><span>{original.form.name}</span><input name="name" type="text" required placeholder={original.form.name} /></label>
              <label><span>{original.form.email}</span><input name="Email" type="email" required placeholder={original.form.email} /></label>
            </div>
            <div className="form-row">
              <label><span>{original.form.phone}</span><input name="Phone-Number" type="tel" placeholder={original.form.phone} /></label>
              <label><span>{original.form.subject}</span><input name="Subject" type="text" placeholder={original.form.subject} /></label>
            </div>
            <label><span>{original.form.message}</span><textarea name="Message" rows={5} required placeholder={original.form.message} /></label>
            <button className="button primary" type="submit">{original.form.submit}</button>
            <p className="form-note">{original.form.note}</p>
          </form>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="section-shell section-heading centered">
          <p className="section-kicker">{original.testimonials.kicker}</p>
          <h2>{original.testimonials.title}</h2>
        </div>
        <div className="section-shell testimonial-carousel" aria-label={original.testimonials.title}>
          <div className="testimonial-track">
            {original.testimonials.items.map((item, index) => (
              <article className="testimonial-card" style={{ '--slide-index': index } as CSSProperties} key={item.name}>
                <div className="stars" aria-label="5 star Google review">★★★★★</div>
                <p>“{item.quote}”</p>
                <div className="testimonial-author">
                  <strong>{item.name}</strong>
                  <span>{item.meta}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="section-shell footer-grid">
          <div><img className="footer-logo" src={companyLogo} alt="Golden Scope Inspections" /><p>{t.footer.license}</p></div>
          <a href="https://www.trec.texas.gov/forms/consumer-protection-notice" target="_blank" rel="noreferrer">{t.footer.trec}</a>
        </div>
      </footer>
    </main>
  );
}
