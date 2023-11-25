"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { MdDelete } from "react-icons/md";
import { useCookies } from "react-cookie";
import Loading from "./Loading";
import { useGetToken } from "../hooks/useGetToken";
import { useComments } from "../hooks/getCommentsContext";
import { useAuth } from "../hooks/getAuthContext";
import { useRouter } from "next/navigation";
const Comments: React.FC<any> = ({ productId }) => {
  const { headers } = useGetToken();
  const router = useRouter();
  const { user } = useAuth();
  const [cookie, _] = useCookies(["accesToken"]);
  const [text, setText] = useState("");
  const { comments, dispatchc, loadingC } = useComments();
  useEffect(() => {
    dispatchc({ type: "FETCH_START" });
    axios.get(`http://localhost:8585/comment/${productId}`).then((res) => {
      dispatchc({ type: "FETCH_SUCCESS", payload: res.data });
    });
  }, []);
  const addComment = () => {
    if (text == "") {
      alert("text field required !");
      return;
    }
    axios
      .post(
        `http://localhost:8585/comment/addComment`,
        {
          text,
          username: user.username,
          productId,
        },
        { headers }
      )
      .then((res) => {
        dispatchc({ type: "ADD_COMMENT", payload: res.data });
      });
    setText("");
  };
  const deleteComment = (id: String) => {
    axios.delete(`http://localhost:8585/comment/delete/${id}`, { headers });
    dispatchc({ type: "DELETE_COMMENT", payload: id });
  };
  return (
    <div className=" p-3 sm:w-10/12 w-11/12 mx-auto ">
      <div className="flex items-center justify-between">
        <h2 className="p-3 font-semibold  mb-8 sm:text-2xl text-xl uppercase secondary_color racking-wide brand_selection after_underline">
          COMMENTS :-
        </h2>
        <span className="tracking-wider font-semibold italic underline">
              {comments.length} comment{comments.length > 1 && <>s</>}
            </span>
      </div>
      {loadingC ? (
        <div className="flex justify-center w-full h-fit">
          <Loading />
        </div>
      ) : (
        <>
          <div className=" flex flex-col gap-3">
            {cookie.accesToken ? (
              <div className="flex items-center justify-center gap-3 w-full">
                <div className="flex items-center gap-2">
                  <div className="bg-gray-500 rounded-full px-3 py-2.5  border border-gray-700">
                    <span className=" font-semibold text-white">
                      {user?.username[0].toUpperCase()}
                    </span>
                  </div>
                </div>
                <TextField
                  onChange={(e) => setText(e.target.value)}
                  value={text}
                  className="w-10/12 "
                  placeholder="Add a comment ..."
                  variant="standard"
                />
                <button
                  className="primary_color_bg py-2 px-3  text-white font-semibold tracking-wider text-sm sm:text-base rounded-sm duration-300 ease-in-out"
                  onClick={addComment}
                >
                  Submit
                </button>
              </div>
            ) : (
              <span
                className="mx-auto mb-2 text-red-600 tracking-wider font-semibold cursor-pointer"
                onClick={() => router.push("/auth")}
              >
                Please login to comment
              </span>
            )}
      

            {comments.map((e: any) => {
              return (
                <div className="shadow_product p-3 flex flex-col gap-3 border-1 border-sky-200 bg-slate-100 py-4">
                  <div className="flex    w-11/12 items-center justify-between mx-auto">
                    <div className="flex items-center gap-2">
                      <div className="bg-gray-500 rounded-full px-3 py-2.5  border border-gray-700">
                        <span className=" font-semibold text-white">
                          {e?.username[0].toUpperCase()}
                        </span>
                      </div>
                      <div className="font-serif font-semibold">
                        {e?.username}
                      </div>
                    </div>
                    <div>
                      {e?.username === user?.username && (
                        <MdDelete
                          className=" text-xl sm:text-2xl duration-200 ease-in-out hover:scale-110 cursor-pointer"
                          onClick={() => deleteComment(e._id)}
                        />
                      )}
                    </div>
                  </div>
                  <div className="w-11/12 mx-auto">{e.text}</div>
                  <div className="flex justify-end text-sm italic opacity-90 mr-2.5">
                    {e.date.split("T")[0]}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Comments;
