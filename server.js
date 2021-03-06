var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
        title: 'Riyasudeenkhan Artical One',
        heading: 'Article One',
        date: 'Aug 23, 2017',
        content: `
            <p>This is my first practical session and here I am creating Web Page for Artical One.This is my first practical session and here I am creating Web Page for Artical One.This is my first practical session and here I am creating Web Page for Artical One.This is my first practical session and here I am creating Web Page for Artical One.This is my first practical session and here I am creating Web Page for Artical One.This is my first practical session and here I am creating Web Page for Artical One.This is my first practical session and here I am creating Web Page for Artical One.This is my first practical session and here I am creating Web Page for Artical One.</p>
        `
    },
    'article-two': {
        title : "Riyasudeenkhan Artical Two",
        heading : "Article Two",
        date : "Aug 23, 2017",
        content : `
            <p>This is my first practical session and here I am creating Web Page for Artical Two.</p>
            <p>This is my first practical session and here I am creating Web Page for Artical Two.</p>
        `
    },
    'article-three': {
        title : "Riyasudeenkhan Artical Three",
        heading : "Article Three",
        date : "Aug 23, 2017",
        content : `
            <p>This is my first practical session and here I am creating Web Page for Artical Three.</p>
            <p>This is my first practical session and here I am creating Web Page for Artical Three.</p>
            <p>This is my first practical session and here I am creating Web Page for Artical Three.</p>
        `
    }
};

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = `
        <html>
            <head>
                <title>
                    ${title}
                </title>
                <link rel="stylesheet" href="ui/style.css"/>
            </head>
            <body>
                <div class="container">
                    <div>
                        <a href="/">Home</a>
                    </div>
                    <hr/>
                    <div>
                        <h3>${heading}</h3>
                    </div>
                    <div> 
                        ${date}
                    </div>
                    <div>
                        ${content}
                    </div>
                </div>
            </body>
        </html>
`;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function(req, res){
    counter=counter+1;
    res.send("No."+counter.toString());
});

app.get('/:articleName', function (req, res) {
    //articleName = article-one
    //articles[articleName] = {} create object for article-one
    articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
