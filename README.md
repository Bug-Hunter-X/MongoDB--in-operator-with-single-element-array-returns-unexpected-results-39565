# MongoDB $in Operator with Single-Element Array

This repository demonstrates an uncommon error when using the `$in` operator in MongoDB queries with arrays containing only one element.

## The Bug

The provided `bug.js` file shows how using `$in` with a single-element array can lead to unexpected behavior.  The query may fail to find the document even if the field value matches the element in the array.

## The Solution

The `bugSolution.js` file demonstrates the correct usage, showing that the query works as expected when the query is constructed properly.

## How to Reproduce

1. Clone the repository.
2. Ensure MongoDB is running.
3. Populate the specified collection with a sample document.
4. Run `bug.js` to observe the unexpected behavior.
5. Run `bugSolution.js` to observe the expected behavior.
