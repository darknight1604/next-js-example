
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
                    // url: searchParams.imageUrl ?? "",
                    url: "https://dev-meditation.s3.ap-southeast-1.amazonaws.com/photo/2023_10_22_21_27.png",
                    width: 800,
                    height: 354,
                },
            ],
            type: type,
        },
        other: {
            ["fb:app_id"]: "1618871771955927"
        }
    }
}

export default function DetailArticle() {
    return (
        <div></div>
    );
}