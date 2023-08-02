import React, { useState } from "react";

import Card from "react-bootstrap/Card";

const HomePage = () => {
  const [isAudioPlayed, setIsAudioPlayed] = useState(false);
  return (
    <div className="change">
      <Card>
        <Card.Img
          onClick={() => setIsAudioPlayed(true)}
          style={{ borderRadius: "10px" }}
          variant="top"
          src="https://cdn.vox-cdn.com/thumbor/h2ExWdFNSLueoj5DPJkMm2FtIoM=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23545250/nso_wolf_trap_1600_x_900_star_wars_empire_strikes_back.jpg"
        />
        <Card.Body>
          <Card.Text>
            <h3 style={{ color: "#3B3F5C" }}>
              <strong>
                {" "}
                Welcome to Star Wars
                <br />
                Dashbord
              </strong>
            </h3>
            Star Wars, an expansive multimedia franchise, originated from the creative mind of George Lucas. Its inception marked the start of an American epic space opera adventure.
            <br />starting with its namesake 1977 movie, the franchise swiftly evolved into a global sensation that permeated popular culture.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomePage;
