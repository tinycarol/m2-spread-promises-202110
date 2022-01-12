// With callbacks
const masa = "pepe";

fermentarMasa(masa, (masaFermentada) => {
  const masaConForma = darForma(masaFermentada, "circulo");

  cocinar(masaConForma, 180, 40, (roscon) => {
    Carol.comer(roscon);
  });
});

Carol.trabajar(); // Runs before the dough has fermented

// Promise.then, chaining
wakeUp()
  .then(() => takeShower())
  .then(() => haveBreakfast())
  .then(() => work())
  .then(() => cookLunch())
  .then((lunch) => eatLunch(lunch))
  .then((mess) => cleanUp(mess))
  .then(() => work())
  .then(() => socialize())
  .then(() => sleep())
  .catch((e) => {
    throw new Error("eeyyyyy he petao");
  })
  .catch((e) => {});

// Best effort
downloadImage("http://...").then((img) => showImage(img)); // 1min            -> 2nd

uploadFile("~/...").then((file) => showImage(file)); // 1h                    -> 3rd

loadPage("https://www.google.com").then(() => console.log("loaded")); // 3s   -> 1st

// Sequential
downloadImage("http://...")
  .then((img) => {
    showImage(img);
    return uploadFile("~/...");
  })
  .then((file) => {
    uploadFile(file);
    return loadPage("https://www.google.com");
  })
  .then(() => console.log("loaded"));

// Parallel
Promise.all([
  downloadImage("http://..."),
  uploadFile("~/..."),
  loadPage("https://www.google.com"),
]).then(([image, file, page]) => {
  showImage(image);
  uploadFile(file);
  console.log("The page is", page);
});

const sleep = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

sleep(5000).then(() => {
  console.log("Woke up");
});

downloadFile(url).then((file) => {
  showFile(file);
});

const showFileContents = (url) => {
  try {
    const element = document.createElement("p");
    const file = await downloadFile(url);

    element.innerText = file;
  } catch (e) {
    console.error("Error downloading file :c", e);
    displayError(e);
  }
};

showFileContents("http://google.cod,dd");
console.log("I run before the file has downloaded");
