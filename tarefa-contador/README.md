# Contador com limites e step

Atividade simples em React com TypeScript. O contador começa em 0 e permite configurar o step, o mínimo e o máximo.

Os botões incrementam, decrementam e resetam o contador. Ao alterar os limites, o valor é ajustado automaticamente. Campos inválidos exibem uma mensagem e desabilitam os botões correspondentes.

O reset volta para 0 dentro do intervalo. Se o mínimo for positivo, volta para o mínimo. Se o máximo for negativo, volta para o máximo para respeitar o intervalo.

## Como executar

```bash
cd tarefa-contador
npm install
npm run dev
```

## Verificar a compilação

```bash
npm run build
```
