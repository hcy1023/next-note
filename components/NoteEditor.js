'use client'
// 笔记编辑功能组件
import { useState } from "react";
import NotePreview from "@/components/NotePreview";
import { useFormState } from 'react-dom';
import SaveButton from "@/components/SaveButton";
import DeleteButton from "@/components//DeleteButton";
import {deleteNote, saveNote} from "../app/action";

const initialState = {message: null};

export default function NoteEditor({
    noteId, initialTitle, initialBody
}) {
    /*
        useFormState用于根据form action的结果更新表单状态
        useFormStatus用于在提交表单时显示待处理状态，需在组件中使用
    */
    const [saveState, saveFormAction] = useFormState(saveNote, initialState);
    const [delState, delFormAction] = useFormState(deleteNote, initialState);

    const [title, setTitle] = useState(initialTitle);
    const [body, setBody] = useState(initialBody);
    const isDraft = !noteId;
    
    return (
        <div className="note-editor">
            <form className="note-editor-form" autoComplete="off">
                <div className="note-editor-menu" role="menubar">
                    <input type="hidden" name="noteId" value={noteId} />
                    <SaveButton formAction={saveFormAction} />
                    <DeleteButton isDraft={isDraft} formAction={delFormAction} />
                </div>
                <div className="note-editor-menu">
                    { saveState?.message }
                </div>
                <label className="offscreen" htmlFor="note-title-input">
                    Enter a title for you note
                </label>
                <input id="note-title-input" type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label className="offscreen" htmlFor="note-body-input">
                    Enter the body for you note
                </label>
                <textarea id="note-body-input" value={body} name="body" onChange={(e) => setBody(e.target.value)}></textarea>
            </form>
            <div className="note-editor-preview">
                <div className="label label--preview" role="status">Preview</div>
                <h1 className="note-title">{title}</h1>
                {/*
                    原则：服务端组件可以导入客户端组件，客户端组件不能导入服务端组件
                    原因：服务端组件导入客户端组件，那么服务端组件就变成了客户端组件，代码会被打包到客户端bundle中
                    解决办法：将服务端组件通过props的形式传入客户端组件，使用这种方式时，服务端组件不会变成客户端组件，而是在服务端执行渲染，代码也不会被打包到客户端中

                    此处的NotePreview属于服务端组件，NoteEditor属于客户端组件
                    但在这个例子中，需要在客户端渲染markdown文件，NotePreview组件中的marked和sanitize-html就是要打包到客户端中，无法避免
                */}
                <NotePreview>{body}</NotePreview>
            </div>
        </div>
    )
}