export const typeOf = (res) => Object.prototype.toString.call(res).match(/\[object (.*?)\]/)[1].toLowerCase()

export const classNames = (...res) => res.reduce((s, i) => {
    switch (typeOf(i)) {
        case 'string':
            return s + (i ? ' ' + i.trim() : '')
        case 'object':
            return s + classNames.apply(this, Object.keys(i).filter((e) => !!i[e]))
        case 'function':
            return s + classNames.apply(this, [i()])
        case 'array':
            return s + classNames.apply(this, i)
        default:
            return s
    }
}, '')