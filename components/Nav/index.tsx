import Link from "next/link";
import { css } from '@emotion/css'
import FullWidthBackground from "../FullWidthBackground";

export default function Nav() {
  return (
    <FullWidthBackground
      backgroundColor="#ffeae3"
    >
      <div className={styles.navContents}>
        <ul>
          <li className={css`
            margin-right: 8px;
          `}
          >
            <h3>
              <Link href="/">Pablog</Link>
            </h3>
          </li>
          <li><Link href="https://recetario-thepalbi.vercel.app/">Recetario</Link></li>
          <li><Link href="/apps/cbu">CBU Splitter</Link></li>
        </ul>
      </div>
    </FullWidthBackground>
  );
}

const styles = {
  navContents: css`
    align-items: center;
    font-size: 20px;
    ul {
      margin-top: 0;
      margin-left: 0;
      padding-left: 0;
    }
    li {
      font-weight: 350;
      display: inline-block;
    }
    li + li {
      margin-left: 15px;
    }
    a {
      text-decoration: none;
      color: black;
    }
    li > h3 {
      font-weight: 700;
    }
  `,
}