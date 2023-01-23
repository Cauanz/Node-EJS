const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
   const items = [
      {
         title: 'D',
         message: 'emais'
      },
      {
         title: 'E',
         message: 'special'
      },
      {
         title: 'M',
         message: 'astro'
      },
      {
         title: 'A',
         message: 'stro'
      },
      {
         title: 'I',
         message: 'stro'
      },
      {
         title: 'S',
         message: 'al'
      }
   ];

   const subtitle = "Uma linguagem de criação de paginas HTML usando Javascript"
   res.render("pages/index", {
      qualities: items,
      subtitle: subtitle
   });
})

app.get('/sobre', (req, res) => {
   res.render('pages/about');
})

app.listen(8080);

console.log("Server Rodando");