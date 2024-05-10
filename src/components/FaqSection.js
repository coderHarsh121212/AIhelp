import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Faqimg from "../images/FaqBackground.png"
const FAQsSection = () => {
  const faqs = [
    {
      question: "What do AI Voicebots do?",
      answer:
        "AI Voicebots are smart conversational interfaces that communicate with users using voice commands, delivering responses and support akin to human interaction."
    },
    {
      question: "How do AI Voicebots process and answer user questions?",
      answer:
        "Our AI Voicebots employ advanced Natural Language Processing (NLP) and Machine Learning (ML) techniques to grasp user intent, context, and sentiment accurately, allowing them to furnish relevant and meaningful replies."
    },
    {
      question:
        "Can AI Voicebots be tailored to reflect my brand's voice and style?",
      answer:
        "Absolutely, our AI Voicebots are fully adaptable to mirror your brand's distinct voice, style, and character, ensuring a consistent and captivating user experience."
    },
    {
      question: "Which languages do your AI Voicebots support?",
      answer:
        "Our AI Voicebots cater to a diverse array of languages, encompassing English, Spanish, French, German, Italian, Portuguese, and more. Furthermore, we can collaborate with you to introduce support for additional languages as per your specific requisites."
    },
    {
      question: "How do AI Chatbots differ from AI Voicebots?",
      answer:
        "AI Chatbots engage users through text-based interactions, prevalent on messaging platforms, websites, and mobile apps, whereas AI Voicebots interact with users via voice-based platforms like phone calls or voice assistants."
    },
    {
      question:
        "Can your AI Chatbots manage multiple conversations concurrently?",
      answer:
        "Certainly, our AI Chatbots are engineered to adeptly manage numerous simultaneous conversations, ensuring each user receives swift and personalized attention."
    },
    {
      question:
        "What's the process for integrating your AI Voicebots and Chatbots with my current systems?",
      answer:
        "We offer seamless integration with various CRM, helpdesk, and business systems via our flexible APIs and customizable workflows. Our team collaborates closely with you to ensure a seamless integration journey."
    },
    {
      question:
        "What support options are available for your AI Voicebots and Chatbots?",
      answer:
        "We extend comprehensive support for our AI Voicebots and Chatbots, encompassing training, onboarding, and ongoing technical assistance. Our dedicated support team is poised to optimize your AI agents' performance and address any issues promptly."
    },
    {
      question: "How secure are your AI Voicebots and Chatbots?",
      answer:
        "We prioritize the security and confidentiality of your data. Our AI Voicebots and Chatbots are fortified by secure, enterprise-grade infrastructure and adhere to rigorous security standards, safeguarding your sensitive information."
    },
    {
      question:
        "What are the pricing options for your AI Voicebots and Chatbots?",
      answer:
        "Our flexible pricing plans for AI Voicebots and Chatbots are tailored to your specific needs and usage patterns, spanning Starter, Growth, and Enterprise tiers, alongside bespoke pricing options for more intricate implementations."
    },
    {
      question: "How can I begin using your AI Voicebots or Chatbots? ",
      answer:
        "Simply connect with our sales team to discuss your unique requirements. We'll collaborate with you to determine the optimal solution for your business needs and offer a personalized demonstration of our AI Voicebots and Chatbots in operation."
    },
    {
      question:
        "What are Custom AI Agents, and how do they differ from AI Voicebots and Chatbots?",
      answer:
        "Custom AI Agents are bespoke, industry-specific AI solutions meticulously crafted to address your business's distinct requirements. They can encompass a blend of voicebots, chatbots, and other AI functionalities to enhance efficiency and foster growth."
    },
    {
      question:
        "What's the timeline for developing and deploying a Custom AI Agent?",
      answer:
        "The timeline for developing and deploying Custom AI Agents varies based on the complexity of your needs. Our team collaborates closely with you to define a clear project scope and timeline, ensuring a seamless and timely delivery of your customized AI solution."
    }
  ];

  return (
    <section className="py-12 px-4"      >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-500 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQ key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
      >
        <h3 className="text-lg md:text-xl font-medium text-gray-800">{question}</h3>
        {isOpen ? <FaAngleUp className="text-blue-500 w-6 h-6" /> : <FaAngleDown className="text-blue-500 w-6 h-6" />}
      </button>
      {isOpen && (
        <div className="px-6 py-4">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQsSection;
