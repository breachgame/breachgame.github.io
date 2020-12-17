import React from 'react';
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "Build/Breach(Export).loader.js",
  dataUrl: "Build/Breach(Export).data",
  frameworkUrl: "Build/Breach(Export).framework.js",
  codeUrl: "Build/Breach(Export).wasm",
});

const Demo = () => {
  return <Unity unityContext={unityContext} />;
}

export default Demo;
