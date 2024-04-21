
test('removeNote does nothing if id is not found', async () => {
  const notes = [
    { id: 1, content: 'note 1' },
    { id: 2, content: 'note 2' },
    { id: 3, content: 'note 3' },
  ];
  saveDB.mockResolvedValue(notes);

  const idToRemove = 4;
  const result = await removeNote(idToRemove);
  expect(result).toBeUndefined();
});