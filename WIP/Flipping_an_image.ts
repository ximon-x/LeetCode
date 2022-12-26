function flipAndInvertImage(image: number[][]): number[][] {
  for (let pixel of image) {
    pixel.reverse();
    for (let i = 0; i < pixel.length; i++) {
      if (pixel[i] === 0) {
        pixel[i] = 1;
      } else {
        pixel[i] = 0;
      }
    }
  }

  return image;
}
