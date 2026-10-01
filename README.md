# konstytucja.online

[![Netlify Status](https://api.netlify.com/api/v1/badges/bf9f863e-c1af-4dc3-b867-5362132d2096/deploy-status)](https://app.netlify.com/sites/konstytucja/deploys)

## Analityka

Netlify Web Analytics jest włączone w istniejącym planie Free (podgląd 24 godzin). Cloudflare Web Analytics używa publicznego tokenu 0c615806c1644b11990e3600755ca76b z konta właściciela dla konstytucja.online. GA4 i stary tag Plausible zostały zastąpione jednym beaconem Cloudflare.

Cloudflare ma automatyczną obsługę SPA — nie dodawaj dodatkowych ręcznych zdarzeń dla store Sappera. Jeden oficjalny beacon znajduje się w src/template.html; informacja prywatności jest pod /prywatnosc. Hosting oraz DNS pozostają bez zmian.

Budowanie: npm run export. Publikowany katalog: __sapper__/export. Zweryfikuj publiczny beacon i dane w panelu po wdrożeniu. Nowy pomiar nie odtworzy wcześniejszego ruchu.
