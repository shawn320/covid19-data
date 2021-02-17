import React, { useEffect, useState } from "react";
import axios from "axios";
import ActionButton from "./actionButton";
import AddForm from "./addForm";
import UpdateForm from "./updateForm";

const Content = () => {
  const [result, setResult] = useState([]);
  const [state, setState] = useState("");
  const [id, setId] = useState(0);
  const classes = "items-center m-auto px-2 border border-gray-500";

  // Initialize data
  const initialFormData = Object.freeze({
    pruid: "",
    prname: "",
    date: "",
    numconf: "",
    numprob: "",
    numdeaths: "",
    numtotal: "",
    numtoday: "",
    ratetotal: "",
  });

  const [formData, updateFormData] = useState(initialFormData);

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((res) => {
        console.log(res);
        setResult(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteRecord = (index) => {
    setResult((result) => result.filter((element, i) => i !== index));
    console.log("Record deleted, id: ", index);
  };

  const addRecord = () => {
    setState("add-record");
  };

  const updateRecord = (event) => {
    setState("update-record");
    console.log("id: ", event.target.id);
    setId(event.target.id);
  };

  const handleChange = (event) => {
    updateFormData({
      ...formData,
      // Trim any whitespace
      [event.target.name]: event.target.value.trim(),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setResult((result) => [...result, formData]);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    console.log(formData);
    const newResult = [...result];
    newResult.splice(id, 0, formData);
    setResult(newResult);
  };

  return (
    <div className="w-4/5 mt-6 bg-gray-200 shadow-lg p-6 items-center m-auto text-gray-700">
      <table className={classes}>
        <tr className={classes}>
          <th className={classes}>pruid</th>
          <th className={classes}>prname</th>
          <th className={classes}>date</th>
          <th className={classes}>numconf</th>
          <th className={classes}>numprob</th>
          <th className={classes}>numdeaths</th>
          <th className={classes}>numtotal</th>
          <th className={classes}>numtoday</th>
          <th className={classes}>ratetotal</th>
        </tr>
        {result.map((result, index) => (
          <tr className={classes} key={index}>
            <td className={classes}>{result.pruid}</td>
            <td className={classes}>{result.prname}</td>
            <td className={classes}>{result.date}</td>
            <td className={classes}>{result.numconf}</td>
            <td className={classes}>{result.numprob}</td>
            <td className={classes}>{result.numdeaths}</td>
            <td className={classes}>{result.numtotal}</td>
            <td className={classes}>{result.numtoday}</td>
            <td className={classes}>{result.ratetotal}</td>
            <td>
              <ActionButton text="Update" id={index} clicked={updateRecord} />
            </td>
            <td>
              <ActionButton
                text="Delete"
                id={index}
                clicked={() => deleteRecord(index)}
              />
            </td>
          </tr>
        ))}
      </table>
      <div className="mt-2 ml-16">
        <ActionButton text="Add Record" clicked={addRecord} />
      </div>
      <div>
        {state === "add-record" && (
          <AddForm changed={handleChange} submited={handleSubmit} />
        )}
      </div>
      <div>
        {state === "update-record" && (
          <UpdateForm changed={handleChange} submited={handleUpdate} />
        )}
      </div>
    </div>
  );
};

export default Content;
