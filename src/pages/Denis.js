import { useState, useEffect } from "react";

export const Denis = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setShowComponent(!showComponent);
    }, 2000);
  }, [showComponent]);

  return (
    <div className="flex items-center justify-center h-screen">
      {showComponent && (
        <div>
          <img
            src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
            className="max-w-xs h-auto rounded-full"
            alt=""
          ></img>
        </div>
      )}
    </div>
  );
};
