# Smash Burger

Landing page institucional para uma hamburgueria, desenvolvida com Next.js, React, TypeScript e Tailwind CSS. O projeto apresenta a marca, destaca os burgers mais pedidos, lista unidades, exibe depoimentos de clientes e oferece uma área de contato.

## Objetivo do projeto

Este projeto foi construído para funcionar como uma vitrine digital da hamburgueria `smash Burger`, com foco em apresentar os produtos e facilitar o contato do cliente com a marca.

## Funcionalidades

- Hero principal com chamada de impacto e atalhos para unidades e redes sociais
- Seção "Sobre" com apresentação da marca e imagens do ambiente
- Vitrine de burgers com cards visuais e destaque para os lanches
- Lista de unidades com endereço, horário, telefone e links externos
- Área de depoimentos de clientes
- Formulário de contato com feedback visual após envio
- Navbar com navegação por âncoras e destaque da seção ativa
- Layout responsivo para desktop e mobile

## Tecnologias utilizadas

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Material Tailwind
- ESLint

## Estrutura do projeto

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    layout/
    sections/
    hooks/
  data/
  lib/
  types/
public/
  img/
```

### Principais áreas

- `src/app/page.tsx`: monta a página inicial com todas as seções
- `src/components/sections/`: componentes visuais da landing page
- `src/components/layout/`: navbar e rodapé
- `src/data/`: dados estáticos de burgers, unidades e depoimentos
- `public/img/`: imagens usadas na interface

## Seções da página

### Hero

Apresenta a proposta principal da marca com um texto de destaque, imagem principal e botões de ação.

### Sobre

Explica a proposta da hamburgueria e reforça o posicionamento da marca com apoio visual.

### Burgers

Exibe os lanches em cards horizontais com imagem, nome e descrição.

### Unidades

Mostra as lojas cadastradas com informações úteis e links para mapa e iFood.

### Avaliações

Reúne depoimentos de clientes para gerar prova social.

### Contato

Permite o envio de mensagem por meio de um formulário simples no front-end.

## Como executar o projeto

### Pré-requisitos

- Node.js 18 ou superior
- npm

### Instalação

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

Depois, acesse `http://localhost:3000`.

### Build de produção

```bash
npm run build
npm run start
```

## Scripts disponíveis

- `npm run dev`: inicia o servidor de desenvolvimento
- `npm run build`: gera a build de produção
- `npm run start`: inicia a aplicação em modo produção
- `npm run lint`: executa a análise estática com ESLint

## Personalização

Os dados principais do site estão centralizados em arquivos simples, o que facilita a manutenção:

- `src/data/burgers.ts`: lista de burgers
- `src/data/units.ts`: unidades e links externos
- `src/data/testimonials.ts`: depoimentos exibidos na página

As imagens podem ser substituídas em `public/img/`.

## Observações sobre o estado atual

- O formulário de contato atualmente apenas registra os dados no console e exibe uma mensagem de sucesso local
- Alguns links externos, como Instagram e cardápio completo, ainda podem ser ajustados para URLs finais
- Os textos e dados do projeto estão estruturados para edição rápida via arquivos estáticos

## Resultado esperado

O projeto entrega uma landing page moderna para apresentação da hamburgueria, com foco em identidade visual, navegação simples e divulgação dos principais pontos de contato com o cliente.
