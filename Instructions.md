# GWDesign — Landing Page

Landing page institucional da **GWDesign**, uma agência especializada em design e desenvolvimento de landing pages de alta conversão. O projeto foi construído com foco em estética premium, performance e responsividade.

---

## Como Rodar

### Online

Clique [aqui]() para acessar o projeto.

### Localmente

- [Node.js](https://nodejs.org/) (v18 ou superior recomendado)
- npm (incluído com o Node.js)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/landingPage-EllosDesign.git
cd landingPage-EllosDesign

# Instale as dependências
npm install
```

### Compilando o Sass

O projeto usa **Sass** para gerar o CSS final. Para iniciar o compilador em modo de observação (watch), execute:

```bash
npm run sass
```

Esse comando observa alterações em `src/scss/` e gera automaticamente o CSS compilado em `src/public/css/`.

### Abrindo no Navegador

Após iniciar o Sass, basta abrir o arquivo `src/index.html` diretamente no navegador ou usar uma extensão como o **Live Server** no VS Code para atualização automática.

---

## Como Foi Feito

### Arquitetura SCSS

O projeto segue uma arquitetura modular organizada em camadas:

- **abstract/** → Define as variáveis primitivas de cor e tipografia. Os valores são consumidos pela camada de tokens.
- **base/tokens** → Mapeia as variáveis abstratas para tokens semânticos (`$bg-primary`, `$text-dark`, `$button-secondary-bg`, etc.), centralizando decisões de design.
- **components/** → Cada componente tem seu próprio arquivo parcial, isolado e reutilizável.
- **sections/** → Estilos específicos por seção, evitando acoplamento entre áreas da página.

### JavaScript

O JavaScript é organizado em módulos ES nativos:

``` cmd
src/public/js/
├── index.js              # Ponto de entrada — importa e inicializa tudo
├── accodion.js           # Lógica de abrir/fechar do FAQ
├── carrousel.js          # Carrossel da seção "Sobre"
├── toggleNavbar.js       # Menu mobile toggle
└── animations/
    ├── heroSlide.js      # Animação de entrada do hero
    ├── servicesPop.js    # Animação dos cards de serviço
    ├── mouse.js          # Cursor customizado com aura
    └── scrollReveal.js   # Animações ativadas por scroll (IntersectionObserver)
```

---

## Desenvolvedor

**Gabriel William Lopes Rodrigues**
Desenvolvedor Web Fullstack em Formação
Guarulhos-SP — 2026
