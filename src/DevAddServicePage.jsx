import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BackArrowList from "./components/BackArrowList";
import axios from "axios";

const DevAddServicePage = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const parent = location.state ? location.state.parent : "";
  const [newService, setNewService] = useState({
    id: "test",
    textSimple: "",
    videoURL: "",
    children: ["innerTest"],
    infoChildren: [],
    searchable: true,
    iconURL: "",
  });
  const [innerService, setInnerService] = useState({
    id: "innerTest",
    textSimple: "Тело услуги",
    videoURL: "",
    children: [],
    infoChildren: [],
    searchable: false,
    iconURL: "",
  });

  const updateNewService = (name, value) => {
    setNewService({ ...newService, [name]: value });
  };

  const updateInnerService = (name, value) => {
    setInnerService({ ...innerService, [name]: value });
  };

  const addService = () => {
    axios
      .post(
        "https://pincode-dev.ru/ivr-hor/videoDoc/add",
        [newService, innerService],
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => res.data)
      .then((data) => {
        const cock = data["test"]
        if (parent) {
          axios
            .get(`https://pincode-dev.ru/ivr-hor/videoDoc/id/${parent}`)
            .then((res2) => res2.data)
            .then((data2) => {
              if (parent) {
                axios
                  .put(
                    `https://pincode-dev.ru/ivr-hor/videoDoc/update/${parent}`,
                    {
                      fieldName: "children",
                      newValue: [...data2.children, data["test"]],
                    }
                  ).then(res => {
                    if (res.status == 200) alert("Успешно добавлена")
                  })
                  .catch((e) => console.log("патч"));
              }
            });
        }
      });
  };
  return (
    <>
      <div className="top-section flex">
        <div className="top-text flex">
          <BackArrowList back={() => navigate(-1)} />
          <h2 className="subtitle title">Добавление новой услуги</h2>
        </div>
      </div>
      <div className="form-wrapper">
        <div>
          <form className="dev-form">
            <div className="checkbox-wrapper">
              <input
                type="checkbox"
                id="check"
                onChange={(e) =>
                  updateNewService("searchable", e.target.checked)
                }
              />
              <label htmlFor="check">Промежуточная услуга</label>
            </div>

            <input
              type="text"
              placeholder="Название услуги"
              name="title"
              id="title"
              onChange={(e) => updateNewService("textSimple", e.target.value)}
            />
            <input
              type="url"
              placeholder="Ссылка на видео-название услуги"
              name="urlVideo"
              id="urlVideo"
              onChange={(e) => updateNewService("videoURL", e.target.value)}
            />
            <input
              type="url"
              placeholder="Ссылка на видео-содержимое услуги"
              name="urlVideo"
              id="urlVideo"
              onChange={(e) => updateInnerService("videoURL", e.target.value)}
            />
            <input
              type="url"
              placeholder="Ссылка на svg-иконку"
              name="urlIcon"
              id="urlIcon"
              onChange={(e) => updateNewService("iconURL", e.target.value)}
            />
            <textarea
              name="textRussian"
              placeholder="Текстовое наполнение услуги"
              id="textRussian"
              onChange={(e) => updateInnerService("textSimple", e.target.value)}
            ></textarea>
          </form>
          <button onClick={() => addService()}>+ Добавить услугу</button>
        </div>
        <div>
          <h3>Подробнее об услуге</h3>
          <button>+ Добавить раздел</button>
        </div>
      </div>
    </>
  );
};

export default DevAddServicePage;
