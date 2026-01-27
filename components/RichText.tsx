'use client';

import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';
import {
  JSXConvertersFunction,
  RichText as PayloadRichText,
} from '@payloadcms/richtext-lexical/react';

interface RichTextProps {
  data: SerializedEditorState | null | undefined;
  className?: string;
}

const jsxConverters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
});

export function RichText({ data, className }: RichTextProps) {
  if (!data) {
    return null;
  }

  return (
    <div className={className}>
      <PayloadRichText data={data} converters={jsxConverters} />
    </div>
  );
}
