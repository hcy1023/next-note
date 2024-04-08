// 搜索栏组件
'use client'

import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

function Spinner({ active = true }) {
    return (
        <div
            className={['spinner', active && 'spinner--active'].join(' ')}
            role="progressbar"
            aria-busy={active ? 'true' : 'false'}
        />
    )
}

export default function SidebarSearchField() {
    const { replace } = useRouter();
    const pathname = usePathname();

    /*
        useTransition将紧急任务和非紧急任务分开
        标记的紧急任务：更新搜索框内的输入
        sPending: 指明这个transition正在加载中(pending)
        startTransition(回调): 允许用户将回调中的任何UI更新标记为transitions
    */
    const [isPending, startTransition] = useTransition();

    function handleSearch(term) {
        const params = new URLSearchParams(window.location.search);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }

        startTransition(() => {
            replace(`${pathname}?${params.toString()}`);
        })
    }

    return (
        <div className="search" role="search">
            <label className="offscreen" htmlFor="sidebar-search-input">
                Search for a note by title
            </label>
            <input id="sidebar-search-input" placeholder="Search" type="text" onChange={(e) => handleSearch(e.target.value)} />
            <Spinner active={isPending} />
        </div>
    )
}