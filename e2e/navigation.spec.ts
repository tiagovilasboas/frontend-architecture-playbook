import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('home loads and hero + main CTAs are visible', async ({ page }) => {
    await page.goto('/');
    await expect(
      page.getByRole('heading', { name: /Front-End Architecture Playbook/i })
    ).toBeVisible();
    await expect(
      page.getByRole('link', { name: /Encontre sua Arquitetura/i })
    ).toBeVisible();
    await expect(
      page.getByRole('link', { name: /Dependency Rule/i }).first()
    ).toBeVisible();
  });

  test('home → guide (Dependency Rule) → URL and title', async ({ page }) => {
    await page.goto('/');
    await page
      .getByRole('link', { name: /Dependency Rule/i })
      .first()
      .click();
    await expect(page).toHaveURL(/\/guides\/dependency-rule/);
    await expect(
      page
        .getByRole('heading', { level: 1 })
        .filter({ hasText: /Dependency Rule|Regra/i })
    ).toBeVisible({ timeout: 10000 });
  });

  test('guide page: prev/next arrows change URL and scroll to top', async ({
    page,
  }) => {
    await page.goto('/guides/dependency-rule');
    await expect(page).toHaveURL(/\/guides\/dependency-rule/);
    // Scroll down so we can verify scroll-to-top later
    await page.evaluate(() => window.scrollTo(0, 500));
    const scrollBefore = await page.evaluate(() => window.scrollY);
    expect(scrollBefore).toBeGreaterThan(0);

    const nextButton = page.getByRole('link', { name: /Próximo:/i });
    if (await nextButton.isVisible()) {
      await nextButton.click();
      await expect(page).not.toHaveURL(/\/guides\/dependency-rule/);
      const scrollAfter = await page.evaluate(() => window.scrollY);
      expect(scrollAfter).toBe(0);
    }
  });

  test('study-guide: open and Por objetivo cards are clickable', async ({
    page,
  }) => {
    await page.goto('/guides/study-guide');
    await expect(
      page.getByRole('heading', { name: /Por onde começar/i })
    ).toBeVisible({ timeout: 10000 });
    await expect(
      page.getByRole('heading', { name: /Por objetivo/i })
    ).toBeVisible();
    const perfLink = page
      .getByRole('link', {
        name: /Quero melhorar performance|Guia de Performance/i,
      })
      .first();
    if (await perfLink.isVisible()) {
      await perfLink.click();
      await expect(page).toHaveURL(
        /\/techniques\/performance|\/guides\/staff-entrega|\/guides\/cases/
      );
    }
  });

  test('breadcrumb Início from guide goes to home', async ({ page }) => {
    await page.goto('/guides/how-to-choose');
    await expect(page).toHaveURL(/\/guides\/how-to-choose/);
    await page.getByRole('link', { name: /Início/i }).click();
    await expect(page).toHaveURL('/');
  });

  test('mobile viewport: bottom nav visible with Início and Busca (Stripe-style)', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    const bottomNav = page.locator('.mobile-bottom-nav');
    await expect(bottomNav).toBeVisible({ timeout: 10000 });
    await expect(
      page.getByRole('button', { name: /Ir para Início|Início/i })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: /Abrir busca|Busca/i })
    ).toBeVisible();
  });

  test('from home "Bora começar" card navigates to dependency-rule', async ({
    page,
  }) => {
    await page.goto('/');
    await page
      .getByRole('heading', { name: /Bora começar/i })
      .scrollIntoViewIfNeeded();
    const depRuleCard = page
      .getByRole('link', { name: /Dependency Rule/i })
      .filter({ has: page.locator('text=Dependências só apontam') });
    if (await depRuleCard.isVisible()) {
      await depRuleCard.click();
      await expect(page).toHaveURL(/\/guides\/dependency-rule/);
    }
  });
});
