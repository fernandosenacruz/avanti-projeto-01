export function resizingIsGreaterThan(breakpoint) {
  return window.matchMedia(`(min-width: ${breakpoint}px)`).matches;
}

export function resizingIsLessThan(breakpoint) {
  return window.matchMedia(`(max-width: ${breakpoint - 1}px)`).matches;
}
