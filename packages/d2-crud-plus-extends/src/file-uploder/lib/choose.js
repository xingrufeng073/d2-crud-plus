// import cos from './uploader/cos'
// import alioss from './uploader/alioss/alioss'
// import qiniu from './uploader/qiniu'
// let map = {
//   cos: cos,
//   alioss: alioss,
//   qiniu: qiniu
// }
export default {
  get (type) {
    return require('./uploader/' + type).default
    // return map[type]
  }
}
