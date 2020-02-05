// export default function merge(target) {
//   for (let i = 1; i < arguments.length; i++) {
//     const source = arguments[i]
//     for (const key of source) {
//       const value = source[key]
//       if (value !== undefined) {
//         target[key] = value
//       }
//     }
//   }

//   return target
// }

export default function(target) {
  for (let i = 1, j = arguments.length; i < j; i++) {
    const source = arguments[i] || {};
    for (const prop in source) {
      if (source.hasOwnProperty(prop)) {
        const value = source[prop];
        if (value !== undefined) {
          target[prop] = value;
        }
      }
    }
  }

  return target;
}
