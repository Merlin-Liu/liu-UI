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
