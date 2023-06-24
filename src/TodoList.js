import React, { useState } from "react";

const TodoList = () => {
  const [activity, setactivity] = useState("");
  const [listData, setlistData] = useState([]);

  function addactivity() {
    // setlistData([...listData,activity]);
    // console.log(listData);
    setlistData((listData) => {
      const updatedlist = [...listData, activity];
      console.log("updated list is ", updatedlist);
      setactivity("");
      return updatedlist;
    });
  }

  function removeActivity(i) {
    const updatedListData = listData.filter((ele, id) => {
      return i != id;
    });
    setlistData(updatedListData);
  }

  function removeall() {
    setlistData([]);
  }

  return (
    <>
      <div className="container">
        <div className="header">TODO LIST</div>
        <input
          type="text"
          placeholder="add activity"
          value={activity}
          onChange={(e) => setactivity(e.target.value)}
        />
        <button onClick={addactivity} className="addbutton">
          Add +
        </button>
        <p className="list-heading">Here is your List :{")"}</p>
        {listData != [] &&
          listData.map((data, i) => {
            return (
              <>
                <p key={i} className="listdata">
                  <div className="listdata">{data}</div>
                  <button
                    onClick={() => removeActivity(i)}
                    className="removebutton"
                  >
                    Remove(-)
                  </button>
                </p>
              </>
            );
          })}
        <button onClick={() => removeall()} className="removeallbutton">
          RemoveAll(-)
        </button>
      </div>
    </>
  );
};

export default TodoList;
