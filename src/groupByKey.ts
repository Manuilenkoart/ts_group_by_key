export function groupByKey<T>(items: T[], key: keyof T): Record<string, T[]> {
  const sort = [...items].sort((a: T, b: T) => {
    const valueA = a[key];
    const valueB = b[key];

    return valueA > valueB ? 0 : 1;
  });

  const grouped = sort.reduce(
    (acc, e: T) => {
      const v = String(e[key]);

      if (!acc[v]) {
        acc[v] = [];
      }
      acc[v].push(e);

      return acc;
    },
    {} as Record<string, T[]>,
  );

  return grouped;
}
