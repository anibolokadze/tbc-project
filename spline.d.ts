declare module "@splinetool/react-spline" {
  import { FC } from "react";

  interface SplineProps {
    scene: string;
  }

  const Spline: FC<SplineProps>;

  export default Spline;
}
