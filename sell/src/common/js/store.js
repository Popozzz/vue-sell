export function saveToLocal(id, key, value) {
  let seller = window.localStorage._seller_
  if (!seller) {
    seller = {}
    seller[id] = {}
    seller[id][key] = value
  } else {
    seller = JSON.parse(seller)
    if (!seller[id]) {
      seller[id] = {}
    }
  }
  seller[id][key] = value
  localStorage._seller_ = JSON.stringify(seller)
}

export function loadFromLocal(id, key, def) {
  let seller = window.localStorage._seller_
  if (!seller) { // 本地商家存储是否为空？
    return def
  }
  seller = JSON.parse(seller)[id]
  if (!seller) { // 本地存储中id为XXX的商家是否存在？
    return def
  }
  let ret = seller[key]
  return ret || def // 本地存储中某商家的某属性是否存在
}
