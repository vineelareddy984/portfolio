import { useState, ChangeEvent, FormEvent } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface ContactProps {
  isDarkMode: boolean;
}

export default function Contact({ isDarkMode }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simple submission wait effect
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className={`py-20 border-t ${
        isDarkMode ? 'bg-slate-950/40 border-white/5' : 'bg-slate-50/50 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className={`text-xs font-extrabold tracking-widest uppercase font-display ${
            isDarkMode ? 'text-[#FF7A00]' : 'text-emerald-700'
          }`}>
            Get In touch
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold font-display mt-2 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Contact Me
          </h2>
          <div className={`w-12 h-1 mx-auto mt-4 rounded-full ${
            isDarkMode ? 'bg-[#FF7A00]' : 'bg-emerald-600'
          }`} />
        </div>

        {/* Form and Info Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Cards Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className={`text-xl md:text-2xl font-bold font-display leading-tight ${
              isDarkMode ? 'text-white' : 'text-slate-800'
            }`}>
              Let's create something remarkable together!
            </h3>
            
            <p className={`text-xs md:text-sm leading-relaxed ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              If you have any engineering opportunities, internship roles, peer-projects, or simply want to speak about the future of Artificial Intelligence and Software Quality — drop a message!
            </p>

            {/* Structured Card Items */}
            <div className="space-y-4 pt-2">
              
              {/* Mail */}
              <div className={`p-4.5 rounded-xl border flex items-center space-x-4 ${
                isDarkMode ? 'bg-slate-900 border-white/5' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div className="w-10 h-10 rounded-lg bg-[#FF7A00]/10 text-[#FF7A00] flex items-center justify-center flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block leading-none mb-1">Email Recruiter Desk</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className={`text-xs md:text-sm font-bold truncate block hover:text-[#FF7A00] transition-colors ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className={`p-4.5 rounded-xl border flex items-center space-x-4 ${
                isDarkMode ? 'bg-slate-900 border-white/5' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div className="w-10 h-10 rounded-lg bg-[#FF7A00]/10 text-[#FF7A00] flex items-center justify-center flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block leading-none mb-1">Call direct</span>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className={`text-xs md:text-sm font-bold block hover:text-[#FF7A00] transition-colors ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Local */}
              <div className={`p-4.5 rounded-xl border flex items-center space-x-4 ${
                isDarkMode ? 'bg-slate-900 border-white/5' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div className="w-10 h-10 rounded-lg bg-[#FF7A00]/10 text-[#FF7A00] flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block leading-none mb-1">HQ Location</span>
                  <span className={`text-xs md:text-sm font-bold block ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

            </div>            {/* Clickable Channels Icons */}
            <div className="pt-4 flex flex-col space-y-4 font-sans">
              <div className="flex items-center space-x-3.5">
                <span className="text-xs text-slate-500 font-bold tracking-tight uppercase font-mono">Clickable Channels:</span>
                <div className="flex gap-2.5">
                  {/* Email Link */}
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="p-3 rounded-full border bg-white border-slate-200 text-slate-700 hover:text-[#FF7A00] hover:bg-[#FF7A00]/10 hover:border-[#FF7A00] hover:shadow-[0_0_15px_rgba(255,122,0,0.4)] transition-all cursor-pointer"
                    aria-label="Email Address Direct Link"
                  >
                    <Mail size={16} />
                  </a>

                  {/* Phone Link */}
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="p-3 rounded-full border bg-white border-slate-200 text-slate-700 hover:text-[#FF7A00] hover:bg-[#FF7A00]/10 hover:border-[#FF7A00] hover:shadow-[0_0_15px_rgba(255,122,0,0.4)] transition-all cursor-pointer"
                    aria-label="Phone Call Link"
                  >
                    <Phone size={16} />
                  </a>

                  {/* LinkedIn Link */}
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full border bg-white border-slate-200 text-slate-700 hover:text-[#FF7A00] hover:bg-[#FF7A00]/10 hover:border-[#FF7A00] hover:shadow-[0_0_15px_rgba(255,122,0,0.4)] transition-all cursor-pointer"
                    aria-label="LinkedIn profile link"
                  >
                    <Linkedin size={16} />
                  </a>

                  {/* GitHub Link */}
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full border bg-white border-slate-200 text-slate-700 hover:text-[#FF7A00] hover:bg-[#FF7A00]/10 hover:border-[#FF7A00] hover:shadow-[0_0_15px_rgba(255,122,0,0.4)] transition-all cursor-pointer"
                    aria-label="GitHub profile link"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>

              {/* Prominent LinkedIn & GitHub Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="https://www.linkedin.com/in/vineela-reddy-1270332b8"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl font-extrabold font-display text-sm bg-white border-2 border-emerald-100 text-slate-900 hover:bg-[#FF7A00]/10 hover:border-[#FF7A00] hover:shadow-[0_0_20px_rgba(255,122,0,0.45)] transition-all cursor-pointer text-center"
                >
                  <span>💼 Connect on LinkedIn</span>
                </a>

                <a
                  href="https://github.com/vineelareddy984"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl font-extrabold font-display text-sm bg-white border-2 border-emerald-100 text-slate-900 hover:bg-[#FF7A00]/10 hover:border-[#FF7A00] hover:shadow-[0_0_20px_rgba(255,122,0,0.45)] transition-all cursor-pointer text-center"
                >
                  <span>💻 View GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Input Form Card Column */}
          <div className="lg:col-span-7">
            <div className={`p-6 md:p-8 rounded-2xl border relative overflow-hidden ${
              isDarkMode ? 'glass-panel bg-slate-900/40' : 'glass-panel-light bg-white/70 shadow-lg'
            }`}>
              
              {submitStatus === 'success' ? (
                // Success State Animation Block
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center animate-bounce ${
                    isDarkMode ? 'bg-[#FF7A00]/10 text-[#FF7A00]' : 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                  }`}>
                    <CheckCircle size={32} />
                  </div>
                  <div>
                    <h4 className={`text-lg font-bold font-display ${isDarkMode ? 'text-white' : 'text-slate-950'}`}>
                      Message Transmitted Successfully!
                    </h4>
                    <p className="text-xs text-slate-500 max-w-sm mt-2 leading-relaxed">
                      Thank you for reaching out, your session package is cached. Nallamilli Vineela Reddy will receive this notification and get back to you shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className={`px-4 py-2 rounded-lg text-xs font-bold font-display cursor-pointer transition-all ${
                      isDarkMode 
                        ? 'bg-[#FF7A00]/10 text-[#FF7A00] hover:bg-[#FF7A00]/20' 
                        : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200'
                    }`}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                // Form Fields Block
                <form onSubmit={handleFormSubmit} className="space-y-4.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className={`text-xs font-bold tracking-tight uppercase ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Name</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={`w-full text-xs md:text-sm px-4 py-3 rounded-lg border font-medium focus:outline-none focus:ring-1 focus:ring-[#FF7A00]/50 ${
                          isDarkMode 
                            ? 'bg-slate-950 border-white/5 text-white placeholder-slate-600' 
                            : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                        }`}
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className={`text-xs font-bold tracking-tight uppercase ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Email</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className={`w-full text-xs md:text-sm px-4 py-3 rounded-lg border font-medium focus:outline-none focus:ring-1 focus:ring-[#FF7A00]/50 ${
                          isDarkMode 
                            ? 'bg-slate-950 border-white/5 text-white placeholder-slate-600' 
                            : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className={`text-xs font-bold tracking-tight uppercase ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Subject</label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Opportunity / Collaboration idea"
                      className={`w-full text-xs md:text-sm px-4 py-3 rounded-lg border font-medium focus:outline-none focus:ring-1 focus:ring-[#FF7A00]/50 ${
                        isDarkMode 
                          ? 'bg-slate-950 border-white/5 text-white placeholder-slate-600' 
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className={`text-xs font-bold tracking-tight uppercase ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Message / Cover Note</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write your note here..."
                      className={`w-full text-xs md:text-sm px-4 py-3 rounded-lg border font-medium focus:outline-none focus:ring-1 focus:ring-[#FF7A00]/50 resize-y min-h-[100px] ${
                        isDarkMode 
                          ? 'bg-slate-950 border-white/5 text-white placeholder-slate-600' 
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="btn-submit-contact"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center space-x-2 py-3 rounded-lg font-bold font-display text-xs bg-[#FF7A00] text-slate-950 shadow-md shadow-[#FF7A00]/15 hover:shadow-[#FF7A00]/30 hover:scale-[1.01] transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="animate-spin w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full" />
                    ) : (
                      <>
                        <Send size={13} />
                        <span>Transmit Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
