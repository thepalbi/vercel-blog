import React from "react";
import ReactMarkdown from "react-markdown";
import RemarkMathPlugin from 'remark-math';
import RehypeKatex from 'rehype-katex';
import RehypeHighlight from 'rehype-highlight';
import RehypeRaw from 'rehype-raw';
import RehypeSanitize from 'rehype-sanitize';
import 'katex/dist/katex.min.css';
import "highlight.js/styles/github.css";
import 'github-markdown-css/github-markdown-light.css';

export default function PostContent({ content }) {
  return (
    <ReactMarkdown
      className={`markdown-body`}
      rehypePlugins={[
        RehypeRaw,
        RehypeSanitize,
        RehypeHighlight,
        RehypeKatex,
      ]}
      remarkPlugins={[
        RemarkMathPlugin,
      ]}
    >
      {content}
    </ReactMarkdown>
  );
}
