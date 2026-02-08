# UI/UX – Menu hambúrguer mobile

## Problemas identificados

1. **Espaçamento excessivo**  
   Drawer e Accordion (Mantine) usam padding padrão generoso; múltiplos `gap` e `margin` (Stack, Group, mb) somam e deixam o menu “arejado” demais, exigindo muito scroll.

2. **Hierarquia e densidade**  
   Títulos de seção (1. Guias, 2. Arquiteturas) e subgrupos (Fundamentais, Padrões de Design) competem visualmente; lista pouco densa para um playbook com muitos itens.

3. **Touch targets**  
   Recomendação: mínimo **44px** de altura para áreas clicáveis (Apple HIG / Material). Estava ~36–40px; ajustar para 44px sem aumentar o “ar” entre blocos.

4. **Header do Drawer**  
   Título “Menu” + padding do header ocupam espaço; pode ser mais compacto.

5. **NavLink**  
   `rightSection` vazio quando inativo ocupa espaço; no mobile basta indicador de ativo (chevron ou barra).

## Diretrizes aplicadas

- **Drawer**: header compacto (padding reduzido), body com padding uniforme e mínimo.
- **Accordion**: controles com 44px de altura, padding horizontal 12px; entre itens 2px; conteúdo do painel com 6–8px de padding.
- **Links**: min-height 44px, padding 10px 12px, full width; chevron só quando ativo.
- **Subgrupos (Arquiteturas)**: label em 12px, margem 6px abaixo do label, 4px entre links.
- **Busca**: uma linha, tamanho reduzido, margem mínima abaixo.
- **Scroll**: reduzir altura “fixa” (header + busca) para maximizar área de lista.

## Referências

- Apple HIG: Touch targets ≥ 44pt.
- Material Design 3: Minimum touch target 48dp.
- Nielsen: densidade adequada reduz scroll e acelera escolha em listas.
