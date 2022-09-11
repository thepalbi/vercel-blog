import { css } from "@emotion/css";
import React from "react"

export default function FullWidthBackground({ backgroundColor, children }: {
  backgroundColor: string,
  children: React.ReactNode,
}) {
  return (
    <div className={css`
      background-color: ${backgroundColor};
      width: 100vw;
      position: relative;
      left: calc(-50vw + 50%);
    `}>
      <div className={css`
        max-width: 1200px;
        width: 80%;
        margin: 0 auto 0 auto;
      `}>
      {children}
      </div>
    </div>
  );
}