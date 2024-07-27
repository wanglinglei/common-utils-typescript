import { Project, SyntaxKind, SourceFile } from "ts-morph";
import fs from "fs";
import path from "path";
import { getAllFilePath } from "./readFile.js";

interface FunctionInfo {
  functionName: string;
  paramsType: string;
  returnType: string;
  paramsDefault: string;
  functionDesc: string;
}

interface FileInfo {
  filePath: string;
  author: string;
  description: string;
  date: string;
  lastEditTime: string;
}

interface FileMethod {
  fileInfo: FileInfo;
  functionInfoList: FunctionInfo[];
}
const packagesDir = path.join(process.cwd(), "/packages");

class Generate {
  private ignorePaths: string[] = [
    `${packagesDir}/index.ts`,
    `${packagesDir}/index.d.ts`,
  ];
  private project: Project = new Project();
  private paths: string[] = [];
  private sourceFiles: SourceFile[] = [];
  private methods: FileMethod[] = [];

  constructor() {
    this.paths = getAllFilePath(packagesDir, this.ignorePaths);
    this.project.addSourceFilesAtPaths(this.paths);
    this.sourceFiles = this.project.getSourceFiles();
    this.getFileMethods();
  }

  getFileMethods() {
    this.methods = this.sourceFiles.flatMap((sourceFile) => {
      const fileText = sourceFile.getFullText();
      const fileInfo = this.getFileInfo(fileText);
      const functions = sourceFile.getFunctions();
      const functionInfoList = functions.map((functionDecl) => {
        const paramsType = functionDecl
          .getParameters()
          .map((p) => `${p.getName()}: ${p.getType().getText()}`)
          .join(", ")
          .replace(/\|/g, "/");
        const returnType = functionDecl.getReturnTypeNode()
          ? `${functionDecl.getReturnTypeNode()?.getText()}`
          : "--";
        // @ts-ignore
        const paramsDefault =
          // @ts-ignore
          functionDecl.compilerNode.jsDoc[0].tags.find(
            // @ts-ignore
            (item) => item.tagName.escapedText === "default"
          )?.comment ?? "--";
        // @ts-ignore
        return {
          functionName: functionDecl.getName() || "",
          functionDesc:
            // @ts-ignore
            functionDecl.compilerNode.jsDoc[0].tags[0].comment.replace(":", ""),
          paramsDefault: paramsDefault.replace(":", ""),
          paramsType,
          returnType,
        };
      });
      return {
        fileInfo,
        functionInfoList,
      };
    });
  }

  getFileInfo(fileText: string) {
    // 定义正则表达式来匹配注释中的信息
    const authorRegex = /@Author: (\S+)/;
    const descriptionRegex = /@Description: (.+)/;
    const dateRegex = /@Date: (\S+)/;
    const lastEditTimeRegex = /@LastEditTime: (\S+)/;
    const filePathRegex = /@FilePath: (\S+)/;

    // 使用正则表达式提取信息
    const authorMatch = fileText.match(authorRegex);
    const descriptionMatch = fileText.match(descriptionRegex);
    const dateMatch = fileText.match(dateRegex);
    const lastEditTimeMatch = fileText.match(lastEditTimeRegex);
    const filePathMatch = fileText.match(filePathRegex);

    // 提取结果
    const author = authorMatch ? authorMatch[1] : "";
    const description = descriptionMatch ? descriptionMatch[1] : "";
    const date = dateMatch ? dateMatch[1] : "";
    const lastEditTime = lastEditTimeMatch ? lastEditTimeMatch[1] : "";
    let filePath = filePathMatch ? filePathMatch[1] : "";
    filePath = filePath.slice(
      filePath.indexOf("common-utils-typescript") +
        "common-utils-typescript".length
    );
    return { author, description, date, lastEditTime, filePath };
  }

  generateMethodContent() {
    let string = "\n### 工具函数列表";
    this.methods.forEach((item) => {
      const { fileInfo, functionInfoList } = item;
      if (!functionInfoList.length) return;
      const { author, date, description, lastEditTime, filePath } =
        fileInfo || {};
      const fileString =
        `${description ? `\n#### 	${description}` : ""}` +
        `${filePath ? `\n- file:${filePath}` : ""}` +
        `${author ? `\n- author:${author}` : ""}` +
        `${date ? `\n- createTime: ${date}` : ""}` +
        `${lastEditTime ? `\n- lastUpdateTime:${lastEditTime}` : ""}\n`;
      const contentString = ` \n | 函数名 | 函数描述|入参|默认值|返回值| \n |:----:|:----|:----|:----:|:----:|`;
      string = string + fileString + contentString;
      functionInfoList.forEach((functionItem) => {
        string += `\n|${functionItem.functionName}|${functionItem.functionDesc}|${functionItem.paramsType}|${functionItem.paramsDefault}|${functionItem.returnType}|`;
      });
      string += "\n";
    });
    string += "\n";
    return string;
  }

  generate() {
    const dirPath = path.join(process.cwd(), "/build/template.md");
    const baseFile = fs.readFileSync(dirPath, "utf8");
    fs.writeFileSync("./README.md", baseFile);
    const methodContent = this.generateMethodContent();
    fs.appendFileSync("./README.md", methodContent);
  }
}

export default Generate;
