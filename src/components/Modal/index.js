import El from "../../library/El";

const Modal = () => {
  return El({
    element: "div",
    id: "taskModal",
    className: "mx-72 hidden",
    child: El({
      element: "form",
      className:
        "w-[50rem] max-w-screen-2xl max-h-[calc(100%_-_64px)] flex flex-col rounded m-8 shadow-2xl transition-shadow z-10 relative bg-white -mt-[145px]",
      child: [
        El({
          element: "h2",
          child: "New Task",
          className: "font-medium m-0 px-6 py-4 text-xl text-[#000000DE]",
        }),
        El({
          element: "hr",
          className:
            "m-0 divide-x-0 divide-y-0 border-solid border-black/[.12]",
        }),
        El({
          element: "div",
          className: "px-6 py-5",
          child: [
            El({
              element: "div",
              className: "mb-16 w-full flex flex-col",
              child: [
                El({
                  element: "label",
                  child: "Task Name",
                  className: "text-black/[.6] font-normal text-base pb-2",
                }),
                El({
                  element: "input",
                  id: "task-name",
                  type: "text",
                  placeholder: "Enter Your Task Name",
                  className:
                    "w-full py-4 px-3 h-14 text-black/[.87] font-normal text-base border border-solid border-slate-300 rounded outline-none hover:border-black focus:border-[#6101EA]",
                }),
              ],
            }),
            El({
              element: "div",
              className: "flex items-center gap-6 mb-12",
              child: [
                El({
                  element: "select",
                  id: "priority",
                  className:
                    "w-full py-4 pr-32 h-14 text-black/[.87] font-normal text-base border border-solid border-slate-300 rounded focus:border-[#6101EA] focus:border-2 hover:border-black outline-none",
                  child: [
                    El({
                      element: "option",
                      child: "Priority",
                    }),
                    El({
                      element: "option",
                      child: "Low",
                    }),
                    El({
                      element: "option",
                      child: "Medium",
                    }),
                    El({
                      element: "option",
                      child: "High",
                    }),
                  ],
                }),
                El({
                  element: "select",
                  id: "status",
                  className:
                    "w-full py-4 pr-32 h-14 text-black/[.87] font-normal text-base border border-solid border-slate-300 rounded focus:border-[#6101EA] focus:border-2 hover:border-black outline-none",
                  child: [
                    El({
                      element: "option",
                      child: "Status",
                    }),
                    El({
                      element: "option",
                      child: "Todo",
                    }),
                    El({
                      element: "option",
                      child: "Doing",
                    }),
                    El({
                      element: "option",
                      child: "Done",
                    }),
                  ],
                }),
                El({
                  element: "input",
                  id: "date",
                  type: "date",
                  value: "2023-03-08",
                  className:
                    "w-full py-4 px-3 h-14 text-black/[.87] font-normal text-base border border-solid border-slate-300 rounded focus:border-[#6101EA] focus:border-2 hover:border-black outline-none",
                }),
              ],
            }),
            El({
              element: "textarea",
              child: "",
              id: "textarea",
              placeholder: "Details (optional)",
              className:
                "w-full h-40 p-4 border border-solid border-slate-300 rounded-lg",
            }),
          ],
        }),
        El({
          element: "hr",
          className:
            "m-0 divide-x-0 divide-y-0 border-solid border-black/[.12]",
        }),
        El({
          element: "div",
          className: "flex justify-between items-center m-4 p-2",
          child: [
            El({
              element: "button",
              child: "CANCEL",
              onclick(e) {
                e.preventDefault();
                const filterButton = document.getElementById("taskModal");
                if (!filterButton.className.split(" ").includes("hidden"))
                  filterButton.classList.add("hidden");
              },
              className:
                "text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:bg-blue-300 font-medium border border-solid border-blue-400 rounded text-sm px-5 py-2.5 text-center",
            }),
            El({
              element: "button",
              child: "SAVE",
              onclick(e) {
                e.preventDefault();
                save();
              },
              className:
                "text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:bg-blue-200 font-medium rounded text-sm px-5 py-2.5 text-center",
            }),
          ],
        }),
      ],
    }),
  });
};
let finaldata = [];

function deleteBtn() {
  return El({
    element: "div",
    className: "flex justify-center items-center bg-red-600 w-9 h-7 rounded",
    onclick() {},
    child: El({
      element: "button",
      id: "delete",
      onclick: (e) => {
        const deleteItem = e.target.closest("tr").getAttribute("id");
        const deleteItemFromLocalStorage = JSON.parse(
          localStorage.getItem("datas")
        ).filter((item) => {
          return item.id !== deleteItem;
        });
        localStorage.setItem(
          "datas",
          JSON.stringify(deleteItemFromLocalStorage)
        );
        createNewRow(localStorage.getItem("datas"));
      },
      child: El({
        element: "ion-icon",
        name: "trash",
        className: "text-lg text-white align-text-top",
      }),
    }),
  });
}

function createModal(taskName, priority, status, date, textarea) {
  return El({
    element: "div",
    id: "createModal",
    className: "mx-72",
    child: El({
      element: "form",
      className:
        "w-[50rem] max-w-screen-2xl max-h-[calc(100%_-_64px)] flex flex-col rounded m-8 shadow-2xl transition-shadow z-10 relative bg-white -mt-[145px]",
      child: [
        El({
          element: "h2",
          child: "New Task",
          className: "font-medium m-0 px-6 py-4 text-xl text-[#000000DE]",
        }),
        El({
          element: "hr",
          className:
            "m-0 divide-x-0 divide-y-0 border-solid border-black/[.12]",
        }),
        El({
          element: "div",
          className: "px-6 py-5",
          child: [
            El({
              element: "div",
              className: "mb-16 w-full flex flex-col",
              child: [
                El({
                  element: "label",
                  child: "Task Name",
                  className: "text-black/[.6] font-normal text-base pb-2",
                }),
                El({
                  element: "input",
                  id: "edit-task-name",
                  value: taskName,
                  type: "text",
                  placeholder: "Enter Your Task Name",
                  className:
                    "w-full py-4 px-3 h-14 text-black/[.87] font-normal text-base border border-solid border-slate-300 rounded outline-none hover:border-black focus:border-[#6101EA]",
                }),
              ],
            }),
            El({
              element: "div",
              className: "flex items-center gap-6 mb-12",
              child: [
                El({
                  element: "select",
                  id: "edit-priority",
                  className:
                    "w-full py-4 pr-32 h-14 text-black/[.87] font-normal text-base border border-solid border-slate-300 rounded focus:border-[#6101EA] focus:border-2 hover:border-black outline-none",
                  child: [
                    El({
                      element: "option",
                      child: priority,
                    }),
                    El({
                      element: "option",
                      child: "Low",
                    }),
                    El({
                      element: "option",
                      child: "Medium",
                    }),
                    El({
                      element: "option",
                      child: "High",
                    }),
                  ],
                }),
                El({
                  element: "select",
                  id: "edit-status",
                  className:
                    "w-full py-4 pr-32 h-14 text-black/[.87] font-normal text-base border border-solid border-slate-300 rounded focus:border-[#6101EA] focus:border-2 hover:border-black outline-none",
                  child: [
                    El({
                      element: "option",
                      child: status,
                    }),
                    El({
                      element: "option",
                      child: "Todo",
                    }),
                    El({
                      element: "option",
                      child: "Doing",
                    }),
                    El({
                      element: "option",
                      child: "Done",
                    }),
                  ],
                }),
                El({
                  element: "input",
                  id: "edit-date",
                  value: date,
                  type: "date",
                  className:
                    "w-full py-4 px-3 h-14 text-black/[.87] font-normal text-base border border-solid border-slate-300 rounded focus:border-[#6101EA] focus:border-2 hover:border-black outline-none",
                }),
              ],
            }),
            El({
              element: "textarea",
              value: textarea,
              id: "edit-textarea",
              placeholder: "Details (optional)",
              className:
                "w-full h-40 p-4 border border-solid border-slate-300 rounded-lg",
            }),
          ],
        }),
        El({
          element: "hr",
          className:
            "m-0 divide-x-0 divide-y-0 border-solid border-black/[.12]",
        }),
        El({
          element: "div",
          className: "flex justify-between items-center m-4 p-2",
          child: [
            El({
              element: "button",
              child: "CANCEL",
              onclick(e) {
                e.preventDefault();
                const filterButton = document.getElementById("taskModal");
                if (!filterButton.className.split(" ").includes("hidden"))
                  filterButton.classList.add("hidden");
              },
              className:
                "text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:bg-blue-300 font-medium border border-solid border-blue-400 rounded text-sm px-5 py-2.5 text-center",
            }),
            El({
              element: "button",
              child: "SAVE",
              onclick() {
                save();
              },
              className:
                "text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:bg-blue-200 font-medium rounded text-sm px-5 py-2.5 text-center",
            }),
          ],
        }),
      ],
    }),
  });
}

function showModal(taskName, priority, status, date, textarea) {
  return El({
    element: "div",
    id: "createModal",
    className: "mx-72",
    child: El({
      element: "form",
      className:
        "w-[50rem] max-w-screen-2xl max-h-[calc(100%_-_64px)] flex flex-col rounded m-8 shadow-2xl transition-shadow z-10 relative bg-white -mt-[145px]",
      child: [
        El({
          element: "h2",
          child: "New Task",
          className: "font-medium m-0 px-6 py-4 text-xl text-[#000000DE]",
        }),
        El({
          element: "hr",
          className:
            "m-0 divide-x-0 divide-y-0 border-solid border-black/[.12]",
        }),
        El({
          element: "div",
          className: "px-6 py-5",
          child: [
            El({
              element: "div",
              className: "mb-16 w-full flex flex-col",
              child: [
                El({
                  element: "label",
                  child: "Task Name",
                  className: "text-black/[.6] font-normal text-base pb-2",
                }),
                El({
                  element: "input",
                  disabled: "true",
                  id: "edit-task-name",
                  value: taskName,
                  type: "text",
                  placeholder: "Enter Your Task Name",
                  className:
                    "w-full py-4 px-3 h-14 text-black/[.87] font-normal text-base border border-solid border-slate-300 rounded outline-none hover:border-black focus:border-[#6101EA]",
                }),
              ],
            }),
            El({
              element: "div",
              className: "flex items-center gap-6 mb-12",
              child: [
                El({
                  element: "select",
                  disabled: "true",
                  id: "edit-priority",
                  className:
                    "w-full py-4 pr-32 h-14 text-black/[.87] font-normal text-base border border-solid border-slate-300 rounded focus:border-[#6101EA] focus:border-2 hover:border-black outline-none",
                  child: [
                    El({
                      element: "option",
                      child: priority,
                    }),
                    El({
                      element: "option",
                      child: "Low",
                    }),
                    El({
                      element: "option",
                      child: "Medium",
                    }),
                    El({
                      element: "option",
                      child: "High",
                    }),
                  ],
                }),
                El({
                  element: "select",
                  disabled: "true",
                  id: "edit-status",
                  className:
                    "w-full py-4 pr-32 h-14 text-black/[.87] font-normal text-base border border-solid border-slate-300 rounded focus:border-[#6101EA] focus:border-2 hover:border-black outline-none",
                  child: [
                    El({
                      element: "option",
                      child: status,
                    }),
                    El({
                      element: "option",
                      child: "Todo",
                    }),
                    El({
                      element: "option",
                      child: "Doing",
                    }),
                    El({
                      element: "option",
                      child: "Done",
                    }),
                  ],
                }),
                El({
                  element: "input",
                  disabled: "true",
                  id: "edit-date",
                  value: date,
                  type: "date",
                  className:
                    "w-full py-4 px-3 h-14 text-black/[.87] font-normal text-base border border-solid border-slate-300 rounded focus:border-[#6101EA] focus:border-2 hover:border-black outline-none",
                }),
              ],
            }),
            El({
              element: "textarea",
              value: textarea,
              disabled: "true",
              id: "edit-textarea",
              placeholder: "Details (optional)",
              className:
                "w-full h-40 p-4 border border-solid border-slate-300 rounded-lg",
            }),
          ],
        }),
        El({
          element: "hr",
          className:
            "m-0 divide-x-0 divide-y-0 border-solid border-black/[.12]",
        }),
        El({
          element: "div",
          className: "flex justify-between items-center m-4 p-2",
          child: [
            El({
              element: "button",
              child: "CANCEL",
              onclick(e) {
                e.preventDefault();
                const filterButton = document.getElementById("createModal");
                if (!filterButton.className.split(" ").includes("hidden"))
                  filterButton.classList.add("hidden");
              },
              className:
                "text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:bg-blue-300 font-medium border border-solid border-blue-400 rounded text-sm px-5 py-2.5 text-center",
            }),
            El({
              element: "button",
              disabled: "true",
              child: "SAVE",
              onclick(e) {
                e.preventDefault();
                const filterButton = document.getElementById("createModal");
                if (!filterButton.className.split(" ").includes("hidden"))
                  filterButton.classList.add("hidden");
                save();
              },
              className:
                "text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:bg-blue-200 font-medium rounded text-sm px-5 py-2.5 text-center",
            }),
          ],
        }),
      ],
    }),
  });
}

function editModal(taskName, priority, status, date, textarea, id) {
  return El({
    element: "div",
    id: "editModal",
    className: "mx-72",
    child: El({
      element: "form",
      id: id,
      className:
        "w-[50rem] max-w-screen-2xl max-h-[calc(100%_-_64px)] flex flex-col rounded m-8 shadow-2xl transition-shadow z-10 relative bg-white -mt-[145px]",
      child: [
        El({
          element: "h2",
          child: "New Task",
          className: "font-medium m-0 px-6 py-4 text-xl text-[#000000DE]",
        }),
        El({
          element: "hr",
          className:
            "m-0 divide-x-0 divide-y-0 border-solid border-black/[.12]",
        }),
        El({
          element: "div",
          className: "px-6 py-5",
          child: [
            El({
              element: "div",
              className: "mb-16 w-full flex flex-col",
              child: [
                El({
                  element: "label",
                  child: "Task Name",
                  className: "text-black/[.6] font-normal text-base pb-2",
                }),
                El({
                  element: "input",

                  id: "editTaskname",
                  value: taskName,
                  type: "text",
                  placeholder: "Enter Your Task Name",
                  className:
                    "w-full py-4 px-3 h-14 text-black/[.87] font-normal text-base border border-solid border-slate-300 rounded outline-none hover:border-black focus:border-[#6101EA]",
                }),
              ],
            }),
            El({
              element: "div",
              className: "flex items-center gap-6 mb-12",
              child: [
                El({
                  element: "select",

                  id: "editPriority",
                  className:
                    "w-full py-4 pr-32 h-14 text-black/[.87] font-normal text-base border border-solid border-slate-300 rounded focus:border-[#6101EA] focus:border-2 hover:border-black outline-none",
                  child: [
                    El({
                      element: "option",
                      child: priority,
                    }),
                    El({
                      element: "option",
                      child: "Low",
                    }),
                    El({
                      element: "option",
                      child: "Medium",
                    }),
                    El({
                      element: "option",
                      child: "High",
                    }),
                  ],
                }),
                El({
                  element: "select",

                  id: "editStatus",
                  className:
                    "w-full py-4 pr-32 h-14 text-black/[.87] font-normal text-base border border-solid border-slate-300 rounded focus:border-[#6101EA] focus:border-2 hover:border-black outline-none",
                  child: [
                    El({
                      element: "option",
                      child: status,
                    }),
                    El({
                      element: "option",
                      child: "Todo",
                    }),
                    El({
                      element: "option",
                      child: "Doing",
                    }),
                    El({
                      element: "option",
                      child: "Done",
                    }),
                  ],
                }),
                El({
                  element: "input",

                  id: "editDate",
                  value: date,
                  type: "date",
                  className:
                    "w-full py-4 px-3 h-14 text-black/[.87] font-normal text-base border border-solid border-slate-300 rounded focus:border-[#6101EA] focus:border-2 hover:border-black outline-none",
                }),
              ],
            }),
            El({
              element: "textarea",
              value: textarea,
              id: "editTextarea",
              placeholder: "Details (optional)",
              className:
                "w-full h-40 p-4 border border-solid border-slate-300 rounded-lg",
            }),
          ],
        }),
        El({
          element: "hr",
          className:
            "m-0 divide-x-0 divide-y-0 border-solid border-black/[.12]",
        }),
        El({
          element: "div",
          className: "flex justify-between items-center m-4 p-2",
          child: [
            El({
              element: "button",
              child: "CANCEL",
              onclick(e) {
                e.preventDefault();
                const filterButton = document.getElementById("editModal");
                if (!filterButton.className.split(" ").includes("hidden"))
                  filterButton.classList.add("hidden");
              },
              className:
                "text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:bg-blue-300 font-medium border border-solid border-blue-400 rounded text-sm px-5 py-2.5 text-center",
            }),
            El({
              element: "button",
              child: "SAVE",
              onclick(e) {
                e.preventDefault();
                const filterButton = document.getElementById("editModal");
                if (!filterButton.className.split(" ").includes("hidden"))
                  filterButton.classList.add("hidden");
                const {
                  editTaskname,
                  editStatus,
                  editPriority,
                  editDate,
                  editTextarea,
                } = e.target.closest("form").elements;
                let trId = e.target.closest("form").getAttribute("id");
                const editTr = JSON.parse(localStorage.getItem("datas")).map(
                  (item) => {
                    if (item.id == trId) {
                      item.taskName = editTaskname.value;
                      item.status = editStatus.value;
                      item.priority = editPriority.value;
                      item.date = editDate.value;
                      item.textarea = editTextarea.value;
                      return item;
                    } else {
                      return item;
                    }
                  }
                );
                localStorage.setItem("datas", JSON.stringify(editTr));
                createNewRow(localStorage.getItem("datas"));
              },
              className:
                "text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:bg-blue-200 font-medium rounded text-sm px-5 py-2.5 text-center",
            }),
          ],
        }),
      ],
    }),
  });
}

function editBtn() {
  return El({
    element: "div",
    className: "flex justify-center items-center bg-blue-600 w-9 h-7 rounded",
    child: El({
      element: "button",
      id: "edit",
      onclick: (e) => {
        e.preventDefault();
        const editItem = e.target.closest("tr").getAttribute("id");
        // const editItemFromLocalStorage =
        JSON.parse(localStorage.getItem("datas")).map((item) => {
          if (item.id == editItem) {
            document.body.append(
              editModal(
                item.taskName,
                item.priority,
                item.status,
                item.date,
                item.textarea,
                item.id
              )
            );
          }
        });
      },
      child: El({
        element: "ion-icon",
        name: "pencil",
        className: "text-lg text-white align-text-top",
      }),
    }),
  });
}

function showBtn() {
  return El({
    element: "div",
    className: "flex justify-center items-center bg-gray-600 w-9 h-7 rounded",
    child: El({
      element: "button",
      id: "show",
      onclick: (e) => {
        const showItem = e.target.closest("tr").getAttribute("id");
        const editItemFromLocalStorage = JSON.parse(
          localStorage.getItem("datas")
        ).map((item) => {
          if (item.id == showItem) {
            document.body.append(
              showModal(
                item.taskName,
                item.priority,
                item.status,
                item.date,
                item.textarea
              )
            );
          }
        });
        editItemFromLocalStorage;
      },
      child: El({
        element: "ion-icon",
        name: "eye",
        className: "text-lg text-white align-text-top",
      }),
    }),
  });
}

const priorityColor = (priority) => {
  switch (priority) {
    case "Low":
      return "gray";
    case "Medium":
      return "yellow";
    case "High":
      return "red";
  }
};
const statusColor = (status) => {
  switch (status) {
    case "Todo":
      return "red";
    case "Doing":
      return "yellow";
    case "Done":
      return "green";
  }
};

export const createNewRow = (data) => {
  const dataTable = document.getElementById("data-table");
  dataTable.querySelector("tbody").innerHTML = "";

  JSON.parse(data).map((item) => {
    const newRow = El({
      element: "tr",
      className: "hover:bg-gray-100",
      id: item.id,
      child: [
        El({
          element: "td",
          child: item.taskName,
          className:
            "border border-solid border-slate-200 font-normal py-2 text-left pl-2",
        }),
        El({
          element: "td",
          className:
            "border border-solid border-slate-200 font-normal py-2 text-center",
          child: El({
            element: "div",
            child: El({
              element: "span",
              child: item.priority,
              className: `bg-${priorityColor(
                item.priority
              )}-200 px-3 py-2 rounded-full text-sm`,
            }),
          }),
        }),
        El({
          element: "td",
          className:
            "border border-solid border-slate-200 font-normal py-2 text-center",
          child: El({
            element: "div",
            child: El({
              element: "span",
              child: item.status,
              className: `bg-${statusColor(
                item.status
              )}-200 px-3 py-2 rounded-full text-sm`,
            }),
          }),
        }),
        El({
          element: "td",
          className:
            "border border-solid border-slate-200 font-normal py-2 text-center",
          child: item.date,
        }),
        El({
          element: "td",
          style: "border-left-style: initial; border-top-style: initial",
          className:
            "flex justify-center items-center gap-2 border border-solid border-slate-200 font-normal p-[10px] text-center",
          child: [deleteBtn(), editBtn(), showBtn()],
        }),
      ],
    });
    dataTable.querySelector("tbody").append(newRow);
  });
};

const save = () => {
  const taskName = document.getElementById("task-name");
  const priority = document.getElementById("priority");
  const status = document.getElementById("status");
  const date = document.getElementById("date");
  const textarea = document.getElementById("textarea");
  const id = crypto.randomUUID();
  finaldata = [
    ...finaldata,
    {
      taskName: taskName.value,
      priority: priority.value,
      status: status.value,
      date: date.value,
      textarea: textarea.value,
      id,
    },
  ];
  localStorage.setItem(`datas`, JSON.stringify(finaldata));
  taskName.value = "";
  textarea.value = "";
  const filterButton = document.getElementById("taskModal");
  if (!filterButton.className.split(" ").includes("hidden"))
    filterButton.classList.add("hidden");
  createNewRow(localStorage.getItem("datas"));
};

export default Modal;
