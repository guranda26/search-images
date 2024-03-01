const ScrollBottom = () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const height = document.documentElement.scrollHeight - windowHeight;
  return scrollTop + windowHeight >= height;
};

export default ScrollBottom;
