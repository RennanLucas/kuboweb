# Kubo Web — Auditoria antes do redesign / 23-10-2026

## 1. O que deixava o site com aparência amadora ou antiga
- Linguagem visual sem uma hierarquia forte e própria da Kubo.
- Excesso de cards, pills, bordas arredondadas e pequenos painéis com aparência de template SaaS.
- Seções demais tentando provar a mesma ideia, reduzindo impacto e espaço em branco.
- Hero anterior mais preocupado em parecer tecnológico do que em comunicar a proposta comercial.
- Portfólio público indexado ainda exibia cases genéricos e métricas não verificadas; isso é incompatível com a regra de prova real e deve desaparecer da nova versão.
- Mistura de padrões visuais e excesso de elementos explicativos diminuíam a sensação de agência consolidada.

## 2. Problemas de UX
- Navegação não refletia diretamente Início, Serviços, Projetos, Processo, Sobre e Contato.
- Muitas seções aumentavam o esforço para chegar a projetos, serviços e contato.
- Interações decorativas competiam com CTAs.
- Componentes concebidos como dashboards eram densos demais no mobile.
- Dependência de serviços externos de screenshot precisa ser tratada como risco de confiabilidade/performance.

## 3. Problemas de hierarquia
- Vários títulos e componentes tinham peso visual semelhante.
- Prova real não era consistentemente mais importante que explicações sobre processo/design.
- Repetição de labels, chips e microcards fragmentava a leitura.
- Pricing parecia configurador de SaaS em vez de conversa de investimento em serviço profissional.

## 4. Seções removidas da Home
- Agency Statement antigo.
- Studio Showcase antigo.
- Stack Rail de tecnologias.
- Comparação interativa antiga com excesso de UI.
- Blocos redundantes que repetiam direção, tecnologia e qualidade sem adicionar prova.

## 5. Seções refeitas
- Header: arquitetura de navegação e CTA Solicitar orçamento.
- Hero: headline comercial específica + projetos reais como composição principal.
- Prova de confiança: somente princípios reais, sem números inventados.
- Serviços: índice editorial, sem grade de cards idênticos.
- Portfólio: Helena Ávila e Cristiano Ávila como trabalhos publicados reais.
- Diferenciais: design, performance, responsividade, SEO, conversão e pós-publicação em formato editorial.
- Processo: timeline limpa, sem dashboard decorativo.
- Comparação: tabela editorial Site comum vs abordagem Kubo, sem atacar concorrentes.
- Preços: apresentação de investimento, preservando valores reais.
- CTA final: composição editorial direta para orçamento/WhatsApp.

## 6. O que permanece
- Marca Kubo Web e BrandMark.
- Projetos reais Helena Ávila e Cristiano Ávila.
- Serviços e preços reais.
- WhatsApp e canais reais.
- SEO técnico, sitemap, 404 real, tracking e estrutura de rotas.
- React/Vite e base técnica existente quando não prejudica performance.

## Design system do redesign
- Base: branco/off-white + azul-noite #05070B/#08111F.
- Accent: azul frio #2458D8 / #91B5FF usado com moderação.
- Tipografia: uma família principal limpa com display em peso semibold; mono/uppercase apenas em micro-labels.
- Radius: predominância de 0–16px; pills reservadas a botões/controles; mockups podem usar raio maior.
- Grid: container máximo ~1380–1460px; composições assimétricas; divisores sutis em vez de cards.
- Motion: opacity/translate/scale leves; sem loops decorativos; reduced-motion deve ser respeitado.
- Espaçamento: seções 96–176px desktop, reduzidas conscientemente no mobile.
- Botões: CTA primário sólido e secundário discreto; estados hover com deslocamento mínimo.

## Checklist antes de produção
- Build e lint sem erro bloqueante.
- Revisão visual desktop e mobile em páginas principais e secundárias.
- Conferir overflow horizontal, menu, CTAs, mockups e ordem de conteúdo em telas pequenas.
- Conferir imagens, lazy loading e dependências externas.
- Validar SEO, sitemap, 404 e tracking preservados.
- Garantir que nenhum case, métrica, depoimento, prêmio ou cliente não verificável permaneça.
- Só promover para produção depois do preview revisado.
