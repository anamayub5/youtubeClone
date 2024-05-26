var sidebar = document.querySelector(".sidebar");
var menu = document.querySelector(".menu");

menu.addEventListener("click", function () {
  sidebar.classList.toggle("hidden-sidebar");
  // sidebar.classList.remove("hidden-sidebar")

  //   container.classList.toggle("large-container");
  console.log("usama");
});


// chatgpt url get 
function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Get the video ID from the URL
const videoId = getParameterByName('videoId');
console.log("Video ID: ", videoId);

// Use the video ID to change the video source
const videoPlayer = document.getElementById('videoPlayer');
if(videoId=="pehli"){
  videoPlayer.src = 'videos/pehliDafa.mp4';
}else{
  videoPlayer.src = 'videos/video.mp4';
}
    
  