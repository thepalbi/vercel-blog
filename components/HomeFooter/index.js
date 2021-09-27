export default function HomeFooter() {
    return (
        <div className="mt-4 bg-code-block">
            <div className="flex flex-col justify-between w-full max-w-6xl p-4 mx-auto space-y-2 sm:flex-row sm:space-y-0">
                <a
                    className="flex flex-row items-baseline space-x-1 hover:underline"
                    href="https://github.com/mudassirgithub/basic-blog"
                    target="_blank"
                >
                    <span className="text-sm">Templated forked from</span>
                    <div className="text-base font-bold">Github</div>
                </a>
            </div>
        </div>
    );
}
