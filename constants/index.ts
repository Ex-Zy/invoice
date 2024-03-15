export const INITIAL_ANIMATION = {
  opacity: 0,
  y: -10,
}
export const ENTER_ANIMATION = {
  opacity: 1,
  y: 0,
  transition: {
    type: 'spring',
    stiffness: 550,
    damping: 60,
    restDelta: 0.01,
    restSpeed: 10,
  },
}
