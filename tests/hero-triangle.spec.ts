import { test, expect } from '@playwright/test';

test.describe('Hero Triangle Visual Validation', () => {
  test('should match visual baseline for hero section with triangle', async ({ page }) => {
    // Navigate to home page
    await page.goto('/');

    // Wait for main content to load - look for h1 in the hero
    await page.waitForSelector('h1', { timeout: 10000 });

    // Wait a bit for any animations or lazy loading
    await page.waitForTimeout(2000);

    // Visual regression test - Playwright will compare to baseline
    // First run creates baseline, subsequent runs compare
    await expect(page).toHaveScreenshot('hero-full-page.png', {
      fullPage: true,
      maxDiffPixels: 100 // Allow small differences (fonts, anti-aliasing)
    });

    // Take hero section specific screenshot with extra padding to capture hanging triangle
    const heroSection = page.locator('section.min-h-\\[600px\\]').first();
    const boundingBox = await heroSection.boundingBox();

    if (boundingBox) {
      await expect(page).toHaveScreenshot('hero-section.png', {
        clip: {
          x: boundingBox.x,
          y: boundingBox.y,
          width: boundingBox.width,
          height: boundingBox.height + 60 // Add 60px to capture the hanging triangle
        },
        maxDiffPixels: 50
      });
    }

    console.log('Visual comparison complete!');
  });

  // Test specifically for triangle visibility and size
  test('triangle should be visible and correctly sized', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('h1', { timeout: 10000 });
    await page.waitForTimeout(2000);

    // Isolate just the triangle area for close-up comparison
    const heroSection = page.locator('section.min-h-\\[600px\\]').first();
    const boundingBox = await heroSection.boundingBox();

    if (boundingBox) {
      // Focus on bottom center where triangle should be
      const triangleX = boundingBox.x + (boundingBox.width / 2) - 80; // 80px left of center
      const triangleY = boundingBox.y + boundingBox.height - 10; // Bottom of hero

      await expect(page).toHaveScreenshot('triangle-closeup.png', {
        clip: {
          x: triangleX,
          y: triangleY,
          width: 160, // 80px on each side of center
          height: 70  // Enough to see full triangle
        }
      });
    }
  });
});
