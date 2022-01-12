const loadImage = async (url) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      resolve(url);
    };
    image.onerror = () => {
      reject();
    }
    image.src = url;
  });
};
