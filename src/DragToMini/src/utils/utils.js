
import _ from 'lodash';
const indexToArray = pathStr => `${pathStr}`.split('-').map(n => +n);

const getCloneItem = (index, cards) => {
  const arr = indexToArray(index);
  let result = {};
  arr.forEach(n => {
    result = cards[n];
    cards = result?.props?.children||[];
  });
  return _.cloneDeep(result);
}

const getItem = (pathIndex, cards) => {
  const arr = indexToArray(pathIndex);
  let parent;
  if (arr.length === 0) {
    return cards
  }
  arr.forEach((item, index) => {
    if (index === 0) {
      parent = cards[item]
    } else {
      parent = parent.children[item]
    }
  });
  return parent
}

const getParent = (pathIndex, cards) => {
  const arr = indexToArray(pathIndex);
  // 嵌套节点删除
  let parent;
  arr.pop()
  if (arr.length === 0) {
    return cards
  }
  arr.forEach((item, index) => {
    if (index === 0) {
      parent = cards[item]
    } else {
      parent = parent.children[item]
    }
  })
  if (parent.children) return parent.children
  return parent
}

const itemRemove = (index, cards) => {
  let parent = getParent(index, cards);
  let arr = indexToArray(index)
  let getIndex = arr.pop();
  if (Array.isArray(parent)) {
    parent.splice(getIndex, 1)
  }
  if (parent?.props?.children) {
    (parent?.props?.children||[]).splice(getIndex, 1)
  }
  return cards
}

const itemAdd = (index, cards=[], item) => {
  let parent = getParent(index, cards);
  let arr = indexToArray(index)
  let getIndex = arr.pop()
  if (parent && parent?.props?.children) {
    parent?.props?.children.splice(getIndex, 0, item)
    return cards
  }
  parent.splice(getIndex, 0, item);
  return cards.map(it=>{
    if (it) {
      return { ...it, clickCurrent: false }
    }else {
      return { ...it, clickCurrent: true }
    }
  })
}
const setInfo = (arrPath, treeData, param) => {
  const arr = indexToArray(arrPath)
  treeData = _.cloneDeep(treeData);
  treeData[arr[0]].props.children = param;
  return treeData
}

const isPath = pathIndex => {
  let result = true
  indexToArray(pathIndex).forEach(item => {
    if (isNaN(item)) {
      result = false
      return false
    }
  })

  return result
}

export { indexToArray, getParent, setInfo, isPath, getCloneItem, getItem, itemRemove, itemAdd }