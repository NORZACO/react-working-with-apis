import React, { useState, useEffect } from "react";

export const UseFetchData = (options) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(options.url)
      .then((response) => response.json())
      .then(setData);
  }, []);

  return {
    data
  };
};
