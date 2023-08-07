function flipAndInvertImage(image: number[][]): number[][] {
  // flipAndInvertImage  -> Time { O(n), θ(n), Ω(n) } and Space { O(1), θ(1), Ω(1) }

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
