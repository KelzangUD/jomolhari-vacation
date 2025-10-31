"use client";

import DOMPurify from "isomorphic-dompurify";
import { useEffect, useState } from "react";

interface SafeHtmlRendererProps {
  htmlContent: string;
}

export function SafeHtmlRenderer({ htmlContent }: SafeHtmlRendererProps) {
  const [cleanHtml, setCleanHtml] = useState("");

  useEffect(() => {
    if (htmlContent) {
      setCleanHtml(DOMPurify.sanitize(htmlContent));
    }
  }, [htmlContent]);

  return <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
}
