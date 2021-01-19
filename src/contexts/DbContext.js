import React, { useContext, useState, useEffect } from "react";
import { db } from "../firebase";

const DbContext = React.createContext();

export function useDatabase() {
  return useContext(DbContext);
}

export function DbProvider({ children }) {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);

  const scheduleRef = firestore.firestore().collection("schedules");

  function getSchedules() {
    scheduleRef.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      return items;
    });
  }

  useEffect(() => {
    getSchedules();
  }, []);

  const value = {
    getSchedules,
  };

  return (
    <DbContext.Provider value={value}>
      {!loading && children}
    </DbContext.Provider>
  );
}
