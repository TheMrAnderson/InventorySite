import { React, useState } from "react";
import { useForm } from "react-hook-form";
import Nav from "../components/Nav";
import '../css/Form.css'
// import errorSound from "../media/errorSound.mp3";
// import successSound from "../media/successSound.mp3";

function ConsumeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setD(JSON.stringify(data));
    console.log("Data Submitted", d);
    if (errors != null)
      console.log("Errors", JSON.stringify(errors));
  };

  const [d, setD] = useState("");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="itemNumber">Item Number:</label>
        <input type="text" placeholder="Item Number" {...register("itemNumber", { required: true })} />
        {errors.itemNumber && <span className="errorText">You can't consume nothing silly</span>}
      </div>

      <div>
        <input type="submit" className="button" value="Consume" />
      </div>
    </form>
  );
}

export default function Consume() {
  return (
    <>
      <Nav title={"Consume"} />
      <ConsumeForm />
    </>
  );
}
