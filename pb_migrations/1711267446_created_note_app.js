/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "l8dvtud1mq5mdhg",
    "created": "2024-03-24 08:04:06.044Z",
    "updated": "2024-03-24 08:04:06.044Z",
    "name": "note_app",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "2zvdb4n3",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("l8dvtud1mq5mdhg");

  return dao.deleteCollection(collection);
})
