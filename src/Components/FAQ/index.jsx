import React from "react";
import "./index.css";

export function FAQ(props) {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);

  const handleSearchChange = e => {
    setSearchTerm(e.target.value);
  };

  React.useEffect(() => {
    if (props.data) {
      const results = props.data.filter(item =>
        item.question.toLowerCase().includes(searchTerm)
      );
      setSearchResults(results);
    }
  }, [searchTerm, props.data]);

  return (
    <div className='faqcontainer'>
      <h1 className="faqheading">WHY ANYTIME ASTRO?</h1>
      <hr className="line-faq"/>
      <p className="faqtitle">One of the best online Astrology platforms to connect with experienced and verified Astrologers</p>
      <section className='faq'>
        {searchResults.map(item => (
          <Question key={item.id} question={item.question} answer={item.answer} />
        ))}
      </section>
    </div>
  );
}

const Question = props => {
  const [isActive, setActive] = React.useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <div className="question-wrapper">
      <div className='question'>
        <h3>{props.question}</h3>
        <button className="question-button" onClick={handleClick}>
          <svg className={isActive ? 'active' : ''} viewBox="0 0 320 512" width="100" title="angle-down">
            <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
          </svg>
        </button>
      </div>
      <div className={isActive ? 'answer active' : 'answer'}>{props.answer}</div>
    </div>
  );
};
