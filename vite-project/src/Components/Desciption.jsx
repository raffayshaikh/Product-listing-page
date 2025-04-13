import React, { useState } from 'react';

const DescriptionWithReadMore = ({ text, maxLength = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  const displayText = isExpanded ? text : text.slice(0, maxLength) + (text.length > maxLength ? '...' : '');

  return (
    <p>
      {displayText}
      {text.length > maxLength && (
        <button onClick={toggleReadMore} className="text-blue-500 ml-2 underline">
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </p>
  );
};

export default DescriptionWithReadMore;
