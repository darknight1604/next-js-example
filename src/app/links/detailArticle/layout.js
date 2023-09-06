'use client'

import { useSearchParams } from 'next/navigation'

export default function RootLayout({ children }) {
    const searchParams = useSearchParams()

    const title = searchParams.get('title') ?? ""
    var type = searchParams.get('type') ?? "article"
    const imageUrl = searchParams.get('imageUrl') ?? ""
    const description = searchParams.get('description') ?? ""

    const whiteListType = ["article", "website", "music.song", "video.episode"];
    if (!whiteListType.includes(type)) {
        type = "article";
    }
    return (
        <html lang="en">
            <head>
                <title>{title}</title>
                <meta name="type" property="og:type" content={type}></meta>
                <meta name="title" property="og:title" content={title}></meta>
                <meta name="image" property="og:image" content={imageUrl}></meta>
                <meta property="og:image:width" content="800"></meta>
                <meta property="og:image:height" content="354"></meta>
                <meta name="description" property="og:description" content={description} />
            </head>
            <body>{children}</body>
        </html>
    )
}