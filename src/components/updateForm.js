import React from "react";
import FormField from "./formField";

const UpdateForm = (props) => {
  return (
    <form>
      <div className="flex w-3/5 m-auto items-center">
        <span className="w-full">
          <FormField type="text" label="pruid" name="pruid" />
          <FormField type="text" label="prname" name="prname" />
          <FormField type="text" label="date" name="date" />
        </span>
        <span className="w-full">
          <FormField type="text" label="numconf" name="numconf" />
          <FormField type="text" label="numprob" name="numprob" />
          <FormField type="text" label="numdeaths" name="numdeaths" />
        </span>
        <span className="w-full">
          <FormField type="text" label="numtotal" name="numtotal" />
          <FormField type="text" label="numtoday" name="numtoday" />
          <FormField type="text" label="ratetotal" name="ratetotal" />
        </span>
        <FormField type="submit" name="submit" clicked={props.submited} />
      </div>
    </form>
  );
};

export default UpdateForm;
