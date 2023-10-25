import { useState, useEffect } from "react";

export const useLocalStorage = (
  key: string | undefined = "",
  initialValue: string | object | File | undefined = ""
) => {
  // Define el estado del hook
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key || "");

    // Si existe, lo parsea y lo devuelve
    if (jsonValue) return JSON.parse(jsonValue);

    // Si no existe, devuelve el valor inicial
    return initialValue;
  });

  // Define el efecto que se ejecuta cuando cambia el valor
  useEffect(() => {
    // Si el valor es null, elimina el item del localStorage
    if (value === null) localStorage.removeItem(key || "");
    // Si no, lo setea en el localStorage
    else localStorage.setItem(key || "", JSON.stringify(value));
  }, [key, value]);

  // Devuelve el valor y la función para setearlo
  return [value, setValue];
};
