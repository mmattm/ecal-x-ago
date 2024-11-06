// src/utils/utils.js

/**
 * Maps a number from one range to another.
 * @param {number} value - The input value to be mapped.
 * @param {number} x1 - The lower bound of the input range.
 * @param {number} y1 - The upper bound of the input range.
 * @param {number} x2 - The lower bound of the output range.
 * @param {number} y2 - The upper bound of the output range.
 * @returns {number} - The mapped value.
 */
export function map(value, x1, y1, x2, y2) {
  return ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;
}
