export const Gif = ({title,url,id}) => {
  return (
    <>
      <ol>
        <p id={id}>{title}</p>
        <img src={url} alt={`Imagen de ${title}`} />
      </ol>
    </>
  );
};
