export interface BonusAnswers {
  projectType: string | null;
}

export interface BonusPattern {
  slug: string;
  title: string;
  description?: string;
}

export function getBonusPatterns({ projectType }: BonusAnswers): BonusPattern[] {
  const bonus: BonusPattern[] = [];
  if (projectType === 'ecommerce') {
    bonus.push({ slug: 'state-machines', title: 'State Machines' });
  }
  if (projectType === 'dashboard') {
    bonus.push({ slug: 'atomic-design', title: 'Atomic Design' });
  }
  // Sempre incluir DRY
  bonus.push({ slug: 'dry', title: 'DRY' });
  return bonus;
} 