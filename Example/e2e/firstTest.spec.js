describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  
  it('should have welcome screen', async () => {
    await expect(element(by.id('testBlock'))).toBeVisible();
  });
  
  it('should show hello screen after tap', async () => {
    await element(by.id('helloButton')).tap();
    await expect(element(by.text('Hello'))).toBeVisible();
  });
  
  it('should show world screen after tap', async () => {
    await element(by.id('worldButton')).tap();
    await expect(element(by.text('World'))).toBeVisible();
  });
})
