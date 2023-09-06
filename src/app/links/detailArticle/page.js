"use client";

import { getDictionary } from "@/lib/utils/dictionaries";
import Image from 'next/image'
import styles from "./page.module.css"
import { useEffect, useState } from "react";

// export async function generateMetadata({ _, searchParams }, __) {
//     // Type can be 
// const whiteListType = ["article", "website", "music.song", "video.episode"];
// var type = searchParams.type ?? "article";
// if (!whiteListType.includes(type)) {
//     type = "article";
// }
//     const title = searchParams.title ?? "";
//     const description = searchParams.description ?? "";
//     return {
//         title: title,
//         description: description,
//         openGraph: {
//             title: title,
//             description: description,
//             images: [
//                 {
//                     url: searchParams.imageUrl ?? "",
//                     width: 800,
//                     height: 354,
//                 },
//             ],
//             type: type,
//         },
//     }
// }

export default function DetailArticle(props) {
    const articleId = props.searchParams["articleId"]
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
                    />
                    <p className={styles.text}>{dict.deep_link.not_found_article}</p>
                </div>}
            </div>

        );
    }
    return (
        <div>
            {dict != null && <div className={styles.main}>
                <Image
                    src="/not-support.jpg"
                    width={300}
                    height={200}
                    alt="not-support"
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