import PostDetails from "../PostDetails";
import PostExcerpt from "../PostExcerpt";
import PostPreviewTitle from "../PostPreviewTitle";
import { prettyPrintDate } from "../../lib/date";

export default function PostPreview({ post }) {
    let formattedDate = prettyPrintDate(post.date);
    return (
        <div className="flex flex-col my-4 space-y-3">
            <PostPreviewTitle slug={post.slug} title={post.title} />
            <PostDetails author={post.author} date={formattedDate} />
            <PostExcerpt excerpt={post.excerpt} />
        </div>
    );
}
