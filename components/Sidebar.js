import React, { Suspense } from 'react';
import Link from 'next/link';

import NoteList from "@/components/SidebarNoteList";
import EditButton from "@/components/EditButton";
import NoteListSkeleton from "@/components/NoteListSkeleton";
import SidebarSearchField from "@/components/SidebarSearchField";
export default async function Sidebar() {

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
                <section className="sidebar-menu" role="menubar">
                    <SidebarSearchField />
                    <EditButton noteId={null}>New</EditButton>
                </section>
                <nav>
                    {/*
                        Suspense效果：推迟渲染某些内容，直到满足某些条件（例如数据加载完毕）
                        使用Suspense前后区别：
                        使用前：输入url地址后，等待延迟时间后，页面突然完全展现
                        使用后：输入url地址后，立即跳转页面显示骨架屏，延迟时间后开始展现内容，此时可以进行其他的交互
                        Suspense的原理是数据以一系列分块形式发送
                    */}
                    <Suspense fallback={<NoteListSkeleton />}>
                        <NoteList></NoteList>
                    </Suspense>
                </nav>
            </section>
        </>
    )
}