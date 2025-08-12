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

if(typeof window !== 'undefined' && window.process) {

  
  window.process.env = window.process.env || {}
}

export default defineNuxtPlugin((nuxtApp) => {

    const config = useRuntimeConfig();

    const $request = $fetch.create({
        baseURL: config.public.apiBase,
        /** 请求拦截器 */
        onRequest: ({ options }) => {
            const userAuth = useCookie("token");
            if (userAuth.value) {
                options.headers = options.headers ?? {};
                (options.headers as unknown as Record<string, string>).Authorization = `Bearer ${userAuth.value}`;
            }
        },
        /** 请求错误拦截器，比如服务器无法连接会触发 */
        onRequestError({ request, error }) {},
        /** 响应拦截器 */
        onResponse({ response }) {
            // 成功的状态才进行解包
            if (response.status >= 200 && response.status < 300) {
                response._data = response._data ?? null;
            }
        },
        /** 响应错误拦截器 */
        onResponseError(_context) {}
    });

    return {
        provide: {
            request: $request
        }
    };
})