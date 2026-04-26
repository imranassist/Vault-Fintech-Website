import { useState } from 'react';

const faqs = [
  {
    id: 'q1',
    question: 'How quickly can I integrate Vault into my existing stack?',
    answer:
      'Most teams are live in under 48 hours. Our REST API is fully documented with SDKs for Node.js, Python, Go, Ruby, and Java. You get a sandbox environment with test credentials the moment you sign up — no sales call required.',
  },
  {
    id: 'q2',
    question: 'What compliance certifications does Vault hold?',
    answer:
      'Vault is PCI DSS Level 1 certified, SOC 2 Type II audited, and ISO 27001 compliant. We are also regulated under FinCEN as a Money Services Business and operate under EMI licences in the UK and EU. Compliance reports are available on request.',
  },
  {
    id: 'q3',
    question: 'Are there limits on transaction volume or currencies?',
    answer:
      'There are no hard caps on volume — we scale with you from day one. Vault supports 135+ currencies with real-time FX and settles in 90+ countries. Enterprise plans include custom settlement windows and dedicated liquidity rails.',
  },
  {
    id: 'q4',
    question: 'How does Vault handle fraud and chargebacks?',
    answer:
      'Our adaptive risk engine scores every transaction in ≤ 12 ms using hundreds of signals including device fingerprinting, velocity patterns, and network graph analysis. Chargeback dispute management is fully automated with a 94 % win rate across our customer base.',
  },
  {
    id: 'q5',
    question: 'What SLA do you offer for API uptime?',
    answer:
      'We guarantee 99.99 % uptime on our core payment and ledger APIs backed by a financial SLA. Our global infrastructure spans five regions with automatic failover. Historical uptime is publicly visible on status.vaultfintech.io.',
  },
  {
    id: 'q6',
    question: 'Can I white-label Vault for my own product?',
    answer:
      'Yes. Our Embedded Finance tier lets you issue branded cards, accounts, and payment flows under your own identity. Custom domains, UI kits, and co-branded agreement templates are included. Talk to our partnerships team to get started.',
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(null);

  const toggle = (id) => setOpen((prev) => (prev === id ? null : id));

  return (
    <section className="faq">
      <div className="section-head">
        <div className="section-eyebrow">
          <span className="index">07</span> — FAQ
        </div>
        <h2 className="section-title">
          Common <em>questions,</em>
          <br />
          straight <span className="accent">answers</span>
        </h2>
      </div>

      <div className="faq-list">
        {faqs.map((item, i) => {
          const isOpen = open === item.id;
          return (
            <div key={item.id} className={`faq-item${isOpen ? ' open' : ''}`}>
              <button
                id={`faq-btn-${item.id}`}
                className="faq-trigger"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${item.id}`}
                onClick={() => toggle(item.id)}
              >
                <span className="faq-index">{String(i + 1).padStart(2, '0')}</span>
                <span className="faq-question">{item.question}</span>
                <span className="faq-icon" aria-hidden="true">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="faq-chevron"
                  >
                    <path
                      d="M3 6L8 11L13 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              <div
                id={`faq-panel-${item.id}`}
                role="region"
                aria-labelledby={`faq-btn-${item.id}`}
                className="faq-panel"
                style={{ '--panel-height': isOpen ? '1' : '0' }}
              >
                <p className="faq-answer">{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="faq-cta">
        <p className="faq-cta-text">
          Still have questions?{' '}
          <a href="/docs" className="faq-cta-link">
            Read the docs
          </a>{' '}
          or{' '}
          <a href="/contact" className="faq-cta-link">
            talk to our team
          </a>
          .
        </p>
      </div>
    </section>
  );
}
