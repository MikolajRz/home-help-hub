export const seoPages = Array.from({ length: 50 }).map((_, i) => ({
  slug: `guide-${i + 1}`,
  title: `Home guide ${i + 1}`,
  description: `Useful home repair guide number ${i + 1}`,
}));