import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import { useAdQueryContext } from "../../context/AdQueryContext";
import { useNavigate } from "react-router-dom";
import { AdButtonBack, AdButtonContinue } from "../../ui/AdButton";
import SelectField from "../../ui/SelectField";
import { options } from "../../data/AdData";
import { useEffect, useState } from "react";

const AdFirstContent: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const { setAdQueryString } = useAdQueryContext();
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onCkickSubmit = (data: any) => {
    setAdQueryString((prevUser) => ({
      ...prevUser,
      title: data.title,
      description: data.description,
      houseGroup: data.houseGroup,
      offPrice: Number(data.offPrice),
      price: 435345345,
      discount: 0,
    }));
    setFormSubmitted(true);
  };

  useEffect(() => {
    if (formSubmitted) {
      navigate("/ad-price");
    }
  }, [formSubmitted, navigate]);

  return (
    <form
      className="flex flex-col gap-10 items-center justify-center w-full"
      onSubmit={handleSubmit(onCkickSubmit)}
    >
      <div className="flex flex-col justify-center items-center lg:grid lg:grid-cols-2 gap-8 p-3 w-full ">
        <TextField
          className="border border-secondery-400 p-2 rounded-sm w-full h-[44px]"
          placeholder="Advertisement subject"
          errors={errors}
          name="title"
          type="text"
          register={register}
          validationSchema={{
            required: "Subject is required",
          }}
        />
        <TextField
          className="border border-secondery-400 p-2 rounded-sm w-full h-[44px]"
          placeholder="Ad Description"
          errors={errors}
          name="description"
          type="text"
          register={register}
          validationSchema={{
            required: "Explanation is essential",
          }}
        />
        <SelectField
          name="houseGroup"
          errors={errors}
          register={register}
          options={options}
          required="Select the type of transaction"
        />
        <TextField
          className="border border-secondery-400 p-2 rounded-sm w-full h-[44px]"
          placeholder="Desired amount"
          errors={errors}
          name="offPrice"
          type="number"
          register={register}
          validationSchema={{
            required: "Amount is necessary",
          }}
        />
      </div>
      <div className="flex gap-3 w-full max-w-md">
        <AdButtonBack path="/" />
        <AdButtonContinue />
      </div>
    </form>
  );
};

export default AdFirstContent;
