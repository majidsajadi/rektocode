// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function groupBy(array: any[], key: string) {
  return array.reduce((prev, curr) => {
    (prev[curr[key]] = prev[curr[key]] || []).push(prev);
    return prev;
  }, {});
}
