const handDetectionModel = tf.loadModel('https://tfhub.dev/mediapipe/handpose/1/default/1');

const image = document.querySelector('#image');
const results = await handDetectionModel.estimateHands(image);

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

for (const hand of results) {
  const boundingBox = hand.boundingBox;

  ctx.strokeStyle = 'red';
  ctx.lineWidth = 2;
  ctx.strokeRect(boundingBox.topLeft[0], boundingBox.topLeft[1], boundingBox.width, boundingBox.height);
}

const indexFingertip = results[0].keypoints[8];

console.log(indexFingertip.x, indexFingertip.y);