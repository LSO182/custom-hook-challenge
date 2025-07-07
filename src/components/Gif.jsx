export const Gif = ({title,imageUrl,id}) => {
  return (
    <>
      <div id={id} className="card">
        <p>{title}</p>
        <img src={imageUrl} alt={`Imagen de ${title}`} />
      </div>
    </>
  );
};
