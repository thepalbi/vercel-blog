import { css } from "@emotion/css";
import FullWidthBackground from "../FullWidthBackground";

export default function Footer() {
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
    <FullWidthBackground
      backgroundColor="#ffeae3"
    >
      <div className={css`
        padding: 15px 0 15px 0;
      `}>
        <span className="text-sm">Working on my Masters thesis at <a className="font-bold" href="https://lafhis.dc.uba.ar/home" target="_blank">LAFHIS</a></span>
        <span className="text-sm">. Find me on {linkedinPtr} or {githubPtr}</span>
      </div>
    </FullWidthBackground>
  );
}

function LinkedIcon({ href, iconName }) {
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