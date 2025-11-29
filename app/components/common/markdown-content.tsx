import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownContentProps {
  content: string;
  title?: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="container-padding-x container mx-auto flex flex-initial">
      <div className="flex w-full flex-col items-center py-16">
        <div className="prose prose-pink">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
