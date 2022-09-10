import Link from "next/link";
import { css } from '@emotion/css'

export default function HomeHeader({ theme, handleThemeToggle }) {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-row items-center justify-between p-4">
        <div className={`flex flex-row items-start ${css`
          align-items: center;
        `}`}>
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
          <div className={css`
            li {
              display: inline-block;
            }
            li + li {
              margin-left: 10px;
            }
            align-items: center;
          `}>
            <ul>
              <li><Link href="https://recetario-thepalbi.vercel.app/">Recetario</Link></li>
              <li><Link href="/apps/cbu">CBU Splitter</Link></li>
            </ul>
          </div>
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
