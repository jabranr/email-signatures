import { useState } from 'react';
import { Feather, Copy, Info, X, Moon, Sun } from 'lucide-react';

export default function EmailSignatureGenerator() {
  const params = new URLSearchParams(window.location.search);
  const [name, setName] = useState(params.get('name') || '');
  const [title, setTitle] = useState(params.get('title') || '');
  const [phone, setPhone] = useState(params.get('phone') || '');
  const [logoUrl, setLogoUrl] = useState(params.get('logo') || '');
  const [github, setGithub] = useState(params.get('github') || '');
  const [linkedin, setLinkedin] = useState(params.get('linkedin') || '');
  const [facebook, setFacebook] = useState(params.get('facebook') || '');
  const [twitter, setTwitter] = useState(params.get('twitter') || '');
  const [instagram, setInstagram] = useState(params.get('instagram') || '');
  const [company, setCompany] = useState(params.get('company') || '');
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const generateSignatureHTML = () => {
    const contactInfo = phone ? phone : '';
    const defaultLogo =
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22120%22%20height%3D%2240%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20120%2040%22%20preserveAspectRatio%3D%22none%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%20%20%20%20%20%20%20%20%20%20%23holder%20text%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20fill%3A%20%23888%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-family%3A%20sans-serif%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%2014px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-weight%3A%20800%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%3C%2Fstyle%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Cg%20id%3D%22holder%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23eee%22%3E%3C%2Frect%3E%0A%20%20%20%20%20%20%20%20%3Cg%3E%0A%20%20%20%20%20%20%20%20%20%20%3Ctext%20text-anchor%3D%22middle%22%20x%3D%2250%25%22%20y%3D%2250%25%22%20dy%3D%22.3em%22%3ECompany%20Logo%3C%2Ftext%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fsvg%3E';

    // Social media links with SVG icons
    const socials = [];
    if (github) {
      socials.push(
        `<a href="https://github.com/${github.replace('@', '')}" style="display: inline-block; margin-right: 8px; text-decoration: none;"><svg width="20" height="20" viewBox="0 0 24 24" fill="#6b7280"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>`
      );
    }
    if (linkedin) {
      socials.push(
        `<a href="https://linkedin.com/in/${linkedin.replace('@', '')}" style="display: inline-block; margin-right: 8px; text-decoration: none;"><svg width="20" height="20" viewBox="0 0 24 24" fill="#6b7280"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>`
      );
    }
    if (facebook) {
      socials.push(
        `<a href="https://facebook.com/${facebook.replace('@', '')}" style="display: inline-block; margin-right: 8px; text-decoration: none;"><svg width="20" height="20" viewBox="0 0 24 24" fill="#6b7280"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg></a>`
      );
    }
    if (twitter) {
      socials.push(
        `<a href="https://x.com/${twitter.replace('@', '')}" style="display: inline-block; margin-right: 8px; text-decoration: none;"><svg width="20" height="20" viewBox="0 0 24 24" fill="#6b7280"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>`
      );
    }
    if (instagram) {
      socials.push(
        `<a href="https://instagram.com/${instagram.replace('@', '')}" style="display: inline-block; margin-right: 8px; text-decoration: none;"><svg width="20" height="20" viewBox="0 0 24 24" fill="#6b7280"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>`
      );
    }

    return `<table cellpadding="0" cellspacing="0" border="0" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; line-height: 1.5; color: #1f2937;">
  <tr>
    <td style="padding-bottom: 12px;">
      <img src="${logoUrl || defaultLogo}" alt="Company Logo" width="120" height="40" style="display: block; border: 0;" />
    </td>
  </tr>
  <tr>
    <td style="padding-bottom: 4px;">
      <strong style="font-size: 16px; color: ${darkMode ? '#eee' : '#1f2937'};">${name || 'Your Name'}</strong>
    </td>
  </tr>
  <tr>
    <td style="padding-bottom: 8px; color: ${darkMode ? '#9ca3af' : '#6b7280'};">
      ${title || 'Your Title'} | ${company || 'Example Company'}
    </td>
  </tr>
  ${
    contactInfo
      ? `<tr>
    <td style="color: ${darkMode ? '#9ca3af' : '#6b7280'}; font-size: 13px; padding-bottom: 8px;">
      ${contactInfo}
    </td>
  </tr>`
      : ''
  }
  ${
    socials.length > 0
      ? `<tr>
    <td style="padding-top: 4px">
      ${socials.join('')}
    </td>
  </tr>`
      : ''
  }
</table>`;
  };

  const copySignature = async () => {
    const html = generateSignatureHTML();
    try {
      await navigator.clipboard.write([
        new ClipboardItem({
          'text/html': new Blob([html], { type: 'text/html' }),
          'text/plain': new Blob([html], { type: 'text/plain' })
        })
      ]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-linear-to-br from-amber-50 via-orange-50 to-rose-50'}`}
    >
      <div
        className={`max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8 opacity-100 translate-y-0 transition-all duration-700`}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-3">
            <h1
              className={`flex items-center text-3xl sm:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}
            >
              <Feather className="h-10 w-auto mr-2" />
              Email Signature Generator
            </h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${darkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          <p
            className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
          >
            Create a professional signature in seconds
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <div
            className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-6 sm:p-8`}
          >
            <h2
              className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}
            >
              Your Information
            </h2>

            <div className="space-y-4">
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-orange-400'
                    } focus:outline-none focus:ring-2 focus:ring-offset-0 ${darkMode ? 'focus:ring-indigo-400/20' : 'focus:ring-orange-400/20'}`}
                  />
                  {name && (
                    <button
                      onClick={() => setName('')}
                      className={`absolute right-3 top-1/2 -translate-y-1/2 ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Title
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Senior Designer"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-orange-400'
                    } focus:outline-none focus:ring-2 focus:ring-offset-0 ${darkMode ? 'focus:ring-indigo-400/20' : 'focus:ring-orange-400/20'}`}
                  />
                  {title && (
                    <button
                      onClick={() => setTitle('')}
                      className={`absolute right-3 top-1/2 -translate-y-1/2 ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Phone
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+447900000000"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-orange-400'
                    } focus:outline-none focus:ring-2 focus:ring-offset-0 ${darkMode ? 'focus:ring-indigo-400/20' : 'focus:ring-orange-400/20'}`}
                  />
                  {phone && (
                    <button
                      onClick={() => setPhone('')}
                      className={`absolute right-3 top-1/2 -translate-y-1/2 ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Company
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company Name"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-orange-400'
                    } focus:outline-none focus:ring-2 focus:ring-offset-0 ${darkMode ? 'focus:ring-indigo-400/20' : 'focus:ring-orange-400/20'}`}
                  />
                  {company && (
                    <button
                      onClick={() => setCompany('')}
                      className={`absolute right-3 top-1/2 -translate-y-1/2 ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Logo URL
                </label>
                <div className="relative">
                  <input
                    type="url"
                    value={logoUrl}
                    onChange={(e) => setLogoUrl(e.target.value)}
                    placeholder="https://example.com/logo.png"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-orange-400'
                    } focus:outline-none focus:ring-2 focus:ring-offset-0 ${darkMode ? 'focus:ring-indigo-400/20' : 'focus:ring-orange-400/20'}`}
                  />
                  {logoUrl && (
                    <button
                      onClick={() => setLogoUrl('')}
                      className={`absolute right-3 top-1/2 -translate-y-1/2 ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Social Links
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <div className="relative">
                    <input
                      type="text"
                      value={github}
                      onChange={(e) => setGithub(e.target.value)}
                      placeholder="GitHub"
                      className={`w-full px-3 py-2 rounded-lg border transition-colors text-sm ${
                        darkMode
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-400'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-orange-400'
                      } focus:outline-none focus:ring-2 focus:ring-offset-0 ${darkMode ? 'focus:ring-indigo-400/20' : 'focus:ring-orange-400/20'}`}
                    />
                    {github && (
                      <button
                        onClick={() => setGithub('')}
                        className={`absolute right-2 top-1/2 -translate-y-1/2 ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      value={linkedin}
                      onChange={(e) => setLinkedin(e.target.value)}
                      placeholder="LinkedIn"
                      className={`w-full px-3 py-2 rounded-lg border transition-colors text-sm ${
                        darkMode
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-400'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-orange-400'
                      } focus:outline-none focus:ring-2 focus:ring-offset-0 ${darkMode ? 'focus:ring-indigo-400/20' : 'focus:ring-orange-400/20'}`}
                    />
                    {linkedin && (
                      <button
                        onClick={() => setLinkedin('')}
                        className={`absolute right-2 top-1/2 -translate-y-1/2 ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      value={facebook}
                      onChange={(e) => setFacebook(e.target.value)}
                      placeholder="Facebook"
                      className={`w-full px-3 py-2 rounded-lg border transition-colors text-sm ${
                        darkMode
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-400'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-orange-400'
                      } focus:outline-none focus:ring-2 focus:ring-offset-0 ${darkMode ? 'focus:ring-indigo-400/20' : 'focus:ring-orange-400/20'}`}
                    />
                    {facebook && (
                      <button
                        onClick={() => setFacebook('')}
                        className={`absolute right-2 top-1/2 -translate-y-1/2 ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      value={twitter}
                      onChange={(e) => setTwitter(e.target.value)}
                      placeholder="X/Twitter"
                      className={`w-full px-3 py-2 rounded-lg border transition-colors text-sm ${
                        darkMode
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-400'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-orange-400'
                      } focus:outline-none focus:ring-2 focus:ring-offset-0 ${darkMode ? 'focus:ring-indigo-400/20' : 'focus:ring-orange-400/20'}`}
                    />
                    {twitter && (
                      <button
                        onClick={() => setTwitter('')}
                        className={`absolute right-2 top-1/2 -translate-y-1/2 ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      value={instagram}
                      onChange={(e) => setInstagram(e.target.value)}
                      placeholder="Instagram"
                      className={`w-full px-3 py-2 rounded-lg border transition-colors text-sm ${
                        darkMode
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-400'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-orange-400'
                      } focus:outline-none focus:ring-2 focus:ring-offset-0 ${darkMode ? 'focus:ring-indigo-400/20' : 'focus:ring-orange-400/20'}`}
                    />
                    {instagram && (
                      <button
                        onClick={() => setInstagram('')}
                        className={`absolute right-2 top-1/2 -translate-y-1/2 ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <button
                onClick={copySignature}
                className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  darkMode
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    : 'bg-linear-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white shadow-lg hover:shadow-xl'
                }`}
              >
                <Copy size={18} />
                {copied ? 'Copied!' : 'Copy Signature'}
              </button>
              <button
                onClick={() => setShowModal(true)}
                className={`px-4 py-3 rounded-lg transition-colors ${
                  darkMode
                    ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                <Info size={18} />
              </button>
            </div>
          </div>

          {/* Preview */}
          <div
            className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-6 sm:p-8`}
          >
            <h2
              className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}
            >
              Preview
            </h2>
            <div
              className={`p-6 rounded-lg border-2 border-dashed ${darkMode ? 'border-gray-600 bg-gray-900' : 'border-gray-200 bg-gray-50'}`}
            >
              <div
                dangerouslySetInnerHTML={{ __html: generateSignatureHTML() }}
              />
            </div>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowModal(false)}
          >
            <div
              className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3
                  className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}
                >
                  How to Import
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className={`${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4
                    className={`font-semibold text-lg mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}
                  >
                    Gmail
                  </h4>
                  <ol
                    className={`list-decimal list-inside space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                  >
                    <li>Click "Copy Signature" above</li>
                    <li>Open Gmail Settings → See all settings</li>
                    <li>Scroll to "Signature" section</li>
                    <li>Click "+ Create new"</li>
                    <li>Press Ctrl+V (Cmd+V on Mac) to paste</li>
                    <li>Scroll down and click "Save Changes"</li>
                  </ol>
                </div>

                <div>
                  <h4
                    className={`font-semibold text-lg mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}
                  >
                    macOS Mail
                  </h4>
                  <ol
                    className={`list-decimal list-inside space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                  >
                    <li>Click "Copy Signature" above</li>
                    <li>Open Mail → Settings → Signatures</li>
                    <li>Click "+" to create new signature</li>
                    <li>Press Cmd+V to paste</li>
                    <li>Close Settings to save</li>
                  </ol>
                </div>

                <div>
                  <h4
                    className={`font-semibold text-lg mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}
                  >
                    iOS Mail
                  </h4>
                  <ol
                    className={`list-decimal list-inside space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                  >
                    <li>Click "Copy Signature" above</li>
                    <li>Go to Settings → Mail → Signature</li>
                    <li>Tap and hold in signature field</li>
                    <li>Tap "Paste"</li>
                    <li>Exit Settings to save</li>
                  </ol>
                </div>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className={`w-full mt-6 px-6 py-3 rounded-lg font-medium transition-colors ${
                  darkMode
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    : 'bg-linear-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white'
                }`}
              >
                Got it!
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
