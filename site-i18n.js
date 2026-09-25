/*  KIMM-HEX Coil 소개 페이지 — 한국어 ↔ English 전환 (2026-09-17)
    ─────────────────────────────────────────────────────────────────────────
    index.html(데스크톱)과 m.html(모바일)이 **이 파일 한 벌을 함께 쓴다.**
    두 판은 문구가 같아야 하는데(README 참고) 사전을 두 벌 두면 반드시 갈라진다.

    · 화면 문구에 data-i18n 속성으로 키를 달고, **영문만** 아래 EN 사전에 적는다.
      한국어는 각 페이지의 HTML 원문을 첫 실행 때 그대로 떠서 쓴다 — 번역문을 두 벌
      관리하지 않아도 되고, 한국어를 고치면 그대로 반영된다.
    · 마크업이 판마다 다른 몇 개만 EN_M(모바일 전용)으로 덮는다.
      ⚠️ 예: m.html 에는 --text-muted 토큰이 없어서 데스크톱 값의 인라인 style 을 그대로
         쓰면 글자색이 먹지 않는다. 히어로 tagline 은 모바일만 줄바꿈이 있다.
    · 선택은 localStorage('hx-site-lang') 에 남는다. 처음 방문이면 브라우저 언어가
      한국어가 아닐 때만 영문으로 연다.
    · 페이지는 <body data-page="desktop|mobile"> 로 자신을 알린다(제목·설명이 판마다 다르다).

    ⚠️ 사전 값은 innerHTML 로 들어간다 — <b>·<br>·<a>·<span> 같은 표시용 태그만 쓸 것.
    ⚠️ 문구를 추가하면 data-i18n 키와 EN 항목을 **같이** 넣을 것. 사전에 없는 키는 영문에서도
       한국어가 그대로 보인다(깨지지는 않는다).                                            */
(function () {
  var EN = {
    'skip': 'Skip to content',
    'brand.ctr': 'Heat Pump Research Center',
    'nav.features': 'Features', 'nav.spec': 'Specifications', 'nav.validation': 'Validation',
    'nav.app': 'Open the program ↗', 'nav.contact': 'Request access',

    'hero.eyebrow': 'Fin-tube heat exchanger design and performance prediction software',
    'hero.tagline': 'Design freely. Read the results at a glance.',
    'hero.deffn': 'Geometry · refrigerant circuitry · operating conditions<span class="ar">→</span>capacity · pressure drop · condensate',
    'hero.lede': '<b>Build the geometry and the circuitry yourself</b>, and compute with a circuit that passes validation. It runs in a web browser — nothing to install.',
    'hero.cta.app': 'Open the program ↗',
    'hero.cta.contact': 'Contact · collaboration',
    'hero.cta.features': 'See the features',
    'hero.applink': '<b>hexcoil.kr</b> — runs in your browser, with nothing to install. Choose <b>Look around without registering</b> on the start page to see the screens and an example result first; running a calculation needs an <b>access code</b>. Enter your company, name and e-mail under [Request an access code] on the start page and we will e-mail one to you. The service is in <b>beta testing</b>, so features and screens may change without notice.',

    'stats.u.kind': '&nbsp;fluids', 'stats.u.case': '&nbsp;cases', 'stats.u.kind2': '&nbsp;models', 'stats.u.dir': '&nbsp;directions',
    'stats.fluids': 'Working fluids supported<br>natural refrigerants · air · brines included',
    'stats.valid': 'Validated against in-house experiments<br>water · R134a · R1234yf · R410A',
    'stats.corr': 'Air-side heat transfer correlations<br>plain fin 8 · louver fin 5',
    'stats.grid': 'Grid-based analysis<br>local state in every cell',

    'flow.h': 'Design review finished in six steps',
    'flow.p': 'Work down the order on the left of the screen and you go from geometry input to distribution maps. New to it? A <b>guided tutorial</b> (Korean · English) points you through each screen.',
    'step.geo.h': 'HX Dimension', 'step.geo.p': 'Tube and fin geometry<br>rows · tiers · pitches',
    'step.cir.h': 'Circuit', 'step.cir.p': 'Drag the tubing<br>split · merge',
    'step.flu.h': 'Fluid', 'step.flu.p': 'Air inlet state<br>70 working fluids',
    'step.air.h': 'Air Distribution', 'step.air.p': 'Fan non-uniformity<br>2D · 3D preview',
    'step.res1.h': 'Result (Performance)', 'step.res1.p': 'Performance summary<br>capacity · pressure drop',
    'step.res2.h': 'Result (Map)', 'step.res2.p': 'Face/row distribution<br>colour maps',

    'feat.h': 'Design freely,<br>read the results at a glance.',
    'feat.p': 'Build the geometry and the circuitry yourself, then compute performance under the conditions you set.',

    'f1.h': 'HX Dimension — type a dimension, see it in 3D',
    'f1.ul': '<li>Enter tube length, rows, tiers, pitches and outer diameter and the <b>3D model updates immediately</b>.</li>'
           + '<li>It is rendered to true scale, with L · W · H · OD and fin pitch shown as dimension lines.</li>'
           + '<li>The staggered layout and the tube cross-section (inner diameter) are drawn as well, so you can <b>check the tube arrangement by eye</b>.</li>'
           + '<li>Choose plain or louver fins and the louver dimensions (Lp · Lh) appear together with the matching correlations.</li>',
    'f1.cap': '① HX Dimension — L · W · H · OD and fin pitch in 3D',

    'f2.h': 'Circuit — drawn by dragging',
    'f2.ul': '<li>Drag tubes to connect them and build <b>splits and merges</b> (acyclic circuits).</li>'
           + '<li>Loops and duplicate connections are checked as you draw, and tubes left unconnected become <b>independent single-tube circuits</b> automatically.</li>'
           + '<li>Flow distribution is either <b>ΔP equalisation (iterative self-distribution)</b> or an equal split.</li>',
    'f2.cap': '② Circuit — colour = circuit · ★ = inlet · U-bends solid/dashed',

    'f3.h': 'Fluid — 70 working fluids',
    'f3.ul': '<li>The air inlet state is set from the dry-bulb temperature plus one of <b>wet-bulb temperature, relative humidity, humidity ratio, enthalpy or dew point</b>.</li>'
           + '<li>Pick the working fluid from <b>70</b> (water, air, R717, R744, R290, R410A, R134a, R1234yf, <b>EG/PG aqueous brines</b> and more) — properties come from CoolProp.</li>'
           + '<li>The fluid inlet is specified in one of four ways: <b>(1) pressure · temperature</b>, <b>(2) pressure · vapour quality</b>, <b>(3) pressure · enthalpy</b>, <b>(4) outlet pressure · enthalpy</b> — water uses all four just like a refrigerant, while brines use (1) only.</li>'
           + '<li>Single-phase and two-phase heat transfer and pressure drop correlations are chosen separately.</li>',
    'f3.cap': '③ Fluid — five ways to set the air inlet · 70 working fluids',

    'f4.h': 'Air Distribution — fan non-uniformity included',
    'f4.ul': '<li>The fan discharge profile — strong at the centre, weak at the edges — is reproduced with a <b>Gaussian model</b> (σ · floor · β), and the centre shift ratio C moves the peak up or down.</li>'
           + '<li>Air flow is applied cell by cell across the inlet face.</li>'
           + '<li>Check the profile in the 2D/3D preview before it goes into the calculation.</li>',
    'f4.cap': '④ Air Distribution — 3D face velocity at the coil inlet · non-uniformity tuned with fan σ · floor · β · C',

    'f5.h': 'Performance summary — prediction cell by cell',
    'f5.ul': '<li>The coil is <b>divided into a grid in three directions</b> (height, depth and length) and solved cell by cell.</li>'
           + '<li>Local heat transfer and pressure drop are computed for each cell.</li>'
           + '<li>Under wet-surface conditions the <b>condensate (dehumidification) rate</b> is obtained.</li>'
           + '<li>Results are presented together with a psychrometric chart, a P–h diagram and the flow split per circuit.</li>',
    'f5.cap': '⑤ Result (Performance) — summary · capacity · pressure drop · condensate',

    'f6.h': 'Result (Map) — colour maps by face and row',
    'f6.ul': '<li>Distributions are shown from the air inlet face through to the outlet face, row by row along the refrigerant tubes.</li>'
           + '<li>Temperature, humidity, face velocity, pressure, flow rate and phase are colour-coded so you can <b>see at a glance where the distribution differs most</b>.</li>'
           + '<li>Choose a face or a row, and redraw the detail as a contour plot.</li>',
    'f6.cap': '⑥ Result (Map) — distribution colour maps by face and row',

    'mob.h': 'The whole design on a phone',
    'mob.p': 'The phone screen edits <b>geometry, circuitry, fluids, correlations and airflow</b> and shows the <b>performance summary and the face/row distributions</b>. Tap the [Quick start] example and geometry, circuit, operating conditions and its saved results are filled in at once — and the guided tutorial runs on the phone as well. It runs <b>the same calculation engine as the desktop</b>, so the results do not differ. Add it to your home screen and it opens like an app, without an address bar.',
    'mob.c.edit': 'Geometry &amp; circuit editing', 'mob.c.tap': 'Tap to connect circuits',
    'mob.c.map': 'Face/row distribution', 'mob.c.xls': 'Excel template import/export', 'mob.c.home': 'Add to home screen',
    'mob.cap': 'Mobile screen',

    'spec.h': 'Calculation and input/output specifications',
    'spec.p': 'As of v1.0 (in beta testing).',
    'spec.fluid.k': 'Working fluids',
    'spec.fluid.v': '<b>70 fluids</b> — water · air · R717 (ammonia) · R744 (CO<sub>2</sub>) · R290 · R410A · R134a · R1234yf · <b>brines (12 EG/PG aqueous solutions)</b> and more<br><span style="font-size:14.5px; color:var(--text-muted)">Properties from CoolProp</span>',
    'spec.air.k': 'Air side',
    'spec.air.v': 'Heat transfer correlations <b>13</b> (plain fin 8 · louver fin 5) · pressure drop correlations 11 (plain fin 6 · louver fin 5) — selectable<br>Dry / wet surface (condensate) · non-uniform fan airflow · contact thermal resistance',
    'spec.tube.k': 'Tube side',
    'spec.tube.v': 'Single-phase heat transfer and friction; two-phase condensation and evaporation heat transfer and pressure drop — correlations selectable',
    'spec.cir.k': 'Circuitry',
    'spec.cir.v': 'Drag editing · split/merge · unequal tube count per circuit allowed<br>Unconnected tubes become independent single-tube circuits automatically<br>Flow distribution: ΔP equalisation (iterative self-distribution) or equal split',
    'spec.inlet.k': 'Inlet specification',
    'spec.inlet.v': '(1) pressure · temperature (single phase) · (2) pressure · vapour quality (two phase) · (3) pressure · enthalpy · (4) outlet pressure · enthalpy (the inlet pressure is back-calculated including the pressure drop)<br>Common to every working fluid including water · brines use (1) only',
    'spec.res.k': 'Results',
    'spec.res.v': 'Capacity Q (mean of refrigerant and air sides) · pressure drop ΔP · condensate · air and refrigerant inlet/outlet states · psychrometric chart · P–h diagram · face/row distribution colour maps',
    'spec.file.k': 'Files',
    'spec.file.v': 'Excel design template import and export · result export (geometry, circuit diagram, conditions, per-cell raw data — authorised access codes only)<br>Load a <b>result file</b> and the results are restored without recomputing',
    'spec.env.k': 'Environment',
    'spec.env.v': 'Web browser (no installation) · dedicated mobile screen · light/dark theme · Korean/English',
    'spec.size.k': 'Sizing',
    'spec.size.v': 'Geometry candidates from a target load<span class="tag">planned</span>',

    'val.h': 'Checked against 117 in-house experimental cases',
    'val.p': 'We publish, as it is, the range over which computed values were compared with measurements.',
    'val.water': '<b>Water</b>plain / louver fin · 3 rows',
    'val.r134a': '<b>R134a</b>including two-phase condensation and evaporation',
    'val.r410a': '<b>R410A</b>high-pressure refrigerant conditions',
    'val.r1234yf': '<b>R1234yf</b>low-GWP refrigerant',
    'val.c1.h': 'Air-side correlations checked against the original papers',
    'val.c1.p': 'Every implemented air-side heat transfer and pressure drop correlation was compared one by one with the defining equations of its original paper, and the reference area, hydraulic diameter and property basis were matched to it.',
    'val.c2.h': 'Experimental period',
    'val.c2.p': 'In-house experimental data taken from 2023 to 2025 on the heat exchanger test facility of the Heat Pump Research Center, Korea Institute of Machinery &amp; Materials.',

    'for.h': 'Who this helps',
    'for.design.h': 'Heat exchanger design and analysis',
    'for.design.p': 'Predict how an existing geometry performs, compare circuit arrangements and narrow the design down.',
    'for.hp.h': 'Heat pump and air-conditioning development',
    'for.hp.p': 'Change the refrigerant and the operating conditions and see quickly how coil performance moves.',
    'for.test.h': 'Testing and performance verification',
    'for.test.p': 'Compare your measured data with computed values and use it as a basis for interpreting the test results.',
    'for.edu.h': 'University laboratories and teaching',
    'for.edu.p': 'Show on screen how the circuit arrangement affects performance — a teaching tool.',

    'ct.h': 'Contact · collaboration',
    'ct.p': 'Tell us your affiliation, your role and what you intend to use it for.',
    'ct.lbl': 'Contact · collaboration',
    'ct.who1': 'Jinwoo Yoo, Principal Researcher',
    'ct.who2': 'Chanho Song, Principal Researcher',
    'ct.ask': '<li>Institution · department</li><li>Your role</li><li>Intended use (design review / research / teaching)</li>',
    'ct.mail': 'Send an e-mail',
    'ct.app': 'Program address <a href="https://hexcoil.kr" target="_blank" rel="noopener">hexcoil.kr</a> — take a look straight away with <b>Look around without registering</b>. The <b>access code</b> needed for calculations can be requested on the start page under [Request an access code].',
    'ct.trial': 'Access codes are issued for feature review, research and teaching, with a set number of calculations and a validity period. Commercial use such as product design or bidding requires a separate licence agreement.',
    'ct.work.h': 'What we can do together',
    'ct.w.pred.h': 'Performance prediction review',
    'ct.w.pred.p': 'We predict the performance of your heat exchanger geometry and interpret the results with you.',
    'ct.w.impr.h': 'Design improvement',
    'ct.w.impr.p': 'We compare circuit arrangements and look for the direction of improvement.',
    'ct.w.cmp.h': 'Comparison with test data',
    'ct.w.cmp.p': 'We support comparison and interpretation against test data you already hold.',
    'ct.w.coop.h': 'Joint research · technology transfer',
    'ct.w.coop.p': 'We discuss feature extensions and ways to work together.',

    'ftr.org': 'Heat Pump Research Center<br>156 Gajeongbuk-ro, Yuseong-gu, Daejeon, Republic of Korea<br>Jinwoo Yoo, Principal Researcher <a href="mailto:jwyoo@kimm.re.kr">jwyoo@kimm.re.kr</a><br>Chanho Song, Principal Researcher <a href="mailto:sch@kimm.re.kr">sch@kimm.re.kr</a>',
    'ftr.cite': 'How to cite',
    'ftr.citeorg': ', Korea Institute of Machinery &amp; Materials (KIMM), Heat Pump Research Center (2026)',
    'ftr.copy': 'Copyright © 2026 Korea Institute of Machinery &amp; Materials (KIMM), Heat Pump Research Center. All rights reserved.',
    'ftr.terms': '<strong>Terms of use</strong> — the edition offered today is an <strong>evaluation and educational trial</strong>, permitted temporarily for feature review, research and teaching only. Being provided at no charge does not grant a perpetual right of use, and commercial use such as product design or bidding requires a separate licence agreement.',
    'ftr.disc': '<strong>Disclaimer</strong> — this program is a <strong>reference tool</strong> that supports design review. It does not guarantee the computed results, and decisions on real equipment require separate verification.',
    'ftr.oss': '<strong>Open-source notice</strong> — this program includes open-source components such as Flask · CoolProp · NumPy · pandas · openpyxl · matplotlib · Pillow · qrcode, each under its own licence (BSD-3-Clause · MIT · Apache-2.0 · HPND and others). The full list and the licence texts are available on the notice screen inside the program.',
    'ftr.priv': 'This introduction page uses no third-party scripts, tracking tools or web fonts.',

    /*  모바일 판에만 있는 문구 */
    'tolarge': 'View the desktop version \u2192'
  };

  /*  모바일 판에서만 다른 값(마크업이 다르거나 토큰이 없는 것) */
  var EN_M = {
    'hero.tagline': 'Design freely,<br>read the results at a glance.',
    'spec.fluid.v': '<b>70 fluids</b> \u2014 water \u00b7 air \u00b7 R717 (ammonia) \u00b7 R744 (CO<sub>2</sub>) \u00b7 R290 \u00b7 R410A \u00b7 R134a \u00b7 R1234yf \u00b7 <b>brines (12 EG/PG aqueous solutions)</b> and more<br><span style="font-size:13px; color:var(--gray-500)">Properties from CoolProp</span>'
  };

  var ATTR_EN = { 'nav.menu': 'Main menu' };
  var ALT_EN  = { 'brand.kimm': 'Korea Institute of Machinery & Materials' };

  var META_EN = {
    desktop: {
      title: 'KIMM-HEX Coil \u2014 Fin-tube heat exchanger design and performance prediction | KIMM',
      desc: 'Enter the geometry, refrigerant circuitry and operating conditions and obtain capacity, pressure drop and condensate. 70 working fluids including brines, 13 air-side heat transfer correlations, validated against 117 in-house experimental cases, and no installation - it runs in a web browser. Heat Pump Research Center, Korea Institute of Machinery & Materials.'
    },
    mobile: {
      title: 'KIMM-HEX Coil \u2014 Fin-tube heat exchanger design and performance prediction | KIMM',
      desc: 'Enter the geometry, refrigerant circuitry and operating conditions and obtain capacity, pressure drop and condensate. 70 working fluids including brines, 13 air-side heat transfer correlations, validated against 117 in-house experimental cases, and no installation - it runs in a web browser. Heat Pump Research Center, Korea Institute of Machinery & Materials.'
    }
  };

  var page = (document.body && document.body.getAttribute('data-page')) || 'desktop';
  var isM = (page === 'mobile');
  var btn = document.getElementById('langBtn');
  var els = document.querySelectorAll('[data-i18n]');
  var aels = document.querySelectorAll('[data-i18n-aria]');
  var tels = document.querySelectorAll('[data-i18n-alt]');
  var metaDesc = document.querySelector('meta[name="description"]');
  var KO = {}, KO_ATTR = {}, KO_ALT = {}, KO_META = {};

  for (var i = 0; i < els.length; i++) KO[els[i].getAttribute('data-i18n')] = els[i].innerHTML;
  for (var j = 0; j < aels.length; j++) KO_ATTR[aels[j].getAttribute('data-i18n-aria')] = aels[j].getAttribute('aria-label');
  for (var t = 0; t < tels.length; t++) KO_ALT[tels[t].getAttribute('data-i18n-alt')] = tels[t].getAttribute('alt');
  KO_META.title = document.title;
  KO_META.desc = metaDesc ? metaDesc.getAttribute('content') : '';

  function en_of(k) { return (isM && EN_M[k] != null) ? EN_M[k] : EN[k]; }

  function apply(lang) {
    var en = (lang === 'en');
    for (var i = 0; i < els.length; i++) {
      var k = els[i].getAttribute('data-i18n');
      var v = en ? en_of(k) : KO[k];
      if (v != null) els[i].innerHTML = v;      /* 사전에 없는 키는 한국어를 그대로 둔다 */
    }
    for (var j = 0; j < aels.length; j++) {
      var ak = aels[j].getAttribute('data-i18n-aria');
      var av = en ? ATTR_EN[ak] : KO_ATTR[ak];
      if (av != null) aels[j].setAttribute('aria-label', av);
    }
    for (var t = 0; t < tels.length; t++) {
      var tk = tels[t].getAttribute('data-i18n-alt');
      var tv = en ? ALT_EN[tk] : KO_ALT[tk];
      if (tv != null) tels[t].setAttribute('alt', tv);
    }
    document.documentElement.lang = en ? 'en' : 'ko';
    document.title = en ? META_EN[page].title : KO_META.title;
    if (metaDesc) metaDesc.setAttribute('content', en ? META_EN[page].desc : KO_META.desc);
    if (btn) {
      btn.textContent = en ? '\ud55c\uad6d\uc5b4' : 'EN';   /* 누르면 가는 쪽 언어를 보여 준다 */
      btn.setAttribute('aria-label', en ? 'Switch to Korean' : 'Switch to English');
    }
    try { localStorage.setItem('hx-site-lang', lang); } catch (e) {}
    /*  프로그램(hexcoil.kr) 링크에 ?lang= 을 붙인다(2026-09-23) — 다른 도메인이라 저장값을 나눠 쓸 수 없다.
        시작 페이지가 이 값을 받아 같은 언어로 열고, 들어간 뒤 메인 프로그램도 그 언어로 연다. */
    var apps = document.querySelectorAll('a[href^="https://hexcoil.kr"]');
    for (var a = 0; a < apps.length; a++) apps[a].setAttribute('href', 'https://hexcoil.kr/?lang=' + lang);
  }

  /*  전환 버튼은 CSS 에서 감춰 두고 여기서 꺼낸다 — 이 파일이 못 뜨면
      눌러도 아무 일이 없는 죽은 버튼이 남기 때문이다. */
  if (btn) btn.style.display = 'inline-flex';

  var saved = null;
  try { saved = localStorage.getItem('hx-site-lang'); } catch (e) {}
  /*  ?lang=en|ko 가 붙어 오면 그쪽이 이긴다(2026-09-23) — 프로그램 시작 페이지의 [프로그램 소개 페이지]가 넘겨 준다 */
  var qm = /[?&]lang=(en|ko)\b/.exec(location.search);
  if (qm) saved = qm[1];
  var navLang = (navigator.language || navigator.userLanguage || 'ko').toLowerCase();
  apply(saved || (navLang.indexOf('ko') === 0 ? 'ko' : 'en'));

  if (btn) btn.addEventListener('click', function () {
    apply(document.documentElement.lang === 'en' ? 'ko' : 'en');
  });
})();
