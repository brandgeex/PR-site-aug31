
import React, { useState, useRef, useEffect } from 'react';
import type { ChatMessage } from '../types';
import { askAiAssistant } from '../services/geminiService';
import { MessageCircleIcon, XIcon, SendIcon, UserIcon, BotIcon } from './IconComponents';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: 'ai', text: "Hello! I'm the Pines Ridge AI assistant. How can I help you learn about our community today?" }
  ]);
  const [userInput, setUserInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading) return;

    const newMessages: ChatMessage[] = [...messages, { sender: 'user', text: userInput }];
    setMessages(newMessages);
    setUserInput('');
    setIsLoading(true);

    try {
      const aiResponse = await askAiAssistant(userInput);
      setMessages([...newMessages, { sender: 'ai', text: aiResponse }]);
    } catch (error) {
      setMessages([...newMessages, { sender: 'ai', text: 'Sorry, I encountered an error. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-brand-accent hover:bg-brand-accent-dark text-white rounded-full p-4 shadow-lg transition-transform transform hover:scale-110"
          aria-label="Toggle AI Assistant"
        >
          {isOpen ? <XIcon className="h-8 w-8" /> : <MessageCircleIcon className="h-8 w-8" />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-full max-w-md h-[70vh] bg-white rounded-lg shadow-2xl z-50 flex flex-col font-sans transition-all duration-300 ease-in-out">
          <header className="bg-brand-dark text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold text-lg">Pines Ridge AI Assistant</h3>
            <button onClick={() => setIsOpen(false)} aria-label="Close chat"><XIcon className="h-5 w-5"/></button>
          </header>

          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.sender === 'ai' && <div className="bg-brand-accent text-white rounded-full p-2"><BotIcon className="h-5 w-5" /></div>}
                  <div className={`max-w-xs md:max-w-sm p-3 rounded-lg ${msg.sender === 'user' ? 'bg-blue-100 text-gray-800' : 'bg-gray-200 text-gray-800'}`}>
                    <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                  </div>
                   {msg.sender === 'user' && <div className="bg-blue-500 text-white rounded-full p-2"><UserIcon className="h-5 w-5" /></div>}
                </div>
              ))}
              {isLoading && (
                 <div className="flex items-start gap-3 justify-start">
                    <div className="bg-brand-accent text-white rounded-full p-2"><BotIcon className="h-5 w-5" /></div>
                    <div className="max-w-xs md:max-w-sm p-3 rounded-lg bg-gray-200 text-gray-800">
                        <div className="flex items-center space-x-2">
                           <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
                           <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse delay-75"></div>
                           <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse delay-150"></div>
                        </div>
                    </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t bg-white rounded-b-lg">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Ask about plots, villas, etc."
                className="flex-1 p-2 border rounded-md focus:ring-2 focus:ring-brand-accent focus:outline-none"
                disabled={isLoading}
              />
              <button type="submit" className="bg-brand-accent text-white p-2 rounded-md hover:bg-brand-accent-dark disabled:bg-gray-400" disabled={isLoading}>
                <SendIcon className="h-6 w-6" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AiAssistant;
