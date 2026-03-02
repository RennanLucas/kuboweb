
## Restaurar animacao marquee nos trust indicators (mobile)

O marquee foi removido na ultima edicao. Vou restaura-lo com otimizacoes para evitar travamentos junto com a cena 3D Spline.

### Mudancas

**1. `src/components/HeroSection.tsx` - Restaurar marquee mobile**
- Voltar o layout de marquee com itens duplicados (2x) para loop continuo
- Manter `whitespace-nowrap` e `overflow-hidden`
- Usar a classe `animate-marquee-mobile` existente

**2. `src/index.css` - Otimizar animacao**
- Manter `translate3d` (GPU accelerated) e `will-change: transform`
- Ajustar duracao para `8s` (meio-termo entre 6s que travava e 10s que era lento)
- Adicionar `contain: layout` no container para isolar o reflow da animacao do resto da pagina

### Detalhes tecnicos

A causa do travamento era a competicao de GPU entre o marquee e o Spline 3D. Para resolver:
- O marquee so usa `translate3d` (composited layer, sem repaint)
- `contain: layout` no wrapper isola o calculo de layout
- O Spline ja tem `delayMs={3200}` entao o marquee roda sozinho nos primeiros 3s
