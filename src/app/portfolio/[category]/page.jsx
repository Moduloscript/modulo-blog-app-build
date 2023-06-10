import React from "react";
import styles from "./page.module.css";
import Button from "../../../components/Button/button";
import Image from "next/image";

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dicta
            fuga quaerat dolores provident nostrum voluptatem ducimus, iure,
            laborum a minima maiores harum nam ex maxime quos optio, esse
            placeat!
          </p>
          <Button text="See more" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/1907784/pexels-photo-1907784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="opium"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
