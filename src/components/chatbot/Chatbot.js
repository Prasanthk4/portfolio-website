import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaPaperPlane, FaTimes, FaComments } from 'react-icons/fa';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hi! I\'m your portfolio assistant. How can I help you learn more about me?'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    // Predefined responses based on keywords
    if (lowerCaseMessage.includes('hi') || lowerCaseMessage.includes('hello')) {
      return "Hello! I'm here to tell you about Sai Rama Prasanth K. What would you like to know?";
    }
    
    if (lowerCaseMessage.includes('education') || lowerCaseMessage.includes('study')) {
      return "My educational background includes:\n\n" +
             "🎓 MBA in Business Analytics & Finance (Woxsen University)\n" +
             "• Major: Data Analytics and Business Analytics\n" +
             "• Expected Graduation: May 2024\n" +
             "• CGPA: 2.99\n" +
             "• Notable Achievement: Contributed Chapter 4 'A Comprehensive Survey of Deep Learning Approaches in Neurodegenerative Disease Diagnosis and Prediction' to the book 'Deep Learning Approaches for Early Diagnosis of Neurodegenerative Diseases'\n\n" +
             "🎓 B.COM in Computers (St. Mary's Degree College)\n" +
             "• Graduated: 2021\n" +
             "• CGPA: 7.9";
    }
    
    if (lowerCaseMessage.includes('skills') || lowerCaseMessage.includes('technology')) {
      return "My technical skills include:\n\n" +
             "💻 Programming Languages:\n" +
             "• Python, Java, JavaScript, HTML/CSS, SQL, C/C++, R\n\n" +
             "🔧 Frameworks & Libraries:\n" +
             "• React.js, Node.js, Angular, Vue.js, Django, Vite\n\n" +
             "☁️ Databases & Cloud:\n" +
             "• MongoDB, MySQL, PostgreSQL\n" +
             "• AWS, Google Cloud, Azure\n\n" +
             "🛠️ Tools & Technologies:\n" +
             "• Git, VS Code, Docker, Jupyter, TensorFlow";
    }
    
    if (lowerCaseMessage.includes('about') || lowerCaseMessage.includes('summary') || lowerCaseMessage.includes('profile')) {
      return "I'm a results-driven Data Analyst with expertise in statistical analysis, machine learning, and data visualization. I focus on converting complex datasets into actionable insights. I'm proficient in Python, R, SQL, and data libraries such as Pandas and Scikit-Learn, with experience in developing predictive models. I also have strong skills in front-end development using React.js, JavaScript, and HTML to create user-friendly web interfaces.";
    }

    if (lowerCaseMessage.includes('project') || lowerCaseMessage.includes('work')) {
      return "Here are my key projects:\n\n" +
             "🎮 Game Review Website\n" +
             "• Dynamic platform with game info, ratings, and trailers\n" +
             "• Tech: React.js, Firebase, RAWG API, Tailwind CSS\n\n" +
             "🌤️ Weather Application\n" +
             "• Real-time forecasts with location services\n" +
             "• Tech: React.js, Weather API, Tailwind CSS\n\n" +
             "🌍 Earthquake Visualizer\n" +
             "• Interactive mapping of real-time earthquake data\n" +
             "• Tech: React.js, Leaflet, USGS API\n\n" +
             "🍒 Cherry Leaf Disease Classification\n" +
             "• ML model using CNNs for disease identification\n" +
             "• Tech: Python, TensorFlow, CNN";
    }
    
    if (lowerCaseMessage.includes('publication') || lowerCaseMessage.includes('research')) {
      return "Publication:\n\n" +
             "📚 Chapter Contribution\n" +
             "• Title: 'A Comprehensive Survey of Deep Learning Approaches in Neurodegenerative Disease Diagnosis and Prediction'\n" +
             "• Book: 'Deep Learning Approaches for Early Diagnosis of Neurodegenerative Diseases'\n" +
             "• Authors: Pruthvi Boda, Sumanth Munari, K. Sai Rama Prasanth, Shahid Mohammad Ganie\n" +
             "• Copyright: 2024 | Pages: 18\n" +
             "• DOI: 10.4018/979-8-3693-1281-0.ch004";
    }

    if (lowerCaseMessage.includes('achievement') || lowerCaseMessage.includes('award')) {
      return "Achievements:\n\n" +
             "🏆 Article Writing Competition 'Impressions'\n" +
             "• 3rd Position at IIM Rohtak\n" +
             "• January 11, 2022\n\n" +
             "📚 Published Research\n" +
             "• Contributed a chapter to a book on Deep Learning approaches";
    }

    if (lowerCaseMessage.includes('hobby') || lowerCaseMessage.includes('interest')) {
      return "My interests and hobbies include:\n\n" +
             "🎮 Gaming\n" +
             "• Analyzing game mechanics and staying current with latest releases\n\n" +
             "💻 Project Development\n" +
             "• Building web applications and ML models\n\n" +
             "🏐 Volleyball\n" +
             "• Active team member and setter\n\n" +
             "🎵 Music\n" +
             "• Exploring various genres";
    }
    
    if (lowerCaseMessage.includes('contact') || lowerCaseMessage.includes('reach')) {
      return "You can reach me at:\n\n" +
             "📧 Email: sairamprasanth32781@gmail.com\n" +
             "📱 Phone: +91 6301855760";
    }

    if (lowerCaseMessage.includes('experience')) {
      return "I am a fresh graduate actively seeking opportunities to apply my skills in data analysis, machine learning, and web development. While I don't have formal work experience, I have developed strong practical skills through various projects and academic work.";
    }

    if (lowerCaseMessage.includes('resume') || lowerCaseMessage.includes('cv') || lowerCaseMessage.includes('download')) {
      return "You can download my resume here: " +
             "[Download Resume](/Sai Rama Prasanth K.pdf)\n\n" +
             "Is there anything specific from my experience you'd like to know about?";
    }

    // Default response
    return "I can tell you about my education, skills, projects, experience, certifications, or how to contact me. What would you like to know?";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const newMessages = [...messages, { type: 'user', content: inputMessage }];
    setMessages(newMessages);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage);
      setMessages([...newMessages, { type: 'bot', content: botResponse }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickAction = (message) => {
    setInputMessage(message);
    handleSubmit({ preventDefault: () => {} });
  };

  const handleResumeDownload = () => {
    // Replace with your actual resume file path
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'SaiRamaPrasanth_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderMessage = (text) => {
    // Regular expression to match markdown-style links: [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }

      // Add the link
      parts.push(
        <a
          key={match.index}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 underline"
          download={match[2].includes('.pdf')}
        >
          {match[1]}
        </a>
      );

      lastIndex = linkRegex.lastIndex;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
        >
          {/* Chat Header */}
          <div className="flex justify-between items-center p-4 bg-indigo-600 text-white">
            <h3 className="font-medium">Portfolio Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-indigo-700 rounded-full transition-colors"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Content */}
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {/* Download Resume Button at the top of chat */}
            <div className="flex justify-center mb-4">
              <button
                onClick={handleResumeDownload}
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
              >
                <FaDownload className="w-5 h-5" />
                <span className="font-medium">Download Resume</span>
              </button>
            </div>

            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.type === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.type === 'user'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                  <p>Typing...</p>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="p-2 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            <div className="flex flex-wrap gap-2 mb-2">
              <button
                onClick={() => handleQuickAction("Tell me about your education")}
                className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors"
              >
                Education
              </button>
              <button
                onClick={() => handleQuickAction("What are your skills?")}
                className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors"
              >
                Skills
              </button>
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
              />
              <button
                type="submit"
                className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <FaPaperPlane className="w-5 h-5" />
              </button>
            </form>
          </div>
        </motion.div>
      ) : (
        <motion.button
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => setIsOpen(true)}
          className="bg-indigo-600 text-white p-4 rounded-full hover:bg-indigo-700 transition-colors shadow-lg"
        >
          <FaComments className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
};

export default Chatbot;
