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