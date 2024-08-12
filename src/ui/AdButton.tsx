import { useNavigate } from "react-router-dom";

interface AdButtonBackType {
  path: string;
}

export const AdButtonContinue: React.FC = () => {
  return (
    <button
      type="submit"
      className="col-start-1 mx-auto  font-bold text-secondery-50 bg-primary text-white py-2 rounded-md  px-5 w-1/2"
    >
      Continue
    </button>
  );
};

export const AdButtonSubmit: React.FC = () => {
  return (
    <button
      type="submit"
      className="col-start-1 mx-auto  font-bold text-secondery-50 bg-primary text-white py-2 rounded-md  px-5 w-1/2"
    >
      Final registration
    </button>
  );
};

export const AdButtonBack: React.FC<AdButtonBackType> = ({ path }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(path)}
      className="col-start-1 mx-auto  font-bold text-secondery-50 bg-white text-primary border border-primary  py-2 rounded-md  px-5 w-1/2"
    >
      Previous
    </button>
  );
};
