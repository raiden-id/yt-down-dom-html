function fetchData() {
  var idEl = document.getElementById("videoId");
  let vidId = idEl.textContent;

  fetch("https://returnyoutubedislikeapi.com/Votes?videoId=" + vidId, {
    headers: {
      accept: "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.getElementById("videoData").style.opacity = "1";

      // console.log(data);
      // console.log(data.dislikes);
      document.getElementById("videoData").innerHTML =
        "<br> <i class='fa fa-thumbs-up'></i>  " +
        JSON.stringify(data.likes) +
        " &nbsp; <i class='fa fa-thumbs-down'></i>  " +
        JSON.stringify(data.dislikes) +
        " &nbsp; <i class='fa fa-eye'></i>  " +
        JSON.stringify(data.viewCount) +
        " &nbsp; <i class='fa fa-star'></i>  " +
        parseFloat(data.rating).toFixed(1);

      if (data.title == "Bad Request") {
        document.getElementById("videoData").style.opacity = "0";
      }
    })
    .catch((error) => {
      console.log(Error);
    });
}

function getData() {
  var input = document.getElementById("input");
  fetch("https://api.akuari.my.id/downloader/youtube?link=" + input.value, {
    headers: {
      accept: "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.getElementById("videoId").innerHTML = data.info.videoId;
      fetchData();
      
    });
}