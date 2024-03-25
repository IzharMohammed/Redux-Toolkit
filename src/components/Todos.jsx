import React, { useState , useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, EditTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();
  const[edittedText,setEdittiedText] = useState('');

  const edit = (e)=>{
    setEdittiedText(e.target.value);
  }

  return (
    <>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className="text-white">{todo.text}</div>
            <button
              onClick={() => dispatch(EditTodo(
                {id : todo.id ,
                   text : <input 
                   type="text" 
                  className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={todo.text + edittedText}
                   onChange={edit}
                   />
                  }))}
              className="text-white border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 64 64"
              >
                <radialGradient
                  id="XxuzckEKxQAhu215VR7vra_118958_gr1"
                  cx="6"
                  cy="2"
                  r="26.875"
                  gradientUnits="userSpaceOnUse"
                  spreadMethod="reflect"
                >
                  <stop offset="0" stop-color="#afeeff"></stop>
                  <stop offset=".193" stop-color="#bbf1ff"></stop>
                  <stop offset=".703" stop-color="#d7f8ff"></stop>
                  <stop offset="1" stop-color="#e1faff"></stop>
                </radialGradient>
                <path
                  fill="url(#XxuzckEKxQAhu215VR7vra_118958_gr1)"
                  d="M5.5,61L5.5,61C3.015,61,1,58.985,1,56.5v0C1,54.015,3.015,52,5.5,52h0 c2.485,0,4.5,2.015,4.5,4.5v0C10,58.985,7.985,61,5.5,61z"
                ></path>
                <radialGradient
                  id="XxuzckEKxQAhu215VR7vrb_118958_gr2"
                  cx="32"
                  cy="31.5"
                  r="30.775"
                  gradientUnits="userSpaceOnUse"
                  spreadMethod="reflect"
                >
                  <stop offset="0" stop-color="#afeeff"></stop>
                  <stop offset=".193" stop-color="#bbf1ff"></stop>
                  <stop offset=".703" stop-color="#d7f8ff"></stop>
                  <stop offset="1" stop-color="#e1faff"></stop>
                </radialGradient>
                <path
                  fill="url(#XxuzckEKxQAhu215VR7vrb_118958_gr2)"
                  d="M64,24L64,24c0-2.761-2.239-5-5-5h-5c-2.761,0-5-2.238-5-5v0c0-2.762,2.238-5,5-5h0.565 C56.48,9,58,7.48,58,5.605L58,5.5C58,3.567,56.433,2,54.5,2l-38,0c-1.926,0-3.49,1.556-3.5,3.483L13,5.5 C12.99,7.43,14.552,9,16.483,9H17c2.209,0,4,1.791,4,4v0c0,2.209-1.791,4-4,4H5c-2.761,0-5,2.239-5,5v0c0,2.761,2.239,5,5,5h1 c2.209,0,4,1.791,4,4v0c0,2.209-1.791,4-4,4H5.5C2.462,35,0,37.462,0,40.5v0C0,43.538,2.462,46,5.5,46H19c1.657,0,3,1.343,3,3v0 c0,1.657-1.343,3-3,3h-1.5c-2.485,0-4.5,2.015-4.5,4.5v0c0,2.485,2.015,4.5,4.5,4.5H33h22c2.209,0,4-1.791,4-4v0 c0-2.209-1.791-4-4-4h-6.5c-1.933,0-3.5-1.567-3.5-3.5v0c0-1.933,1.567-3.5,3.5-3.5H60c2.209,0,4-1.791,4-4v0c0-2.209-1.791-4-4-4 h-1.5c-2.485,0-4.5-2.015-4.5-4.5v0c0-2.485,2.015-4.5,4.5-4.5H59C61.761,29,64,26.761,64,24z"
                ></path>
                <linearGradient
                  id="XxuzckEKxQAhu215VR7vrc_118958_gr3"
                  x1="10.098"
                  x2="10.098"
                  y1="50.804"
                  y2="57"
                  gradientUnits="userSpaceOnUse"
                  spreadMethod="reflect"
                >
                  <stop offset="0" stop-color="#a4a4a4"></stop>
                  <stop offset=".63" stop-color="#7f7f7f"></stop>
                  <stop offset="1" stop-color="#6f6f6f"></stop>
                  <stop offset="1" stop-color="#6f6f6f"></stop>
                </linearGradient>
                <path
                  fill="url(#XxuzckEKxQAhu215VR7vrc_118958_gr3)"
                  d="M8.02,50.804l-1,5c-0.065,0.328,0.037,0.667,0.273,0.903C7.482,56.896,7.737,57,8,57 c0.065,0,0.131-0.007,0.196-0.02l5-1L8.02,50.804z"
                ></path>
                <linearGradient
                  id="XxuzckEKxQAhu215VR7vrd_118958_gr4"
                  x1="28.5"
                  x2="28.5"
                  y1="55"
                  y2="16"
                  gradientUnits="userSpaceOnUse"
                  spreadMethod="reflect"
                >
                  <stop offset="0" stop-color="#ff8b67"></stop>
                  <stop offset=".847" stop-color="#ffa76a"></stop>
                  <stop offset="1" stop-color="#ffad6b"></stop>
                  <stop offset="1" stop-color="#ffad6b"></stop>
                </linearGradient>
                <path
                  fill="url(#XxuzckEKxQAhu215VR7vrd_118958_gr4)"
                  d="M47.707,28.293l-12-12c-0.391-0.391-1.023-0.391-1.414,0l-25,25 c-0.391,0.391-0.391,1.023,0,1.414l12,12C21.488,54.902,21.744,55,22,55s0.512-0.098,0.707-0.293l25-25 C48.098,29.316,48.098,28.684,47.707,28.293z"
                ></path>
                <linearGradient
                  id="XxuzckEKxQAhu215VR7vre_118958_gr5"
                  x1="15.5"
                  x2="15.5"
                  y1="56"
                  y2="41.001"
                  gradientUnits="userSpaceOnUse"
                  spreadMethod="reflect"
                >
                  <stop offset="0" stop-color="#ffc662"></stop>
                  <stop offset=".004" stop-color="#ffc662"></stop>
                  <stop offset=".609" stop-color="#ffc582"></stop>
                  <stop offset="1" stop-color="#ffc491"></stop>
                  <stop offset="1" stop-color="#ffc491"></stop>
                </linearGradient>
                <path
                  fill="url(#XxuzckEKxQAhu215VR7vre_118958_gr5)"
                  d="M21.986,47.836C21.906,47.354,21.489,47,21,47h-4v-4c0-0.489-0.354-0.906-0.836-0.986l-6-1 c-0.271-0.043-0.548,0.023-0.768,0.188c-0.219,0.166-0.36,0.414-0.391,0.688l-1,9c-0.033,0.302,0.072,0.603,0.287,0.817l4,4 C12.481,55.896,12.736,56,13,56c0.037,0,0.073-0.002,0.11-0.006l9-1c0.273-0.03,0.521-0.172,0.688-0.391 c0.165-0.22,0.233-0.497,0.188-0.768L21.986,47.836z"
                ></path>
                <linearGradient
                  id="XxuzckEKxQAhu215VR7vrf_118958_gr6"
                  x1="49.736"
                  x2="49.736"
                  y1="23.5"
                  y2="5.028"
                  gradientUnits="userSpaceOnUse"
                  spreadMethod="reflect"
                >
                  <stop offset="0" stop-color="#ff634d"></stop>
                  <stop offset=".204" stop-color="#fe6464"></stop>
                  <stop offset=".521" stop-color="#fc6581"></stop>
                  <stop offset=".794" stop-color="#fa6694"></stop>
                  <stop offset=".989" stop-color="#fa669a"></stop>
                  <stop offset="1" stop-color="#fa669a"></stop>
                </linearGradient>
                <path
                  fill="url(#XxuzckEKxQAhu215VR7vrf_118958_gr6)"
                  d="M57.603,13.188l-6.791-6.791c-1.826-1.826-4.797-1.826-6.623,0l-3.396,3.396 c-0.391,0.391-0.391,1.023,0,1.414l12,12c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l3.396-3.396 C59.429,17.985,59.429,15.015,57.603,13.188z"
                ></path>
                <linearGradient
                  id="XxuzckEKxQAhu215VR7vrg_118958_gr7"
                  x1="44"
                  x2="44"
                  y1="9.026"
                  y2="30.974"
                  gradientUnits="userSpaceOnUse"
                  spreadMethod="reflect"
                >
                  <stop offset="0" stop-color="#b2b2b2"></stop>
                  <stop offset=".594" stop-color="#949494"></stop>
                  <stop offset="1" stop-color="#848484"></stop>
                  <stop offset="1" stop-color="#848484"></stop>
                </linearGradient>
                <path
                  fill="url(#XxuzckEKxQAhu215VR7vrg_118958_gr7)"
                  d="M53.957,21.543l-11.5-11.5c-1.355-1.355-3.559-1.355-4.914,0l-3.5,3.5 c-1.354,1.354-1.354,3.56,0,4.914l11.5,11.5c0.678,0.678,1.567,1.017,2.457,1.017s1.779-0.339,2.457-1.017l3.5-3.5 C55.312,25.103,55.312,22.897,53.957,21.543z"
                ></path>
              </svg>
            </button>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
