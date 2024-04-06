// 左侧导航栏中的每条笔记
import dayjs from 'dayjs';
import SidebarNoteItemContent from "@/components/SidebarNoteItemContent";
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
            <header className="sidebar-note-header">
                <strong>{title}</strong>
                {/*
                    在客户端组件中使用服务端组件传递的props方法，JSX 会先进行服务端组件渲染，再发送到客户端组件中
                    好处：减少包体积大小，dayjs库不会被打包
                */}
                <small>{dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')}</small>
            </header>
        </SidebarNoteItemContent>
    )
}