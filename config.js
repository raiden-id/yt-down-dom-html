function down() {
  document.getElementById("errormessage").style.display = "none";

  document.getElementById("loading").style.display = "flex";
  item[0].style.visibility = "hidden";
  document.getElementById("img-sample").style.display = "none";

  fetch("https://api.akuari.my.id/downloader/yt1?link=" + input.value, {
    method: "GET",
    header: {
      accept: "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.getElementById("loading").style.display = "none";
      item[0].style.visibility = "visible";
      //
     console.log(data);
      //variabel
      var thumbnails =
        "<img width='75%' height='auto' src='" + data.info.thumbnail + "'>";

      document.getElementById("video").innerHTML =
        "<h3>Video (" +
        JSON.stringify(data.urldl_video.quality).toString().replace(/"/g, "") +
        ")<br><a style='font-family:Rubik; text-decoration: none;' href=" +
        JSON.stringify(data.urldl_video.link) +
        "> Download </a></H3><span style='font-size:15px'>" +
        JSON.stringify(data.urldl_video.size).toString().replace(/"/g, "") +
        "</span>";
    //  console.log(data.urldl_audio.link);
      audiolink.innerHTML =
        "<h3>Audio" +
        "<br><a style='font-family:Rubik; text-decoration: none;' href=" +
        JSON.stringify(data.urldl_audio.link) +
        "> Download </a></H3><span style='font-size:15px'>" +
        JSON.stringify(data.urldl_audio.size).toString().replace(/"/g, "") +
        "</span>";

      gambar.innerHTML = thumbnails;
      judul.innerHTML = JSON.stringify(data.info.title)
        .toString()
        .replace(/"/g, "");
      channel.innerHTML =
        "(" +
        JSON.stringify(data.info.channel).toString().replace(/"/g, "") +
        ")";
    })
    .catch((error) => {
      // Failed to fetch
      document.getElementById("errormessage").style.display = "block";
      document.getElementById("errormessage").innerHTML =
        "Error => Masukan Link dengan benar";
      document.getElementById("loading").style.display = "none";
      document.getElementById("img-sample").style.display = "block";
    });
}