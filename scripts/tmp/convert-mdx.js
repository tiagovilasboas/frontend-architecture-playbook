"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var mdx_1 = require("@mdx-js/mdx");
var CONTENT_DIR = path_1.default.resolve('src/content');
function walk(dir) {
    return fs_1.default.readdirSync(dir).flatMap(function (name) {
        var file = path_1.default.join(dir, name);
        return fs_1.default.statSync(file).isDirectory() ? walk(file) : file.endsWith('.mdx') ? [file] : [];
    });
}
function convertFile(mdxFile) {
    var mdxSrc = fs_1.default.readFileSync(mdxFile, 'utf8');
    var compiled = (0, mdx_1.compileSync)({ value: mdxSrc, path: mdxFile }, { outputFormat: 'program' }).value;
    var tsxPath = mdxFile.replace(/\.mdx$/, '.tsx');
    var code = "/* Auto-generated from ".concat(path_1.default.basename(mdxFile), " */\nimport { TypographyStylesProvider } from '@mantine/core';\nimport { CodeHighlight } from '@mantine/code-highlight';\nimport React from 'react';\n\n").concat(compiled, "\n\nexport default function Doc() {\n  return (\n    <TypographyStylesProvider>\n      <MDXContent components={{ pre: (props) => <CodeHighlight {...props} /> }} />\n    </TypographyStylesProvider>\n  );\n}\n");
    fs_1.default.writeFileSync(tsxPath, code);
    fs_1.default.unlinkSync(mdxFile);
    console.log('Converted', mdxFile, '→', tsxPath);
}
walk(CONTENT_DIR).forEach(convertFile);
