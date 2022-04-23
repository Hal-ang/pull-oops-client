export const getContentHeight = (
  currentWidth: number,
  design: { width: number; height: number }
) => (design.height * currentWidth) / design.width;

export const animationTimeout = 2000;
