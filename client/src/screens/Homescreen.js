import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMilks } from "../actions/milkActions";
import Milk from "../components/Milk";

export default function Homescreen() {
  const dispatch = useDispatch();

  const milksstate = useSelector((state) => state.getAllMilksReducer);

  const { milks, error, loading } = milksstate;

  useEffect(() => {
    dispatch(getAllMilks());
  }, []);

  return (
    <div>
      <div className="row justify-content-center">
        {loading ? (
          <h1>Milking....</h1>
        ) : error ? (
          <h1>Something went wrong </h1>
        ) : (
          milks.map((milk) => {
            return (
              <div className="col-md-4  p-4 " key={milk._id}>
                <div >
                  <Milk milk={milk} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  )
}
