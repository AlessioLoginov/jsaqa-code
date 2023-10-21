let page;

describe("Github page tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/team");
  });

  afterEach(() => {
    page.close();
  });
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    //expect(title2).toEqual('GitHub: Where the world builds software · GitHub');
    expect(title2).toEqual(
      "GitHub for teams · Build like the best teams on the planet · GitHub"
    );
  }, 30000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  }, 30000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    //expect(actual).toContain("Sign up for free")
    expect(actual).toContain("Get started with Team");
  }, 30000);
});

describe("GitHub Additional Page Tests", () => {
  let page;

  beforeEach(async () => {
    page = await browser.newPage();
  });

  afterEach(() => {
    page.close();
  });

  test("Checking title on Marketplace page", async () => {
    const firstLink = await page.goto("https://github.com/marketplace");
    const title1 = await page.title();
    expect(title1).toEqual(
      "GitHub Marketplace · to improve your workflow · GitHub"
    );
  }, 30000);

  test("Checking title on Explore page", async () => {
    const firstLink = await page.goto("https://github.com/explore");
    const title1 = await page.title();
    expect(title1).toEqual("Explore GitHub · GitHub");
  }, 30000);

  test("Checking title on Codespaces page", async () => {
    const firstLink = await page.goto("https://github.com/codespaces");
    const title1 = await page.title();
    expect(title1).toEqual("Sign in to GitHub · GitHub");
  }, 30000);
});
