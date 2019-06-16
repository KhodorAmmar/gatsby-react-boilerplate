import React from "react";

import styles from "./how-to.module.css";

import { useStaticQuery, graphql } from "gatsby";

const HowTos = () => {
  const data = useStaticQuery(graphql`
    query HowtoQuery {
      howJson {
        howTo {
          title
        }
      }
    }
  `);

  console.log(data);

  return (
    <section className={styles.howto} id="howto">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4 className={styles.title}>How to</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ol className={styles.list}>
              {data.howJson.howTo.map((item, i) => (
                <li className={styles.listItem} key={i}>
                  {item.title}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowTos;
