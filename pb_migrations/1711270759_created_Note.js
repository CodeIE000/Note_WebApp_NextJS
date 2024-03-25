/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "p7mkcscy9kuzmg2",
    "created": "2024-03-24 08:59:19.497Z",
    "updated": "2024-03-24 08:59:19.497Z",
    "name": "Note",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "x8qxjhdj",
        "name": "Title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "hosfuuml",
        "name": "Content",
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
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("p7mkcscy9kuzmg2");

  return dao.deleteCollection(collection);
})
