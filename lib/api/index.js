import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import yaml from 'js-yaml';

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug, fields = []) {
  const fullPath = join(postsDirectory, slug);
  const { data, content } = matter.read(fullPath, {
    engines: {
      // Avoid serializing dates in gray matter
      // https://github.com/jonschlinkert/gray-matter/issues/62#issuecomment-577628177
      yaml: s => yaml.load(s, { schema: yaml.CORE_SCHEMA })
    }
  });

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      const realSlug = slug.replace(/\.md$/, "");
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug, fields));
  return posts;
}
