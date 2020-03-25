/* global _ */

const patterns = [
  { name: "images/01.jpg", nCount: 12 },
  { name: "images/02.jpg", nCount: 12 },
  { name: "images/03.jpg", nCount: 12 },
  { name: "images/04.jpg", nCount: 12 }
];
const images = _.flatMap(patterns, pattern => {
  return _.times(pattern.nCount, () => pattern.name);
});
const height = 6;
const width = 8;
const $quilt = $("#quilt");

$quilt.css({
  width: `${width * 100}px`,
  height: `${height * 100}px`
});

function generateBlock(imageUrl) {
  const rotation = Math.floor(Math.random() * 4) * 90;
  const transform = `transform: rotate(${rotation}deg)`;
  const background = `background-image: url(${imageUrl})`;
  const styles = [transform, background].join(";");
  return `<div class="square" style="${styles}"></div>`;
}

$("#generate").on("click", evt => {
  evt.preventDefault();
  $quilt.html(_.map(_.shuffle(images), generateBlock).join(""));
});
