/**
 * The MIT License (MIT)
 *
 * Copyright (c) Sandy, and other contributors.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * 程序窗口防抖函数.
 * @param fn function 
 * @param delay 延迟时间 ms.
 * @returns 回调函数.
 */
export function debounce<T extends (...args:any[])=>void>(fn: T, delay:number):(...args: Parameters<T>)=>void {
    
    let timer: NodeJS.Timeout | null = null;

    return function(...args: Parameters<T>) {
        if (timer) {
            clearTimeout(timer);
        }
        // let ctx = this;
        timer = setTimeout(() => {
            //fn.apply(ctx, args);
            fn(args);
        }, delay);
    };
}

/***
 * Deep clone object data.
 * @param obj 克隆的数据
 * @param [hash=new WeakMap()] 缓存
 */
export function deepClone<T>(obj: T, hash: WeakMap<object, any> = new WeakMap()): T {
    //处理基本类型和null
    if (typeof obj !== 'object' || obj === null) return obj;
    //处理正则以及时间
    if (obj instanceof Date) return new Date(obj) as T;
    if (obj instanceof RegExp) return new RegExp(obj) as T;
    //处理循环引用
    if (hash.has(obj)) return hash.get(obj);
    // 处理Map
    if (obj instanceof Map) {
        const mapClone = new Map();
        hash.set(obj, mapClone);
        obj.forEach((value, key) => {
            mapClone.set(deepClone(key, hash), deepClone(value, hash));
        });
        return mapClone as T;
    }
    // 处理Set
    if (obj instanceof Set) {
        const setClone = new Set();
        hash.set(obj, setClone);
        obj.forEach((value) => {
        setClone.add(deepClone(value, hash));
        });
        return setClone as T;
    }
    // 处理普通对象
    const proto = Object.getPrototypeOf(obj);
    const clone = Object.create(proto);
    hash.set(obj, clone);
    // 处理Symbol属性
    const symKeys = Object.getOwnPropertySymbols(obj);
    for (const symKey of symKeys) {
        clone[symKey] = deepClone((obj as any)[symKey], hash);
    }
    // 处理普通属性
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            clone[key] = deepClone((obj as any)[key], hash);
        }
    }
    return clone as T;
}

/**
 * 手机号正则校验
 * @param phone 手机号
 * @param phoneReg 正则字符串
 * @returns true - 校验通过 false - 校验失败
 */
export function phoneRegCheck(phone:any) {
    // 内置手机号正则字符串
    const innerPhoneReg = '^1(?:3\\d|4[4-9]|5[0-35-9]|6[67]|7[0-8]|8\\d|9\\d)\\d{8}$';
    const phoneRegExp = new RegExp(innerPhoneReg);
    return phoneRegExp.test(phone);
};