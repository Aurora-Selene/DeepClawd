export function popoverPlacement(above, below, menuHeight) {
  const opensBelow = below >= menuHeight || below >= above
  return { placement: opensBelow ? 'below' : 'above', maxHeight: Math.max(0, opensBelow ? below : above) }
}
