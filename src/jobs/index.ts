import wzJob from './wz';

export const stop = (): void => {
  wzJob.cancel(false);
};
