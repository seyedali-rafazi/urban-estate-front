import { useForm } from "react-hook-form";
import Modal from "../../ui/Modal";
import TextField from "../../ui/TextField";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/store";
import { signup } from "../../redux/feachers/user/userActions";
import { useEffect, useState } from "react";
import CompleteProfile from "./CompleteProfile";

interface AutoModalType {
  setOpenAuth: (open: boolean) => void;
  openAuth: boolean;
  user: any;
  loading: boolean;
}

const AuthModal: React.FC<AutoModalType> = ({
  setOpenAuth,
  openAuth,
  user,
}) => {
  const [openCompleteProfile, setOpenCompleteProfile] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onCkickSubmit = (data: any) => {
    dispatch(signup({ userData: data, onSuccess: () => setOpenAuth(false) }));
    reset();
  };

  useEffect(() => {
    if (user != null && !user.isActive) {
      setOpenCompleteProfile(true);
    }
  }, [user]);

  return (
    <div>
      <Modal logo="Login" onClose={() => setOpenAuth(false)} open={openAuth}>
        <div className="space-y-7">
          <div className="flex flex-col justify-center items-center font-normal text-sm">
            <p className="font-semibold">Welcome to UrbanState</p>
            <p>Please enter your mobile number to login</p>
          </div>
          <form
            className="w-full space-y-4"
            onSubmit={handleSubmit(onCkickSubmit)}
          >
            <TextField
              className="textField"
              placeholder="Phone number:"
              errors={errors}
              name="phoneNumber"
              type="number"
              register={register}
              validationSchema={{
                required: "Mobile phone is essential",
              }}
            />
            <TextField
              className="textField"
              placeholder="Password:"
              errors={errors}
              name="password"
              type="text"
              register={register}
              validationSchema={{
                required: "Password is required",
              }}
            />
            <button
              type="submit"
              className="w-full font-bold text-slate-50 bg-primary py-2 rounded-md"
            >
              Sign up / Login
            </button>
          </form>
        </div>
      </Modal>
      {openCompleteProfile && (
        <CompleteProfile
          openCompleteProfile={openCompleteProfile}
          setOpenCompleteProfile={setOpenCompleteProfile}
        />
      )}
    </div>
  );
};

export default AuthModal;
