/* global use, db */

// Select the database to use.
// use('bios');

//exercicio 1, retorne o documento com o id 8
db.bios.findOne({ _id: 8 });

//exercicio 2, retorne o document id 8 apenas o id e name
db.bios.findOne({ _id: 8}, { _id: true, name: true });

//exercicio 3, retorne o document id 8 o name e birth
db.bios.findOne({ _id: 8}, { _id: false, name: true, birth: true });

//exercicio 4, retorne todos os docs onde name.first = John, com pretty()
db.bios.find({ 'name.first': 'John' }).pretty();

//exercicio 5, retorne os três primeiros documentos;
db.bios.find().limit(3);

//exercicio 6, retorne 2 documentos pulando os 5 primeiros
db.bios.find().skip(5).limit(2);

// mongoimport --db=test --collection=books --file=books.json --jsonArray

//exercicio 7, retorne a quantida de documentos
db.books.countDocuments();
db.books.find().count();

//exercicio 8, retorne o numero de livroos com a {status = 'PUBLISH' }
db.books.find({ status: 'PUBLISH'}).count();

//exercicios 9, retorne title, isbn e pageCount dos 3 primeiros.
db.books.find({}, {_id: false, title: true, isbn: true, pageCount: true }).limit(3);

//exercicios 10, retorne 10 documentos pulando 5 apenas com _id, title, authors e status
db.books.find({ status: 'MEAP'}, { title: true, authors: true, status: true }).skip(5).limit(10);



