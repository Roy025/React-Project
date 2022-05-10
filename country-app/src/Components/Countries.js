import React from "react";
import { v4 as uuidv4 } from "uuid";
import Country from "./Country";
import style from "./countries.module.css";
const Countries = (props) => {
  return (
    <section className={style.countries}>
      {props.countries.map((country) => {
        const countryN = { country, id: uuidv4() };
        return (
          <Country {...countryN} key={countryN.id} onRemove={props.onRemove} />
        );
      })}
    </section>
  );
};

export default Countries;
