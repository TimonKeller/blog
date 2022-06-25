import React, {useState} from 'react';
import moment from 'moment';
import Map from './Map';


const Newestpost = ({newPost}) => {

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-two':
        return <h2 key={index} className="text-7xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h2>;
      case 'heading-three':
        return <h3 key={index} className="text-3xl mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };
  
  return (
    <div className='p-0 pb-12 mb-8'>
      <div className='mb-6 px-10'>
        {moment(newPost.createdAt).format('MMM DD, YYYY')}
      </div>
      <div className='text-5xl mb-12 px-10'>
        {newPost.title}
      </div>
      <div className='relative overflow-hidden pb-80 mb-8'>
          <img 
          src={newPost.contentfoto.url}
          alt={newPost.title}
          className="object-top absolute h-80 w-full object-cover"
          loading='lazy'
          />
      </div>
      <div className='px-10'>
        <span className='text-lg text-text font-normal'>{newPost.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))
          return getContentFragment(index, children, typeObj, typeObj.type)
        })}
        </span>
      </div>
      <div className=" container inline-flex">
        <Map>
          {console.log("acces-token in newpost" + process.env.mapbox_key)}
        </Map>
      </div>
    </div>
  )
}

export default Newestpost