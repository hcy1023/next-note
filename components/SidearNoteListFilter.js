'use client'
// 搜索结果笔记列表，用于替代搜索过程中的SidebarNoteList组件

import { useSearchParams } from "next/navigation";
import SidebarNoteContent from "@/components/SidebarNoteItemContent";

export default function SidebarNoteListFilter({ notes }) {
    const searchParams = useSearchParams();
    const searchText = searchParams.get('query');

    return (
        <ul className="notes-list">
            {notes.map(noteItem => {
                const { noteId, note, header } = noteItem;
                if (!searchText || (searchText && note.title.toLowerCase().includes(searchText.toLowerCase()))) {
                    return (
                        <SidebarNoteContent
                            key={noteId}
                            id={noteId}
                            title={note.title}
                            expandedChildren={
                                <p className="sidebar-note-excerpt">
                                    { note.content.substring(0, 20) || <i>(No Content)</i> }
                                </p>
                            }
                        >
                            { header }
                        </SidebarNoteContent>
                    )
                }

                return null;
            })}
        </ul>
    )
}