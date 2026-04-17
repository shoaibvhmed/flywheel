import Parser from "rss-parser";
import Image from "next/image";

type Post = {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet?: string;
};

async function getPosts(): Promise<Post[]> {
  const parser = new Parser();
  const feed = await parser.parseURL(
    "https://rss.beehiiv.com/feeds/Fmb1RjnTZF.xml"
  );

  return feed.items.slice(0, 3).map((item) => ({
    title: item.title || "",
    link: item.link || "",
    pubDate: item.pubDate || "",
    contentSnippet: item.contentSnippet || "",
  }));
}

export default async function BlogPreview() {
  const posts = await getPosts();

  return (
    <section className="bg-[#F4F4F4] py-32">
      <div className="max-w-[1200px] mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-[48px] font-extrabold text-[#2E2E2E]">
          Latest trends &{" "}
          <span className="text-[#0E7C66] italic font-medium">
            insights
          </span>
        </h2>

        {/* Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-10">

          {posts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              target="_blank"
              className="bg-white rounded-2xl overflow-hidden text-left hover:-translate-y-2 transition duration-300"
            >
              {/* Placeholder image */}
              <div className="h-[200px] bg-gray-300" />

              <div className="p-6">
                <p className="text-sm text-gray-500 mb-3">
                  {new Date(post.pubDate).toLocaleDateString()}
                </p>

                <h3 className="text-lg font-bold text-[#2E2E2E] leading-snug">
                  {post.title}
                </h3>

                <p className="mt-3 text-sm text-[#4A4A4A]">
                  {post.contentSnippet?.slice(0, 120)}...
                </p>
              </div>
            </a>
          ))}

        </div>

        {/* Access Archives Button */}
        <div className="mt-16 flex justify-center">
          <a
            href="https://hackgrowth.beehiiv.com/"
            target="_blank"
            className="bg-[#FF6A2A] text-white px-10 py-4 rounded-xl font-semibold tracking-wide shadow-[6px_6px_0px_#000] hover:-translate-y-1 transition-transform duration-200"
          >
            Access Growth Notes
          </a>
        </div>
      </div>
    </section>
  );
}
