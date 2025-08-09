function setDeep(obj, path, value) {
  const keys = path.split(".");
  let current = obj;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    if (i === keys.length - 1) {
      // 마지막 키면 값 할당
      current[key] = value;
    } else {
      // 다음 단계가 없거나 객체가 아니면 빈 객체로 생성
      if (typeof current[key] !== "object" || current[key] === null) {
        current[key] = {};
      }
      current = current[key];
    }
  }

  return obj;
}

console.log(setDeep({ a: 0 }, "a.b.c", 3));
