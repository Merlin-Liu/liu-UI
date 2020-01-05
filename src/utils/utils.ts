function extend(to: Object, from: Object): Object {
  for (const key in to) {
    to[key] = from[key]
  }

  return to
}

export function toObject(arr: any[]): Object {
  let result = {}
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i]
    val && extend(result, val)
  }

  return result
}

export function getValueByPath(object: object, prop: string = ''): any {
  const paths: Array<string> = prop.split('.')
  let current: object = object
  let result: any = null
  for (let i = 0, j = paths.length; i < j; i++) {
    const path: string = paths[i];
    if (!current) break;

    if (i === j - 1) {
      result = current[path];
      break;
    }
    current = current[path];
  }

  return result;
}
