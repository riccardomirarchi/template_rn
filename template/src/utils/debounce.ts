// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const debounce = <T extends (...args: Array<any>) => void>(callback: T, waitFor: number): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>): void => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      callback(...args);
    }, waitFor);
  };
};

export default debounce;
