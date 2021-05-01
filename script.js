// alert("Baaaaaaaaaaaaa! Youre on! 🎇");
// console.log("Hi there!");
const videoEl = document.getElementById("video");
const buttonEl = document.getElementById("button");

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoEl.srcObject = mediaStream;
    videoEl.onloadedmetadata = () => {
      videoEl.play();
    };
  } catch (err) {
    console.log(`Whoops, error!`, err);
  }
}
//on load
buttonEl.addEventListener("click", async () => {
  buttonEl.disabled = true;
  await videoEl.requestPictureInPicture();
  buttonEl.disabled = false;
});
selectMediaStream();
