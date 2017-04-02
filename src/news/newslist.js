import React from 'react';

const NewsListItem = ({item, onNewsSelect}) => {
  const title = item.title;
  const url = item.url;
return (
    <li onMouseOver={() => onNewsSelect(item)} className ='list-group-item-action'>
        <a href={url}><h5>{title}</h5></a>
    </li>
  );
};

export default NewsListItem;
