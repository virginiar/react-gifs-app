interface Props {
  title: string;
  description?: string;
}

// rafc para crear la estructura del componente
export const CustomHeader = ({ title, description }: Props) => {
  return (
    <div className="content-center">
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
};
