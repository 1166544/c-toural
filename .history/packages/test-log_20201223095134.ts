/**
 * colorful log
 *
 * @export
 * @class TestColorFullLog
 */
export class TestColorFullLog {
    /**
 * @description 返回这个样式的颜色值
 * @param {String} type 样式名称 [ primary | success | warning | danger | text ]
 */
private typeColor (type = 'default') {
    let color = ''
    switch (type) {
      case 'default':
        color = '#303133'
        break
      case 'primary':
        color = '#409EFF'
        break
      case 'success':
        color = '#67C23A'
        break
      case 'warning':
        color = '#E6A23C'
        break
      case 'danger':
        color = '#F56C6C'
        break
      default:
        break
    }
    return color
  }
  
  /**
   * @description 打印一个 [ title | text ] 样式的信息
   * @param {String} title title text
   * @param {String} info info text
   * @param {String} type style
   */
public capsule (title, info, type = 'primary') {
    console.log(
      `%c ${title} %c ${info} %c`,
      'background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;',
      `background:${typeColor(
        type
      )}; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;`,
      'background:transparent'
    )
  }
  
  /**
   * @description 打印彩色文字
   */
  public colorful(textArr) {
    console.log(
      `%c${textArr.map(t => t.text || '').join('%c')}`,
      ...textArr.map(t => `color: ${typeColor(t.type)};`)
    )
  }
  
  public default(text) {
    log.colorful([{ text }])
  }
  
  public primary(text) {
    log.colorful([{ text, type: 'primary' }])
  }
  
  public success = function (text) {
    log.colorful([{ text, type: 'success' }])
  }
  
  public warning = function (text) {
    log.colorful([{ text, type: 'warning' }])
  }
  
  public danger = function (text) {
    log.colorful([{ text, type: 'danger' }])
  };
}
