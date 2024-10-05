export function isEqual(
  obj1: Record<string, unknown>,
  obj2: Record<string, unknown>
): boolean {
  // Проведение быстрой проверки на идентичность
  if (obj1 === obj2) {
    return true;
  }

  // Если объекты не одного типа, они точно не равны
  if (
    obj1 === null ||
    obj2 === null ||
    typeof obj1 !== 'object' ||
    typeof obj2 !== 'object'
  ) {
    return false;
  }

  // Получение ключей
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Сравнение количества ключей
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Сортировка ключей для последовательного сравнения
  keys1.sort();
  keys2.sort();

  // Проверка на равенство всех ключей
  for (let i = 0; i < keys1.length; i++) {
    if (keys1[i] !== keys2[i]) {
      return false;
    }
  }

  // Рекурсивное сравнение значений
  for (const key of keys1) {
    if (!isEqual((obj1 as Indexed)[key], (obj2 as Indexed)[key])) {
      return false;
    }
  }

  return true;
}

type Indexed<T = any> = {
  [key in string]: T;
};

function merge(lhs: Indexed, rhs: Indexed): Indexed {
  for (const p in rhs) {
    // eslint-disable-next-line no-prototype-builtins
    if (!rhs.hasOwnProperty(p)) {
      continue;
    }

    try {
      if (rhs[p].constructor === Object) {
        rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
      } else {
        lhs[p] = rhs[p];
      }
    } catch (e) {
      lhs[p] = rhs[p];
    }
  }

  return lhs;
}

export function setObjectValue(
  object: Indexed | unknown,
  path: string,
  value: unknown
): Indexed | unknown {
  if (typeof object !== 'object' || object === null) {
    return object;
  }

  if (typeof path !== 'string') {
    throw new Error('path must be string');
  }

  const result = path.split('.').reduceRight<Indexed>(
    (acc, key) => ({
      [key]: acc,
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value as any
  );
  return merge(object as Indexed, result);
}
