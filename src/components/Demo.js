import React, { useState, useEffect } from 'react';
import Unity, { UnityContext } from "react-unity-webgl";
import Loader from 'react-loader-spinner';
import '../css/demo.css'

const unityContext = new UnityContext({
  loaderUrl: "Build/Breach(Export).loader.js",
  dataUrl: "Build/Breach(Export).data",
  frameworkUrl: "Build/Breach(Export).framework.js",
  codeUrl: "Build/Breach(Export).wasm",
});

const loader = (<div className="loader-container">
                  <Loader
                    className="loader"
                    type="BallTriangle"
                    color="#FFFFFF"
                    height={80}
                    width={80}
                  />
                </div>);

const Demo = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    unityContext.on("loaded", () => {
      setIsLoading(false);
    })
  })

  return(
    <div>
      {isLoading ? loader : ""}
      <div className="unity-demo">
        <Unity unityContext={unityContext} />
      </div>
    </div>
  )
}

export default Demo;
