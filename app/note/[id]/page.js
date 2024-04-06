// 单一笔记组件
import Note from "@/components/note";
import { getNote } from "@/lib/redis";

export default async function Page( { params }){
    // 动态路由 获取笔记id
    const noteId = params.id;
    const note = await getNote(noteId);

    // Suspense效果更明显
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    await sleep(5000);

    if (note === null) {
        return (
            <div className="note--empty-state">
                <span className="note-text--empty-state">
                    Click a note on the left to view something! 🥺
                </span>
            </div>
        )
    }

    return <Note noteId={noteId} note={note} />
}
