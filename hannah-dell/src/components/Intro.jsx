import React from 'react';

export default function Intro(props) {
  const image = props.imageDetails.path 
    ?
      (
        <img 
          src={props.imageDetails.path} 
          alt={props.imageDetails.altText}
          key="header-image"
          className="img-me"  
        />
      )
    : undefined;

  const insertImageInFirstContentElement = () => {
    if (props.content && React.isValidElement(props.content)) {

      // Find first child element of content
      const firstChild = props.content.props.children[0];

      if (firstChild && React.isValidElement(firstChild)) {
        // Add image to last child element
        const newFirstChild = React.cloneElement(firstChild, {
          children: [
            image,
            ...React.Children.toArray(firstChild.props.children),
          ],
        });

        // Update content
        const newContent = React.cloneElement(props.content, {
          children: [
            newFirstChild,
            ...React.Children.toArray(props.content.props.children).slice(1),
          ],
        });

        return newContent;
      }
    }
    return props.content;
  };

  return (
    <div className="flex items-center justify-start body-container pt-4">
      {insertImageInFirstContentElement()}
    </div>
  )
}