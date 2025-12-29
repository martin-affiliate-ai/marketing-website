import { Link } from "react-router";
import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import type { Route } from "./+types/post";
import { client } from "~/sanity/client";
import type { Post } from "~/sanity/types";

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

export async function loader({
  params,
}: Route.LoaderArgs): Promise<{ post: Post | null }> {
  return { post: await client.fetch<Post>(POST_QUERY, params) };
}

export default function Component({ loaderData }: Route.ComponentProps) {
  const { post } = loaderData;

  if (!post) {
    return (
      <main className="container mx-auto min-h-screen max-w-3xl p-8">
        <Link to="/" className="hover:underline">
          ← Back to posts
        </Link>
        <h1 className="text-4xl font-bold mt-8">Post not found</h1>
      </main>
    );
  }

  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link to="/" className="hover:underline">
        ← Back to posts
      </Link>
      {postImageUrl && (
        <img
          src={postImageUrl}
          alt={post.title}
          className="aspect-video rounded-xl"
          width="550"
          height="310"
        />
      )}
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
      <div className="prose">
        <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </div>
    </main>
  );
}
