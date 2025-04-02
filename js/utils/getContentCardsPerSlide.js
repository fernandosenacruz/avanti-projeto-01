export function getContentCardsPerSlide() {
  const width = window.innerWidth;
  if (width <= 768) {
    return 2;
  } else if (width <= 1278) {
    return 3;
  } else {
    return 5;
  }
}
