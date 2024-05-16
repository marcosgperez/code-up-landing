import React, { useEffect, useState } from "react";
/* RESPONSIVE HOOK */
let responsiveValue = "";
if (typeof window != "undefined" && window)
  window.addEventListener("resize", () => (responsiveValue = handleResize()));
responsiveValue = handleResize();
function handleResize() {
  const w = typeof window != "undefined" && window ? window.innerWidth : 1;
  switch (true) {
    case w < 768:
      return "MOBILE";
    case w >= 768 && w < 992:
      return "TABLET";
      
    case w >= 992 && w < 1720:
      return "DESKTOP";
    case w >= 1720:
      return "WIDE";
    default:
      return "";
  }
};
export const WithResponsiveHook = (Component) => {
  return (props) => {
    const [responsive, setResponsive] = useState(responsiveValue); // eslint-disable-line
    useEffect(() => {
      // eslint-disable-line
      window.addEventListener("resize", handleHookedResize);
    }, []);
    const handleHookedResize = () => {
      setResponsive(responsiveValue);
    };
    const responsiveCheck = (responsiveType) => responsive === responsiveType;
    return (
      <Component
        responsive={responsive}
        responsiveCheck={responsiveCheck}
        {...props}
      />
    );
  };
};
/* EXTRAOPTIONS HOOK */
let _extraOptionsActive = false;
let loadSetters: any[] = [];
const callSetters = () => {
  loadSetters.forEach((setter) => setter(_extraOptionsActive));
};
export type extraOptionsType = {
  extraOptionsActive: boolean;
  setExtraOptionsActive: Function;
};
export const WithExtraOptionsHook = (Component) => {
  return (props) => {
    const [extraOptionsActive, setExtraOptionsActive] =
      useState(_extraOptionsActive); // eslint-disable-line
    const setter = (newValue) => {
      _extraOptionsActive = newValue;
      callSetters();
    };
    React.useEffect(() => {
      loadSetters.push(setExtraOptionsActive);
    }, []);
    return (
      <Component
        extraOptionsActive={extraOptionsActive}
        setExtraOptionsActive={setter}
        {...props}
      />
    );
  };
};