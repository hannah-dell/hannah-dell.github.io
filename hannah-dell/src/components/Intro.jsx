import data from '../data/pages.json';

export default function Intro(props) {

  const document = data.find(item => item.name === props.name);

  const insertImageInFirstContentElement = () => {
    const image = document.content.image 
      ? `<img src="${document.content.image.path}" alt="${document.content.image.altText}" class="img-me" />` 
      : undefined;
  
    if (document.content.html && document.content.image) {
      // Insert image after the first tag (e.g. <p>) if image path exists
      return (
        document.content.image && document.content.image.path
        ? document.content.html.replace(/(<[^>]+>)/, `$1${image}`)
        : document.content.html
      );
    }
  
    return document.content.html;
  };

  return (
    document && 
      <div
        className="flex items-center justify-start body-container pt-4"
        dangerouslySetInnerHTML={{ __html: insertImageInFirstContentElement() }} // note data must come from safe source
      />
  )
}