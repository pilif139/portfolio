import z from "@zod/zod";
import path from "node:path";

const GITHUB_USERNAME = "pilif139";
const GITHUB_API_URL = "https://api.github.com";

const RepoSchema = z.object({
  name: z.string(),
  topics: z.array(z.string()),
});

const response = await fetch(
  `${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos`,
);
const data: unknown[] = await response.json();
const repos = data
  .map((repo) => RepoSchema.parse(repo))
  .filter(Boolean)
  .filter((repo) => repo.topics.includes("project"));

repos.forEach(async (repo) => {
  console.log(`Fetching README for ${repo.name}`);

  const readmeResponse = await fetch(
    `${GITHUB_API_URL}/repos/${GITHUB_USERNAME}/${repo.name}/readme`,
  );
  const readmeData = await readmeResponse.json();
  const readmeContent = new TextDecoder().decode(
    Uint8Array.from(atob(readmeData.content), (c) => c.charCodeAt(0)),
  );
  console.log(readmeContent);

  const outDir = path.join(
    import.meta.dirname,
    "..",
    "web",
    "src",
    "content",
    "projects",
  );
  await Deno.mkdir(outDir, { recursive: true });
  await Deno.writeFile(
    path.join(outDir, `${repo.name}.md`),
    new TextEncoder().encode(readmeContent),
  );
});
