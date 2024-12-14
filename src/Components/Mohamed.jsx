import React from "react";
import { useParams } from "react-router"

export default function Mohamed() {
    let params = useParams()
console.log(params)

  return <div>Mohamed</div>;
}
