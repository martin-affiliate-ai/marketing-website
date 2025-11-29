import type { LoaderFunctionArgs, MetaFunction } from "react-router";
import { useLoaderData } from "react-router";
import { MarkdownContent } from "~/components/common/markdown-content";
import matter from "gray-matter";

export async function loader({ params }: LoaderFunctionArgs) {
  const { policy } = params;

  try {
    const module = await import(`../content/policies/${policy}.md?raw`);
    const { data, content } = matter(module.default);

    return {
      content,
      frontmatter: {
        title: data.title || "Policy",
        description: data.description,
      },
    };
  } catch (error) {
    throw new Response("Policy Not Found", { status: 404 });
  }
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return [{ title: "Policy Not Found" }];
  }

  return [
    { title: data.frontmatter.title },
    { name: "description", content: data.frontmatter.description || "" },
  ];
};

export default function PolicyPage() {
  const { content } = useLoaderData<typeof loader>();

  return <MarkdownContent content={content} />;
}
