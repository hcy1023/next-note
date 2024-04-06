/*
    文件预览组件
    marked 将markdown转换为HTML的库
    sanitize-html 清理html删除一些不良写法，比如转义特殊字符等
*/
import { marked } from "marked";
import sanitizeHtml from 'sanitize-html';

// 配置允许的HTML标记，所有其他标签将被玻璃
const allowedTags = sanitizeHtml.defaults.allowedTags.concat(['img', 'h1', 'h2', 'h3']);

// 配置允许的HTML属性，所有其他属性都将被剥离
const allowedAttributes = Object.assign({}, sanitizeHtml.defaults.allowedAttributes, {img: ['alt', 'src']});

export default function NotePreview({ children }) {
    return (
        <div className="note-preview">
            <div
                className="text-with-markdown"
                dangerouslySetInnerHTML={{
                    __html:sanitizeHtml(marked(children || ''), { allowedTags, allowedAttributes })
                }}
            ></div>
        </div>
    )
}
