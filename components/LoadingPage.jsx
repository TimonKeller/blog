import React from "react";

const LoadingPage = () => {
  return (
    <div className="bg-landingbg h-full">
      <div className="container mx-auto">
        <div className="align-center justify-center flex flex-col h-screen overflow-hidden">
          <div className="waviy">
            <div className="text-center font-bold text-landingtext text-6xl mb-8 animate-pulse">
              <span>a</span>
              <span>k</span>
              <span>i</span>
              <span>h</span>
              <span>i</span>
              <span>.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
