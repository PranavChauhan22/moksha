import React, { useState } from "react";
import "./Faq.css";
import FAQs from "./FAQs";

function Faq() {
  const hang1="https://mokshainnovision.s3.eu-north-1.amazonaws.com/elementsFAQ/1.png"
  const head="https://mokshainnovision.s3.eu-north-1.amazonaws.com/elementsFAQ/2.png"
  const hang2="https://mokshainnovision.s3.eu-north-1.amazonaws.com/elementsFAQ/3.png"
    const [faqs, setFaqs] = useState([
        {
          question: "What is Moksha?",
          answer:
            "Moksha is the annual cultural festival of NSUT, a 3-day long escape from reality that takes place in the month of March. More than a fest, it has been a symbol of ethereal gatherings and blasting triumphs. After a successful resurrection in 2023, we’re back again with a bang.",
          open: true
        },
        {
          question: "What is Innovision?",
          answer: "Innovision is the annual technical festival of NSUT, a 3-day long fiesta that shines across the month of March. The clicking of keyboards and the rumbling of brains is the theme music of Innovision, which brings along a medley of mind-boggling technical events for all the techies out there.",
          open: false
        },
        {
          question:
            "When will Moksha - Innovision’24 be held ? What are the exact dates ?",
          answer: "Moksha - Innovision is a 3 day annual cultural - tech extravaganza, organised in the month of March. The dates are 7th, 8th and 9th of March, 2024.",
          open: false
        },
        {
          question:
            "What are the events in Moksha - Innovison’24 ?",
          answer: "Every year, Moksha - Innovision witness a bundle of events ranging from dramatics and dance to hackathons and robowars. It is these events that bring life to the fest with the ever-enthusiastic hosts and participants.",
          open: false
        },
        {
          question:
            "Why should I participate in those events ?",
          answer: "Participants are the people who make the festival what it is and for whom the festival is organized. Participating in the events will not only give you a chance to win exciting prizes and enjoy them, but most importantly, they will enhance your confidence, experience, learning, and overall personality. So register for as many possible events as they come up, and do spread the word.",
          open: false
        },
        {
          question:
            "Is Moksha - Innovision accepting outside Delhi-NCR teams to participate in their events?",
          answer: "Yes, Moksha - Innovision is accepting participants in their mind-boggling events from all across the country.",
          open: false
        },
        {
          question:
            "What are the arrangements for accommodation of the participants?",
          answer: "Moksha - Innovision is introducing provisions for safe stays for all the participants coming from across the country, and all of their accommodation needs will be taken care of.",
          open: false
        },
      ]);
    
      const toggleFAQ = index => {
        setFaqs(
          faqs.map((faq, i) => {
            if (i === index) {
              faq.open = !faq.open;
            } else {
              faq.open = false;
            }
    
            return faq;
          })
        );
      };
  return (
    <div className="faqbg">
      <img src={head} className="faq_head" />
      <div className="faq_container">
        <img src={hang1} className="hangs_faq" />
        <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQs faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
        <img src={hang2} className="hangs_faq" />
      </div>
    </div>
  );
}

export default Faq;
