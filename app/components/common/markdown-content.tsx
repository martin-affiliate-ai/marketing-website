import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownContentProps {
  content: string;
  title?: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="prose prose-pink max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
