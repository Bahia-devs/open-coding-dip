# Open-Coding sobre Princípio de Inversão de Dependência

Neste Open-coding nós abordamos sobre o Princípio de Inversão de Dependência (DIP - Dependency Inversion Principle), o último princípio dentre os cinco princípios `SOLID`.

Primeiro nós falamos sobre as diferenças entre `interfaces` e `classes abstratas`, criamos uns exemplos na pasta `concepts`.

Segundo, nós exercitamos o DIP criando cinco exemplos dentro da pasta `calculator-dip`.

# Preparando sua máquina

## Dependências e Instalação

**Node.js**
Primeiro, para rodar o projeto na sua máquina, vamos precisar utilizar o Node.js. Para instalar o node, basta ir neste [site aqui](https://nodejs.org/en). Caso você não saiba como instalar o Node.js, acesse [esse conteúdo](https://www.alura.com.br/artigos/como-instalar-node-js-windows-linux-macos?utm_term=&utm_campaign=%5BSearch%5D+%5BPerformance%5D+-+Dynamic+Search+Ads+-+Artigos+e+Conte%C3%BAdos&utm_source=adwords&utm_medium=ppc&hsa_acc=7964138385&hsa_cam=11384329873&hsa_grp=111087461203&hsa_ad=687448474447&hsa_src=s&hsa_tgt=aud-527303763294:dsa-2276348409543&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=2&gclid=Cj0KCQiAz8GuBhCxARIsAOpzk8zVvzeTv3NsGA8_-Wm4cxUL2KAHY9VNJIc4YJBQx39r3qC79C8Jh_4aAsTjEALw_wcB) e instale de acordo com seu sistema operational (Windows, Linux, MacOS).

**Dependências do projeto**

Para instalar as dependências do projeto, acesse a pasta do projeto no terminal. Depois acesse qual dos subprojetos você quer instalar as dependências, entrando na pasta `concepts` ou na pasta `calculator-dip`. Dentro de uma dessas pastas, rode o comando:

```bash
npm install
```

## Rodando os projetos

### Concepts

Existem dois exemplos dentro da pasta `concepts/`, o `abstract-class.ts` e o `interfaces.ts`. Para rodar cada um dos exemplos, entre na pasta `concepts/` e rode os comandos:

```bash
npm run abstract-class

```

```bash
npm run interfaces

```

### Calculator-DIP

Existem cinco exemplos dentro da pasta `calculator-dip`. Para rodar cada um dos exemplos, entre na pasta `calculator-dip` pelo terminal e rode os comandos:

```bash
npm run example-1

```

```bash
npm run example-2

```

```bash
npm run example-3

```

```bash
npm run example-4

```

```bash
npm run example-5

```

# Conteúdos

- [Artigo sobre princípios SOLID com TypeScript](https://medium.com/@matheusbessa_44838/princ%C3%ADpios-solid-com-typescript-4f8a9d5d1ef8)
- [Artigo sobre Dependency Inversion, Dependency Injection e Inversion of Control - Martin Fowler](https://martinfowler.com/articles/dipInTheWild.html)

# Livros

- [Software Development Principles Patterns Practices - Uncle Bob](https://www.amazon.com/Software-Development-Principles-Patterns-Practices/dp/0135974445)
- [Padrões de Projetos: Soluções Reutilizáveis de Software Orientados a Objetos - The Gang of Four](https://www.amazon.com.br/Padr%C3%B5es-Projetos-Solu%C3%A7%C3%B5es-Reutiliz%C3%A1veis-Orientados/dp/8573076100/ref=asc_df_8573076100/?tag=googleshopp00-20&linkCode=df0&hvadid=379748659420&hvpos=&hvnetw=g&hvrand=10183015816504247065&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9101338&hvtargid=pla-812887614857&psc=1&mcid=2f59b4d0d8533e1a9bfcd99838e1a3ee)
- [Head First Design Patterns - Eric Freeman, Elisabeth Freeman e Kathy Sierra](https://www.amazon.com.br/Head-First-Design-Patterns-Freeman/dp/0596007124/ref=asc_df_0596007124/?tag=googleshopp00-20&linkCode=df0&hvadid=379787788238&hvpos=&hvnetw=g&hvrand=10183015816504247065&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9101338&hvtargid=pla-432743742179&psc=1&mcid=e039c1cebf863d1d8d3b08ef380393be)
