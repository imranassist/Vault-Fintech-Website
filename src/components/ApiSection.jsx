import { Link } from 'react-router-dom';
import Reveal from './Reveal';

export default function ApiSection() {
  return (
    <section className="api" id="api">
      <div className="section-head">
        <Reveal className="section-eyebrow"><span className="index">[ § 06 / Developers ]</span> · <strong>For the engineering team.</strong></Reveal>
        <Reveal as="h2" className="section-title">An API your <em>engineers</em> will <span className="accent">actually like</span>.</Reveal>
      </div>

      <div className="api-grid">
        <Reveal className="api-text">
          <p>RESTful, idempotent, properly versioned. JSON in, JSON out. <strong>Sandbox accounts in two minutes</strong>; production in days.</p>
          <p>SDKs for the four languages your team is using. Webhooks for everything that matters. Full OpenAPI spec, with code examples that compile.</p>
          <ul className="api-list">
            <li><span className="key">SDKs</span><span><strong>Node · Python · Go · Ruby</strong> · all on Github</span></li>
            <li><span className="key">DOCS</span><span><strong>docs.vault.com</strong> · with live runnable examples</span></li>
            <li><span className="key">SLA</span><span><strong>14ms p99</strong> · 99.99% uptime · status.vault.com</span></li>
            <li><span className="key">SUPPORT</span><span><strong>Slack Connect</strong> · or email a real engineer</span></li>
          </ul>
          <Link to="/developers" className="btn btn-lime" style={{ padding: '13px 20px' }}>Read the API docs <span className="arrow">↗</span></Link>
        </Reveal>

        <Reveal className="code-card" delay={0.1}>
          <div className="code-head">
            <span className="dot"></span><span className="dot"></span><span className="dot lime"></span>
            <span className="file">examples/<strong>send-wire.ts</strong></span>
            <span className="lang">TypeScript</span>
          </div>
          <div className="code-body">
<pre><span className="ln"><span className="kw">import</span> {'{'} <span className="key">Vault</span> {'}'} <span className="kw">from</span> <span className="str">'@vault/node'</span></span>
<span className="ln"></span>
<span className="ln"><span className="kw">const</span> <span className="key">vault</span> <span className="punct">=</span> <span className="kw">new</span> <span className="fn">Vault</span><span className="punct">(</span><span className="str">'sk_live_...'</span><span className="punct">)</span></span>
<span className="ln"></span>
<span className="ln"><span className="com">// Send a same-day wire — 60-second settlement</span></span>
<span className="ln"><span className="kw">const</span> <span className="key">wire</span> <span className="punct">=</span> <span className="kw">await</span> <span className="key">vault</span><span className="punct">.</span><span className="key">wires</span><span className="punct">.</span><span className="fn">create</span><span className="punct">({'{'}</span></span>
<span className="ln">  <span className="key">amount</span><span className="punct">:</span> <span className="num">142890_00</span><span className="punct">,</span> <span className="com">// $142,890.00 in cents</span></span>
<span className="ln">  <span className="key">currency</span><span className="punct">:</span> <span className="str">'USD'</span><span className="punct">,</span></span>
<span className="ln">  <span className="key">from_account</span><span className="punct">:</span> <span className="str">'acct_operating_us'</span><span className="punct">,</span></span>
<span className="ln">  <span className="key">to</span><span className="punct">:</span> {'{'}</span>
<span className="ln">    <span className="key">name</span><span className="punct">:</span> <span className="str">'Acme Manufacturing'</span><span className="punct">,</span></span>
<span className="ln">    <span className="key">routing</span><span className="punct">:</span> <span className="str">'026009593'</span><span className="punct">,</span></span>
<span className="ln">    <span className="key">account</span><span className="punct">:</span> <span className="str">'4892017734'</span><span className="punct">,</span></span>
<span className="ln">  {'}'}<span className="punct">,</span></span>
<span className="ln">  <span className="key">memo</span><span className="punct">:</span> <span className="str">'Invoice 4421 · April'</span><span className="punct">,</span></span>
<span className="ln">  <span className="key">idempotency_key</span><span className="punct">:</span> <span className="str">'inv-4421-2026-04'</span></span>
<span className="ln">{'}'}<span className="punct">)</span></span>
<span className="ln"></span>
<span className="ln"><span className="fn">console</span><span className="punct">.</span><span className="fn">log</span><span className="punct">(</span><span className="key">wire</span><span className="punct">.</span><span class="key">id</span><span className="punct">,</span> <span className="key">wire</span><span className="punct">.</span><span class="key">status</span><span className="punct">)</span></span>
<span className="ln"><span className="com">// 'wire_8392lkj...'  'pending' → 'settled' in ~60s</span></span></pre>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
