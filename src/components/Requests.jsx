import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../utils/requestsSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/recieved", {
        withCredentials: true,
      });

      dispatch(addRequest(res?.data?.data));
    } catch (err) {
      console.error(err.message);
    }
  };

  const reviewRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + `/request/review/${status}/${_id}`,
        {},
        {
          withCredentials: true,
        }
      );

      fetchRequests();

      //   dispatch(addRequest(res?.data?.data));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) {
    return;
  }

  if (requests.length === 0) {
    return <h1 className="flex justify-center my-10"> No Requests Found</h1>;
  }

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-3xl text-white">Requests</h1>
      {requests.map((request) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          request?.fromUserId;
        return (
          <div
            key={_id}
            className="flex m-4 p-4 justify-between border rounded-lg bg-base-200 w-2/3 mx-auto items-center"
          >
            <div className="flex">
              <div>
                <img
                  alt="photo"
                  className="w-20 h-20 rounded-full"
                  src={
                    photoUrl ||
                    "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-1230.jpg"
                  }
                />
              </div>
              <div className="text-left mx-4">
                <h2 className="font-bold text-xl">
                  {firstName} {lastName}
                </h2>
                {age && gender && (
                  <p>
                    {age} {gender}
                  </p>
                )}
                {about && <p>{about}</p>}
              </div>
            </div>
            <div>
              <button
                className="btn btn-primary mx-2"
                onClick={() => reviewRequest("accepted", request._id)}
              >
                Accept
              </button>
              <button
                className="btn btn-secondary mx-2"
                onClick={() => reviewRequest("rejected", request._id)}
              >
                Reject
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
