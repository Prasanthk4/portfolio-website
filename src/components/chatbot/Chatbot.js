import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hi! I\'m your portfolio assistant. How can I help you learn more about me?'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
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

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-80 max-h-[500px] flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Chat with me!</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              aria-label="Close chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
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
                  {message.content}
                </div>
              </div>
            ))}
            {/* Quick Actions */}
            {messages.length === 0 && (
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
                  Hello! How can I help you today?
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleQuickAction("Tell me about your skills")}
                    className="p-2 text-sm bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-gray-800 dark:text-white"
                  >
                    Skills
                  </button>
                  <button
                    onClick={() => handleQuickAction("What projects have you worked on?")}
                    className="p-2 text-sm bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-gray-800 dark:text-white"
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => handleQuickAction("What is your education background?")}
                    className="p-2 text-sm bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-gray-800 dark:text-white"
                  >
                    Education
                  </button>
                  <a
                    href="/Sai Rama Prasanth K.pdf"
                    download
                    className="p-2 text-sm bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-gray-800 dark:text-white text-center"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Input area */}
          <form onSubmit={handleSubmit} className="p-4 border-t dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Open Chat
        </button>
      )}
    </div>
  );
};

export default Chatbot;
