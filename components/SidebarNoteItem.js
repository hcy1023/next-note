// 左侧导航栏中的每条笔记
import SidebarNoteItemContent from "@/components/SidebarNoteItemContent";
import SidebarNoteItemHeader from "@/components/SidebarNoteItemHeader";

export default function SidebarNoteItem({ noteId, note}) {
    const { title, content='', updateTime } = note;

    return (
        // 客户端组件
        <SidebarNoteItemContent
            id={noteId}
            title={note.title}
            expandedChildren={
                <p className="sidebar-note-excerpt">
                    {content.substring(0, 20) || <i>(No content)</i>}
                </p>
            }>
            <SidebarNoteItemHeader title={title} updateTime={updateTime} />
        </SidebarNoteItemContent>
    )
}