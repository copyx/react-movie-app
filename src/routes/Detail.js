import { useEffect } from "react";

export default function Detail(props) {
  console.log(props);
  const { location } = props;

  useEffect(() => {
    const { history } = props;

    if (location.state === undefined) {
      history.push("/");
    }
  })

  if (location.state) {
    return (<span>{location.state.title}</span>);
  } else {
    return null;
  }
}