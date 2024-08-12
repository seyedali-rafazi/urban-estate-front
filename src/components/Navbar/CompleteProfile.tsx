import { useForm } from "react-hook-form";
import Modal from "../../ui/Modal";
import TextField from "../../ui/TextField";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/store";
import { completeProfile } from "../../redux/feachers/user/userActions";

interface AutoModalType {
  setOpenCompleteProfile: (open: boolean) => void;
  openCompleteProfile: boolean;
}

const CompleteProfile: React.FC<AutoModalType> = ({
  openCompleteProfile,
  setOpenCompleteProfile,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch<AppDispatch>();

  const onCkickSubmit = (data: any) => {
    dispatch(
      completeProfile({
        userProfileData: data,
        onSuccess: () => setOpenCompleteProfile(false),
      })
    );
    reset();
  };

  return (
    <Modal
      logo="Completing information"
      onClose={() => setOpenCompleteProfile(false)}
      open={openCompleteProfile}
    >
      <div className="space-y-7">
        <div className="flex flex-col justify-center items-center font-normal text-sm">
          <p>To register, please complete the following information</p>
        </div>
        <form
          className="w-full space-y-4"
          onSubmit={handleSubmit(onCkickSubmit)}
        >
          <TextField
            className="textField"
            placeholder="First and last name:"
            errors={errors}
            name="name"
            type="text"
            register={register}
            validationSchema={{
              required: "Name and surname are necessary",
            }}
          />
          <TextField
            className="textField"
            placeholder="Email:"
            name="email"
            register={register}
            validationSchema={{
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email is invalid",
              },
            }}
            errors={errors}
          />
          <button
            type="submit"
            className="w-full font-bold text-slate-50 bg-primary py-2 rounded-md"
          >
            Record information
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default CompleteProfile;
