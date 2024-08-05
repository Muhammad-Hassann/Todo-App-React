import React, {useState} from "react";
import useTodo from "../context/TodoContext";

function TodoList({todo}) {
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const [editable, setEditable] = useState(false)
  const {updateTodo, deleteTodo, toggleComplete} = useTodo()

  const handleUpdate = () => {
    updateTodo(todo.id, {...todo ,todo: todoMsg})
    setEditable(false)
  }

  const toggleCompleted = () => {
    toggleComplete(todo.id)
  }
  return (
    <div>
      <div className="w-full flex justify-center mt-8">
        <div className="w-[90%] border-t-2 border-gray-300"></div>
      </div>
      <div className="flex mt-8 mx-auto flex-col lg:flex-row lg:items-center lg:justify-between w-[90%]">
        <div className="flex w-full">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleCompleted}
          className="w-6 h-6 mr-2 border-gray-300 rounded-full"
        />
         <textarea
          className={`w-full outline-none mt-[-6px] text-xl resize-none font-bold tracking-tight text-gray-900 ${
            todo.completed ? "line-through" : ""
          } ${editable ? "border-b-2 border-gray-300" : "border-none"}`}
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!editable}
          rows="3" // Set the number of rows for the textarea
        />
        </div>
        <div className="flex justify-end mt-2">
        <button className="mr-4"
        onClick={() => {
          if (todo.completed) return;
          if (editable) {
            handleUpdate()
          } else {
            setEditable((prev) => !prev)
          }
        }
        }
        >
        {editable ?
        (<svg
          width="40px"
          height="40px"
          viewBox="-4.8 -4.8 33.60 33.60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0">
            <rect
              x="-4.8"
              y="-4.8"
              width="33.60"
              height="33.60"
              rx="16.8"
              fill="#CCCCCC"
              strokeWidth="0"
            />
          </g>

          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            {" "}
            <g id="System / Save">
              {" "}
              <path
                id="Vector"
                d="M17 21.0002L7 21M17 21.0002L17.8031 21C18.921 21 19.48 21 19.9074 20.7822C20.2837 20.5905 20.5905 20.2843 20.7822 19.908C21 19.4806 21 18.921 21 17.8031V9.21955C21 8.77072 21 8.54521 20.9521 8.33105C20.9095 8.14 20.8393 7.95652 20.7432 7.78595C20.6366 7.59674 20.487 7.43055 20.1929 7.10378L17.4377 4.04241C17.0969 3.66374 16.9242 3.47181 16.7168 3.33398C16.5303 3.21 16.3242 3.11858 16.1073 3.06287C15.8625 3 15.5998 3 15.075 3H6.2002C5.08009 3 4.51962 3 4.0918 3.21799C3.71547 3.40973 3.40973 3.71547 3.21799 4.0918C3 4.51962 3 5.08009 3 6.2002V17.8002C3 18.9203 3 19.4796 3.21799 19.9074C3.40973 20.2837 3.71547 20.5905 4.0918 20.7822C4.5192 21 5.07899 21 6.19691 21H7M17 21.0002V17.1969C17 16.079 17 15.5192 16.7822 15.0918C16.5905 14.7155 16.2837 14.4097 15.9074 14.218C15.4796 14 14.9203 14 13.8002 14H10.2002C9.08009 14 8.51962 14 8.0918 14.218C7.71547 14.4097 7.40973 14.7155 7.21799 15.0918C7 15.5196 7 16.0801 7 17.2002V21M15 7H9"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
            </g>{" "}
          </g>
        </svg>) :
          (<svg
            width="40px"
            height="40px"
            viewBox="-6.96 -6.96 37.92 37.92"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0">
              <rect
                x="-6.96"
                y="-6.96"
                width="37.92"
                height="37.92"
                rx="18.96"
                fill="#CCCCCC"
                strokewidth="0"
              />
            </g>

            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <title />{" "}
              <g id="Complete">
                {" "}
                <g id="edit">
                  {" "}
                  <g>
                    {" "}
                    <path
                      d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8"
                      fill="none"
                      stroke="#000000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />{" "}
                    <polygon
                      fill="none"
                      points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8"
                      stroke="#000000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>) 
          
          }
        </button>
        <button onClick={() => deleteTodo(todo.id)}>
          <svg
            width="40px"
            height="40px"
            viewBox="-2.4 -2.4 28.80 28.80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0">
              <rect
                x="-2.4"
                y="-2.4"
                width="28.80"
                height="28.80"
                rx="14.4"
                fill="#CCCCCC"
                strokeWidth="0"
              />
            </g>

            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M10 11V17"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
              <path
                d="M14 11V17"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
              <path
                d="M4 7H20"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
              <path
                d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
              <path
                d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
            </g>
          </svg>
        </button>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
