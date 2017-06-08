var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request,response){

  if (request.url == '/cars'){
    fs.readFile('./views/cars.html', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-Type':'text/html'});
      response.write(contents)
      response.end()
    });
  } else if (request.url == '/cars/new'){
    fs.readFile('./views/new.html', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-Type':'text/html'});
      response.write(contents)
      response.end()
    });
  } else if (request.url == '/images/honda.jpg'){
    fs.readFile('./images/honda.jpg', function(errors, contents){
      response.writeHead(200, {'Content-Type':'image/jpg'});
      response.write(contents)
      response.end()
    });
  } else if (request.url == '/images/mazda.jpg'){
    fs.readFile('./images/mazda.jpg', function(errors, contents){
      response.writeHead(200, {'Content-Type':'image/jpg'});
      response.write(contents)
      response.end()
    });
  } else if (request.url == '/cats'){
    fs.readFile('./views/cats.html', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-Type':'text/html'});
      response.write(contents);
      response.end();
    })
  } else if (request.url == '/images/kitten.jpg'){
    fs.readFile('./images/kitten.jpg', function(errors, contents){
      response.writeHead(200, {'Content-Type':'image/jpg'});
      response.write(contents)
      response.end()
    });
  } else if (request.url == '/images/floating_cats.gif'){
    fs.readFile('./images/floating_cats.gif', function(errors, contents){
      response.writeHead(200, {'Content-Type':'image/jpg'});
      response.write(contents)
      response.end()
    });
  } else if (request.url == '/stylesheets/styles.css'){
    fs.readFile('./stylesheets/styles.css', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-Type':'text/css'});
      response.write(contents);
      response.end();
    })
  }else {
    response.end('FILE NOT FOUND!')
  }
})

server.listen(7077)
