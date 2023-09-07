"use client";

import { useSearchParams } from "next/navigation";
import { getDictionary } from "@/lib/utils/dictionaries";
import Image from 'next/image'
import styles from "./page.module.css"
import { useEffect, useState } from "react";

export default function Template({ children }) {
    const searchParams = useSearchParams();
    const articleId = searchParams.get("articleId");
    const [dict, setDict] = useState(null);

    useEffect(() => {
        const initLocale = async () => { return await getDictionary("vi") };
        initLocale().then((value) => {
            setDict(value);
        });
    }, [dict]);

    const _onClick = () => {
        window.location = "ozen://open/links/detailArticle/?articleId=" + articleId;
    }

    if (!articleId) {
        return (
            <div>
                {dict != null && <div className={styles.main}>
                    <Image
                        src="/403.svg"
                        width={300}
                        height={200}
                        alt="not-support"
                        placeholder="blur"
                    />
                    <p className={styles.text}>{dict.deep_link.not_found_article}</p>
                </div>}
            </div>

        );
    }
    return (
        <div>
            {children}    
            {dict != null && <div className={styles.main}>
                <Image
                    src="/ic_warning.png"
                    width={20}
                    height={20}
                    alt="not-support"
                    placeholder="blur"
                    priority
                />
                <p className={styles.text}>{dict?.deep_link.not_support_web_version}</p>
                <span style={{ textAlign: "center" }}>
                    <span className={styles.text}>{dict?.deep_link.redirect_description}</span>
                    <span style={{ color: "red" }} > {dict?.deep_link.open_application} </span>
                    <span className={styles.text}>{dict?.deep_link.redirect_description_end}</span>
                </span>
                <br />
                <button className={styles.confirmBtn} onClick={_onClick}>{dict?.deep_link.open_application}</button>
            </div >}
        </div>
    );
}