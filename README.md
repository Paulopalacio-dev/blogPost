# Entendendo decisões arquiteturais e a estrutura do projeto

## Requisitos para rodar o projeto

### Setup do ambiente
- [Node LTS](https://nodejs.org/en/)
- Android Studio

### Utilizei:
- Expo para criar o projeto  [Expo ](https://docs.expo.dev/)
- Typescript 
- React-Native

### Extensões
- editorconfig
- Pretrier

### Bibliotecas 
- Styled components: utilizada para os estilo separando dos arquivos de componentes.
- Axios: para realizar as consultas na API


### Como rodar na minha máquina?
- Clone o projeto
- Rode o projeto digitando `expo start` no terminal
- Se tiver o android Studio instalado, digite `a` no terminal. Caso não tenha o Android Studio instalado voce pode rodar no Browser digitando `w`. Ao abrir no browser tecle F12 para e clique na opçao de ferramentas para visualizar como dispositivo móvel.
- Pronto 🎉

### Estrutura do projeto

- `App.tsx`: É a pagina que o Expo usa para montar o sistema de roteamento
- `./src/screens`: É a pasta que fica localizado as screens, que para este projeto utilizada so uma screen que é a `./src/Home`, nela fica toda a renderização dos componentes.
- `.src/components`: são todos os pedaços primordiais de interface como componentes de `<Button>`, `<Inputs>`, `<Modal>`, `<Post>`. Tendo como ideia tematizar melhor o projeto.
- `.src/hooks` nesta pasta fica o hook que criei afim de extrai a funçao das chamadas http para API deixando os components com um codigo mais limpo.
- `.src/interfaces` como utilizei o typescript foi preciso criar algumas tipagens que e utilizada em toda aplicação.
- `.src/providers`  fica a base URL para chamada da API
- `.src/reducers` Criei algumas actions com o Reducer para extrair algumas funções do arquivo de screens assim deixando tudo gerenciado neste arquivo podendo ser reutilizado em diferentes componentes caso precise futuramente. Reducers criados:
    - `toggleModal`: com finalidade de abrir e fechar o modal. 
    - `createPost`: com finalidade de criar um novo post. obs: Nesse reducer encontrei certa dificuldade de alinhar com a chamada http e nao consegui realizar esta action a tempo.
`.src/services` `PostService` arquivo que possui as chamadas http para API - organizados com as seguintes nomeclaturas: `getAllPosts`  `createPost`  `searchPost` `deletePost` 
    Algumas chamadas não estão sendo realizadas.
`.src/theme`: Pasta com themes um component que fica sendo visualizado globalmente com o `ThemeProvider` do react native para utilizar de forma padrão: cores, fontes e tamanhos de fontes   
