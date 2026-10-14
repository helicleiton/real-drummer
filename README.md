# Real Drummer

Landing page analógica para o Real Drummer e drum machine web responsiva com Web Audio API.

## Abrir

- Landing page: abra `landing.html` no navegador.
- Sequenciador: abra `index.html` no navegador. Em Android, o projeto nativo fica em `android/`.
- App desktop Windows: `npm run desktop:dist` gera o instalador em `dist/windows/`.
- Site para hospedagem estática: `npm run build:site` gera `dist/site/`, com a landing em `/` e o sequenciador em `/sequencer.html`.
- A landing usa uma fotografia do Forward Studios, via Wikimedia Commons, sob CC BY-SA 4.0; o crédito e a licença estão no rodapé.

## Publicar

Conecte este repositório a um repositório GitHub. Habilite GitHub Pages usando GitHub Actions; o workflow `publish-site.yml` publica a landing e o sequenciador a cada push em `main` ou `master`. O workflow `release.yml` constrói o APK Android e o instalador Windows quando uma tag `v*` é enviada; os botões de download da landing apontam para os assets da última release.

```sh
git remote add origin https://github.com/OWNER/REPOSITORY.git
git push -u origin main
git tag v1.0.0
git push origin v1.0.0
```

## CSS

O sequenciador usa Tailwind compilado localmente. Para reconstruí-lo após alterar classes utilitárias:

```sh
npm install
npm run build:css
```

Os WAVs empacotados em `samples/` são do Stargate Sample Pack, sob CC0 1.0. Samples importados pelo usuário são armazenados somente no IndexedDB do navegador/dispositivo e não fazem parte do repositório.
