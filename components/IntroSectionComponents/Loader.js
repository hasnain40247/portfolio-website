import ReactLoading from "react-loading";
import { Html, useProgress } from "@react-three/drei";


const Loader=()=> {
   
    const { innerWidth: width, innerHeight: height } = window;
  
    return (
      <Html center>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
  
            backgroundColor: "#EEEEEE",
            width: width,
            height: height,
          }}
        >
          <ReactLoading type="spokes" color="#FFD369" height={200} width={200} />
        </div>
      </Html>
    );
  }
export default Loader;
