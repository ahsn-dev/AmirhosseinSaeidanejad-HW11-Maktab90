import El from "../../library/El";

const Footer = () => {
  //   <div class=" "></div>;
  return El({
    element: "div",
    className:
      "h-14 flex justify-end items-center gap-4 pr-4 text-sm font-light mt-4",
    child: [
      El({
        element: "div",
        child: "",
      }),
      El({
        element: "p",
        child: "Rows per page:",
      }),
      El({
        element: "select",
        className: "border border-solid border-slate-300 outline-none mr-6",
        child: [
          El({
            element: "option",
            child: "All",
          }),
          El({
            element: "option",
            child: "10",
          }),
          El({
            element: "option",
            child: "25",
          }),
          El({
            element: "option",
            child: "100",
          }),
        ],
      }),
      El({
        element: "p",
        child: "0–0 of 0",
      }),
      El({
        element: "div",
        className: "flex gap-6",
        child: [
          El({
            element: "button",
            child: El({
              element: "ion-icon",
              name: "chevron-back-outline",
              className: "text-gray-400 text-lg align-text-top",
            }),
          }),
          El({
            element: "button",
            child: El({
              element: "ion-icon",
              name: "chevron-forward-outline",
              className: "text-gray-400 text-lg align-text-top",
            }),
          }),
        ],
      }),
    ],
  });
};

export default Footer;
