import dayjs from "dayjs";

export default function SidebarNoteItemHeader({ title, updateTime }) {
    return (
        <header className="sidebar-note-header">
            <strong>{title}</strong>
            {/*
                    在客户端组件中使用服务端组件传递的props方法，JSX 会先进行服务端组件渲染，再发送到客户端组件中
                    好处：减少包体积大小，dayjs库不会被打包
                */}
            <small>{dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')}</small>
        </header>
    )
}