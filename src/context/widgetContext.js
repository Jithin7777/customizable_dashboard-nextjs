"use client";
import { createContext, useState, useContext, useEffect } from "react";

const WidgetContext = createContext();

export const useWidgetContext = () => useContext(WidgetContext);

export const WidgetProvider = ({ children }) => {
  const [widgetPreferences, setWidgetPreferences] = useState([]);

  useEffect(() => {
    const fetchWidgetPreferences = async () => {
      const savedPreferences = localStorage.getItem("widgetPreferences");
      if (savedPreferences) {
        setWidgetPreferences(JSON.parse(savedPreferences));
      } else {
        try {
          const res = await fetch("http://localhost:3000/api/widgets");
          const data = await res.json();

          setWidgetPreferences(data);
          localStorage.setItem("widgetPreferences", JSON.stringify(data));
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchWidgetPreferences();
  }, []);

  const toggleWidgetVisibility = async (widgetId, isVisible) => {
    const updatedPreferences = widgetPreferences.map((widget) =>
      widget._id === widgetId ? { ...widget, isVisible } : widget
    );

    setWidgetPreferences(updatedPreferences);

    localStorage.setItem(
      "widgetPreferences",
      JSON.stringify(updatedPreferences)
    );
 
    const res = await fetch("http://localhost:3000/api/widgets", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ widgetId, isVisible }),
    });

    if (res.ok) {
      console.log("Widget visibility updated successfully");
    } else {
      console.error("Failed to update widget visibility");
    }
  };

  return (
    <WidgetContext.Provider
      value={{ widgetPreferences, toggleWidgetVisibility }}
    >
      {children}
    </WidgetContext.Provider>
  );
};
