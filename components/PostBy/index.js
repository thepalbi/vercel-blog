export default function PostBy({ author }) {
    return (
        <div className="flex flex-row space-x-2">
            <span>By</span>
            <a
                href="https://twitter.com/thepalbi"
                target="_blank"
                className="font-bold hover:underline"
            >
                Pablo
            </a>
        </div>
    );
}
