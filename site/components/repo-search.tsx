'use client';

import { Search } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function RepoSearch({ placeholder }: { placeholder: string }) {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    function handleSearch(term: string) {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }

    return(
        <section className="repo-search">
            <div className="section-text">
                <h2>Search Repositories</h2>
                <p>When searching a repository, please don&apos;t include spaces. This is due to Github not allowing spaces in their naming policy. I use dashes in place of spaces when naming repositories.</p>
            </div>
            <div className="search-wrapper">
                <input placeholder={placeholder}
                className="search-bar" 
                defaultValue={searchParams.get('query')?.toString()}
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                />
                <Search strokeWidth={1.5}/>
            </div>
        </section>
    );
}