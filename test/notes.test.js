import { jest } from '@jest/globals';

jest.unstable_mockModule('../src/db.js', () => ({
  insertDB: jest.fn(),
  getDB: jest.fn(),
  saveDB: jest.fn(),
}));

const { insertDB, getDB, saveDB } = await import('../src/db.js');
const { newNote, getAllNotes, removeNote } = await import('../src/notes.js');

beforeEach(() => {
  insertDB.mockClear();
  getDB.mockClear();
  saveDB.mockClear();
})


// cheching it with grouping 
describe("checking CLI", ()=>{

     // individual test
     test('newNote inserts data and returns it', async () => {
          const note = 'Test note';
          const tags = ['tag1', 'tag2'];
          const data = {
            tags,
            content: note,
            id: Date.now(),
          };
          insertDB.mockResolvedValue(data);
        
          const result = await newNote(note, tags);
          expect(result).toEqual(data);
        });
        
        test('getAllNotes returns all notes', async () => {
          const db = {
            notes: ['note1', 'note2', 'note3']
          };
          getDB.mockResolvedValue(db);
        
          const result = await getAllNotes();
          expect(result).toEqual(db.notes);
        });
        
})