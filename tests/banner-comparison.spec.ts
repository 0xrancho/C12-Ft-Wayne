import { test, expect } from '@playwright/test';

test.describe('Banner Comparison: Old vs New', () => {
  test('OLD BANNER - Current production homepage', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('h1', { timeout: 10000 });
    await page.waitForTimeout(2000);

    // Capture OLD banner (Home page with original banner)
    const heroSection = page.locator('section.min-h-\\[600px\\]').first();
    const boundingBox = await heroSection.boundingBox();

    if (boundingBox) {
      await page.screenshot({
        path: 'tests/comparison/old-banner-full-hero.png',
        clip: {
          x: boundingBox.x,
          y: boundingBox.y,
          width: boundingBox.width,
          height: boundingBox.height + 60
        }
      });
    }

    // Just the banner image area (no text)
    const bannerOnly = page.locator('section.min-h-\\[600px\\] > div').first();
    await bannerOnly.screenshot({
      path: 'tests/comparison/old-banner-only.png'
    });

    console.log('OLD banner screenshots saved');
  });

  test('NEW BANNER - Test page with new banner', async ({ page }) => {
    await page.goto('/banner-test');
    await page.waitForSelector('h1', { timeout: 10000 });
    await page.waitForTimeout(2000);

    // Capture NEW banner (Test page with new banner)
    const heroSection = page.locator('section.min-h-\\[600px\\]').first();
    const boundingBox = await heroSection.boundingBox();

    if (boundingBox) {
      await page.screenshot({
        path: 'tests/comparison/new-banner-full-hero.png',
        clip: {
          x: boundingBox.x,
          y: boundingBox.y,
          width: boundingBox.width,
          height: boundingBox.height + 60
        }
      });
    }

    // Just the banner image area (no text)
    const bannerOnly = page.locator('section.min-h-\\[600px\\] > div').first();
    await bannerOnly.screenshot({
      path: 'tests/comparison/new-banner-only.png'
    });

    console.log('NEW banner screenshots saved');
  });

  test('SIDE BY SIDE - Triangle closeup on both', async ({ page }) => {
    // OLD triangle
    await page.goto('/');
    await page.waitForSelector('h1', { timeout: 10000 });
    await page.waitForTimeout(2000);

    const oldHero = page.locator('section.min-h-\\[600px\\]').first();
    const oldBox = await oldHero.boundingBox();
    if (oldBox) {
      const triangleX = oldBox.x + (oldBox.width / 2) - 80;
      const triangleY = oldBox.y + oldBox.height - 10;
      await page.screenshot({
        path: 'tests/comparison/old-triangle-closeup.png',
        clip: {
          x: triangleX,
          y: triangleY,
          width: 160,
          height: 70
        }
      });
    }

    // NEW triangle
    await page.goto('/banner-test');
    await page.waitForSelector('h1', { timeout: 10000 });
    await page.waitForTimeout(2000);

    const newHero = page.locator('section.min-h-\\[600px\\]').first();
    const newBox = await newHero.boundingBox();
    if (newBox) {
      const triangleX = newBox.x + (newBox.width / 2) - 80;
      const triangleY = newBox.y + newBox.height - 10;
      await page.screenshot({
        path: 'tests/comparison/new-triangle-closeup.png',
        clip: {
          x: triangleX,
          y: triangleY,
          width: 160,
          height: 70
        }
      });
    }

    console.log('Triangle comparison screenshots saved');
  });
});
