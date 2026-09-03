# KIMM-HEX Coil 소개 페이지

한국기계연구원 히트펌프연구센터 **KIMM-HEX Coil** (핀튜브 열교환기 설계·성능예측 프로그램)
소개 페이지입니다. 판형·토큰은 구 `koilforge-site` 를 그대로 승계하고 **내용만** 현행
제품명·프로그램 기준으로 갱신했습니다(2026-09-03).

- `index.html` — 데스크톱 판. 단일 파일 정적 페이지 (제3자 스크립트·웹폰트·추적 도구 없음)
- `m.html` — **모바일 판**. 한 열·큰 터치 영역·짧은 스크롤. 문구와 이미지는 데스크톱 판과 같다
  (⚠️ 수치·문구를 고치면 **두 파일을 함께** 고칠 것 — 갈라지면 어느 쪽이 맞는지 알 수 없다)
- `assets/` — 화면 캡처(WebP) · KIMM 로고(SVG) · 제품 마크(`icon-fintube*.svg`)

## 이미지는 지면과 같은 원본을 쓴다

```
capture_ui.py → build_assets.py → 홍보자료/assets/*.png → build_site_assets.py → assets/*.webp
```

`_scripts/build_site_assets.py` 를 돌리면 지면(리플릿·잡지면)이 쓰는 PNG 에서 웹용 WebP 를
다시 만든다. **화면을 재촬영하면 지면과 이 페이지를 함께 갱신할 것** — 따로 만들면 어긋난다.
크기는 HTML 의 `width`/`height` 속성과 짝이므로 바꿀 때 양쪽을 같이 고친다.

## GitHub Pages 게시

1. 이 폴더를 **새 저장소**로 `git init` (개발 저장소를 복사하지 말 것 — 히스토리에 소스가 남습니다)
2. GitHub 에 public 저장소 생성 후 push
3. Settings → Pages → Source: `Deploy from a branch` → `main` / `(root)`

## 편집

- 색·타이포는 `index.html` 상단 `:root` 토큰 (KIMM Design System 값)
- 문구 출처: `홍보자료/KIMM-HEX-Coil_리플릿_A4양면.html`, `KIMM-HEX-Coil_잡지게재_A4단면.html`
  — **세 산출물의 수치·문구는 항상 같아야 한다**(작동유체 58종 · 상관식 13종 · 실험 124케이스)
- 구 브랜드 페이지는 `../_이전버전_KoilForge/koilforge-site/` 에 보존

## 이 저장소에 넣지 말 것

계산엔진(`hx_core.py`·`HX_functions.py`), 인증 코드(`auth.py`), 접속 주소·QR, 실험 원자료.

## 모바일 자동 전환

`index.html` 의 `<head>` 맨 앞 스크립트가 **좁은 화면 또는 모바일 UA** 면 `m.html` 로 넘긴다.

- `m.html` 하단의 **데스크톱 버전 보기** 링크는 `index.html?desktop=1` 로 들어와
  `sessionStorage['hx-view']='desktop'` 을 남긴다 → 그 세션 동안 자동 전환이 꺼진다.
- ⚠️ **`m.html` 은 반대 방향 자동 전환을 하지 않는다.** 두 페이지가 서로 넘기면 루프가 된다.

## 게시 상태

- 공개 주소: **https://jinwooyoo86.github.io/kimm-hex-coil-site/** (GitHub Pages · 2026-09-03 게시)
- 잡지면 QR(`홍보자료/assets/qr-site.svg`)이 이 주소를 가리킵니다 — **주소를 바꾸면 QR도 다시 구울 것**
  (`python _scripts/build_qr.py <새 주소>` → `build_pdf.py`).

> ⚠️ 기관 CI·공개자료 **심의 전 초안**입니다. 심의 결과에 따라 문구·이미지가 바뀔 수 있습니다.
