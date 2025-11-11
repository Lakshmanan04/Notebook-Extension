import Dexie from "dexie";

// Create Dexie Database
export const db = new Dexie("NotebookDB");

// Define Schema Version 1
db.version(1).stores({
  notebooks: "++id, name, createdAt",
  entries: "++id, notebookId, type, content, url, note, createdAt",
});
