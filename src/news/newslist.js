import React from 'react';

const NewsListItem = ({item, onNewsSelect}) => {
  const title = item.title;

return (
    <li onMouseOver={() => onNewsSelect(item)} className="list-group-item mod">
        <a><h5>{title}</h5></a>
    </li>
  );
};

export default NewsListItem;
