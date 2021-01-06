/**
 * @author vivek21-coder
 *
 * */

/**
 * Mix two colors (in 3-array form) in some proportion
 * @param color_1 First color
 * @param color_2 Second color
 * @param proportion percentage of color_2  with respect to color_1
 *
 * */
const mix_two_colors = (color_1, color_2, proportion) => [
  Math.floor(color_1[0] * (1 - proportion) + color_2[0] * proportion),
  Math.floor(color_1[1] * (1 - proportion) + color_2[1] * proportion),
  Math.floor(color_1[2] * (1 - proportion) + color_2[2] * proportion),
];
export default mix_two_colors;
