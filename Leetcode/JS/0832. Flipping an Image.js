let flipAndInvertImage = function (image) {
  for (let i = 0; i < image.length; i++) {
    image[i] = reverse(image[i]);
  }
  return image;
};

function reverse(arr) {
  return arr.map((item, index) => (arr[arr.length - index - 1] == 0 ? 1 : 0));
};

image = [[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]];

console.log(flipAndInvertImage(image)); 