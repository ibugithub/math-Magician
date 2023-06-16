import { useState, useEffect } from 'react';
import '../css/quote.css';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [isloading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      try {
        const data = await fetch('https://api.api-ninjas.com/v1/quotes?category=learning', {
          headers: { 'X-Api-Key': 'xJxZjC8qiinY64YCpflbkA==bTwjPN1zU4sPIKzE' },
          contentType: 'application/json',
        });
        const dataObj = await data.json();
        setQuote(dataObj[0].quote);
      } catch {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchQuote();
  }, [setQuote, setIsLoading]);

  if (hasError) return <div>Something went worng!</div>;
  if (isloading) return <div>Loading...</div>;
  return (
    <div className="quote-container">
      <h3>
        Some beautiful quotes
      </h3>
      {quote}
    </div>
  );
};

export default Quote;
