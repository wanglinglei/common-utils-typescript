## 常用工具库
## Authors

- [@汪令镭](https://github.com/wanglinglei/wanglinglei)
### 工具函数列表
#### 	浏览器相关
#### file:/packages/browser/index.ts
#### author:wanglinglei
#### createTime: 2024-07-27
#### lastUpdateTime:2024-07-27 
 | 函数名 | 函数描述|入参|默认值|返回值| 
 |:----:|:----|:----|:----:|:----:|
|getUrlParams| 获取url参数|url: string|--|Record<string, string>|
#### 	数据类型相关
#### file:/packages/dataType/index.ts
#### author:wanglinglei
#### createTime: 2024-07-24
#### lastUpdateTime:2024-07-26 
 | 函数名 | 函数描述|入参|默认值|返回值| 
 |:----:|:----|:----|:----:|:----:|
|getDataType| 获取数据类型|data: any|null|TDataType|
|isEmptyData| 判断数据是否为空|data: any|--|boolean|
#### file:/packages/dataType/string.ts
#### author:wanglinglei
#### createTime: 2024-07-27
#### lastUpdateTime:2024-07-27 
 | 函数名 | 函数描述|入参|默认值|返回值| 
 |:----:|:----|:----|:----:|:----:|
|capitalize| 字符串首字母转大写|str: string|--|string|
|reverseString| 字符串翻转|str: string|--|string|
|randomString| 随机字符串||--|string|
|sliceStringAndEllipsis| 字符串指定位置裁剪拼接省略号|str: string, length: number|--|--|
|stringFilterHtml| 去除字符串中的HTML标签|str: string|--|--|
|trimString| 去处字符串空格|str: string, type: 1 / 2 / 3 / 4|--|string|
#### 	日期相关方法
#### file:/packages/date/index.ts
#### author:wanglinglei
#### createTime: 2024-07-24
#### lastUpdateTime:2024-07-25 
 | 函数名 | 函数描述|入参|默认值|返回值| 
 |:----:|:----|:----|:----:|:----:|
|getWeekDay| 根据给定的日期确定星期几|time: string / number| 当前日期|string|
