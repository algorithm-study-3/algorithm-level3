function setDeep(obj, path, value) {
  const keys = path.split(".");
  let newObj = obj;

  for (let i = 0; i < keys.length; i++) {
    if (i !== keys.length - 1) {
      newObj[keys[i]] = {};
      newObj = newObj[keys[i]];
    } else {
      newObj[keys[i]] = value;
    }
  }

  return obj;
}

console.log(setDeep({ a: 0 }, "a.b.c", 3));
