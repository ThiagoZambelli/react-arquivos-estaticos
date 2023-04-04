![Alt text](src/assets/logoLithtleZ.svg)

&nbsp;


<img align="left" width="50%" style="margin-top:-20px" src="public/assets/eu.png">

</br>
</br>

<div dsplay="inline-block">

<h2 align="justify">React: lidando com arquivos estáticos</h2>
<h2 align="justify">Feito por : Thiago Zambelli</h2>
<h3 align="justify">Projeto realizado para o curso - React: lidando com arquivos estáticos - na Alura</h3>
 
  <a href="https://www.linkedin.com/in/thiagozambelli">
    <img width="80px" src="https://i.ibb.co/RyZx12b/linkedin.png" alt="linkedin" style="vertical-align:top;">
  </a>
</div>

&nbsp;

---

## Criação do projeto:
  > `npx create-react-app ./ --template typescript --use-npm`

&nbsp;

## Instalação do css module e do SASS:
  > `npm install -D typescript-plugin-css-modules sass`

&nbsp;

## SVGs:
  > SVGs  podem ser utilizadas como componentes React ao importalas como React.Components:
  - Ex. `import {ReactComponent as nomeDaSVG} from 'caminho/para/SVG'`
  > SVGs não podem ser usadas como imgs normais pois o build interpreta elas como uma `string` e não uma imagem.

&nbsp;

## Importação absoluta:
  > De maneira geral, as importações em Javascript são feitas de maneira `Relativa`, ou seja: O caminho da importação é feito relativo ao componente onde a importação esta sendo feita.

  > Mas podemos mudar isso com o `Absolut Import`, criando uma Url padrao como caminho de inicio para as importações. No JavaScript normal isso é feito criando um arquivo `jsConfig.js`. No TypeScript nos podemos apenas colocar `"baseUrl": "src"` no arquivo `tsconfig.json` que ja é gerado por padrão pelo `create-react-app` com modulo de TypeScript.

&nbsp;

## Normalize.css:
  > Devido a algum erro na importação do Normalize, foi feito o comando `npm i normalize.css` e em seguida foi importado o mesmo no index.tsx do src, antes do arquivi css normal do index (`import "normalize.css"`);

&nbsp;

## `react-icons`:
  > A biblioteca `react-icons` tras uma variação gigantesca de icones que podem ser utilizados pelo React.

  - E.x:
  ~~~JavaScript
    <CgSearch 
        size={20}
        color='#221F3B'
      /> 
  ~~~

    - E.x de `import`:  
  ~~~JavaScript
    import { CgSearch } from 'react-icons/cg' 
  ~~~
  
&nbsp;


---
# Aulas :

### Aula 1:

- Criar projetos usando Create React App;
- Vimos como podemos usar templates, como typescript para criar projetos com CRA e depois removemos o que não será utilizado neste projeto;
- Usar CSS Modules com TypeScript e Sass;
- Aplicamos estilos escritos em Sass via CSS Modules e adicionamos a capacidade do Visual Studio Code oferecer autocomplete dos módulos de estilos com typescript-plugin-css-modules.

### Aula 2:

- Importar um svg;
  - Vimos como o webpack entende aquela string que fornecemos ao src da tag img e porque não funciona, então, aprendemos como importar um svg da forma correta.
- Utilizar um svg como componente;
  - Melhoramos a nossa logo alterando a tag img por um componente que se torna um svg no final.
- Imports absolutos;
  - Aprendemos como configurar e utilizar os imports absolutos para evitar voltar muitas pastas ao importar um arquivo.
- Utilizar a biblioteca reset css para resetar o css;
  - Resetamos os estilos da nossa página utilizando uma biblioteca chamada reset.css que nos ajuda a limpar os estilos padrões de cada elemento de acordo com cada navegador.

### Aula 3:

- Importar fontes externas
  - Aprendemos como importar fontes externas no nosso projeto utilizando o google fonts.
- Utilizar o normalize.css
  - Utilizamos o normalize.css para padronizar os estilos da página html em cada navegador.
- Utilizar ícones
  - Aprendemos como é fácil utilizar ícones com a biblioteca react-icons.
- Ignorar arquivos para build
  - Vimos como ignorar arquivos no momentos de build para que sejam utilizados apenas quando os chamar.
- Criar variáveis css
  - Criamos variáveis css para nos auxiliar na padronização dos estilos da página, evitando repetição e facilitando na manutenção de código.
