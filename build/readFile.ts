// 获取目录下所有文件 不包含目录 同步方法
import fs from "fs";
import path from "path";

export function getAllFilePath(
  dirPath: string,
  ignoreFiles: string[] = []
): string[] {
  const files = fs.readdirSync(dirPath);
  const result: string[] = [];

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    const stats = fs.statSync(filePath);

    if (stats.isFile()) {
      if (!ignoreFiles.includes(filePath) && !filePath.endsWith(".d.ts")) {
        result.push(filePath);
      }
    } else if (stats.isDirectory()) {
      result.push(...getAllFilePath(filePath, ignoreFiles));
    }
  });

  return result;
}
