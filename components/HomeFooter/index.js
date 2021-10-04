export default function HomeFooter() {
    let linkedinPtr = (
        <LinkedIcon 
            href="https://www.linkedin.com/in/plbalbi/"
            iconName="fa-linkedin"
        />);
    let githubPtr = (
        <LinkedIcon 
            href="https://github.com/thepalbi/"
            iconName="fa-github"
        />);
    return (
        <div className="mt-4 bg-code-block">
            <div className="flex flex-col justify-left w-full max-w-6xl p-4 mx-auto space-y-2 sm:flex-row sm:space-y-0">
                <span className="text-sm">Working on my Master's thesis in <a className="font-bold" href="https://lafhis.dc.uba.ar/home" target="_blank">Lafhis</a></span>
                <span className="text-sm">. Find me on {linkedinPtr} or {githubPtr}</span>
            </div>
        </div>
    );
}

function LinkedIcon({href, iconName}) {
    return (
        <a
            className="hover:underline"
            href={href}
            target="_blank"
        >
            <i className={`fab ${iconName} text-lg mx-1`}></i>
        </a>
    )
}