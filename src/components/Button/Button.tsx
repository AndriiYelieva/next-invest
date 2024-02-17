import "./button.scss";

type Props = {
  title: string;
}

export const Button: React.FC<Props> = ({ title }) => {
  return (
    <button
      type="button"
      className="button"
    >
      {title}
    </button>
  )
}
