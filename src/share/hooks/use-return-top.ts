export const useReturnTop = () => {
  const returnTop = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };

  return returnTop;
};
