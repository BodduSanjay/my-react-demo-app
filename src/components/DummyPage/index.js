import React from "react";
import { useParams } from "react-router-dom";

const DummyPage = () => {
  const { page } = useParams();

  return (
    <div className="dummy-page">
      <h2>{page.charAt(0).toUpperCase() + page.slice(1)} Page</h2>
      <p>This is a dummy page for {page}.</p>
    </div>
  );
};

export default DummyPage;
