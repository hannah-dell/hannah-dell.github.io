import React from 'react';

export default function Intro(props) {
  const image = (
    <img 
      src={props.imageDetails.path} 
      alt={props.imageDetails.altText}
      className="img-me"  
    />
  )

  const insertImageInFirstContentElement = () => {
    console.log("original", props.content)
    if (props.content && React.isValidElement(props.content)) {

      // Find first child element of content
      const firstChild = props.content.props.children[0];

      if (firstChild) {
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

        console.log("new", newContent);
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