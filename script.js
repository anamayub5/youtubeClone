var sidebar = document.querySelector(".sidebar");
var menu = document.querySelector(".menu");
var container = document.querySelector(".container");
var videoType = document.querySelectorAll(".videoType");

menu.addEventListener("click", function () {
  sidebar.classList.toggle("small-sidebar");
  container.classList.toggle("large-container");
  console.log("usama");
});

videoType.forEach(videoType => {
  videoType.addEventListener("click", function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    const parentId = e.currentTarget.closest('.video').id;
    console.log("Parent ID: ", parentId);
   
    // Redirect to the play-video.html page with the video ID as a parameter
    window.location.href = `play-video.html?videoId=${parentId}`;
  });
});
