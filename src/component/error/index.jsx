import { BiError } from "react-icons/bi";

const Error = ({ message }) => {
  return (
    <div className="page grid place-items-center">
      <div className="flex flex-col justify-center items-center gap-4 text-red-500">
        <BiError className="text-2xl" />

        <h1>Üzgünüz bir sorun oluştu</h1>

        <h2>{message}</h2>
      </div>
    </div>
  );
};

export default Error;
