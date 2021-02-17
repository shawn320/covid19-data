import React from "react";
import FormField from "./formField";

const AddForm = (props) => {
  return (
    <form>
      <div className="flex w-3/5 m-auto items-center">
        <span className="w-full">
          <FormField
            type="text"
            label="pruid"
            name="pruid"
            changed={props.changed}
            placeholder={props.placeholder}
          />
          <FormField
            type="text"
            label="prname"
            name="prname"
            changed={props.changed}
            placeholder={props.placeholder}
          />
          <FormField
            type="text"
            label="date"
            name="date"
            changed={props.changed}
            placeholder={props.placeholder}
          />
        </span>
        <span className="w-full">
          <FormField
            type="text"
            label="numconf"
            name="numconf"
            changed={props.changed}
            placeholder={props.placeholder}
          />
          <FormField
            type="text"
            label="numprob"
            name="numprob"
            changed={props.changed}
            placeholder={props.placeholder}
          />
          <FormField
            type="text"
            label="numdeaths"
            name="numdeaths"
            changed={props.changed}
            placeholder={props.placeholder}
          />
        </span>
        <span className="w-full">
          <FormField
            type="text"
            label="numtotal"
            name="numtotal"
            changed={props.changed}
            placeholder={props.placeholder}
          />
          <FormField
            type="text"
            label="numtoday"
            name="numtoday"
            changed={props.changed}
            placeholder={props.placeholder}
          />
          <FormField
            type="text"
            label="ratetotal"
            name="ratetotal"
            changed={props.changed}
            placeholder={props.placeholder}
          />
        </span>
        <span className="flex-col">
          <FormField type="submit" name="submit" clicked={props.submited} />
        </span>
      </div>
    </form>
  );
};

export default AddForm;
