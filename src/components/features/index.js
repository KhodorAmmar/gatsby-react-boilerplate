import React from "react";
import styles from "./features.module.css";

import { useStaticQuery, graphql } from "gatsby";

const Features = () => {
  const data = useStaticQuery(graphql`
    query FeaturesQuery {
      featuresJson {
        features {
          title
        }
      }
    }
  `);

  return (
    <section className={styles.features} id="features">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4 className={styles.title}>Features</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ul className={styles.list}>
              {data.featuresJson.features.map((item, i) => (
                <li className={styles.listItem} key={i}>
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
