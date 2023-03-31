import { Typography } from "antd";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export function Fallback() {
  const [redirect, setRedirect] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (redirect) {
      history.push("/home");
    } else {
      const timer = setTimeout(() => {
        setRedirect(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [redirect, history]);

  return <Typography>Hello there, this is a fallback</Typography>;
}
