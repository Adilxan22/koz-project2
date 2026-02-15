import { useEffect, useRef, useState } from 'react';
import { Send, Check } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    product: '',
    message: '',
    terms: false,
  });

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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <section ref={sectionRef} className="py-24">
      <div className="max-w-2xl mx-auto px-6">
        <div className="animate-on-scroll opacity-0 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's power your next project
          </h2>
          <p className="text-gray-400">
            Need a quote? Want to schedule a demo? Our team is ready to help you find the right
            equipment and solutions.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="animate-on-scroll opacity-0 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <select
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="form-input"
            required
          >
            <option value="">Select Product</option>
            <option value="excavator">Excavator</option>
            <option value="dozer">Dozer</option>
            <option value="backhoe">Backhoe</option>
            <option value="other">Other</option>
          </select>

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="form-input"
            rows={5}
            required
          />

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="mt-1 w-4 h-4 rounded border-gray-600 bg-[#242424] text-[#e85d04] focus:ring-[#e85d04]"
              required
            />
            <label htmlFor="terms" className="text-sm text-gray-400">
              I accept the{' '}
              <a href="#" className="text-[#e85d04] hover:underline">
                Terms and Conditions
              </a>{' '}
              and{' '}
              <a href="#" className="text-[#e85d04] hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>

          <button
            type="submit"
            className={`btn-primary w-full justify-center text-lg py-4 ${
              isSubmitted ? 'bg-green-600 hover:bg-green-600' : ''
            }`}
          >
            {isSubmitted ? (
              <>
                <Check size={20} />
                Message Sent!
              </>
            ) : (
              <>
                <Send size={20} />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
