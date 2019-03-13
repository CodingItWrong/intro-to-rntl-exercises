describe('Exercise 6', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('allows working with widgets', async () => {
    const widgetName = 'My Widget';
    const updatedWidgetName = 'My Updated Widget';

    await goToExercise6();
    await createWidget(widgetName);
    await editWidget(widgetName, updatedWidgetName);
    await deleteWidget(updatedWidgetName);
  });

  async function goToExercise6() {
    await element(by.text('Exercise 6')).tap();
  }

  async function createWidget(widgetName) {
    await element(by.id('addButton')).tap();
    await element(by.id('nameField')).typeText(widgetName);
    await element(by.id('saveButton')).tap();

    await expect(element(by.text(widgetName))).toBeVisible();
  }

  async function editWidget(oldWidgetName, newWidgetName) {
    await element(by.text(oldWidgetName)).tap();
    await element(by.id('nameField')).replaceText(newWidgetName);
    await element(by.id('saveButton')).tap();

    await expect(element(by.text(oldWidgetName))).toBeNotVisible();
    await expect(element(by.text(newWidgetName))).toBeVisible();
  }

  async function deleteWidget(widgetName) {
    await element(by.text(widgetName)).tap();
    await element(by.id('deleteButton')).tap();

    await expect(element(by.text(widgetName))).toBeNotVisible();
  }
});
