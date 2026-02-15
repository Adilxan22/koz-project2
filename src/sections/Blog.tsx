import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'A Comprehensive Guide to Buying an Excavator',
    excerpt:
      'This guide provides essential tips for selecting the right excavator based on your needs and budget.',
    image: '/blog1.png',
    date: 'August 3, 2025',
  },
  {
    id: 2,
    title: 'Technological Advancements in Excavators',
    excerpt:
      'Explore the latest technological advancements in excavators that are shaping the future of construction.',
    image: '/blog2.png',
    date: 'August 3, 2025',
  },
  {
    id: 3,
    title: 'Excavator Safety Protocols You Must Follow',
    excerpt:
      'This post outlines essential safety protocols for operating heavy excavators to ensure a safe work environment.',
    image: '/blog3.png',
    date: 'August 3, 2025',
  },
];

const Blog = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="blog" ref={sectionRef} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="section-title animate-on-scroll opacity-0">Insights from the ground up</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="animate-on-scroll opacity-0 bg-[#242424] rounded-3xl overflow-hidden card-hover cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="img-zoom aspect-video">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-3">{post.date}</p>
                <h3 className="text-lg font-bold mb-3 group-hover:text-[#e85d04] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center text-[#e85d04] text-sm font-medium">
                  Read More
                  <ArrowUpRight
                    size={16}
                    className="ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
