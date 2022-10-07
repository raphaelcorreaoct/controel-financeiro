export const tyrCatch = async (fn: any) => {
  try {
    return await fn();
  } catch (e) {
    return Promise.reject(e);
  }
};
