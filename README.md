# Boilerplate ReactJS

Este projeto boilerplate de ReactJS

## Docker

O projeto possui três arquivos Docker para diferentes ambientes:

- `Dockerfile.dev`: Arquivo Docker para o ambiente de desenvolvimento.

Além disso, o projeto possui um arquivo `docker-compose.yml` que define a configuração do ambiente Docker.

## Instalação

1. Clone o repositório do projeto.
2. Navegue até a pasta raiz do projeto no terminal.
3. Execute o comando `npm install` para baixar e instalar as dependências do projeto. Para executar o projeto, execute `docker-compose up`.

## Estrutura de Pastas

A estrutura de pastas do projeto é organizada da seguinte forma:

```
- public/
- src/
  - mock/
  - assets/
  - configurations/
  - contexts/
  - hooks/
  - modules/
  - routes/
  - shared/
- Dockerfile.dev
- Dockerfile.prod
- Dockerfile.staging
- docker-compose.yml
- config-overrides.js
```

Aqui está uma breve descrição de cada pasta:

- `public/`: Contém os arquivos estáticos que serão servidos pela aplicação.
- `src/`: Contém todo o código-fonte do projeto.
  - `mock/`: Pasta para armazenar os arquivos de mock.
  - `assets/`: Pasta para armazenar arquivos de ativos, como imagens, ícones, etc.
  - `configurations/`: Pasta para armazenar arquivos de configuração.
  - `contexts/`: Pasta para armazenar os contextos da aplicação.
  - `hooks/`: Pasta para armazenar os hooks personalizados.
  - `modules/`: Pasta para armazenar os módulos da aplicação.
  - `routes/`: Pasta para armazenar os arquivos de roteamento.
  - `shared/`: Pasta para armazenar componentes, utilitários e recursos compartilhados.

## Configurações Importantes

### Arquivo `config-overrides.js`

O arquivo `config-overrides.js` é responsável por ajustar o alias do projeto para facilitar a importação de módulos. Aqui está o conteúdo do arquivo:

```javascript
module.exports = function override(config, env) {
  config.plugins.push(new BundleAnalyzerPlugin());
  config.resolve.alias = {
    '@mock': path.join(__dirname, '/src/mock'),
    '@assets': path.join(__dirname, '/src/assets'),
    '@configurations': path.join(__dirname, '/src/configurations'),
    '@contexts': path.join(__dirname, '/src/contexts'),
    '@hooks': path.join(__dirname, '/src/hooks'),
    '@modules': path.join(__dirname, '/src/modules'),
    '@routes': path.join(__dirname, '/src/routes'),
    '@shared': path.join(__dirname, '/src/shared'),
  };
  return config;
};
```

Este arquivo adiciona o `BundleAnalyzerPlugin` aos plugins de configuração e define os aliases para cada pasta do projeto.

### Bundle Analyzer Plugin

O projeto também utiliza o Bundle Analyzer Plugin, que é responsável por analisar o tamanho dos bundles gerados pelo Webpack. Essa análise pode ajudar a identificar dependências excessivas ou oportunidades de otimização.

### Configurações de HTTP

No arquivo `src/configurations/Http.ts`, existem configurações relacionadas ao uso do Axios e do Axios Mock Adapter em ambiente de desenvolvimento. Essas configurações definem a baseURL e o timeout da requisição HTTP, além de configurar interceptors para realizar tratamentos específicos.

### Mapeamento de Endpoints Mock

No arquivo `src/configurations/HttpMockMapper.ts`, é realizado o mapeamento dos endpoints para os respectivos mocks. Este arquivo define um objeto `HttpMockMapper` que mapeia os endpoints para os mocks correspondentes.

# Documentação de boas práticas do projeto

Este projeto está estruturado seguindo padrões do mercado e utiliza as melhores práticas do ReactJS com TypeScript. Aqui estão algumas das diretrizes de desenvolvimento e convenções a seguir:

## Convenções de Código Limpo e SOLID

### Código Limpo (Clean Code)

1. **Nomenclatura Significativa:** As variáveis, funções e classes devem ter nomes que reflitam claramente o seu propósito. Um bom nome é autoexplicativo e descritivo. É preferível ter um nome mais longo que seja claro a um nome curto que seja ambíguo.

2. **Funções Pequenas:** As funções devem ser pequenas e fazer apenas uma coisa. Elas devem ter menos de 20 linhas de código. Isso torna o código mais legível e fácil de manter.

3. **Comentários Apropriados:** Comentários devem ser usados para explicar o propósito e o funcionamento do código, mas o código deve ser autoexplicativo. Comentários excessivos ou inúteis devem ser evitados.

4. **Indentação e Formatação Consistentes:** O código deve seguir um estilo consistente de indentação e formatação. Isso torna o código mais fácil de ler e entender.

5. **Evitar Código Duplicado:** O código duplicado deve ser evitado, pois pode levar a erros e dificuldades de manutenção. Use a abstração e a modularização para evitar a duplicação.

### SOLID

1. **Princípio da Responsabilidade Única (Single Responsibility Principle):** Cada classe ou módulo deve ter apenas uma responsabilidade. Isso torna o código mais fácil de manter e de testar.

2. **Princípio do Aberto/Fechado (Open/Closed Principle):** As classes e módulos devem estar abertos para extensão, mas fechados para modificação. Isso significa que você deve ser capaz de adicionar novas funcionalidades sem alterar o código existente.

3. **Princípio da Substituição de Liskov (Liskov Substitution Principle):** As subclasses devem ser substituíveis por suas classes base sem quebrar o código. Isso garante que as subclasses mantenham o comportamento esperado da classe base.

4. **Princípio da Segregação da Interface (Interface Segregation Principle):** As classes não devem ser forçadas a depender de interfaces que não usam. Isso mantém as dependências mínimas e claras.

5. **Princípio da Inversão de Dependência (Dependency Inversion Principle):** Os módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações. Isso torna o sistema mais flexível e menos acoplado.

## Boas Práticas do ReactJS com TypeScript

1. **Componentes Funcionais:** Use componentes funcionais em vez de componentes de classe. Eles são mais fáceis de ler e testar, e você pode usar Hooks para adicionar estado e efeitos colaterais.

2. **Props e Estados Fortemente Tipados:** Use TypeScript para adicionar tipos fortes às props e ao estado. Isso fornece verificação de tipo em tempo de compilação e melhora a segurança do código.

3. **Imutabilidade:** Mantenha o estado imutável. Não modifique o estado diretamente, use a função `setState` ou o Hook `useState`.

4. **Uso de Hooks:** Utilize os Hooks oferecidos pelo React, como `useState`, `useEffect`, `useContext`, entre outros, para gerenciar o estado e o ciclo de vida dos componentes.

5. **Manuseio de Eventos:** Os eventos devem ser manuseados com funções de seta para evitar problemas com o `this`.

6. **Uso de Arquivos `.tsx`:** Use a extensão `.tsx` para os arquivos que contêm JSX. Isso permite que o TypeScript verifique o código JSX.

7. **Separar Componentes e Lógica:** Separe a lógica de negócio dos componentes visuais. Isso torna o código mais fácil de manter e testar.

## Convenções do Projeto

- Os nomes dos arquivos de componentes devem começar com uma letra maiúscula (por exemplo, `Header.tsx`).
- Os arquivos de estilo associados a um componente devem ter o mesmo nome que o componente (por exemplo, `Header.scss`).
- As funções e métodos devem ter nomes em camelCase (por exemplo, `getUserName`).
- As constantes e variáveis devem ter nomes em camelCase, a menos que sejam constantes globais, que devem ser em UPPER_SNAKE_CASE.
- As classes e interfaces devem começar com uma letra maiúscula (por exemplo, `IUser`).
- O diretório `services` é usado para armazenar a lógica relacionada à API e a outros serviços externos.
- O diretório `contexts` é usado para armazenar os Contextos do React. Cada Contexto tem seu próprio subdiretório.
- O diretório `components` contém todos os componentes compartilhados, que podem ser usados em vários lugares no aplicativo.
- O diretório `models` é usado para definir as interfaces e tipos usados em todo o aplicativo.
- Todos os módulos importantes têm seu próprio diretório, que pode conter subdiretórios para componentes, serviços e estilos.
- As rotas do aplicativo são definidas em `routes/Routing.tsx`.

##Composição

A composição é um padrão fundamental no React que nos permite criar componentes mais complexos a partir de componentes mais simples. É a maneira recomendada de reutilizar código entre componentes em React. 

Usando TypeScript com React, você ganha a capacidade de definir tipos de propriedades e estados, tornando seus componentes mais seguros e previsíveis.

### Composição Básica

Em React, a composição é tão simples quanto incluir um componente como filho de outro componente. Veja o exemplo a seguir:

```tsx
// Um componente "Filho"
const ChildComponent = () => <div>Eu sou o componente filho.</div>

// Um componente "Pai" que utiliza o "Filho"
const ParentComponent = () => <div>Eu sou o componente pai.<ChildComponent /></div>
```

Neste caso, `ChildComponent` é um componente filho de `ParentComponent`. Isso é uma forma de composição.

### Composição com Props

A composição fica mais interessante quando você começa a passar informações entre componentes através de `props`. Aqui está um exemplo:

```tsx
type ChildProps = {
  message: string;
};

// Um componente "Filho" com props
const ChildComponent = ({ message }: ChildProps) => <div>{message}</div>

// Um componente "Pai" que utiliza o "Filho"
const ParentComponent = () => <ChildComponent message="Eu sou o componente filho." />
```

Neste caso, o componente pai está passando uma `prop` chamada `message` para o componente filho.

### Composição Avançada

Você também pode usar `props.children` para obter ainda mais flexibilidade com a composição. O `props.children` permite que você passe componentes arbitrários como filhos de outro componente. Aqui está um exemplo:

```tsx
type BoxProps = {
  color: string;
  children: React.ReactNode; // Definindo o tipo de children
};

const Box = ({ color, children }: BoxProps) => (
  <div style={{ backgroundColor: color }}>
    {children}
  </div>
);

const App = () => (
  <Box color="lightblue">
    <h1>Olá, Mundo!</h1>
    <p>Bem-vindo ao meu aplicativo.</p>
  </Box>
);
```

Neste caso, `Box` é um componente genérico que aceita `children` como `props`. O componente `Box` pode ser usado para envolver qualquer conteúdo. `React.ReactNode` é o tipo apropriado para `children`, pois ele pode aceitar qualquer tipo de conteúdo renderizável em React.

### High Order Components (HOC)

HOC é uma técnica avançada para reutilizar a lógica de componentes. Um HOC é uma função que aceita um componente e retorna um novo componente com lógica adicional. Aqui está um exemplo:

```tsx
type MyComponentProps = {
  name: string;
}

const withRedBackground = (WrappedComponent: React.ComponentType<MyComponentProps>) => {
  return (props: MyComponentProps) => (
    <div style={{ backgroundColor: 'red' }}>
      <WrappedComponent {...props} />
    </div>
  );
};

const MyComponent = ({ name }: MyComponentProps) => <div>{name}</div>;

const MyComponentWithRedBackground = withRedBackground(MyComponent);

const App = () => <MyComponentWithRedBackground name="Meu Componente" />;
```

Neste exemplo, `withRedBackground` é um HOC que adiciona um fundo vermelho a qualquer componente. Note que o tipo de `WrappedComponent` é `React.ComponentType<MyComponentProps>`, que aceita tanto componentes de função quanto componentes de classe que aceitam `MyComponentProps` como `props`.

Essas são apenas algumas das maneiras de utilizar a composição em React com TypeScript. A composição permite criar componentes reutilizáveis e genéricos e separar as preocupações em seu aplicativo de maneira eficaz.
