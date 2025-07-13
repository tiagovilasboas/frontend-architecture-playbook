# 🎨 Diretrizes para Evitar Bugs de Tema

## ❌ NUNCA FAÇA

- `background: 'white'` ou `backgroundColor: '#ffffff'`
- `color: 'black'` ou `color: '#000000'`
- Gradientes com cores fixas: `background: 'linear-gradient(..., #f0f0f0, #ffffff)'`
- `style={{ background: 'var(--mantine-color-brand-0)' }}` (cores específicas do tema light)

## ✅ SEMPRE USE

- `withBorder` em `Paper` e `Card` (adaptação automática)
- `variant="light"` para ícones e badges
- `c="dimmed"` para texto secundário
- `var(--mantine-color-*)` para cores dinâmicas
- Deixe o Mantine cuidar do tema automaticamente

## 💡 DICAS

- **Sempre teste no dark mode** antes de commitar
- Use `withBorder` em vez de backgrounds customizados
- Prefira `variant="light"` em vez de cores fixas
- Se precisar de gradiente, use variáveis CSS do tema
- `Paper` e `Card` já vêm com adaptação automática

## 🎨 Exemplos Práticos

### ❌ Ruim
```tsx
<Paper style={{ background: 'linear-gradient(135deg, #f0f0f0, #ffffff)' }}>
  Conteúdo
</Paper>
```

### ✅ Bom
```tsx
<Paper withBorder>
  Conteúdo
</Paper>
```

## 🔍 Checklist Antes do Commit

- [ ] Testei no tema dark?
- [ ] Testei no tema light?
- [ ] Não usei cores fixas (white, black, #fff, etc)?
- [ ] Usei `withBorder` em vez de backgrounds customizados?
- [ ] Usei `variant="light"` para ícones/badges?
- [ ] Usei `c="dimmed"` para texto secundário?

---

**Lembre-se:** O Mantine já cuida da adaptação de temas automaticamente. Deixe ele fazer o trabalho pesado! 🚀 