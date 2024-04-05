// 由于是服务端组件，dayjs库不会被打包到客户端的bundle包中
import dayjs from 'dayjs';

export default async function NoteList({ notes }){
    const arr = Object.entries(notes);
    if (arr.length === 0) {
        return <div className="notes-empty">
            {'No notes created yet!'}
        </div>
    }

    return <ul className="notes-list">
        { arr.map(([noteId, note]) => {
            const { title, updateTime } = JSON.parse(note);
            return <li key={noteId}>
                <header className="sidebar-note-header">
                    <strong>{title}</strong>
                    <small>{dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')}</small>
                </header>
            </li>
        })}
    </ul>
}