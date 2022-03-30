const fontStorageModel = {
  className: 'font-storage'
}

// [class-name, min-diameter, max-diameter, min-layer, max-layer]
const circleModel = {
  deepfaceGreenWhite: ['deepface-green-white', 10, 500, 2, 4],
  deepfaceGreenBlack: ['deepface-green-black', 10, 500, 2, 4],
  deepfaceDarkGreenWhite: ['deepface-dark-green-white', 10, 500, 2, 4],
  deepfaceDarkGreenBlack: ['deepface-dark-green-black', 10, 500, 2, 4],
  deepfaceBlack: ['deepface-black', 10, 500, 2, 4],
  circleBlack: ['circle-black', 30, 70, 1, 1],
  circleWhite: ['circle-white', 30, 70, 1, 1],
  largeCircleBlack: ['large-circle-black', 900, 1500, 1, 1],
  largeCircleWhite: ['large-circle-white', 900, 1500, 1, 1]
}

export { largeWhiteCircleModel, circleModel }
