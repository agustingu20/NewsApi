import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import CardR from "./CardR";

export default function FormNews() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("ar");

  useEffect(() => {
    getNews();
  }, [category]);

  const getNews = async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?apiKey=2db011ee4bb24f57949ebb5e5f6eefb0&category=${category}&country=${country}`
    );
    setArticles(response.data.articles);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setCategory(value);
    // setCountry(value);
  };

  return (
    <Form className="p-2 mx-3">
      <Form.Group
        className="d-flex flex-start"
        controlId="exampleForm.ControlSelect1"
      >
        <Form.Label className="mt-1">Búsqueda por categorías</Form.Label>
        <Form.Control
          className="mx-3"
          style={{ width: "300px" }}
          as="select"
          onChange={handleChange}
        >
          <option>General</option>
          <option>Entertainment</option>
          <option>Health</option>
          <option>Sports</option>
          <option>Science</option>
        </Form.Control>
        {/* <Form.Label className="mt-1">Elija un país</Form.Label>
        <Form.Control
          className="mx-3"
          style={{ width: "300px" }}
          as="select"
          onChange={handleChange}
        >
          <option>ar</option>
          <option>us</option>
        </Form.Control> */}
      </Form.Group>
      <Form.Group>
        <div className="d-flex flex-wrap">
          {articles.slice(0, 5).map((news) => (
            <CardR
              urlToImage={news.urlToImage}
              title={news.title}
              description={news.description}
            />
          ))}
        </div>
      </Form.Group>
    </Form>
  );
}
