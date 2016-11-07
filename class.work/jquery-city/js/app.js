// // 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// $('#first').click(first);
// $('#second').click(second);
// $('#third').click(third);
// $('#fourth').click(fourth);

// // 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

// function first(){
//   $('#bigimage').attr('src', 'img/1.jpg')
// }

// function second(){
//   $('#bigimage').attr('src', 'img/2.jpg')
// }
// function third(){
//   $('#bigimage').attr('src', 'img/3.jpg')
// }
// function fourth(){
//   $('#bigimage').attr('src', 'img/4.jpg')
// } 

$('.thumb').click(function(){
  var srcLink = $(this).attr('src')
  $('#bigimage').attr('src',srcLink)
})