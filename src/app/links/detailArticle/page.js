
export async function generateMetadata({ _, searchParams }, __) {
    const whiteListType = ["article", "website", "music.song", "video.episode"];
    var type = searchParams.type ?? "article";
    if (!whiteListType.includes(type)) {
        type = "article";
    }
    const title = searchParams.title ?? "";
    const description = searchParams.description ?? "";
    return {
        title: title,
        description: description,
        openGraph: {
            title: title,
            description: description,
            images: [
                {
                    url: searchParams.imageUrl ?? "",
                    width: 800,
                    height: 354,
                },
            ],
            type: type,
        },
    }
}

export default function DetailArticle() {
    return (
        <div></div>
    );
}