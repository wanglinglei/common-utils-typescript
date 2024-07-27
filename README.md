<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [常用工具库](#%E5%B8%B8%E7%94%A8%E5%B7%A5%E5%85%B7%E5%BA%93)
  - [Authors](#authors)
  - [工具函数列表](#%E5%B7%A5%E5%85%B7%E5%87%BD%E6%95%B0%E5%88%97%E8%A1%A8)
    - [浏览器相关](#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%B8%E5%85%B3)
    - [数据类型相关](#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E7%9B%B8%E5%85%B3)
    - [字符串相关方法](#%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9B%B8%E5%85%B3%E6%96%B9%E6%B3%95)
    - [日期相关方法](#%E6%97%A5%E6%9C%9F%E7%9B%B8%E5%85%B3%E6%96%B9%E6%B3%95)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 常用工具库
### Authors

- [@汪令镭](https://github.com/wanglinglei/wanglinglei)
### 工具函数列表
#### 	浏览器相关
- file:/packages/browser/index.ts
- author:wanglinglei
- createTime: 2024-07-27
- lastUpdateTime:2024-07-27
 
 | 函数名 | 函数描述|入参|默认值|返回值| 
 |:----:|:----|:----|:----:|:----:|
|getUrlParams| 获取url参数|url: string|--|Record<string, string>|

#### 	数据类型相关
- file:/packages/dataType/index.ts
- author:wanglinglei
- createTime: 2024-07-24
- lastUpdateTime:2024-07-26
 
 | 函数名 | 函数描述|入参|默认值|返回值| 
 |:----:|:----|:----|:----:|:----:|
|getDataType| 获取数据类型|data: any|null|TDataType|

|isEmptyData| 判断数据是否为空|data: any|--|boolean|

#### 	字符串相关方法
- file:/packages/dataType/string.ts
- author:wanglinglei
- createTime: 2024-07-27
- lastUpdateTime:2024-07-27
 
 | 函数名 | 函数描述|入参|默认值|返回值| 
 |:----:|:----|:----|:----:|:----:|
|capitalize| 字符串首字母转大写|str: string|--|string|

|reverseString| 字符串翻转|str: string|--|string|

|randomString| 随机字符串||--|string|

|sliceStringAndEllipsis| 字符串指定位置裁剪拼接省略号|str: string, length: number|--|--|

|stringFilterHtml| 去除字符串中的HTML标签|str: string|--|--|

|trimString| 去处字符串空格|str: string, type: 1 / 2 / 3 / 4|--|string|

#### 	日期相关方法
- file:/packages/date/index.ts
- author:wanglinglei
- createTime: 2024-07-24
- lastUpdateTime:2024-07-25
 
 | 函数名 | 函数描述|入参|默认值|返回值| 
 |:----:|:----|:----|:----:|:----:|
|getWeekDay| 根据给定的日期确定星期几|time: string / number| 当前日期|string|

