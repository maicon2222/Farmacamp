# 🏥 Farmacamp - E-commerce de Farmácia

Um site de e-commerce completo para farmácia desenvolvido com HTML, CSS e JavaScript puro. O projeto simula uma loja virtual de medicamentos e produtos de saúde com funcionalidades modernas de e-commerce.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Executar](#como-executar)
- [Páginas do Site](#páginas-do-site)
- [Funcionalidades JavaScript](#funcionalidades-javascript)
- [Responsividade](#responsividade)
- [Contribuição](#contribuição)

## 🎯 Sobre o Projeto

O **Farmacamp** é um projeto de e-commerce focado no setor farmacêutico, oferecendo uma experiência de compra completa e intuitiva. O site inclui funcionalidades como carrinho de compras, sistema de busca, promoções especiais e design responsivo.

### Características Principais:
- 🛒 Carrinho de compras funcional
- 🔍 Sistema de busca de produtos
- 📱 Design responsivo
- ⏰ Promoções com contagem regressiva
- 🎠 Carrossel de banners automático
- 📧 Newsletter integrada

## ✨ Funcionalidades

### 🏠 Página Inicial
- **Banner Promocional**: Black Friday com contagem regressiva
- **Carrossel Automático**: 5 banners que alternam automaticamente
- **Cards de Promoções**: Destaque para produtos em oferta
- **Benefícios**: Ícones com vantagens da loja
- **Newsletter**: Cadastro para receber ofertas exclusivas
- **QR Code**: Link para download do app

### 🛍️ Página de Produtos
- **Grid de Produtos**: Layout organizado com cards
- **Filtros**: Por categoria, preço e avaliação
- **Sistema de Avaliações**: Estrelas para cada produto
- **Preços**: Exibição de preços antigos e novos
- **Tags**: Identificação de ofertas e produtos novos
- **Botão de Adicionar ao Carrinho**: Funcional para cada produto

### 🛒 Carrinho de Compras
- **Lista de Produtos**: Visualização dos itens adicionados
- **Cálculo de Preços**: Subtotal, frete e total
- **Quantidade**: Controles para alterar quantidade
- **Remoção**: Opção de remover produtos
- **Finalização**: Processo de checkout

### 📞 Página de Contato
- **Formulário de Contato**: Campos para mensagens
- **Informações da Loja**: Dados de contato
- **Localização**: Mapa da loja

### 💡 Página de Vantagens
- **Benefícios Detalhados**: Explicação das vantagens
- **Serviços**: Descrição dos serviços oferecidos

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilização moderna com Flexbox e Grid
- **JavaScript**: Funcionalidades interativas
- **Font Awesome**: Ícones profissionais
- **Google Fonts**: Tipografia otimizada

## 📁 Estrutura do Projeto

```
farmacia/
├── html/
│   ├── index.html
│   ├── produtos.html
│   ├── carrinho.html
│   ├── contato.html
│   └── vantagens.html
├── css/
│   ├── style.css
│   ├── produtos.css
│   ├── carrinho.css
│   ├── contato.css
│   └── vantagens.css
├── js/
│   └── script.js
├── img/
│   ├── baner1.png
│   ├── paracetamol.png
│   ├── dipirona.png
│   └── ... (outras imagens)
```

## 🚀 Como Executar

1. **Clone o repositório** (se aplicável):
   ```bash
   git clone [url-do-repositorio]
   cd farmacia
   ```

2. **Abra o arquivo principal**:
   - Navegue até a pasta `farmacia/farmacia/`
   - Abra o arquivo `index.html` em seu navegador

3. **Servidor Local** (recomendado):
   ```bash
   # Usando Python
   python -m http.server 8000
   
   # Usando Node.js (se tiver o http-server instalado)
   npx http-server
   
   # Usando PHP
   php -S localhost:8000
   ```

4. **Acesse no navegador**:
   ```
   http://localhost:8000
   ```

## 📄 Páginas do Site

### 1. **Página Inicial** (`index.html`)
- Banner promocional com contagem regressiva
- Carrossel automático de banners
- Cards de produtos em destaque
- Seção de benefícios da loja
- Newsletter e QR code do app

### 2. **Produtos** (`produtos.html`)
- Grid responsivo de produtos
- Sistema de filtros
- Avaliações por estrelas
- Preços com desconto
- Botões de adicionar ao carrinho

### 3. **Carrinho** (`carrinho.html`)
- Lista de produtos selecionados
- Controles de quantidade
- Cálculo automático de valores
- Opção de remoção de itens
- Processo de finalização

### 4. **Contato** (`contato.html`)
- Formulário de contato
- Informações da empresa
- Dados de localização

### 5. **Vantagens** (`vantagens.html`)
- Detalhamento dos benefícios
- Serviços oferecidos

## ⚡ Funcionalidades JavaScript

### Carrossel Automático
- Transição automática a cada 5 segundos
- Navegação manual com botões
- Loop infinito

### Contagem Regressiva
- Timer de 24 horas para promoções
- Atualização em tempo real
- Mensagem quando expira

### Sistema de Cookies
- Banner de aceitação de cookies
- Armazenamento local
- Lembrança da preferência do usuário

### Carrinho de Compras
- Adição/remoção de produtos
- Cálculo automático de valores
- Persistência de dados

## 📱 Responsividade

O site é totalmente responsivo e funciona em:
- 📱 **Mobile**: 320px - 768px
- 📱 **Tablet**: 768px - 1024px
- 💻 **Desktop**: 1024px+

### Breakpoints Utilizados:
- Mobile First approach
- Flexbox e Grid para layouts
- Media queries otimizadas
- Imagens responsivas

## 🎨 Design Features

- **Paleta de Cores**: Tons de vermelho amarelo e branco 
- **Tipografia**: Poppins (moderna e legível)
- **Ícones**: Font Awesome (profissionais)
- **Animações**: Transições suaves
- **Layout**: Clean e minimalista


### Fontes:
- **Títulos**: Poppins (Bold)
- **Corpo**: Poppins (Regular)
- **Botões**: Poppins (Medium)

## 📈 Melhorias Futuras

- [ ] Sistema de login/cadastro
- [ ] Integração com banco de dados
- [ ] Sistema de pagamento
- [ ] Área administrativa
- [ ] Sistema de avaliações
- [ ] Chat de atendimento
- [ ] App mobile
- [ ] SEO otimizado

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Maicon** - Desenvolvedor Full Stack

- 📧 Email: [maiconpinheirov3@gmail.com]
- 🔗 LinkedIn: [www.linkedin.com/in/maicon-pinheiro-]
- 🌐 Portfolio: [http://127.0.0.1:5500/index.html]

---

## 🚀 Status do Projeto

✅ **Concluído** - Projeto funcional e responsivo

**Última atualização**: Dezembro 2024
