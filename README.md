# Real Drummer

Landing page analógica para o Real Drummer e drum machine web responsiva com Web Audio API.

## Abrir

- Landing page: abra `landing.html` no navegador.
- Sequenciador: abra `index.html` no navegador. Em Android, o projeto nativo fica em `android/`.
- A landing usa uma fotografia do Forward Studios, via Wikimedia Commons, sob CC BY-SA 4.0; o crédito e a licença estão no rodapé.

## CSS

O sequenciador usa Tailwind compilado localmente. Para reconstruí-lo após alterar classes utilitárias:

```sh
npm install
npm run build:css
```

Os WAVs empacotados em `samples/` são do Stargate Sample Pack, sob CC0 1.0. Samples importados pelo usuário são armazenados somente no IndexedDB do navegador/dispositivo e não fazem parte do repositório.
