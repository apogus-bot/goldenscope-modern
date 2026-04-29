'use client';

import { useEffect, useState } from 'react';
import { ArrowLeft, CalendarCheck, Menu, Phone, ShieldCheck } from 'lucide-react';
import { getTeamMember, teamMembers } from '@/lib/team';
import { companyLogo, copy, languages, normalizeLanguage, schedulerUrl, teamBioTranslations, withLanguage } from '@/lib/i18n';

export function TeamMemberClient({ slug }: { slug: string }) {
  const [lang, setLang] = useState(() => normalizeLanguage(undefined));

  useEffect(() => {
    setLang(normalizeLanguage(new URLSearchParams(window.location.search).get('lang')));
  }, []);

  const member = getTeamMember(slug);
  if (!member) return null;

  const t = copy[lang];
  const bio = teamBioTranslations[lang][member.slug] || member.bio;
  const otherInspectors = teamMembers.filter((item) => item.slug !== member.slug);
  const navHref = (hash: string) => withLanguage(`/${hash}`, lang);
  const teamHref = (teamSlug: string) => withLanguage(`/team/${teamSlug}`, lang);

  return (
    <main>
      <header className="site-header profile-header">
        <a className="brand" href={withLanguage('/', lang)} aria-label="Golden Scope home">
          <img className="brand-logo" src={companyLogo} alt="Golden Scope Inspections" />
        </a>
        <nav className="nav-links" aria-label="Profile navigation">
          <a href={navHref('#about')}>{t.nav.about}</a>
          <a href={navHref('#video')}>{t.nav.video}</a>
          <a href={navHref('#process')}>{t.nav.process}</a>
          <a href={navHref('#services')}>{t.nav.services}</a>
          <a href={navHref('#contact')}>{t.nav.contact}</a>
        </nav>
        <a className="header-cta" href="tel:+18329911911"><Phone size={16} /> {t.nav.call}</a>
        <nav className="language-toggle" aria-label={t.nav.languageLabel}>
          {languages.map((language) => (
            <a key={language.code} className={language.code === lang ? 'active' : undefined} href={withLanguage(`/team/${member.slug}`, language.code)} aria-current={language.code === lang ? 'page' : undefined}>
              <span className="language-full">{language.label}</span>
              <span className="language-short">{language.shortLabel}</span>
            </a>
          ))}
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation menu"><Menu size={18} /> {t.nav.menu}</summary>
          <div className="mobile-menu-panel">
            <a href={navHref('#about')}>{t.nav.about}</a>
            <a href={navHref('#video')}>{t.nav.video}</a>
            <a href={navHref('#process')}>{t.nav.process}</a>
            <a href={navHref('#services')}>{t.nav.services}</a>
            <a href={navHref('#contact')}>{t.nav.contact}</a>
          </div>
        </details>
      </header>

      <section className="profile-hero">
        <div className="section-shell profile-grid">
          <div className="profile-copy">
            <a className="back-link" href={withLanguage('/#team', lang)}><ArrowLeft size={17} /> {t.profile.back}</a>
            <p className="section-kicker">{t.profile.inspector}</p>
            <h1>{member.name}</h1>
            <div className="profile-license"><ShieldCheck size={18} /> {member.license}</div>
          </div>
          <div className="profile-photo-card"><img src={member.image} alt={`${member.name}, Golden Scope inspector`} /></div>
        </div>
        <div className="section-shell profile-bio-card">
          <p>{bio}</p>
          <div className="hero-actions">
            <a className="button primary" href={schedulerUrl} target="_blank" rel="noreferrer">{t.hero.book} <CalendarCheck size={18} /></a>
            <a className="button secondary" href="tel:+18329911911"><Phone size={18} /> (832) 991-1911</a>
          </div>
        </div>
      </section>

      <section className="section-shell profile-detail-card">
        <div><p className="section-kicker">{t.profile.details}</p><h2>{t.profile.detailsTitle}</h2></div>
        <p>{t.profile.detailsText}</p>
      </section>

      <section className="section-shell other-inspectors">
        <div className="section-heading centered"><p className="section-kicker">{t.profile.otherKicker}</p><h2>{t.profile.otherTitle}</h2></div>
        <div className="team-grid">
          {otherInspectors.map((inspector) => (
            <article className="team-card" key={inspector.slug}>
              <a className="team-photo-link" href={teamHref(inspector.slug)} aria-label={`Learn more about ${inspector.name}`}>
                <div className="avatar photo-avatar"><img src={inspector.image} alt={`${inspector.name}, Golden Scope inspector`} /></div>
              </a>
              <strong>{inspector.name}</strong>
              <span>{inspector.license}</span>
              <a className="team-link" href={teamHref(inspector.slug)}>{t.team.learnMore}</a>
            </article>
          ))}
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
