// example request using ajax get.
// $.get('data/condensed_data.json', function(data){
//   for (var i = 0; i < data.data.length; i++) {
//     var element = document.createElement("div");
//     var inner = document.createTextNode(data.data[i].author);
//     element.appendChild(inner);
//     document.getElementById('demo').appendChild(element);
//   }
// });

// Example using the Non JQuery AJAX XMLHttpRequest;
// var req = new XMLHttpRequest();
// req.open('GET', 'data/condensed_data.json', true);
// req.send();
// req.onreadystatechange = function (){
//   if (req.readyState === XMLHttpRequest.DONE) {
//     console.log('typeof req.response',typeof req.response);
//     var data = JSON.parse(req.response)
//     console.log(data);
//     for (var i = 0; i < data.data.length; i++) {
//       var element = document.createElement("div");
//       var inner = document.createTextNode(data.data[i].author);
//       element.appendChild(inner);
//       document.getElementById('demo').appendChild(element);
//     }
//   }
// }
window.onload = function () {
  var req = new XMLHttpRequest();
  req.open('GET', 'data/condensed_data.json', true);
  req.send();
  req.onreadystatechange = function (){
    if (req.readyState === XMLHttpRequest.DONE) {
      var data = JSON.parse(req.response)
      window.reddit_feed = data;

      startProcess();
    }
  }
  var time = document.querySelectorAll('.time')
  for (var i = 0; i < time.length; i++) {
    var unixTime = time[i].innerHTML;
    time[i].innerHTML = moment.unix(unixTime);
  }

}
//ALL CODE HERE:
function startProcess(){
  for(i = 0; i < window.reddit_feed.data.length; i++){
    var currentArticle = window.reddit_feed.data[i];
    console.log(currentArticle.title);
    var thumbnailLink = currentArticle.thumbnail
    var author = currentArticle.author
    var titles = currentArticle.title
    var bodies = currentArticle.body
    var times = currentArticle.created
    //Create HTML elements in memory
    var container = document.createElement('div');
    container.className = "col-sm-12 col-sm-4";

    var post = document.createElement('div');
    post.className = "post";

    document.getElementById('main').appendChild(post);

    var link = document.createElement('a');
    link.href = "javascript.void(0)";
    
    var thumbnail = document.createElement('div');
    thumbnail.className = "thumbnail";
    var img = document.createElement('img');
    img.src = thumbnailLink;
    thumbnail.appendChild(img);
    link.appendChild(thumbnail);

    var author2 = document.createElement('div');
    author2.className = "author";
    author2.innerHTML = author;
    link.appendChild(author2);

    var title = document.createElement('div');
    title.className = "title";
    title.innerHTML = titles;
    link.appendChild(title)

    var body = document.createElement('div');
    body.className = "body";
    body.innerHTML = bodies;
    link.appendChild(body)

    var time = document.createElement('div');
    time.className = "time";
    time.innerHTML = times;
    link.appendChild(time)
    
    container.appendChild(link);
    console.log(container);

    


    document.getElementById('main').appendChild(container);
}
}


































