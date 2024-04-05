import React from 'react';
import Link from 'next/link';
import { getAllNotes } from "@/lib/redis";
import NoteList from "@/components/SidebarNoteList";

export default async function Sidebar() {
    // 获取笔记
    const notes = await getAllNotes();
    return (
        <>
            <section className='col sidebar'>
                <Link href={'/'} className="link--unstyled">
                    <section className="sidebar-header">
                        <img
                            className="logo"
                            src="/logo.svg"
                            width="22px"
                            height="20px"
                            alt=""
                            role="presentation"
                        />
                        <strong>Next notes</strong>
                    </section>
                </Link>
                <section className="sidebar-menu" role="menubar"></section>
                <nav>
                    {/*将获取的笔记数据传入导航栏的笔记列表组件*/}
                    <NoteList notes={notes}></NoteList>
                </nav>
            </section>
        </>
    )
}