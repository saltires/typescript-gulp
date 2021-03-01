/**
 * @author jxye
 * @date 2020/3/11
 * @Description: 判断元素是否含有某个class
 * @example: hasClass(document.getElementById('content-toc'), 'content-toc') => true或false
*/
function hasClass(element: Element, className: string): boolean {
    if (!element || !className) {
        throw new Error("arguments error");
    }
    if (element.classList.contains(className)) {
        return true;
    }
    return false;
}

/**
 * @author jxye
 * @date 2020/3/11
 * @Description: 原生js操作元素class的方法，给元素添加class，支持不定长参数
*/
function addClass(element: Element): void {
    if (!element || arguments.length <= 1) {
        throw new Error("arguments error");
    }

    let argus = Array.from ? Array.from(arguments) : Array.prototype.slice.call(arguments);

    if (element) {
        argus.splice(0, 1);
    }

    for (let i = 0; i < argus.length; i++) {
        if (!element.classList.contains(argus[i])) {
            element.classList.add(argus[i]);
        }
    }
}

/**
 * @author jxye
 * @date 2020/3/11
 * @Description: 原生js操作元素class的方法，删除元素的class，支持不定长参数
*/
function removeClass(element: Element): void {
    if (!element || arguments.length <= 1) {
        throw new Error("arguments error");
    }
    let argus = Array.from ? Array.from(arguments) : Array.prototype.slice.call(arguments);

    if (element) {
        argus.splice(0, 1);
    }
    for (let i = 0; i < argus.length; i++) {
        if (element.classList.contains(argus[i])) {
            element.classList.remove(argus[i]);
        }
    }
}

interface domInterface {
    /**
     * 判断元素是否含有某个class
     * @param element - 指定的元素
     * @param className - class 名称
     * @example hasClass(document.getElementById('content-toc'), 'content-toc') => true 或 false
     */
    hasClass: (element: Element, className: string) => boolean

    /**
     * 原生js操作元素class的方法，给元素添加class，支持不定长参数
     * @param element - 指定的元素
     */
    addClass(element: Element): void

    /**
     * 原生js操作元素class的方法，删除元素的class，支持不定长参数
     * @param element - 指定的元素
     */
    removeClass(element: Element): void
}

const dom: domInterface = {
    hasClass,
    addClass,
    removeClass,
}

export {
    dom,
    domInterface
}