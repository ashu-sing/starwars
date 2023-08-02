import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useQuery } from "react-query";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { AiOutlineMenu } from "react-icons/ai";
import { BiGridAlt } from "react-icons/bi";
import Loader from "../../Loader";
import Dropdown from "react-bootstrap/Dropdown";
import {
  AiFillEye,
  AiOutlineDownload,
  AiTwotoneDelete,
  AiFillLock,
} from "react-icons/ai";
import { BsPencil, BsShare, BsFolderSymlink } from "react-icons/bs";

const fetchPeopleData = async () => {
  const response = await fetch(`https://swapi.dev/api/people/`);
  return response.json();
};

const People = () => {
  const [activeButton, setActiveButton] = useState("List");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const { data, status } = useQuery("people", fetchPeopleData, {
    onSuccess: () => console.log("People data fetched"),
    onError: () => console.log("Error fetching data"),
  });

  const picUrl =
    "https://cdn.vox-cdn.com/thumbor/h2ExWdFNSLueoj5DPJkMm2FtIoM=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23545250/nso_wolf_trap_1600_x_900_star_wars_empire_strikes_back.jpg";

  return (
    <>
      <div className="container">
        <ButtonGroup size="sm" className="btn-group">
          <Button
            style={{ color: "white" }}
            variant={activeButton === "List" ? "light" : "secondary"}
            onClick={() => handleButtonClick("List")}
          >
            <AiOutlineMenu />
            &nbsp;List
          </Button>
          <Button
            style={{ color: "white" }}
            variant={activeButton === "Grid" ? "light" : "secondary"}
            onClick={() => handleButtonClick("Grid")}
          >
            <BiGridAlt />
            &nbsp;Grid
          </Button>
        </ButtonGroup>
      </div>

      <div className="py-3 m-10">
        <h3 className="font-semibold text-lg">People</h3>
        {activeButton === "List" && (
          <div className="h-full w-full object-cover object-center group-hover:opacity-75">
            <ul role="list" className="divide-y divide-gray-100 m-5 w-full">
              {status === "loading" ? (
                <Loader />
              ) : status === "error" ? (
                <div>Error fetching data</div>
              ) : status === "success" ? (
                // Check if data exists and data.results is an array before mapping
                Array.isArray(data?.results) ? (
                  data.results.map((person) => (
                    <li
                      key={person.name}
                      className="flex justify-between gap-x-6 py-5"
                    >
                      <div className="flex gap-x-4">
                        <img
                          className="h-12 w-12 flex-none rounded-full bg-slate-50"
                          src={picUrl}
                          alt="Person Thumbnail"
                        />
                        <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-100">
                            {person.name}
                          </p>
                          <p className="mt-1 truncate text-xs leading-5 text-slate-100">
                            Skin Color: {person.skin_color}
                          </p>
                        </div>
                      </div>
                      <div className="hidden sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-slate-100">
                          Birth Year
                        </p>
                        <p className="mt-1 text-xs leading-5 text-slate-100">
                          <time dateTime={person.birth_year}>
                            {person.birth_year}
                          </time>
                        </p>
                      </div>
                    </li>
                  ))
                ) : (
                  <div>No people</div>
                )
              ) : null}
            </ul>
          </div>
        )}

        {activeButton === "Grid" && (
          <div className="bg-transparent Grids">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <h2 className="sr-only">People</h2>
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                {status === "loading" ? (
                  <Loader />
                ) : status === "error" ? (
                  <div>Error fetching data</div>
                ) : status === "success" ? (
                  // Check if data exists and data.results is an array before mapping
                  Array.isArray(data?.results) ? (
                    data.results.map((person) => (
                      <a key={person.name} className="group">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                          <img
                            src={picUrl}
                            href={person.url}
                            alt="Person Thumbnail"
                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                          />
                        </div>
                        <h3 className="mt-4 text-sm text-slate-100">
                          {person.name}
                        </h3>
                      </a>
                    ))
                  ) : (
                    <div>No people</div>
                  )
                ) : null}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default People;
