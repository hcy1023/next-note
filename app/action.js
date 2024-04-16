'use server'
/*
   server Action代替前后端交互的接口
   server Action必须是async函数
*/

import { redirect } from "next/navigation";
import { addNote, updateNote, delNote } from "@/lib/redis";
import { revalidatePath } from "next/cache";
import { sleep } from "@/lib/utils";

export async function saveNote(prevState,formData) {
    // 获取noteId
    const noteId = formData.get('noteId');

    const data = JSON.stringify({
        title: formData.get('title'),
        content: formData.get('body'),
        updateTime: new Date()
    })

    // 模拟请求时间
    await sleep(1000);

    if (noteId) {
        updateNote(noteId, data);
        revalidatePath('/', 'layout');
        return { message: 'Edit Success!'}
    } else {
        const res = await addNote(data);
        revalidatePath('/', 'layout');
        return { message: 'Add Success!'}
    }
}

export async function deleteNote(prevState, formData) {
    const noteId = formData.get('noteId');

    delNote(noteId);
    redirect('/');
}