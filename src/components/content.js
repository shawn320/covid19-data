import React, { useEffect, useState } from "react";
import axios from "axios";
import ActionButton from "./actionButton";
import AddForm from "./addForm";
import UpdateForm from "./updateForm";

const Content = () => {
  // initialize states
  const [result, setResult] = useState([]);
  const [state, setState] = useState("");
  const [id, setId] = useState(0);
  const classes = "items-center m-auto px-2 border border-gray-500";

  // initialize data
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

  // send request to pull data from node app using axios function
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

  // delete a select row by index
  const deleteRecord = (index) => {
    setResult((result) => result.filter((element, i) => i !== index));
    console.log("Record deleted, id: ", index);
  };

  // add a new record
  const addRecord = () => {
    setState("add-record");
  };

  // update an existing record
  const updateRecord = (event) => {
    setState("update-record");
    console.log("id: ", event.target.id);
    setId(event.target.id);
  };

  // onChang event for form input
  const handleChange = (event) => {
    updateFormData({
      ...formData,
      // Trim any whitespace
      [event.target.name]: event.target.value.trim(),
    });
  };

  // click listener when submit button clicked
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setResult((result) => [...result, formData]);
  };

  // click listener when update button clicked
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
        <thead>
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
        </thead>
        <tbody data-testid="content-table">
          {/**
           * map data on to the table
           */}
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
                  dataTestId="delete-button"
                />
              </td>
            </tr>
          ))}
        </tbody>
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
