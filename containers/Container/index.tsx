import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { css } from "@emotion/css";
import metaData from "../../lib/data";
import MetaHead from "../../components/MetaHead";
import FullWidthBackground from "../../components/FullWidthBackground";

interface Props {
  title?: string,
  children: React.ReactNode,
}

export default function Container({ title, children }: Props) {
  return (
    <div className={css`
      max-width: 1200px;
      width: 80%;
      margin: 0 auto 0 auto;
    `}>
      <Nav />
      {title && (
        <div className={css`
          position: relative;
          top: -20px;
        `}>
          <FullWidthBackground
            backgroundColor="#332f2d"
          >
            <h3 className={styles.titleContents}>
              {title}
            </h3>
          </FullWidthBackground>
        </div>
      )}
      <MetaHead
        title={metaData.title}
        description={metaData.description}
        url={metaData.url}
        image={metaData.image}
      />
      {children}
      <Footer />
    </div>
  );
}

const styles = {
  titleContents: css`
    padding: 12px 0 12px 0;

    // Text contents
    color: white;
    font-weight: 300;
    letter-spacing: 1px;
  `
};