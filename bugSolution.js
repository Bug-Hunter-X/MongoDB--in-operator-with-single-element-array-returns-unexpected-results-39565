```javascript
// Correct usage of $in operator even with an array containing a single element
db.collection.find({ field: { $in: ["value"] } }); 
//Alternative - direct comparison is simpler and more efficient in the single value case
db.collection.find({ field: "value" });
```