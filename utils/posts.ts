import path from "path";
import fs from "fs";

// process.cwd(): folder gốc.
const BLOG_FOLDER = path.join(process.cwd(), "blog");

export async function getPostList() {
  return [];
}
