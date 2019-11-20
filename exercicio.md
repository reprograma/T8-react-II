# Exercício

O objetivo desse exercício é revisar e treinar os conceitos aprendidos durante a semana II de react.

## Adicionar nova funcionalidade Blog ao RocketChat

Como usuário do site quero ter acesso ao blog com conteúdos

**Dado**
que estou no site

**Quando**
clico no item 'Blog' do menu

**Então**
visualizo a página blog com a url '/blog'



**Dado**
que estou na página Blog

**Quando**
scrolo a página

**Então**
visualizo um header com imagem e título "Blog" e as postagens com título, texto e botão "Saiba mais"

Visualize o projeto em https://rocketchat.netlify.com/

## Requisitos

  - A requisição deverá ser feita para a API https://jsonplaceholder.typicode.com/posts
  - Deverá ser reutilizado o componente Header que já existe
  - A nova imagem está disponível aqui https://drive.google.com/open?id=1okZ0CyFfk6ghcAm6KhxD0uxvTjXZsl-V
  - Deverá criar a nova rota '/blog' e adicionar link ao menu
  - O botão de "Saiba mais" não precisa ser clicavél, mas quem tiver terminado o restante e quiser fazer uma página de destino da postagem, pode acrescentar esse desafio ;)

## CSS
  - [Página Blog](https://github.com/reprograma/T8-React-II/blob/master/src/paginas/Blog/styles.css)
  - [Componente Postagem](https://github.com/reprograma/T8-React-II/blob/master/src/componentes/Postagem/styles.css)
  - [Componente Header](https://github.com/reprograma/T8-React-II/blob/master/src/componentes/Header/styles.css) **IMPORTANTE! não esquecer de verificar a imagem para trocar URL**
