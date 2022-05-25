import Link from "next/link";

export default function HomeHeader({ theme, handleThemeToggle }) {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-row items-center justify-between p-4">
                <div className="flex flex-row items-start">
                    <Link href="/" passHref>
                        <a className="w-8 h-8 mr-3">
                            <img
                                className="object-contain w-full h-full"
                                src={
                                    theme == "dark"
                                        ? "/assets/logo/B-light.png"
                                        : "/assets/logo/B-dark.png"
                                }
                                alt="textual Blog Logo"
                            />
                        </a>
                    </Link>
                    <p className="mr-3 uppercase text-red-50">Apps</p>
                    <Link className="capitalize hover:decoration-4" href="/apps/cbu">
                        <a>CBU Splitter</a>
                    </Link>
                    <Link className="capitalize hover:decoration-4" href="https://recetario-thepalbi.vercel.app/">
                        <a>Recetario</a>
                    </Link>
                </div>
                <div
                    className="w-8 h-8 p-2 rounded-md cursor-pointer bg-code-block"
                    onClick={handleThemeToggle}
                >
                    <img
                        className="object-contain w-full h-full"
                        src={
                            theme == "dark"
                                ? "/assets/toggle/sunny.png"
                                : "/assets/toggle/moon.png"
                        }
                        alt="sunny icon"
                    />
                </div>
            </div>
        </div>
    );
}
