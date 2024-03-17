function treeMaker(arr, current = null) {
  let result = {};
  let children = arr.filter((el) => el.parentId === current);

  if (children.length === 0) {
    return [];
  }

  result.id = current;
  result.child = children.map((child) => treeMaker(arr, child.id));

  return result;
}
